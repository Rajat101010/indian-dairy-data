
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Tractor,
  Factory,
  ShoppingBasket,
  CheckCircle2,
  GitBranch,
  Truck,
  TrendingUp,
} from "lucide-react";

const transmissionStages = [
  {
    number: "01",
    title: "Farm-Level Prices",
    subtitle: "Production and procurement",
    description:
      "Examine procurement prices and the factors that may influence producer returns across dairy-producing regions.",
    icon: Tractor,
    points: [
      "Farm-gate and procurement prices",
      "Feed and production input costs",
      "Producer returns and incentives",
    ],
  },
  {
    number: "02",
    title: "Processing and Distribution",
    subtitle: "Processing, logistics and wholesale",
    description:
      "Study how procurement, processing expenses, transportation, and distribution relate to wholesale price movements.",
    icon: Factory,
    points: [
      "Processing and operating costs",
      "Transport and distribution expenses",
      "Wholesale price movements",
    ],
  },
  {
    number: "03",
    title: "Retail Market Outcomes",
    subtitle: "Consumer-facing prices",
    description:
      "Assess how upstream price changes may relate to retail prices and how those relationships evolve over time.",
    icon: ShoppingBasket,
    points: [
      "Retail prices across dairy products",
      "Timing of observed price changes",
      "Differences across markets and regions",
    ],
  },
];

const analysisSteps = [
  {
    number: "01",
    title: "Identify price movements",
    description:
      "Review price changes at relevant stages of the dairy value chain.",
  },
  {
    number: "02",
    title: "Compare timing and magnitude",
    description:
      "Examine how the size and timing of price movements differ across stages.",
  },
  {
    number: "03",
    title: "Interpret market relationships",
    description:
      "Consider costs, market conditions, and other factors that may explain observed patterns.",
  },
];

