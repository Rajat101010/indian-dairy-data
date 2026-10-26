
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Wheat,
  Wallet,
  TrendingUp,
  CheckCircle2,
  ClipboardList,
  Sprout,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Wheat,
    title: "Cost of Production",
    description:
      "Examine the major expenses involved in dairy farming to understand cost structures and the factors that influence production economics.",
    points: [
      "Feed and fodder expenditure",
      "Labour and veterinary costs",
      "Energy and operating expenses",
    ],
  },
  {
    number: "02",
    icon: Wallet,
    title: "Farm Profitability",
    description:
      "Assess farm revenues alongside operating expenses to understand margins, income drivers, and the economic pressures affecting dairy producers.",
    points: [
      "Milk revenue and other income",
      "Operating costs and margins",
      "Farm-level financial comparisons",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Productivity and Efficiency",
    description:
      "Explore how production practices, resource utilisation, and farm productivity relate to operating costs and economic performance.",
    points: [
      "Milk yield and productivity",
      "Feed and resource utilisation",
      "Operational efficiency indicators",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand farm inputs",
    description:
      "Identify the resources, production practices, and expenses involved in dairy operations.",
  },
  {
    number: "02",
    title: "Assess costs and returns",
    description:
      "Organise available information on farm expenditure, revenues, and production outcomes.",
  },
  {
    number: "03",
    title: "Interpret farm economics",
    description:
      "Compare relevant indicators to understand profitability drivers and potential efficiency improvements.",
  },
];

export default function FarmEconomicsExtra() {
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
            Farm Economics
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
            Understand the economics of{" "}
            <span style={{ color: "#014AAC" }}>
              dairy production.
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
            Examine the costs, returns, and operating factors that
            shape dairy farm performance. Build a clearer understanding
            of farm profitability, resource use, and the economic
            resilience of dairy production systems.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginTop: 28,
              color: "#526783",
              fontSize: 13,
            }}
          >
            {[
              "Production cost analysis",
              "Farm income and margins",
              "Productivity indicators",
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
              flexWrap: "wrap",
              gap: 12,
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

      {/* Farm economics capabilities */}
      <section
        className="section"
        style={{
          paddingTop: 62,
          paddingBottom: 76,
        }}
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
            <div style={{ maxWidth: 700 }}>
              <div className="eyebrow">
                Analytical capabilities
              </div>

              <h2
                className="h2"
                style={{ margin: "13px 0 12px" }}
              >
                Explore the factors behind farm performance
              </h2>

              <p
                className="muted"
                style={{
                  maxWidth: 650,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Understand how production costs, financial returns,
                and operating efficiency connect to the economic
                performance of dairy farms.
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
              <ClipboardList size={15} />
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
                    padding: 26,
                    borderRadius: 20,
                    border: "1px solid #e4edf8",
                    background: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 365,
                    overflow: "hidden",
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
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
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

      {/* Farm economics workflow */}
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
              THE BIGGER PICTURE
            </div>

            <h2
              style={{
                fontSize: "clamp(25px, 3vw, 34px)",
                lineHeight: 1.2,
                letterSpacing: "-.03em",
                margin: "16px 0",
              }}
            >
              Farm economics goes beyond milk yield.
            </h2>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: "#d5e3f5",
                margin: 0,
              }}
            >
              Farm performance is shaped by the relationship between
              production, input costs, revenue, and resource
              utilisation. Looking at these factors together provides
              a more complete picture of economic sustainability.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 28,
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <Sprout
                size={19}
                color="#ffbf00"
              />
              Production, costs, and returns
            </div>

            <div
              style={{
                height: 3,
                width: 64,
                background: "#ffbf00",
                borderRadius: 3,
                marginTop: 25,
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
              Analytical workflow
            </div>

            <h3
              style={{
                color: "#123762",
                fontSize: 22,
                lineHeight: 1.35,
                margin: "14px 0 22px",
              }}
            >
              From farm inputs to economic insights
            </h3>

            {workflow.map((step, index) => (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  gap: 15,
                  padding: "17px 0",
                  borderBottom:
                    index === workflow.length - 1
                      ? "none"
                      : "1px solid #e1eaf6",
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
                      index === workflow.length - 1
                        ? "#ffbf00"
                        : "#d5e3f5",
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
                Explore farm economics
              </div>

              <h2
                className="h2"
                style={{ margin: "12px 0" }}
              >
                What drives dairy farm performance?
              </h2>

              <p
                className="muted"
                style={{
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}
              >
                Tell us which production costs, economic indicators,
                or farm performance questions matter to your research.
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
