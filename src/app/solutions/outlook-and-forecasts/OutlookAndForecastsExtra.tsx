
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  ChartNoAxesCombined,
  Compass,
  CheckCircle2,
  GitBranch,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Demand Outlook",
    description:
      "Assess consumption patterns, market developments, and potential changes in dairy demand.",
    icon: TrendingUp,
    points: [
      "Consumption patterns and demand drivers",
      "Market and regional developments",
      "Potential shifts in dairy consumption",
    ],
  },
  {
    number: "02",
    title: "Supply Outlook",
    description:
      "Examine production trends, seasonal factors, and potential supply-side constraints.",
    icon: ChartNoAxesCombined,
    points: [
      "Milk production trends",
      "Seasonal production variations",
      "Supply constraints and market factors",
    ],
  },
  {
    number: "03",
    title: "Scenario Planning",
    description:
      "Consider alternative market conditions and evaluate their possible implications for planning.",
    icon: GitBranch,
    points: [
      "Alternative market scenarios",
      "Potential risks and opportunities",
      "Planning considerations for stakeholders",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Review market indicators",
    description:
      "Bring relevant historical trends and market signals into a consistent view.",
  },
  {
    number: "02",
    title: "Explore possible scenarios",
    description:
      "Consider how different demand, supply, and seasonal conditions may affect the market.",
  },
  {
    number: "03",
    title: "Support forward planning",
    description:
      "Use the analysis to inform strategic discussions and evaluate potential responses.",
  },
];

export default function OutlookAndForecastsExtra() {
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
            Outlook and Forecasts
          </div>

          <h2
            className="h2"
            style={{
              maxWidth: 850,
              fontSize: "clamp(36px, 5.5vw, 60px)",
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              margin: "22px 0",
            }}
          >
            Prepare for changing{" "}
            <span style={{ color: "#014AAC" }}>
              dairy market conditions.
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
            Bring market indicators, historical trends, and scenario analysis
            together to explore possible market developments and support
            forward-looking planning across the dairy value chain.
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
              "Demand and consumption trends",
              "Production and supply signals",
              "Scenario-based planning",
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

      {/* Forecasting capabilities */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 740, marginBottom: 34 }}>
            <p className="eyebrow">Forecasting Framework</p>

            <h2
              className="h2"
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                lineHeight: 1.18,
                letterSpacing: "-0.035em",
                margin: "14px 0",
              }}
            >
              Explore the factors shaping{" "}
              <span style={{ color: "#014AAC" }}>
                tomorrow's dairy market.
              </span>
            </h2>

            <p
              className="muted"
              style={{ fontSize: 16, lineHeight: 1.85 }}
            >
              A structured view of demand, supply, and alternative market
              scenarios can help stakeholders assess uncertainty and prepare
              for potential changes.
            </p>
          </div>

          <div className="grid-auto">
            {capabilities.map((item) => {
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

      {/* Forecasting workflow */}
      <section
        className="section section-soft"
        style={{ background: "#f5f8fd" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
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
                position: "relative",
                overflow: "hidden",
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
                <Compass size={25} color="#ffbf00" />
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
                A Forward-Looking Perspective
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
                Plan for possibilities, not just past performance.
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                Historical data helps explain what has happened. Scenario
                analysis can help stakeholders think through what may happen
                next, identify uncertainties, and consider appropriate
                responses.
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
              <p className="eyebrow">The Approach</p>

              <h3
                style={{
                  fontSize: 25,
                  lineHeight: 1.3,
                  color: "#123762",
                  margin: "12px 0 28px",
                }}
              >
                From market signals to planning insights
              </h3>

              <div style={{ display: "grid", gap: 25 }}>
                {workflow.map((step, index) => (
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
                        paddingBottom: index === workflow.length - 1 ? 0 : 20,
                        borderBottom:
                          index === workflow.length - 1
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

      {/* Closing CTA */}
      <section
        className="section"
        style={{ padding: "68px 0" }}
      >
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
            <div style={{ maxWidth: 650 }}>
              <p className="eyebrow">Plan Ahead</p>

              <h2
                className="h2"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.2,
                  margin: "12px 0",
                }}
              >
                What could changing market conditions mean for your business?
              </h2>

              <p
                className="muted"
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Explore how dairy market research and structured scenario
                analysis can support your next planning decision.
              </p>
            </div>

            <Link
              href="/start-now"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
