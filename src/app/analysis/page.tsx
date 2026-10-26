
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Database,
  ArrowUpDown,
  ArrowUpRight,
  FileSpreadsheet,
  Table2,
} from "lucide-react";

const demo = [
  {
    id: "sample-1",
    title: "Illustrative State Dairy Indicators",
    description:
      "Example workbook structure only. Values below are fictional and for interface demonstration.",
    category: "Sample dataset",
    tags: ["sample", "state indicators"],
    updatedAt: "Sample",
    sheets: [
      {
        name: "Read me",
        rows: [
          ["Field", "Description"],
          ["Status", "SAMPLE DATA — not market observations"],
          [
            "Basis",
            "Replace with sourced, dated and validated information",
          ],
        ],
      },
      {
        name: "Illustrative table",
        rows: [
          [
            "State",
            "Period",
            "Milk supply (illustrative index)",
          ],
          ["Example State A", "2026-01", 100],
          ["Example State B", "2026-01", 107],
          ["Example State C", "2026-01", 94],
        ],
      },
    ],
  },
];

export default function AnalysisPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState("sample-1");
  const [sheet, setSheet] = useState(0);
  const [tableQuery, setTableQuery] = useState("");
  const [sort, setSort] = useState<{
    col: number;
    dir: number;
  } | null>(null);

  const items = useMemo(
    () =>
      demo.filter((item) =>
        (item.title + " " + item.tags.join(" "))
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  const activeItem = items.find((item) => item.id === open);

  const activeSheet = activeItem?.sheets[sheet];
  const rows = activeSheet?.rows ?? [];
  const headers = rows[0] ?? [];

  const visible = rows
    .slice(1)
    .filter((row) =>
      row
        .join(" ")
        .toLowerCase()
        .includes(tableQuery.toLowerCase())
    );

  const sorted = sort
    ? [...visible].sort(
        (a, b) =>
          String(a[sort.col]).localeCompare(
            String(b[sort.col]),
            undefined,
            { numeric: true }
          ) * sort.dir
      )
    : visible;

  function changeSheet(index: number) {
    setSheet(index);
    setSort(null);
    setTableQuery("");
  }

  return (
    <main>
      <style>{`
        .analysis-hero-description {
          font-size: 19px;
          line-height: 1.8;
          color: #526783;
          max-width: 780px;
          margin: 0;
        }

        .analysis-search {
          position: relative;
          width: 100%;
          max-width: 520px;
          margin-top: 28px;
        }

        .analysis-search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          pointer-events: none;
        }

        .analysis-search input {
          width: 100%;
          box-sizing: border-box;
          padding-left: 44px;
          height: 49px;
        }

        .analysis-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .analysis-count {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #526783;
          font-size: 14px;
        }

        .analysis-dataset {
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid #e1eaf5;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 4px 18px rgba(18, 55, 98, 0.025);
        }

        .analysis-dataset-trigger {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 24px;
          border: 0;
          background: #ffffff;
          text-align: left;
          cursor: pointer;
        }

        .analysis-dataset-trigger:hover {
          background: #f8fbff;
        }

        .analysis-dataset-info {
          display: flex;
          align-items: center;
          gap: 17px;
          min-width: 0;
        }

        .analysis-dataset-icon {
          display: grid;
          place-items: center;
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: 14px;
          background: #d5e3f5;
          color: #014aac;
        }

        .analysis-dataset-title {
          margin: 7px 0;
          color: #123762;
          font-size: 20px;
          line-height: 1.4;
        }

        .analysis-dataset-description {
          margin: 0;
          color: #526783;
          font-size: 14px;
          line-height: 1.7;
        }

        .analysis-dataset-content {
          padding: 22px 24px 24px;
          border-top: 1px solid #e2eaf4;
        }

        .analysis-sheet-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 18px;
        }

        .analysis-sheet-tab {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid #d5e3f5;
          border-radius: 9px;
          padding: 10px 13px;
          background: #edf3fb;
          color: #244668;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .analysis-sheet-tab.active {
          border-color: #014aac;
          background: #014aac;
          color: #ffffff;
        }

        .analysis-table-search {
          width: 100%;
          max-width: 350px;
          margin-bottom: 16px;
          box-sizing: border-box;
        }

        .analysis-table-wrap {
          max-height: 440px;
          overflow: auto;
          border: 1px solid #e2eaf4;
          border-radius: 12px;
        }

        .analysis-table {
          width: 100%;
          min-width: 500px;
          border-collapse: collapse;
          font-size: 13px;
        }

        .analysis-table thead {
          position: sticky;
          top: 0;
          z-index: 1;
          background: #d5e3f5;
        }

        .analysis-table th {
          padding: 0;
          text-align: left;
          color: #123762;
          white-space: nowrap;
        }

        .analysis-sort-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: 100%;
          padding: 14px;
          border: 0;
          background: transparent;
          color: inherit;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
        }

        .analysis-table td {
          padding: 14px;
          border-top: 1px solid #edf1f7;
          color: #526783;
          line-height: 1.6;
        }

        .analysis-empty {
          padding: 54px 24px;
          border: 1px solid #e1eaf5;
          border-radius: 18px;
          background: #ffffff;
          text-align: center;
        }

        .analysis-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 18px;
          padding: 15px;
          border-radius: 10px;
          background: #f3f7fc;
          color: #526783;
          font-size: 12px;
          line-height: 1.8;
        }

        @media (max-width: 650px) {
          .analysis-dataset-trigger {
            padding: 18px;
          }

          .analysis-dataset-info {
            align-items: flex-start;
            gap: 12px;
          }

          .analysis-dataset-icon {
            width: 42px;
            height: 42px;
          }

          .analysis-dataset-title {
            font-size: 17px;
          }

          .analysis-dataset-description {
            font-size: 13px;
          }

          .analysis-dataset-content {
            padding: 18px;
          }

          .analysis-sheet-tab {
            padding: 9px 10px;
          }
        }
      `}</style>

      {/* Hero — matching the Solution page design */}
      <section className="line-art section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="eyebrow">
            Analysis / Data explorer
          </div>

          <h1
            className="h1"
            style={{
              margin: "18px 0",
              fontSize: "clamp(40px, 6vw, 66px)",
            }}
          >
            Explore the evidence.
          </h1>

          <p className="analysis-hero-description">
            Explore structured workbooks, datasets and dairy market
            analysis. Discover how information is organised across
            indicators, geographies and reporting periods.
          </p>

          <Link
            href="#datasets"
            className="btn btn-amber"
            style={{ marginTop: 22 }}
          >
            Explore datasets <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Dataset explorer */}
      <section
        id="datasets"
        className="section"
        style={{ scrollMarginTop: 30 }}
      >
        <div className="container">
          <div className="eyebrow">DATA &amp; ANALYSIS</div>

          <h2
            className="h2"
            style={{
              margin: "14px 0",
              color: "#123762",
            }}
          >
            Dataset explorer
          </h2>

          <p
            className="muted"
            style={{
              maxWidth: 700,
              lineHeight: 1.8,
              marginBottom: 0,
            }}
          >
            Browse workbook structures, inspect individual sheets,
            search table entries and sort columns. Illustrative
            values are clearly identified and must not be interpreted
            as actual market observations.
          </p>

          <div className="analysis-search">
            <Search
              size={18}
              className="analysis-search-icon"
            />

            <input
              className="input"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setSheet(0);
                setSort(null);
                setTableQuery("");
              }}
              placeholder="Search datasets or tags..."
              aria-label="Search datasets or tags"
            />
          </div>

          <div style={{ marginTop: 38 }}>
            <div className="analysis-toolbar">
              <div className="analysis-count">
                <Database size={18} color="#014AAC" />

                <span>
                  {items.length}{" "}
                  {items.length === 1 ? "dataset" : "datasets"} available
                </span>
              </div>

              <span
                style={{
                  color: "#64748b",
                  fontSize: 13,
                }}
              >
                Workbook preview
              </span>
            </div>

            {items.length > 0 ? (
              items.map((item) => {
                const isOpen = open === item.id;
                const currentSheet = item.sheets[sheet] ?? item.sheets[0];
                const currentRows = currentSheet?.rows ?? [];
                const currentHeaders = currentRows[0] ?? [];

                const filteredRows = currentRows
                  .slice(1)
                  .filter((row) =>
                    row
                      .join(" ")
                      .toLowerCase()
                      .includes(tableQuery.toLowerCase())
                  );

                const displayRows = sort
                  ? [...filteredRows].sort(
                      (a, b) =>
                        String(a[sort.col]).localeCompare(
                          String(b[sort.col]),
                          undefined,
                          { numeric: true }
                        ) * sort.dir
                    )
                  : filteredRows;

                return (
                  <article
                    key={item.id}
                    className="analysis-dataset"
                  >
                    <button
                      type="button"
                      className="analysis-dataset-trigger"
                      aria-expanded={isOpen}
                      onClick={() => {
                        setOpen(isOpen ? "" : item.id);
                        setSheet(0);
                        setTableQuery("");
                        setSort(null);
                      }}
                    >
                      <div className="analysis-dataset-info">
                        <span className="analysis-dataset-icon">
                          <Database size={24} />
                        </span>

                        <div style={{ minWidth: 0 }}>
                          <div
                            className="eyebrow"
                            style={{
                              fontSize: 11,
                              color: "#014AAC",
                            }}
                          >
                            {item.category} · SAMPLE
                          </div>

                          <h3 className="analysis-dataset-title">
                            {item.title}
                          </h3>

                          <p className="analysis-dataset-description">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {isOpen ? (
                        <ChevronUp
                          size={21}
                          color="#014AAC"
                          style={{ flexShrink: 0 }}
                        />
                      ) : (
                        <ChevronDown
                          size={21}
                          color="#014AAC"
                          style={{ flexShrink: 0 }}
                        />
                      )}
                    </button>

                    {isOpen && (
                      <div className="analysis-dataset-content">
                        <div className="analysis-sheet-tabs">
                          {item.sheets.map((workbookSheet, index) => (
                            <button
                              key={workbookSheet.name}
                              type="button"
                              className={`analysis-sheet-tab ${
                                sheet === index ? "active" : ""
                              }`}
                              onClick={() => changeSheet(index)}
                            >
                              <Table2 size={15} />
                              {workbookSheet.name}
                            </button>
                          ))}
                        </div>

                        <input
                          className="input analysis-table-search"
                          value={tableQuery}
                          onChange={(event) =>
                            setTableQuery(event.target.value)
                          }
                          placeholder="Search within this sheet..."
                          aria-label="Search within this sheet"
                        />

                        {currentRows.length > 0 ? (
                          <div className="analysis-table-wrap">
                            <table className="analysis-table">
                              <thead>
                                <tr>
                                  {currentHeaders.map((header, index) => (
                                    <th key={index}>
                                      <button
                                        type="button"
                                        className="analysis-sort-button"
                                        onClick={() =>
                                          setSort({
                                            col: index,
                                            dir:
                                              sort?.col === index
                                                ? -sort.dir
                                                : 1,
                                          })
                                        }
                                      >
                                        {header}
                                        <ArrowUpDown size={12} />
                                      </button>
                                    </th>
                                  ))}
                                </tr>
                              </thead>

                              <tbody>
                                {displayRows.map((row, rowIndex) => (
                                  <tr
                                    key={rowIndex}
                                    style={{
                                      background:
                                        rowIndex % 2
                                          ? "#f8fbff"
                                          : "#ffffff",
                                    }}
                                  >
                                    {row.map((value, columnIndex) => (
                                      <td key={columnIndex}>
                                        {value}
                                      </td>
                                    ))}
                                  </tr>
                                ))}

                                {displayRows.length === 0 && (
                                  <tr>
                                    <td
                                      colSpan={currentHeaders.length || 1}
                                      style={{
                                        padding: 24,
                                        textAlign: "center",
                                      }}
                                    >
                                      No matching rows found.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <p className="muted">
                            This worksheet has no rows to display.
                          </p>
                        )}

                        <div className="analysis-note">
                          <FileSpreadsheet
                            size={17}
                            style={{
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          />

                          <span>
                            <strong>Illustrative workbook only.</strong>{" "}
                            These values are fictional and are not
                            verified dairy-market observations. A
                            production dataset should include its source,
                            observation date, geography, unit, method
                            and confidence limitations.
                          </span>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="analysis-empty">
                <Database
                  size={38}
                  color="#014AAC"
                  style={{ margin: "0 auto 18px" }}
                />

                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "#123762",
                    fontSize: 23,
                  }}
                >
                  No matching datasets
                </h3>

                <p
                  className="muted"
                  style={{
                    maxWidth: 460,
                    margin: "0 auto",
                    lineHeight: 1.8,
                  }}
                >
                  Try a different search term to explore the
                  available datasets.
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
                FROM DATA TO DECISIONS
              </div>

              <h2
                className="h2"
                style={{
                  margin: "12px 0",
                  color: "#123762",
                }}
              >
                Turn evidence into insight.
              </h2>

              <p
                style={{
                  maxWidth: 600,
                  margin: 0,
                  color: "#526783",
                  lineHeight: 1.8,
                }}
              >
                Explore research publications and analytical
                solutions designed for India's dairy sector.
              </p>
            </div>

            <Link
              href="/read"
              className="btn btn-amber"
            >
              Read publications <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
