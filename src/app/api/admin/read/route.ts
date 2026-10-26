import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { uploadBuffer, cloudinary } from "@/lib/cloudinary";
import { z } from "zod";
import pdf from "pdf-parse";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function slugify(value: string) {
  return (
    value.toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 90) || `publication-${Date.now()}`
  );
}

function contentBlocks(text: string) {
  return text.split(/\n\s*\n/)
    .map((part) => part.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .map((text, index) => ({
      type: index === 0 ? "heading" : "paragraph",
      ...(index === 0 ? { level: 2 } : {}),
      text,
    }));
}

function redirectToAdmin(req: Request, message?: string) {
  const url = new URL("/admin/read", req.url);
  if (message) url.searchParams.set("message", message);
  return NextResponse.redirect(url, 303);
}

const publicationSchema = z.object({
  title: z.string().trim().min(3).max(200),
  slug: z.string().min(1).max(100).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  category: z.string().trim().min(1).max(100),
  tags: z.array(z.string().trim().min(1).max(80)).max(30),
  metaDescription: z.string().max(320),
});

export async function POST(req: Request) {
  const user = await getSession();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let uploadedPdf: { secure_url: string; public_id: string; bytes: number } | undefined;

  try {
    const form = await req.formData();
    const action = String(form.get("action") || "create");
    const id = String(form.get("id") || "").trim();

    if (!["create", "update", "save-draft", "publish", "toggle-pin", "toggle-publish", "delete"].includes(action)) {
      return NextResponse.json({ error: "Unsupported action." }, { status: 400 });
    }

    if (action === "toggle-pin") {
      if (!id) return NextResponse.json({ error: "Publication ID is required." }, { status: 400 });
      const item = await db.readItem.findUnique({ where: { id } });
      if (!item) return NextResponse.json({ error: "Publication not found." }, { status: 404 });

      await db.readItem.update({ where: { id }, data: { pinned: !item.pinned } });
      await db.auditLog.create({
        data: { actorEmail: user.email, action: "TOGGLE_PIN", entity: "ReadItem", entityId: id },
      });
      return redirectToAdmin(req, "pin-updated");
    }

    if (action === "toggle-publish") {
      if (!id) return NextResponse.json({ error: "Publication ID is required." }, { status: 400 });
      const item = await db.readItem.findUnique({ where: { id } });
      if (!item) return NextResponse.json({ error: "Publication not found." }, { status: 404 });

      const publishing = item.status !== "PUBLISHED";
      await db.readItem.update({
        where: { id },
        data: {
          status: publishing ? "PUBLISHED" : "DRAFT",
          publishedAt: publishing ? item.publishedAt || new Date() : null,
        },
      });
      await db.auditLog.create({
        data: {
          actorEmail: user.email,
          action: publishing ? "PUBLISH" : "UNPUBLISH",
          entity: "ReadItem",
          entityId: id,
          details: { title: item.title },
        },
      });
      return redirectToAdmin(req, "status-updated");
    }

    if (action === "delete") {
      if (!id) return NextResponse.json({ error: "Publication ID is required." }, { status: 400 });
      const item = await db.readItem.findUnique({ where: { id } });
      if (!item) return NextResponse.json({ error: "Publication not found." }, { status: 404 });

      await db.auditLog.create({
        data: {
          actorEmail: user.email,
          action: "DELETE",
          entity: "ReadItem",
          entityId: id,
          details: { title: item.title, slug: item.slug },
        },
      });
      await db.readItem.delete({ where: { id } });

      if (item.pdfPublicId) {
        try {
          await cloudinary.uploader.destroy(item.pdfPublicId, { resource_type: "raw" });
        } catch (error) {
          console.error("PDF cleanup failed:", error);
        }
      }
      return redirectToAdmin(req, "deleted");
    }

    const isEdit = ["update", "save-draft", "publish"].includes(action);
    if (isEdit && !id) {
      return NextResponse.json({ error: "Publication ID is required for editing." }, { status: 400 });
    }

    const existing = isEdit ? await db.readItem.findUnique({ where: { id } }) : null;
    if (isEdit && !existing) {
      return NextResponse.json({ error: "Publication not found." }, { status: 404 });
    }

    const title = String(form.get("title") || "").trim();
    const rawSlug = String(form.get("slug") || "").trim();
    const slug = slugify(rawSlug || title);
    const category = String(form.get("category") || "Market Brief").trim() || "Market Brief";
    const tags = String(form.get("tags") || "").split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 30);
    const metaDescription = String(form.get("metaDescription") || "").trim().slice(0, 320);
    const manualContent = String(form.get("manualContent") || "").trim();

    const validation = publicationSchema.safeParse({ title, slug, category, tags, metaDescription });
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid publication details.", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const slugOwner = await db.readItem.findUnique({ where: { slug }, select: { id: true } });
    if (slugOwner && slugOwner.id !== id) {
      return NextResponse.json({ error: "That URL slug is already in use. Choose another slug." }, { status: 409 });
    }

    const file = form.get("pdf");
    let extractedText = "";

    if (file instanceof File && file.size > 0) {
      if (file.type !== "application/pdf" || file.size > 25 * 1024 * 1024) {
        return NextResponse.json({ error: "The PDF must be a valid file under 25 MB." }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      uploadedPdf = await uploadBuffer(buffer, "raw", "idc/read");
      try {
        extractedText = (await pdf(buffer)).text.trim();
      } catch (error) {
        console.error("PDF text extraction failed:", error);
      }
    }

    let content: any[];
    if (manualContent) {
      content = contentBlocks(manualContent);
    } else if (uploadedPdf) {
      content = extractedText
        ? contentBlocks(extractedText)
        : [{ type: "paragraph", text: "This PDF contains no extractable text. Add the article text manually or use OCR for scanned pages." }];
    } else if (isEdit && existing) {
      // Do not erase existing content when the editor is submitted empty.
      content = Array.isArray(existing.content) ? existing.content as any[] : [];
    } else {
      content = [{ type: "paragraph", text: "Content not yet added. Add manual content or upload a text-based PDF." }];
    }

    if (isEdit && existing) {
      const nextStatus =
        action === "save-draft" ? "DRAFT" :
        action === "publish" ? "PUBLISHED" :
        existing.status;

      const updateData: any = {
        title,
        slug,
        category,
        tags,
        metaDescription,
        content,
        status: nextStatus,
        publishedAt: nextStatus !== "PUBLISHED" ? null : existing.publishedAt || new Date(),
      };

      if (uploadedPdf) {
        updateData.pdfUrl = uploadedPdf.secure_url;
        updateData.pdfPublicId = uploadedPdf.public_id;
        updateData.pdfSize = uploadedPdf.bytes;
        updateData.pdfMimeType = "application/pdf";
      }

      const updated = await db.readItem.update({ where: { id }, data: updateData });

      await db.auditLog.create({
        data: {
          actorEmail: user.email,
          action: action === "save-draft" ? "SAVE_DRAFT" : action === "publish" ? "UPDATE_AND_PUBLISH" : "UPDATE",
          entity: "ReadItem",
          entityId: updated.id,
          details: { title, slug, status: nextStatus },
        },
      });

      if (uploadedPdf && existing.pdfPublicId && existing.pdfPublicId !== uploadedPdf.public_id) {
        try {
          await cloudinary.uploader.destroy(existing.pdfPublicId, { resource_type: "raw" });
        } catch (error) {
          console.error("Old PDF cleanup failed:", error);
        }
      }

      return redirectToAdmin(req, "saved");
    }

    const publishImmediately = form.get("publish") === "true";
    const created = await db.readItem.create({
      data: {
        title,
        slug,
        category,
        tags,
        metaDescription,
        content,
        pdfUrl: uploadedPdf?.secure_url,
        pdfPublicId: uploadedPdf?.public_id,
        pdfSize: uploadedPdf?.bytes,
        pdfMimeType: uploadedPdf ? "application/pdf" : undefined,
        status: publishImmediately ? "PUBLISHED" : "DRAFT",
        publishedAt: publishImmediately ? new Date() : null,
      },
    });

    await db.auditLog.create({
      data: {
        actorEmail: user.email,
        action: "CREATE",
        entity: "ReadItem",
        entityId: created.id,
        details: { title, slug, status: publishImmediately ? "PUBLISHED" : "DRAFT" },
      },
    });

    return redirectToAdmin(req, "created");
  } catch (error) {
    if (uploadedPdf?.public_id) {
      try {
        await cloudinary.uploader.destroy(uploadedPdf.public_id, { resource_type: "raw" });
      } catch (cleanupError) {
        console.error("Uploaded PDF cleanup failed:", cleanupError);
      }
    }
    console.error("Read management API error:", error);
    return NextResponse.json(
      { error: "Unable to process this publication. Check the server logs." },
      { status: 500 }
    );
  }
}
