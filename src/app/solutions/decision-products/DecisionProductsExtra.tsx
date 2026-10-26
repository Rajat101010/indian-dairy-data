
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  ChartNoAxesCombined,
  Target,
  CheckCircle2,
  ClipboardCheck,
  Lightbulb,
} from "lucide-react";

const decisionProducts = [
  {
    number: "01",
    icon: FileText,
    title: "Market Briefs",
    description:
      "Summarise key dairy sector developments, market indicators, and emerging movements in a concise format designed for quick review.",
    points: [
      "Key market developments",
      "Relevant indicators and trends",
      "Concise research summaries",
    ],
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Analytical Reports",
    description:
      "Bring together available data, research findings, and structured analysis to investigate specific questions across the dairy value chain.",
    points: [
      "Data-led sector analysis",
      "Research findings and comparisons",
      "Transparent assumptions and limitations",
    ],
  },
  {
    number: "03",
    icon: Target,
    title: "Decision Support",
    description:
      "Organise evidence and comparisons into useful frameworks for strategic planning, operational assessments, and policy discussions.",
    points: [
      "Structured decision frameworks",
      "Options and trade-off comparisons",
      "Evidence for stakeholder discussions",
    ],
  },
];

const workflow = [
  {
    number: "01",
    title: "Define the question",
    description:
      "Identify the market issue, decision, or research objective that needs attention.",
  },
  {
    number: "02",
    title: "Organise the evidence",
    description:
      "Bring relevant information, indicators, sources, and comparisons together.",
  },
  {
    number: "03",
    title: "Develop the output",
    description:
      "Present the findings in a clear format suited to the intended audience.",
  },
];

export default function DecisionProductsExtra() {
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
            Decision Products
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
            Turn dairy sector information into{" "}
            <span style={{ color: "#014AAC" }}>
              practical insights.
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
            Transform research, market information, and structured
            evidence into decision-oriented outputs. Help stakeholders
            interpret developments, evaluate alternatives, and approach
            strategic, operational, and policy questions with greater
            clarity.
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
              "Research-led outputs",
              "Clear analytical context",
              "Decision-focused presentation",
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
              href="/read"
              className="btn btn-primary"
            >
              Explore research <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Decision product capabilities */}
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
                Research and intelligence outputs
              </div>

              <h2
                className="h2"
                style={{ margin: "13px 0 12px" }}
              >
                The right format for the question at hand
              </h2>

              <p
                className="muted"
                style={{
                  maxWidth: 650,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Different decisions require different levels of detail.
                These proposed formats provide a framework for
                communicating dairy sector evidence clearly and
                consistently.
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
              <ClipboardCheck size={15} />
              Output framework
            </span>
          </div>

          <div
            className="grid-auto"
            style={{ gap: 20 }}
          >
            {decisionProducts.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.number}
                  className="card"
                  style={{
                    position: "relative",
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
                      justifyContent: "space-between",
                      alignItems: "center",
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
                      {product.number}
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
                    {product.title}
                  </h3>

                  <p
                    className="muted"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.8,
                      margin: "0 0 22px",
                    }}
                  >
                    {product.description}
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid #e8eef7",
                      paddingTop: 17,
                      marginTop: "auto",
                    }}
                  >
                    {product.points.map((point) => (
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

      {/* Workflow section */}
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
              THE OBJECTIVE
            </div>

            <h2
              style={{
                fontSize: "clamp(25px, 3vw, 34px)",
                lineHeight: 1.2,
                letterSpacing: "-.03em",
                margin: "16px 0",
              }}
            >
              Make complex information easier to act on.
            </h2>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: "#d5e3f5",
                margin: 0,
              }}
            >
              A useful research output does more than present
              information. It establishes context, explains relevant
              findings, and helps readers understand the implications
              without losing sight of the underlying evidence.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 28,
                fontSize: 13,
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              <Lightbulb
                size={19}
                color="#ffbf00"
              />
              Clarity before complexity
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
              From question to output
            </div>

            <h3
              style={{
                color: "#123762",
                fontSize: 22,
                lineHeight: 1.35,
                margin: "14px 0 22px",
              }}
            >
              A structured development process
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
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 22,
            }}
          >
            <div style={{ maxWidth: 660 }}>
              <div className="eyebrow">
                Develop your research brief
              </div>

              <h2
                className="h2"
                style={{ margin: "12px 0" }}
              >
                What decision are you working towards?
              </h2>

              <p
                className="muted"
                style={{
                  lineHeight: 1.8,
                  marginBottom: 0,
                }}
              >
                Share your research question, target audience, or
                information requirements to start a conversation.
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
