
// src/app/read/page.tsx

import Link from "next/link";
import {
  Search,
  Pin,
  FileText,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
} from "lucide-react";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ReadPage() {
  let items: any[] = [];

  try {
    items = await db.readItem.findMany({
      where: { status: "PUBLISHED" },
      orderBy: [
        { pinned: "desc" },
        { sortOrder: "asc" },
        { publishedAt: "desc" },
      ],
    });
  } catch {
    // Show the empty state if the database is unavailable.
  }

  return (
    <main>
      <style>{`
        .read-search {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 520px;
          margin-top: 30px;
          padding: 0 16px;
          border: 1px solid #d5e3f5;
          border-radius: 12px;
          background: #ffffff;
          box-sizing: border-box;
        }

        .read-search input {
          width: 100%;
          min-width: 0;
          padding: 15px 0;
          border: none;
          outline: none;
          background: transparent;
          color: #123762;
          font-size: 15px;
        }

        .read-search input::placeholder {
          color: #8192a9;
        }

        .read-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .read-count {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #526783;
          font-size: 14px;
        }

        .read-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .read-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 26px;
          border: 1px solid #e1eaf5;
          border-radius: 18px;
          background: #ffffff;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .read-card:hover {
          transform: translateY(-4px);
          border-color: #9bbce8;
          box-shadow: 0 12px 32px rgba(1, 74, 172, 0.08);
        }

        .read-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 20px;
        }

        .read-category {
          color: #014aac;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .read-pinned {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 9px;
          border-radius: 7px;
          background: #ffbf00;
          color: #123762;
          font-size: 10px;
          font-weight: 800;
        }

        .read-card-title {
          margin: 0 0 12px;
          color: #123762;
          font-size: 22px;
          line-height: 1.4;
          font-weight: 750;
        }

        .read-card-description {
          margin: 0;
          color: #526783;
          font-size: 14px;
          line-height: 1.8;
        }

        .read-card-meta {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 22px;
          color: #64748b;
          font-size: 12px;
        }

        .read-card-tags {
          margin-top: 12px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.8;
        }

        .read-card-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: auto;
          padding-top: 24px;
          color: #014aac;
          font-size: 13px;
          font-weight: 800;
        }

        .read-empty {
          padding: 60px 24px;
          border: 1px solid #e1eaf5;
          border-radius: 18px;
          background: #ffffff;
          text-align: center;
        }

        @media (max-width: 1000px) {
          .read-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .read-grid {
            grid-template-columns: 1fr;
          }

          .read-toolbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .read-card {
            padding: 22px;
          }
        }
      `}</style>

      {/* Hero section — matches the Solution page UI */}
      <section className="line-art section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="eyebrow">
            Read / Publications &amp; Briefings
          </div>

          <h1
            className="h1"
            style={{
              margin: "18px 0",
              fontSize: "clamp(40px, 6vw, 66px)",
            }}
          >
            Evidence, explained.
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.8,
              color: "#526783",
              maxWidth: 780,
              margin: 0,
            }}
          >
            Explore research notes, dairy market explainers, industry
            publications and analytical briefings designed to make
            complex information easier to understand.
          </p>

          <Link
            href="#publications"
            className="btn btn-amber"
            style={{ marginTop: 22 }}
          >
            Explore publications <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Publications section */}
      <section
        id="publications"
        className="section"
        style={{ scrollMarginTop: 30 }}
      >
        <div className="container">
          <div className="eyebrow">THE KNOWLEDGE LIBRARY</div>

          <h2
            className="h2"
            style={{ margin: "14px 0", color: "#123762" }}
          >
            Research &amp; publications
          </h2>

          <p
            className="muted"
            style={{
              maxWidth: 680,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Browse published research, market explainers and industry
            briefings. Each publication is listed with its category,
            publication date and available tags.
          </p>

          {/* Search field — presentation only in this server component */}
          <div className="read-search">
            <Search size={19} color="#014AAC" />

            <input
              type="search"
              placeholder="Search publications..."
              aria-label="Search publications"
            />
          </div>

          <div style={{ marginTop: 38 }}>
            <div className="read-toolbar">
              <div className="read-count">
                <BookOpen size={18} color="#014AAC" />
                <span>
                  {items.length} published{" "}
                  {items.length === 1 ? "publication" : "publications"}
                </span>
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: 13,
                }}
              >
                Latest and featured research
              </div>
            </div>

            {items.length > 0 ? (
              <div className="read-grid">
                {items.map((item) => (
                  <Link
                    href={`/read/${item.slug}`}
                    key={item.id}
                    className="read-card"
                  >
                    <div className="read-card-top">
                      <span className="read-category">
                        {item.category || "Publication"}
                      </span>

                      {item.pinned && (
                        <span className="read-pinned">
                          <Pin size={12} />
                          FEATURED
                        </span>
                      )}
                    </div>

                    <h3 className="read-card-title">
                      {item.title}
                    </h3>

                    <p className="read-card-description">
                      {item.metaDescription ||
                        "Open this publication to explore its contents and key insights."}
                    </p>

                    <div className="read-card-meta">
                      <CalendarDays size={14} />

                      <span>
                        {item.publishedAt
                          ? new Date(
                              item.publishedAt
                            ).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : "Publication date unavailable"}
                      </span>
                    </div>

                    {Array.isArray(item.tags) &&
                      item.tags.length > 0 && (
                        <div className="read-card-tags">
                          {item.tags.slice(0, 4).join(" · ")}
                        </div>
                      )}

                    <div className="read-card-link">
                      Read publication
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="read-empty">
                <FileText
                  size={38}
                  color="#014AAC"
                  style={{ margin: "0 auto 18px" }}
                />

                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#123762",
                    fontSize: 24,
                  }}
                >
                  Publications coming soon
                </h3>

                <p
                  className="muted"
                  style={{
                    maxWidth: 520,
                    margin: "0 auto",
                    lineHeight: 1.8,
                  }}
                >
                  Published research, market explainers and industry
                  briefings will appear here once they are published
                  by an administrator.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              padding: 32,
              borderRadius: 20,
              background: "#d5e3f5",
            }}
          >
            <div>
              <div className="eyebrow">
                EXPLORE OUR WORK
              </div>

              <h2
                className="h2"
                style={{
                  margin: "12px 0",
                  color: "#123762",
                }}
              >
                Looking for market intelligence?
              </h2>

              <p
                style={{
                  maxWidth: 600,
                  margin: 0,
                  color: "#526783",
                  lineHeight: 1.8,
                }}
              >
                Discover our research solutions and analytical
                frameworks for India's dairy sector.
              </p>
            </div>

            <Link
              href="/company"
              className="btn btn-amber"
            >
              Explore Company <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
