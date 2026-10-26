
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesCombined,
  MapPinned,
  Activity,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: ChartNoAxesCombined,
    title: "Price Trends",
    description:
      "Examine historical price movements across dairy products to identify changes, recurring patterns, and emerging market signals.",
    points: [
      "Historical price movements",
      "Trend and range analysis",
      "Product-level comparisons",
    ],
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Regional Comparison",
    description:
      "Compare available price observations across states and markets to understand regional differences and variations in market conditions.",
    points: [
      "State and market comparisons",
      "Regional price differences",
      "Coverage and source context",
    ],
  },
  {
    number: "03",
    icon: Activity,
    title: "Market Signals",
    description:
      "Bring relevant price observations together to support monitoring, commercial planning, and evidence-led discussions.",
    points: [
      "Market movement monitoring",
      "Evidence-based interpretation",
      "Decision-support insights",
    ],
  },
];

export default function PriceIntelligenceExtra() {
  return (
    <>
      {/* Hero section */}
      <section
        className="line-art"
        style={{
          padding: "78px 0 68px",
          background:
            "linear-gradient(180deg, #f7faff 0%, #ffffff 100%)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: 1100 }}
        >
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
            Price Intelligence
          </div>

          <h2
            className="h2"
            style={{
              maxWidth: 820,
              fontSize: "clamp(36px, 5.5vw, 60px)",
              lineHeight: 1.12,
              letterSpacing: "-0.04em",
              margin: "22px 0",
            }}
          >
            Understand the forces behind{" "}
            <span style={{ color: "#014AAC" }}>
              dairy prices.
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
            Organise price information into a clearer view of market
            movements, regional differences, and emerging patterns.
            Support better-informed decisions across India's dairy
            value chain with structured, transparent analysis.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 20,
              marginTop: 28,
              color: "#526783",
              fontSize: 13,
            }}
          >
            {[
              "Structured price observations",
              "Regional market context",
              "Evidence-led interpretation",
            ].map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                <CheckCircle2
                  size={16}
                  color="#014AAC"
                />
                {item}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 32,
            }}
          >
            <Link
              href="/start-now"
              className="btn btn-amber"
            >
              Discuss your requirements{" "}
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/analysis"
              className="btn btn-primary"
            >
              Explore analysis <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities section */}
      <section
        className="section"
        style={{ paddingTop: 62, paddingBottom: 76 }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 34,
            }}
          >
            <div style={{ maxWidth: 680 }}>
              <div className="eyebrow">
                Analytical capabilities
              </div>

              <h2
                className="h2"
                style={{ margin: "13px 0 12px" }}
              >
                From price observations to market understanding
              </h2>

              <p
                className="muted"
                style={{
                  lineHeight: 1.8,
                  maxWidth: 650,
                  margin: 0,
                }}
              >
                A structured framework for examining price behaviour,
                comparing available evidence, and understanding the
                context behind market changes.
              </p>
            </div>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 13px",
                borderRadius: 10,
                background: "#f1f6fd",
                color: "#014AAC",
                fontSize: 12,
                fontWeight: 750,
              }}
            >
              <Activity size={15} />
              Research framework
            </span>
          </div>

          <div
            className="grid-auto"
            style={{ gap: 20 }}
          >
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="card"
                  style={{
                    position: "relative",
                    padding: 26,
                    borderRadius: 20,
                    border: "1px solid #e4edf8",
                    background: "#ffffff",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 365,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        width: 48,
                        height: 48,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 14,
                        background: "#eaf2fd",
                        color: "#014AAC",
                      }}
                    >
                      <Icon size={23} strokeWidth={1.8} />
                    </span>

                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 800,
                        color: "#8da4c2",
                        letterSpacing: ".08em",
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
                      margin: "24px 0 10px",
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
                      marginTop: "auto",
                    }}
                  >
                    {item.points.map((point) => (
                      <div
                        key={point}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 9,
                          marginBottom: 11,
                          fontSize: 13,
                          lineHeight: 1.6,
                          color: "#526783",
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="#014AAC"
                          style={{
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        />

                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytical workflow */}
      <section
        className="section"
        style={{
          paddingTop: 0,
          paddingBottom: 76,
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              background: "#014AAC",
              color: "#ffffff",
              padding: "clamp(25px, 4vw, 38px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: ".14em",
                fontWeight: 800,
                color: "#ffdf70",
              }}
            >
              OUR APPROACH
            </div>

            <h2
              style={{
                fontSize: "clamp(25px, 3vw, 34px)",
                lineHeight: 1.2,
                letterSpacing: "-.03em",
                margin: "16px 0",
              }}
            >
              Context matters as much as the price.
            </h2>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: "#d5e3f5",
                margin: 0,
              }}
            >
              Meaningful comparisons depend on understanding the
              product, market, observation period, units, and source
              behind each price. Our proposed framework keeps that
              context central to interpretation.
            </p>

            <div
              style={{
                height: 3,
                width: 64,
                background: "#ffbf00",
                borderRadius: 3,
                marginTop: 28,
              }}
            />
          </div>

          <div
            className="card"
            style={{
              padding: "clamp(24px, 4vw, 36px)",
              borderRadius: 24,
              background: "#f7faff",
              border: "1px solid #e4edf8",
            }}
          >
            <div className="eyebrow">
              Analysis workflow
            </div>

            <h3
              style={{
                color: "#123762",
                fontSize: 22,
                lineHeight: 1.35,
                margin: "14px 0 22px",
              }}
            >
              A consistent way to read the market
            </h3>

            {[
              {
                number: "01",
                title: "Collect",
                description:
                  "Organise available price observations and their sources.",
              },
              {
                number: "02",
                title: "Compare",
                description:
                  "Review products, regions, periods, and comparable units.",
              },
              {
                number: "03",
                title: "Interpret",
                description:
                  "Identify relevant movements while recognising data limitations.",
              },
            ].map((step, index) => (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  gap: 15,
                  padding: "17px 0",
                  borderBottom:
                    index === 2 ? "none" : "1px solid #e1eaf6",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 38,
                    height: 38,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 11,
                    background:
                      index === 2 ? "#ffbf00" : "#d5e3f5",
                    color: "#014AAC",
                    fontSize: 12,
                    fontWeight: 850,
                  }}
                >
                  {step.number}
                </span>

                <div>
                  <h4
                    style={{
                      margin: "0 0 5px",
                      fontSize: 15,
                      color: "#123762",
                    }}
                  >
                    {step.title}
                  </h4>

                  <p
                    className="muted"
                    style={{
                      fontSize: 13,
                      lineHeight: 1.7,
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
      </section>

      {/* Final call to action */}
      <section
        className="section"
        style={{ paddingTop: 0 }}
      >
        <div
          className="container"
          style={{
            borderTop: "1px solid #e4edf8",
            paddingTop: 35,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 22,
            }}
          >
            <div style={{ maxWidth: 660 }}>
              <div className="eyebrow">
                Explore price intelligence
              </div>

              <h2
                className="h2"
                style={{ margin: "12px 0" }}
              >
                Have a specific market question?
              </h2>

              <p
                className="muted"
                style={{ lineHeight: 1.8, marginBottom: 0 }}
              >
                Tell us which dairy products, regions, or price
                movements you want to understand.
              </p>
            </div>

            <Link
              href="/start-now"
              className="btn btn-amber"
            >
              Discuss your requirements{" "}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
