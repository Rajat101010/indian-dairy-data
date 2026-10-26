
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { uploadBuffer } from "@/lib/cloudinary";
import * as XLSX from "xlsx";

export const runtime = "nodejs";

function slugify(s: string) {
    return (
        s
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
            .slice(0, 90) || `dataset-${Date.now()}`
    );
}

export async function POST(req: Request) {
    const user = await getSession();

    if (!user) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }

    try {
        const f = await req.formData();
        const action = String(f.get("action") || "");

        if (action === "toggle-pin") {
            const id = String(f.get("id") || "");
            const existing = await db.analysisFile.findUnique({
                where: { id },
            });

            if (!existing) {
                return NextResponse.json(
                    { error: "Not found" },
                    { status: 404 }
                );
            }

            await db.analysisFile.update({
                where: { id },
                data: { pinned: !existing.pinned },
            });

            await db.auditLog.create({
                data: {
                    actorEmail: user.email,
                    action: "TOGGLE_PIN",
                    entity: "AnalysisFile",
                    entityId: id,
                },
            });

            return NextResponse.redirect(
                new URL("/admin/analysis", req.url),
                303
            );
        }

        const title = String(f.get("title") || "").trim();
        const slug = slugify(String(f.get("slug") || title));
        const category = String(f.get("category") || "Market Data");
        const description = String(f.get("description") || "").slice(0, 2000);
        const tags = String(f.get("tags") || "")
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
            .slice(0, 30);
        const publish = f.get("publish") === "true";
        const file = f.get("file");

        if (
            title.length < 3 ||
            title.length > 200 ||
            !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
        ) {
            return NextResponse.json(
                { error: "Invalid title or slug." },
                { status: 400 }
            );
        }

        const duplicate = await db.analysisFile.findUnique({
            where: { slug },
        });

        if (duplicate) {
            return NextResponse.json(
                { error: "Slug already exists." },
                { status: 409 }
            );
        }

        if (!(file instanceof File) || !file.size || file.size > 20 * 1024 * 1024) {
            return NextResponse.json(
                { error: "Select a workbook under 20 MB." },
                { status: 400 }
            );
        }

        const ext = file.name.split(".").pop()?.toLowerCase();

        if (!["xlsx", "xls", "csv"].includes(ext || "")) {
            return NextResponse.json(
                { error: "Only XLSX, XLS and CSV are supported." },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const workbook = XLSX.read(buffer, {
            type: "buffer",
            cellDates: true,
        });

        const parsedSheets = workbook.SheetNames.map((name) => {
            const rows = XLSX.utils
                .sheet_to_json<unknown[]>(workbook.Sheets[name], {
                    header: 1,
                    raw: false,
                    defval: "",
                })
                .filter(
                    (row) =>
                        Array.isArray(row) &&
                        row.some((value) => String(value).trim() !== "")
                )
                .slice(0, 5001);

            return { name, rows };
        });

        if (!parsedSheets.some((sheet) => sheet.rows.length > 0)) {
            return NextResponse.json(
                { error: "No tabular data found in workbook." },
                { status: 400 }
            );
        }

        // Convert parsed workbook data into Prisma-compatible JSON.
        const sheets = JSON.parse(
            JSON.stringify(parsedSheets)
        ) as Prisma.InputJsonValue;

        const uploaded = await uploadBuffer(
            buffer,
            "raw",
            "idc/analysis"
        );

        const created = await db.analysisFile.create({
            data: {
                title,
                slug,
                category,
                description,
                tags,
                fileUrl: uploaded.secure_url,
                publicId: uploaded.public_id,
                fileSize: uploaded.bytes,
                mimeType: file.type || "application/octet-stream",
                sheets,
                status: publish ? "PUBLISHED" : "DRAFT",
            },
        });

        await db.auditLog.create({
            data: {
                actorEmail: user.email,
                action: "CREATE",
                entity: "AnalysisFile",
                entityId: created.id,
                details: {
                    title,
                    slug,
                    sheetCount: parsedSheets.length,
                },
            },
        });

        return NextResponse.redirect(
            new URL("/admin/analysis", req.url),
            303
        );
    } catch (error: unknown) {
        const message =
            error instanceof Error
                ? error.message
                : "Unable to process workbook.";

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
