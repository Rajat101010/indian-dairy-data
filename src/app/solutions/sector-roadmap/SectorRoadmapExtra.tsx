
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Map,
  Target,
  ChartNoAxesCombined,
  CheckCircle2,
  Search,
  Handshake,
  Flag,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

const priorities = [
  {
    number: "01",
    title: "Assess the Current Landscape",
    description:
      "Review market structure, production systems, infrastructure, and key challenges affecting the dairy sector.",
    icon: Search,
    points: [
      "Production and supply-chain conditions",
      "Infrastructure and market access",
      "Constraints and emerging opportunities",
    ],
  },
  {
    number: "02",
    title: "Define Strategic Priorities",
    description:
      "Identify opportunities across productivity, market development, research, and institutional collaboration.",
    icon: Target,
    points: [
      "Productivity and farm-level efficiency",
      "Market access and value addition",
      "Research and institutional partnerships",
    ],
  },
  {
    number: "03",
    title: "Track Progress",
    description:
      "Establish indicators and review mechanisms to evaluate progress against agreed sector priorities.",
    icon: ChartNoAxesCombined,
    points: [
      "Measurable performance indicators",
      "Implementation milestones",
      "Periodic progress reviews",
    ],
  },
];

const roadmapSteps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Build an evidence-based picture of current sector conditions and challenges.",
  },
  {
    number: "02",
    title: "Prioritise",
    description:
      "Rank potential interventions by relevance, feasibility, and expected impact.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Translate agreed priorities into actions, responsibilities, and milestones.",
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "Review indicators, assess progress, and adjust priorities as conditions change.",
  },
];

export default function SectorRoadmapExtra() {
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
            Sector Roadmap
          </div>

          <h2
            className="h2"
            style={{
              maxWidth: 900,
              fontSize: "clamp(36px, 5.5vw, 60px)",
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              margin: "22px 0",
            }}
          >
            Identify priorities for a{" "}
            <span style={{ color: "#014AAC" }}>
              stronger dairy sector.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 770,
              fontSize: 17,
              lineHeight: 1.9,
              color: "#526783",
              margin: 0,
            }}
          >
            A structured roadmap connects sector challenges with strategic
            priorities, practical interventions, and measurable outcomes.
            It provides a framework for aligning stakeholders and supporting
            long-term development across the dairy value chain.
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
              "Evidence-based priorities",
              "Coordinated interventions",
              "Measurable progress",
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
              Discuss Sector Priorities
              <ArrowUpRight size={17} />
            </Link>

            <Link href="/analysis" className="btn btn-primary">
              Explore Analysis
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic priorities */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 750, marginBottom: 34 }}>
            <p className="eyebrow">Strategic Priorities</p>

            <h2
              className="h2"
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                lineHeight: 1.18,
                letterSpacing: "-0.035em",
                margin: "14px 0",
              }}
            >
              Turn sector challenges into{" "}
              <span style={{ color: "#014AAC" }}>
                a clear direction.
              </span>
            </h2>

            <p
              className="muted"
              style={{ fontSize: 16, lineHeight: 1.85 }}
            >
              A practical roadmap starts with understanding the current
              landscape, selecting priorities, and establishing ways to
              evaluate progress over time.
            </p>
          </div>

          <div className="grid-auto">
            {priorities.map((item) => {
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

      {/* Roadmap process */}
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
                <Map size={25} color="#ffbf00" />
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
                A Structured Development Framework
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
                From understanding challenges to measuring outcomes.
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                Sector development requires more than identifying problems.
                A clear framework helps connect evidence, decisions,
                implementation responsibilities, and ongoing evaluation.
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
              <p className="eyebrow">The Roadmap Process</p>

              <h3
                style={{
                  fontSize: 25,
                  lineHeight: 1.3,
                  color: "#123762",
                  margin: "12px 0 28px",
                }}
              >
                A repeatable cycle for sector development
              </h3>

              <div style={{ display: "grid", gap: 23 }}>
                {roadmapSteps.map((step, index) => (
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
                          index === roadmapSteps.length - 1 ? 0 : 18,
                        borderBottom:
                          index === roadmapSteps.length - 1
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

      {/* Collaboration and implementation */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: 22,
            }}
          >
            <div
              style={{
                padding: "clamp(24px, 3vw, 34px)",
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
                <Handshake size={23} />
              </div>

              <h3
                style={{
                  fontSize: 21,
                  color: "#123762",
                  margin: "0 0 12px",
                }}
              >
                Align stakeholders
              </h3>

              <p
                className="muted"
                style={{
                  fontSize: 14,
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                Encourage coordination among producers, processors,
                researchers, industry bodies, and policymakers around shared
                priorities and clearly defined responsibilities.
              </p>
            </div>

            <div
              style={{
                padding: "clamp(24px, 3vw, 34px)",
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
                <Flag size={23} />
              </div>

              <h3
                style={{
                  fontSize: 21,
                  color: "#123762",
                  margin: "0 0 12px",
                }}
              >
                Set measurable milestones
              </h3>

              <p
                className="muted"
                style={{
                  fontSize: 14,
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                Define indicators, timelines, and review responsibilities so
                that progress can be assessed consistently and priorities
                can be refined when needed.
              </p>
            </div>

            <div
              style={{
                padding: "clamp(24px, 3vw, 34px)",
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
                <ClipboardCheck size={23} />
              </div>

              <h3
                style={{
                  fontSize: 21,
                  color: "#123762",
                  margin: "0 0 12px",
                }}
              >
                Review and adapt
              </h3>

              <p
                className="muted"
                style={{
                  fontSize: 14,
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                Use periodic reviews and updated evidence to identify gaps,
                learn from implementation, and adapt the roadmap to changing
                sector conditions.
              </p>
            </div>
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
              <p className="eyebrow">Plan for Sector Progress</p>

              <h2
                className="h2"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.2,
                  margin: "12px 0",
                }}
              >
                What should the next phase of dairy sector development focus on?
              </h2>

              <p
                className="muted"
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Explore how structured research, strategic prioritisation,
                and measurable indicators can support long-term dairy sector
                planning.
              </p>
            </div>

            <Link
              href="/start-now"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              Discuss Your Roadmap
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