export default function PriceTransmissionExtra() {
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
            Price Transmission
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
            Trace how price changes move through the{" "}
            <span style={{ color: "#014AAC" }}>
              dairy value chain.
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
            Explore how changes in input costs, procurement prices,
            processing, distribution, and retail markets may relate to one
            another. A value-chain perspective helps clarify price movements
            and the factors that may influence them.
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
              "Farm-gate and procurement prices",
              "Processing and distribution costs",
              "Wholesale and retail movements",
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

      {/* Value-chain stages */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 750, marginBottom: 34 }}>
            <p className="eyebrow">Across the Value Chain</p>

            <h2
              className="h2"
              style={{
                fontSize: "clamp(30px, 4vw, 44px)",
                lineHeight: 1.18,
                letterSpacing: "-0.035em",
                margin: "14px 0",
              }}
            >
              Understand the links between{" "}
              <span style={{ color: "#014AAC" }}>
                prices at every stage.
              </span>
            </h2>

            <p
              className="muted"
              style={{ fontSize: 16, lineHeight: 1.85 }}
            >
              Price transmission analysis examines whether and how price
              movements at one stage of the dairy supply chain are associated
              with movements at another.
            </p>
          </div>

          <div className="grid-auto">
            {transmissionStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
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
                      {stage.number}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#014AAC",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      margin: "0 0 9px",
                    }}
                  >
                    {stage.subtitle}
                  </p>

                  <h3
                    style={{
                      fontSize: 21,
                      lineHeight: 1.35,
                      color: "#123762",
                      margin: "0 0 12px",
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className="muted"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      margin: "0 0 22px",
                    }}
                  >
                    {stage.description}
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid #e8eef7",
                      paddingTop: 17,
                      display: "grid",
                      gap: 13,
                    }}
                  >
                    {stage.points.map((point) => (
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

      {/* Value-chain flow */}
      <section
        className="section section-soft"
        style={{ background: "#f5f8fd" }}
      >
        <div className="container">
          <div style={{ maxWidth: 750, marginBottom: 30 }}>
            <p className="eyebrow">The Transmission Pathway</p>

            <h2
              className="h2"
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                lineHeight: 1.2,
                letterSpacing: "-0.035em",
                margin: "14px 0",
              }}
            >
              Follow the relationship from{" "}
              <span style={{ color: "#014AAC" }}>
                farm to consumer.
              </span>
            </h2>

            <p
              className="muted"
              style={{ fontSize: 15, lineHeight: 1.85 }}
            >
              The stages below provide a conceptual framework for examining
              price relationships. Actual transmission patterns can vary by
              product, region, market structure, and time period.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
              gap: 14,
              alignItems: "stretch",
            }}
          >
            {[
              {
                number: "01",
                title: "Farm Gate",
                description: "Producer prices and input costs",
                icon: Tractor,
              },
              {
                number: "02",
                title: "Processing",
                description: "Processing costs and product transformation",
                icon: Factory,
              },
              {
                number: "03",
                title: "Distribution",
                description: "Logistics, wholesale and supply networks",
                icon: Truck,
              },
              {
                number: "04",
                title: "Retail",
                description: "Consumer-facing dairy product prices",
                icon: ShoppingBasket,
              },
            ].map((stage, index, stages) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.number}
                  style={{
                    position: "relative",
                    padding: 22,
                    border: "1px solid #e3ebf7",
                    borderRadius: 16,
                    background: "#ffffff",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 22,
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 13,
                        background: "#edf4ff",
                        color: "#014AAC",
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#8ca2c0",
                      }}
                    >
                      {stage.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 18,
                      color: "#123762",
                      margin: "0 0 8px",
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className="muted"
                    style={{
                      fontSize: 13,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {stage.description}
                  </p>

                  {index < stages.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        right: -13,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 25,
                        height: 25,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        background: "#ffbf00",
                        color: "#123762",
                        zIndex: 1,
                      }}
                    >
                      <ArrowRight size={14} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 26,
              padding: "clamp(24px, 3vw, 34px)",
              background:
                "linear-gradient(145deg, #014AAC 0%, #073678 100%)",
              borderRadius: 20,
              color: "#ffffff",
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 13,
                }}
              >
                <TrendingUp size={21} color="#ffbf00" />
                <p
                  style={{
                    color: "#ffcf4a",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Analytical Perspective
                </p>
              </div>

              <h3
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  lineHeight: 1.25,
                  margin: "0 0 12px",
                  color: "#ffffff",
                }}
              >
                Price changes do not always pass through equally.
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  lineHeight: 1.85,
                  margin: 0,
                  maxWidth: 620,
                }}
              >
                Transmission may differ in speed, magnitude, and direction.
                Understanding these differences requires examining evidence
                across relevant markets and time periods.
              </p>
            </div>

            <div
              style={{
                padding: 22,
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#ffcf4a",
                  margin: "0 0 14px",
                }}
              >
                Questions to investigate
              </p>

              {[
                "How quickly do prices respond?",
                "How large are the observed changes?",
                "Do patterns differ across regions?",
              ].map((question) => (
                <div
                  key={question}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 9,
                    marginTop: 12,
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#ffffff",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    color="#ffbf00"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analysis approach */}
      <section className="section">
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
                padding: "clamp(24px, 3vw, 34px)",
                border: "1px solid #e3ebf7",
                borderRadius: 22,
                background: "#ffffff",
                boxSizing: "border-box",
              }}
            >
              <p className="eyebrow">Analysis Framework</p>

              <h3
                style={{
                  fontSize: 25,
                  lineHeight: 1.3,
                  color: "#123762",
                  margin: "12px 0 28px",
                }}
              >
                From price observations to useful insights
              </h3>

              <div style={{ display: "grid", gap: 23 }}>
                {analysisSteps.map((step, index) => (
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
                          index === analysisSteps.length - 1 ? 0 : 18,
                        borderBottom:
                          index === analysisSteps.length - 1
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

            <div
              style={{
                background: "#f5f8fd",
                border: "1px solid #e3ebf7",
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
                  background: "#ffffff",
                  color: "#014AAC",
                  marginBottom: 25,
                }}
              >
                <GitBranch size={24} />
              </div>

              <p className="eyebrow">Context Matters</p>

              <h3
                style={{
                  fontSize: "clamp(25px, 3vw, 34px)",
                  lineHeight: 1.22,
                  letterSpacing: "-0.025em",
                  color: "#123762",
                  margin: "12px 0 16px",
                }}
              >
                Understand the relationship, not just the numbers.
              </h3>

              <p
                className="muted"
                style={{
                  fontSize: 14,
                  lineHeight: 1.9,
                  margin: "0 0 22px",
                }}
              >
                Observed price movements can be influenced by seasonality,
                product mix, market structure, policy changes, and differences
                in costs. These factors should be considered before drawing
                conclusions about price transmission.
              </p>

              <Link
                href="/analysis"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  color: "#014AAC",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Explore analytical topics
                <ArrowRight size={17} />
              </Link>
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
              <p className="eyebrow">Explore Price Relationships</p>

              <h2
                className="h2"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.2,
                  margin: "12px 0",
                }}
              >
                What connects farm prices to the retail market?
              </h2>

              <p
                className="muted"
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Explore how dairy market research can help examine price
                movements across the value chain and support informed
                interpretation.
              </p>
            </div>

            <Link
              href="/start-now"
              className="btn btn-primary"
              style={{ flexShrink: 0 }}
            >
              Discuss Your Requirements
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
