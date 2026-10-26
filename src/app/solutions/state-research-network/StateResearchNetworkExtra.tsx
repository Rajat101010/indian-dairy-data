
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPinned,
  Handshake,
  ChartNoAxesCombined,
  CheckCircle2,
  Building2,
  Database,
  Network,
  Search,
} from "lucide-react";

const researchAreas = [
  {
    number: "01",
    title: "Regional Intelligence",
    description:
      "Examine differences in production, consumption, infrastructure, and market structure across Indian states.",
    icon: MapPinned,
    points: [
      "State-level production patterns",
      "Regional consumption and demand",
      "Infrastructure and market access",
    ],
  },
  {
    number: "02",
    title: "Research Collaboration",
    description:
      "Encourage knowledge exchange between researchers, institutions, and stakeholders across the dairy value chain.",
    icon: Handshake,
    points: [
      "Academic and institutional engagement",
      "Knowledge exchange and joint research",
      "Industry and stakeholder perspectives",
    ],
  },
  {
    number: "03",
    title: "Comparable Indicators",
    description:
      "Organise regional findings using consistent definitions, comparable measures, and documented data practices.",
    icon: ChartNoAxesCombined,
    points: [
      "Standardised indicator definitions",
      "Documented data sources and methods",
      "Consistent regional comparisons",
    ],
  },
];

const researchWorkflow = [
  {
    number: "01",
    title: "Collect regional evidence",
    description:
      "Identify relevant datasets, published research, and local market information.",
  },
  {
    number: "02",
    title: "Standardise and compare",
    description:
      "Align definitions, reporting periods, and units to support meaningful comparisons.",
  },
  {
    number: "03",
    title: "Develop regional insights",
    description:
      "Interpret differences between states while accounting for local market conditions.",
  },
  {
    number: "04",
    title: "Share research findings",
    description:
      "Present findings in formats that support further research and informed discussion.",
  },
];

export default function StateResearchNetworkExtra() {
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
            State Research Network
          </div>

          <h2
            className="h2"
            style={{
              maxWidth: 920,
              fontSize: "clamp(36px, 5.5vw, 60px)",
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              margin: "22px 0",
            }}
          >
            Build a clearer picture of dairy markets{" "}
            <span style={{ color: "#014AAC" }}>across India.</span>
          </h2>

          <p
            style={{
              maxWidth: 780,
              fontSize: 17,
              lineHeight: 1.9,
              color: "#526783",
              margin: 0,
            }}
          >
            A state-level research approach brings regional market
            information, local expertise, and comparable indicators together.
            It helps stakeholders explore differences across India's diverse
            dairy markets and develop a more informed understanding of the
            sector.
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
              "Regional market intelligence",
              "Collaborative research",
              "Comparable state indicators",
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
              Discuss Research Collaboration
              <ArrowUpRight size={17} />
            </Link>

            <Link href="/analysis" className="btn btn-primary">
              Explore Analysis
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Research capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <p className="eyebrow">Research Capabilities</p>

            <h2
              className="h2"
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                lineHeight: 1.18,
                letterSpacing: "-0.035em",
                margin: "14px 0",
              }}
            >
              Connect local evidence with{" "}
              <span style={{ color: "#014AAC" }}>
                a national perspective.
              </span>
            </h2>

            <p
              className="muted"
              style={{ fontSize: 16, lineHeight: 1.85 }}
            >
              Understanding India's dairy sector requires attention to
              regional differences as well as consistent approaches to
              collecting, comparing, and interpreting information.
            </p>
          </div>

          <div className="grid-auto">
            {researchAreas.map((item) => {
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

      {/* Regional research framework */}
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
                <Network size={25} color="#ffbf00" />
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
                Regional Knowledge, National Relevance
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
                India's dairy markets need both local context and comparable evidence.
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                Production systems, procurement arrangements, consumption
                patterns, and infrastructure can vary significantly by
                region. Combining local context with consistent research
                practices helps make those differences easier to understand.
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
              <p className="eyebrow">Research Workflow</p>

              <h3
                style={{
                  fontSize: 25,
                  lineHeight: 1.3,
                  color: "#123762",
                  margin: "12px 0 28px",
                }}
              >
                From regional information to useful insights
              </h3>

              <div style={{ display: "grid", gap: 23 }}>
                {researchWorkflow.map((step, index) => (
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
                          index === researchWorkflow.length - 1 ? 0 : 18,
                        borderBottom:
                          index === researchWorkflow.length - 1
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

      {/* Collaboration principles */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 750, marginBottom: 30 }}>
            <p className="eyebrow">A Connected Research Approach</p>

            <h2
              className="h2"
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                lineHeight: 1.2,
                letterSpacing: "-0.035em",
                margin: "14px 0",
              }}
            >
              Make regional findings easier to{" "}
              <span style={{ color: "#014AAC" }}>compare and use.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                icon: Building2,
                title: "Institutional Engagement",
                description:
                  "Create opportunities for researchers, universities, and sector organisations to exchange expertise and research perspectives.",
              },
              {
                icon: Database,
                title: "Consistent Data Practices",
                description:
                  "Document data definitions, sources, units, and reporting periods to improve clarity when comparing regional evidence.",
              },
              {
                icon: Search,
                title: "Evidence-Based Interpretation",
                description:
                  "Interpret state-level differences with attention to local context, data limitations, and the conditions behind observed patterns.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  style={{
                    padding: "clamp(24px, 3vw, 32px)",
                    border: "1px solid #e3ebf7",
                    borderRadius: 20,
                    background: "#ffffff",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: 13,
                      background: "#edf4ff",
                      color: "#014AAC",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={23} />
                  </div>

                  <h3
                    style={{
                      fontSize: 19,
                      lineHeight: 1.4,
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
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
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
              <p className="eyebrow">Strengthen Dairy Research</p>

              <h2
                className="h2"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.2,
                  margin: "12px 0",
                }}
              >
                How can regional research contribute to a stronger national picture?
              </h2>

              <p
                className="muted"
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Explore opportunities to connect regional evidence, research
                expertise, and comparable dairy market indicators.
              </p>
            </div>

            <Link
              href="/start-now"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              Discuss Collaboration
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
