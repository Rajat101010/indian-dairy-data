
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Scale,
  ShieldCheck,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  FileSearch,
} from "lucide-react";

const methodologySteps = [
  {
    number: "01",
    title: "Define the index scope",
    description:
      "Specify the dairy products, geographic markets, reporting periods, and intended use of the index.",
  },
  {
    number: "02",
    title: "Select and prepare data",
    description:
      "Review source coverage, units, time periods, and data consistency before comparisons are made.",
  },
  {
    number: "03",
    title: "Establish weighting principles",
    description:
      "Choose a weighting framework aligned with the index objective and document the rationale behind it.",
  },
  {
    number: "04",
    title: "Validate and document",
    description:
      "Check calculations, review unusual movements, and record methodological changes for transparent interpretation.",
  },
];

const methodologyAreas = [
  {
    number: "01",
    title: "Data Selection",
    description:
      "Define which products, markets, periods, and data sources are included in the index.",
    icon: Database,
    points: [
      "Product and market coverage",
      "Source quality and availability",
      "Consistent reporting periods",
    ],
  },
  {
    number: "02",
    title: "Weighting Framework",
    description:
      "Establish suitable weighting principles that reflect the intended purpose and coverage of the index.",
    icon: Scale,
    points: [
      "Documented weighting rationale",
      "Comparable product categories",
      "Alignment with index objectives",
    ],
  },
  {
    number: "03",
    title: "Validation and Review",
    description:
      "Apply consistency checks and document methodological changes to support transparent interpretation.",
    icon: ShieldCheck,
    points: [
      "Data and calculation checks",
      "Review of unusual movements",
      "Clear records of revisions",
    ],
  },
];

