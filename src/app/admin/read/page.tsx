
import { redirect } from "next/navigation";
import type { CSSProperties } from "react";
import Link from "next/link";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Edit3,
  FileText,
  Globe,
  Pin,
  Plus,
  Save,
  Trash2,
} from "lucide-react";

export const dynamic = "force-dynamic";

type ReadItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  metaDescription: string | null;
  content: unknown;
  status: string;
  pinned: boolean;
  pdfUrl: string | null;
  createdAt: Date;
  publishedAt: Date | null;
};

function contentToText(content: unknown): string {
  if (typeof content === "string") return content;

  if (!Array.isArray(content)) return "";

  return content
    .map((block: any) => {
      if (typeof block === "string") return block;
      if (typeof block?.text === "string") return block.text;
      return "";
    })
    .filter(Boolean)
    .join("\n\n");
}

function formatDate(date: Date | null) {
  if (!date) return "Not published";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default async function AdminRead({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>;
}) {
  if (!(await getSession())) redirect("/admin/login");

  const params = await searchParams;
  const editingId = params.edit || "";

  let items: ReadItem[] = [];

  try {
    items = (await db.readItem.findMany({
      orderBy: [
        { pinned: "desc" },
        { sortOrder: "asc" },
        { createdAt: "desc" },
      ],
    })) as ReadItem[];
  } catch (error) {
    console.error("Unable to load publications:", error);
  }

  const editing = items.find((item) => item.id === editingId);
  const isEditing = Boolean(editing);

  const fieldStyle: CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    border: "1px solid #d5e3f5",
    borderRadius: 9,
    background: "#fff",
    color: "#123762",
    fontSize: 14,
    outlineColor: "#014AAC",
  };

  const labelStyle: CSSProperties = {
    display: "grid",
    gap: 7,
    color: "#23466f",
    fontSize: 13,
    fontWeight: 650,
  };

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <style>{`
          .read-admin-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .read-admin-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 9px;
          }

          .read-admin-record {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
          }

          .read-admin-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            border: 0;
            border-radius: 8px;
            padding: 10px 14px;
            font-size: 13px;
            font-weight: 650;
            cursor: pointer;
            text-decoration: none;
          }

          .read-admin-button:focus-visible {
            outline: 2px solid #014aac;
            outline-offset: 3px;
          }

          @media (max-width: 700px) {
            .read-admin-grid {
              grid-template-columns: minmax(0, 1fr);
            }

            .read-admin-record {
              align-items: flex-start;
              flex-direction: column;
            }

            .read-admin-actions {
              width: 100%;
            }
          }
        `}</style>

        <Link
          href="/admin"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            color: "#014AAC",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          <ArrowLeft size={17} />
          Admin dashboard
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            marginTop: 24,
          }}
        >
          <div>
            <div className="eyebrow">CONTENT ADMINISTRATION</div>
            <h1
              className="h2"
              style={{ margin: "9px 0", color: "#123762" }}
            >
              Read management
            </h1>
            <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
              Create, edit, review and publish dairy-sector articles,
              reports and market briefs.
            </p>
          </div>

          {isEditing && (
            <Link
              href="/admin/read"
              className="read-admin-button"
              style={{ background: "#d5e3f5", color: "#014AAC" }}
            >
              <Plus size={16} />
              New publication
            </Link>
          )}
        </div>

        {/* Create or edit form */}
        <section
          className="card"
          style={{
            padding: "clamp(18px, 4vw, 30px)",
            marginTop: 28,
            border: "1px solid #d5e3f5",
            borderRadius: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#d5e3f5",
                color: "#014AAC",
                display: "grid",
                placeItems: "center",
              }}
            >
              {isEditing ? <Edit3 size={21} /> : <Plus size={21} />}
            </div>

            <div>
              <h2
                style={{
                  fontSize: 21,
                  color: "#123762",
                  margin: 0,
                }}
              >
                {isEditing ? "Edit publication" : "Add publication"}
              </h2>
              <p
                style={{
                  color: "#526783",
                  fontSize: 13,
                  margin: "5px 0 0",
                }}
              >
                {isEditing
                  ? `Editing: ${editing?.title}`
                  : "Upload a PDF or write the content manually."}
              </p>
            </div>
          </div>

          {isEditing && editing && (
            <div
              style={{
                padding: 13,
                borderRadius: 10,
                background: "#f4f8fe",
                color: "#526783",
                fontSize: 13,
                marginBottom: 20,
              }}
            >
              Current status:{" "}
              <strong style={{ color: "#123762" }}>
                {editing.status}
              </strong>
              {" · "}Created: {formatDate(editing.createdAt)}
              {editing.publishedAt &&
                ` · Published: ${formatDate(editing.publishedAt)}`}
            </div>
          )}

          <form
            action="/api/admin/read"
            method="post"
            encType="multipart/form-data"
            style={{ display: "grid", gap: 18 }}
          >
            {isEditing && (
              <input type="hidden" name="id" value={editing!.id} />
            )}

            <div className="read-admin-grid">
              <label style={labelStyle}>
                Publication title *
                <input
                  style={fieldStyle}
                  name="title"
                  placeholder="Publication title"
                  defaultValue={editing?.title ?? ""}
                  minLength={3}
                  maxLength={200}
                  required
                />
              </label>

              <label style={labelStyle}>
                URL slug
                <input
                  style={fieldStyle}
                  name="slug"
                  placeholder="Auto-generated if left blank"
                  defaultValue={editing?.slug ?? ""}
                  maxLength={100}
                />
              </label>

              <label style={labelStyle}>
                Category
                <input
                  style={fieldStyle}
                  name="category"
                  defaultValue={editing?.category ?? "Market Brief"}
                  maxLength={100}
                />
              </label>

              <label style={labelStyle}>
                Tags
                <input
                  style={fieldStyle}
                  name="tags"
                  placeholder="Dairy, India, Market Outlook"
                  defaultValue={editing?.tags?.join(", ") ?? ""}
                />
              </label>
            </div>

            <label style={labelStyle}>
              Meta description
              <textarea
                style={{ ...fieldStyle, resize: "vertical" }}
                name="metaDescription"
                rows={2}
                maxLength={320}
                placeholder="Short search-engine description"
                defaultValue={editing?.metaDescription ?? ""}
              />
            </label>

            <label style={labelStyle}>
              Article content
              <span
                style={{
                  color: "#718198",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Separate paragraphs with a blank line. When editing,
                your existing content is loaded here.
              </span>
              <textarea
                style={{
                  ...fieldStyle,
                  resize: "vertical",
                  lineHeight: 1.8,
                }}
                name="manualContent"
                rows={12}
                placeholder="Write or edit the publication content here..."
                defaultValue={
                  editing ? contentToText(editing.content) : ""
                }
              />
            </label>

            <label style={labelStyle}>
              {isEditing ? "Replace original PDF (optional)" : "Original PDF (optional)"}
              <span
                style={{
                  color: "#718198",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {isEditing
                  ? "Leave this empty to keep the existing PDF."
                  : "Text-based PDFs can be extracted into editable content."}
              </span>
              <input
                type="file"
                name="pdf"
                accept="application/pdf,.pdf"
                style={{ ...fieldStyle, padding: 10 }}
              />
              {editing?.pdfUrl && (
                <a
                  href={editing.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#014AAC",
                    fontSize: 13,
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  View current PDF <ArrowUpRight size={14} />
                </a>
              )}
            </label>

            {!isEditing && (
              <label
                style={{
                  display: "flex",
                  gap: 9,
                  alignItems: "center",
                  color: "#23466f",
                  fontSize: 14,
                }}
              >
                <input
                  type="checkbox"
                  name="publish"
                  value="true"
                />
                Publish immediately
              </label>
            )}

            <div
              style={{
                borderTop: "1px solid #e5edf7",
                paddingTop: 18,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#123762",
                  marginBottom: 12,
                }}
              >
                {isEditing ? "Save and publication status" : "Create publication"}
              </div>

              <div className="read-admin-actions">
                {isEditing ? (
                  <>
                    <button
                      type="submit"
                      name="action"
                      value="update"
                      className="read-admin-button"
                      style={{ background: "#014AAC", color: "#fff" }}
                    >
                      <Save size={16} />
                      Save changes
                    </button>

                    <button
                      type="submit"
                      name="action"
                      value="save-draft"
                      className="read-admin-button"
                      style={{ background: "#d5e3f5", color: "#014AAC" }}
                    >
                      <FileText size={16} />
                      Save as draft
                    </button>

                    <button
                      type="submit"
                      name="action"
                      value="publish"
                      className="read-admin-button"
                      style={{ background: "#ffbf00", color: "#123762" }}
                    >
                      <Globe size={16} />
                      Save & publish
                    </button>
                  </>
                ) : (
                  <button
                    type="submit"
                    className="read-admin-button"
                    style={{ background: "#014AAC", color: "#fff" }}
                  >
                    <Plus size={16} />
                    Create publication
                  </button>
                )}

                {isEditing && (
                  <Link
                    href="/admin/read"
                    className="read-admin-button"
                    style={{
                      background: "#f1f5fa",
                      color: "#526783",
                    }}
                  >
                    Cancel
                  </Link>
                )}
              </div>
            </div>
          </form>
        </section>

        {/* Existing publications */}
        <section style={{ marginTop: 42 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 23,
                  color: "#123762",
                  margin: 0,
                }}
              >
                Existing publications
              </h2>
              <p className="muted" style={{ marginTop: 6 }}>
                {items.length} publication{items.length === 1 ? "" : "s"} ·
                Manage drafts and published content.
              </p>
            </div>
          </div>

          {items.length === 0 ? (
            <div
              className="card"
              style={{
                padding: 32,
                marginTop: 16,
                textAlign: "center",
              }}
            >
              <BookOpen
                size={32}
                style={{ color: "#014AAC", margin: "0 auto 12px" }}
              />
              <p style={{ color: "#526783", margin: 0 }}>
                No publications found. Create your first publication above.
              </p>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              {items.map((item) => (
                <article
                  key={item.id}
                  className="card read-admin-record"
                  style={{
                    padding: 20,
                    border: "1px solid #e2ebf7",
                    borderRadius: 14,
                    background: "#fff",
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: 9,
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: 16,
                          lineHeight: 1.5,
                          color: "#123762",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {item.title}
                      </h3>

                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          padding: "4px 8px",
                          borderRadius: 999,
                          background:
                            item.status === "PUBLISHED"
                              ? "#e7f7ee"
                              : "#fff4d7",
                          color:
                            item.status === "PUBLISHED"
                              ? "#187343"
                              : "#855b00",
                          fontSize: 11,
                          fontWeight: 750,
                        }}
                      >
                        {item.status === "PUBLISHED" ? (
                          <CheckCircle2 size={12} />
                        ) : (
                          <FileText size={12} />
                        )}
                        {item.status}
                      </span>

                      {item.pinned && (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#014AAC",
                            fontSize: 12,
                            fontWeight: 650,
                          }}
                        >
                          <Pin size={13} />
                          Pinned
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        margin: "7px 0 0",
                        color: "#718198",
                        fontSize: 12,
                        overflowWrap: "anywhere",
                      }}
                    >
                      /{item.slug} · {item.category} · Created{" "}
                      {formatDate(item.createdAt)}
                    </p>

                    {item.publishedAt && (
                      <p
                        style={{
                          margin: "5px 0 0",
                          color: "#718198",
                          fontSize: 12,
                        }}
                      >
                        Published {formatDate(item.publishedAt)}
                      </p>
                    )}
                  </div>

                  <div className="read-admin-actions">
                    <Link
                      href={`/admin/read?edit=${encodeURIComponent(item.id)}`}
                      className="read-admin-button"
                      style={{ background: "#014AAC", color: "#fff" }}
                    >
                      <Edit3 size={15} />
                      Edit
                    </Link>

                    <form action="/api/admin/read" method="post">
                      <input
                        type="hidden"
                        name="id"
                        value={item.id}
                      />
                      <input
                        type="hidden"
                        name="action"
                        value="toggle-pin"
                      />
                      <button
                        type="submit"
                        className="read-admin-button"
                        style={{
                          background: "#d5e3f5",
                          color: "#014AAC",
                        }}
                      >
                        <Pin size={15} />
                        {item.pinned ? "Unpin" : "Pin"}
                      </button>
                    </form>

                    <form action="/api/admin/read" method="post">
                      <input
                        type="hidden"
                        name="id"
                        value={item.id}
                      />
                      <input
                        type="hidden"
                        name="action"
                        value="toggle-publish"
                      />
                      <button
                        type="submit"
                        className="read-admin-button"
                        style={{
                          background:
                            item.status === "PUBLISHED"
                              ? "#fff0e9"
                              : "#e7f7ee",
                          color:
                            item.status === "PUBLISHED"
                              ? "#a13d18"
                              : "#187343",
                        }}
                      >
                        <Globe size={15} />
                        {item.status === "PUBLISHED"
                          ? "Unpublish"
                          : "Publish"}
                      </button>
                    </form>

                    <form
                      action="/api/admin/read"
                      method="post"
                    >
                      <input
                        type="hidden"
                        name="id"
                        value={item.id}
                      />
                      <input
                        type="hidden"
                        name="action"
                        value="delete"
                      />
                      <button
                        type="submit"
                        className="read-admin-button"
                        style={{
                          background: "#fff0f0",
                          color: "#b42318",
                        }}
                        formAction="/api/admin/read"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>
                    </form>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