export default function PriceIndexMethodExtra() {
  return (
    <>
      {/* Hero */}
      <section
        className="line-art"
        style={{
          padding: "78px 0 68px",
          background:
            "linear-gradient(180deg, #f7faff 0%, #ffffff 100%)",
        }}
      >
        <div className="container" style={{ maxWidth: 1100 }}>
          <div
            className="eyebrow"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 26,
                height: 2,
                background: "#ffbf00",
              }}
            />
            Price Index Methodology
          </div>

          <h2
            className="h2"
            style={{
              maxWidth: 880,
              fontSize: "clamp(36px, 5.5vw, 60px)",
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              margin: "22px 0",
            }}
          >
            A consistent approach to{" "}
            <span style={{ color: "#014AAC" }}>
              dairy price measurement.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 760,
              fontSize: 17,
              lineHeight: 1.9,
              color: "#526783",
              margin: 0,
            }}
          >
            A transparent methodology makes dairy price comparisons more
            meaningful and easier to interpret. Clearly defined data,
            weighting principles, and validation procedures help establish
            consistency across products, markets, and reporting periods.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              marginTop: 26,
            }}
          >
            {[
              "Defined data coverage",
              "Documented calculations",
              "Transparent review process",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#123762",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={17} color="#014AAC" />
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 32,
            }}
          >
            <Link href="/start-now" className="btn btn-amber">
              Discuss Your Requirements
              <ArrowUpRight size={17} />
            </Link>

            <Link href="/analysis" className="btn btn-primary">
              Explore Analysis
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Core methodology areas */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 750, marginBottom: 34 }}>
            <p className="eyebrow">Core Methodology</p>

            <h2
              className="h2"
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                lineHeight: 1.18,
                letterSpacing: "-0.035em",
                margin: "14px 0",
              }}
            >
              Build price indices on{" "}
              <span style={{ color: "#014AAC" }}>
                clear foundations.
              </span>
            </h2>

            <p
              className="muted"
              style={{ fontSize: 16, lineHeight: 1.85 }}
            >
              Each stage contributes to a more structured approach to
              measuring price movements and interpreting differences across
              dairy markets.
            </p>
          </div>

          <div className="grid-auto">
            {methodologyAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="card"
                  style={{
                    padding: 26,
                    border: "1px solid #e3ebf7",
                    borderRadius: 18,
                    background: "#ffffff",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      marginBottom: 24,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 14,
                        background: "#edf4ff",
                        color: "#014AAC",
                      }}
                    >
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#8ca2c0",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 21,
                      lineHeight: 1.35,
                      color: "#123762",
                      margin: "0 0 12px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="muted"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      margin: "0 0 22px",
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid #e8eef7",
                      paddingTop: 17,
                      display: "grid",
                      gap: 13,
                    }}
                  >
                    {item.points.map((point) => (
                      <div
                        key={point}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 13,
                          lineHeight: 1.65,
                          color: "#526783",
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="#014AAC"
                          style={{
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology process */}
      <section
        className="section section-soft"
        style={{ background: "#f5f8fd" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: 30,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(145deg, #014AAC 0%, #073678 100%)",
                color: "#ffffff",
                borderRadius: 22,
                padding: "clamp(26px, 4vw, 40px)",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.13)",
                  marginBottom: 25,
                }}
              >
                <Layers3 size={25} color="#ffbf00" />
              </div>

              <p
                style={{
                  color: "#ffcf4a",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                Consistency and Comparability
              </p>

              <h3
                style={{
                  fontSize: "clamp(26px, 3vw, 36px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.03em",
                  margin: "0 0 18px",
                  color: "#ffffff",
                }}
              >
                Make every comparison meaningful.
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                Meaningful price comparisons depend on understanding what is
                measured, how observations are combined, and how changes are
                reviewed. Clear documentation helps users interpret results
                within the index's intended scope.
              </p>

              <div
                style={{
                  height: 3,
                  width: 64,
                  background: "#ffbf00",
                  borderRadius: 10,
                  marginTop: 28,
                }}
              />
            </div>

            <div
              style={{
                padding: "clamp(22px, 3vw, 34px)",
                background: "#ffffff",
                border: "1px solid #e3ebf7",
                borderRadius: 22,
                boxSizing: "border-box",
              }}
            >
              <p className="eyebrow">The Process</p>

              <h3
                style={{
                  fontSize: 25,
                  lineHeight: 1.3,
                  color: "#123762",
                  margin: "12px 0 28px",
                }}
              >
                From source data to a reviewed index
              </h3>

              <div style={{ display: "grid", gap: 23 }}>
                {methodologySteps.map((step, index) => (
                  <div
                    key={step.number}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "42px minmax(0, 1fr)",
                      gap: 15,
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 12,
                        background: "#edf4ff",
                        color: "#014AAC",
                        fontSize: 13,
                        fontWeight: 800,
                      }}
                    >
                      {step.number}
                    </div>

                    <div
                      style={{
                        paddingBottom:
                          index === methodologySteps.length - 1 ? 0 : 18,
                        borderBottom:
                          index === methodologySteps.length - 1
                            ? "none"
                            : "1px solid #e8eef7",
                      }}
                    >
                      <h4
                        style={{
                          color: "#123762",
                          fontSize: 16,
                          margin: "0 0 7px",
                        }}
                      >
                        {step.title}
                      </h4>

                      <p
                        className="muted"
                        style={{
                          fontSize: 13,
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="section" style={{ padding: "68px 0" }}>
        <div className="container">
          <div
            style={{
              padding: "clamp(28px, 5vw, 48px)",
              border: "1px solid #e3ebf7",
              borderRadius: 22,
              background:
                "linear-gradient(120deg, #f4f8ff 0%, #ffffff 75%)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 28,
            }}
          >
            <div style={{ maxWidth: 660 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <FileSearch size={20} color="#014AAC" />
                <p className="eyebrow" style={{ margin: 0 }}>
                  Transparent by Design
                </p>
              </div>

              <h2
                className="h2"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.2,
                  margin: "12px 0",
                }}
              >
                Reliable measurement starts with a clear methodology.
              </h2>

              <p
                className="muted"
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Explore how a documented approach to dairy price measurement
                can support research, market comparisons, and informed
                interpretation.
              </p>
            </div>

            <Link
              href="/start-now"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              Discuss the Methodology
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
