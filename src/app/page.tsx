
import Link from "next/link";
import {
    ArrowUpRight,
    Activity,
    ChartNoAxesCombined,
    Database,
    MapPinned,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

import { db } from "@/lib/db";
import { defaultKpis } from "@/lib/data";

export const dynamic = "force-dynamic";

async function setting(key: string, fallback: any) {
    try {
        const result = await db.siteSetting.findUnique({
            where: { key },
        });

        return result?.value ?? fallback;
    } catch {
        return fallback;
    }
}

export default async function Home() {
    // --------------------------------------------------
    // Fetch homepage data
    // --------------------------------------------------

    let brand = "Indian Dairy Consortium";
    let kpis: any = defaultKpis;
    let reads: any[] = [];
    let analyses: any[] = [];
    let solutions: any[] = [];

    try {
        brand = String(await setting("brandName", brand));
        kpis = await setting("homeKpis", defaultKpis);

        reads = await db.readItem.findMany({
            where: { status: "PUBLISHED" },
            orderBy: [
                { pinned: "desc" },
                { sortOrder: "asc" },
                { publishedAt: "desc" },
            ],
            take: 3,
        });

        analyses = await db.analysisFile.findMany({
            where: { status: "PUBLISHED" },
            orderBy: [
                { pinned: "desc" },
                { sortOrder: "asc" },
            ],
            take: 3,
        });

        solutions = await db.solution.findMany({
            where: { visible: true },
            orderBy: { sortOrder: "asc" },
            take: 4,
        });
    } catch {
        // Use fallback content if database queries fail.
    }

    // --------------------------------------------------
    // Capability cards
    // --------------------------------------------------

    const cards = [
        {
            icon: ChartNoAxesCombined,
            title: "Price intelligence",
            desc: "Price series, ranges, medians and coverage quality across dairy products.",
        },
        {
            icon: Activity,
            title: "Demand & supply",
            desc: "Structure market balances, use patterns and supply-side signals.",
        },
        {
            icon: Database,
            title: "Analysis & data",
            desc: "Explore uploaded workbooks with traceable sources and clear definitions.",
        },
        {
            icon: MapPinned,
            title: "State research network",
            desc: "A consistent framework for field returns and state-level evidence.",
        },
    ];

    // --------------------------------------------------
    // Fallback solution content
    // --------------------------------------------------

    const fallbackSolutions = [
        {
            title: "Price Intelligence",
            slug: "price-intelligence",
            shortDescription: "Structured price signals and coverage context.",
        },
        {
            title: "Price Transmission",
            slug: "price-transmission",
            shortDescription: "Understand value movement through the dairy chain.",
        },
        {
            title: "Farm Economics",
            slug: "farm-economics",
            shortDescription: "Costs, margins and representative farm economics.",
        },
        {
            title: "Decision Products",
            slug: "decision-products",
            shortDescription: "Briefings designed for practical decisions.",
        },
    ];

    const displayedSolutions = solutions.length
        ? solutions
        : fallbackSolutions;

    return (
        <>
            {/* ================================================
          HERO SECTION
      ================================================ */}

            <section
                className="line-art"
                style={{
                    padding: "86px 0 72px",
                    position: "relative",
                }}
            >
                <div
                    className="container"
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "minmax(0, 1.08fr) minmax(300px, 0.92fr)",
                        gap: 40,
                        alignItems: "center",
                    }}
                >
                    {/* Hero content */}

                    <div>
                        <div
                            className="eyebrow"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 9,
                            }}
                        >
                            <span
                                style={{
                                    width: 26,
                                    height: 2,
                                    background: "#ffbf00",
                                }}
                            />

                            Independent dairy market intelligence
                        </div>

                        <h1
                            className="h1"
                            style={{
                                margin: "22px 0",
                                maxWidth: 700,
                            }}
                        >
                            Clearer signals for a{" "}
                            <span style={{ color: "#014AAC" }}>
                                complex dairy market.
                            </span>
                        </h1>

                        <p
                            style={{
                                fontSize: 18,
                                lineHeight: 1.8,
                                color: "#526783",
                                maxWidth: 600,
                            }}
                        >
                            A research-led platform concept connecting price
                            intelligence, demand and supply analysis, and state-level
                            evidence for India's dairy value chain.
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: 12,
                                flexWrap: "wrap",
                                marginTop: 30,
                            }}
                        >
                            <Link className="btn btn-amber" href="/start-now">
                                Start now <ArrowUpRight size={17} />
                            </Link>

                            <Link className="btn btn-primary" href="/analysis">
                                Explore analysis <ArrowRight size={17} />
                            </Link>
                        </div>

                        <div
                            style={{
                                marginTop: 25,
                                fontSize: 12,
                                color: "#63758d",
                            }}
                        >
                            <CheckCircle2
                                size={14}
                                style={{
                                    display: "inline",
                                    marginRight: 6,
                                    color: "#014AAC",
                                }}
                            />

                            Transparent methods · Evidence-led · Sample data clearly
                            labelled
                        </div>
                    </div>

                    {/* Market intelligence visual */}

                    <div
                        className="drift"
                        style={{
                            minHeight: 360,
                            position: "relative",
                            borderRadius: 30,
                            background: "linear-gradient(145deg, #014AAC, #0b3471)",
                            padding: 24,
                            overflow: "hidden",
                            boxShadow: "0 28px 65px #014aac30",
                        }}
                    >
                        {/* Grid background */}

                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                opacity: 0.2,
                                backgroundImage:
                                    "linear-gradient(#ffffff30 1px, transparent 1px), linear-gradient(90deg, #ffffff30 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        />

                        {/* Visual header */}

                        <div
                            style={{
                                position: "relative",
                                color: "white",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div>
                                <small
                                    style={{
                                        opacity: 0.7,
                                        letterSpacing: ".12em",
                                    }}
                                >
                                    MARKET SIGNALS
                                </small>

                                <h3
                                    style={{
                                        fontSize: 23,
                                        margin: "8px 0",
                                    }}
                                >
                                    Dairy intelligence
                                </h3>
                            </div>

                            <span
                                style={{
                                    background: "#ffbf00",
                                    color: "#172033",
                                    padding: "7px 10px",
                                    borderRadius: 8,
                                    fontSize: 11,
                                    fontWeight: 800,
                                }}
                            >
                                SAMPLE UI
                            </span>
                        </div>

                        {/* Illustrative trend chart */}

                        <svg
                            viewBox="0 0 460 200"
                            role="img"
                            aria-label="Illustrative market trend lines"
                            style={{
                                position: "relative",
                                width: "100%",
                                marginTop: 26,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="fill"
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#ffbf00"
                                        stopOpacity=".32"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#ffbf00"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>

                            {[30, 70, 110, 150, 190].map((y) => (
                                <line
                                    key={y}
                                    x1="0"
                                    y1={y}
                                    x2="460"
                                    y2={y}
                                    stroke="#ffffff2a"
                                    strokeDasharray="4 6"
                                />
                            ))}

                            <path
                                d="M0 148 C35 130 42 154 82 113 S135 126 168 92 S220 112 252 72 S305 96 335 53 S405 70 460 25 L460 200 L0 200Z"
                                fill="url(#fill)"
                            />

                            <path
                                d="M0 148 C35 130 42 154 82 113 S135 126 168 92 S220 112 252 72 S305 96 335 53 S405 70 460 25"
                                fill="none"
                                stroke="#ffbf00"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />

                            <path
                                d="M0 170 C50 160 70 170 110 140 S180 152 220 130 S290 140 330 112 S400 130 460 88"
                                fill="none"
                                stroke="#b9d8ff"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Workflow stages */}

                        <div
                            style={{
                                position: "relative",
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: 10,
                                marginTop: 10,
                            }}
                        >
                            {[
                                ["01", "Observe"],
                                ["02", "Validate"],
                                ["03", "Interpret"],
                            ].map(([number, title]) => (
                                <div
                                    key={number}
                                    style={{
                                        border: "1px solid #ffffff2a",
                                        background: "#ffffff10",
                                        borderRadius: 13,
                                        padding: 12,
                                        color: "white",
                                    }}
                                >
                                    <small style={{ color: "#ffbf00" }}>
                                        {number}
                                    </small>

                                    <div
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 5,
                                        }}
                                    >
                                        {title}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p
                            style={{
                                position: "relative",
                                fontSize: 11,
                                color: "#d5e3f5",
                                marginBottom: 0,
                            }}
                        >
                            Illustrative visual only · no live price observations
                        </p>
                    </div>
                </div>
            </section>

            {/* ================================================
          KPI SECTION
      ================================================ */}

            <section
                style={{
                    padding: "0 0 35px",
                    marginTop: -1,
                    background: "#f7faff",
                }}
            >
                <div
                    className="container"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: 14,
                    }}
                >
                    {(Array.isArray(kpis) ? kpis : defaultKpis).map(
                        (k: any) => (
                            <div
                                key={k.label}
                                className="card"
                                style={{
                                    padding: 22,
                                    borderRadius: 16,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 30,
                                        fontWeight: 850,
                                        color: "#014AAC",
                                    }}
                                >
                                    {Number(k.value).toLocaleString("en-IN")}
                                    {k.label === "Pilot states" ||
                                        k.label === "Researchers"
                                        ? "+"
                                        : ""}
                                </div>

                                <div
                                    style={{
                                        fontWeight: 750,
                                        marginTop: 5,
                                    }}
                                >
                                    {k.label}
                                </div>

                                <small className="muted">
                                    {k.note || "Sample concept value"}
                                </small>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* ================================================
          CAPABILITIES SECTION
      ================================================ */}

            <section className="section">
                <div className="container">
                    <div
                        style={{
                            maxWidth: 680,
                            marginBottom: 34,
                        }}
                    >
                        <div className="eyebrow">One connected view</div>

                        <h2
                            className="h2"
                            style={{ margin: "14px 0" }}
                        >
                            What we help the market understand
                        </h2>

                        <p
                            className="muted"
                            style={{ lineHeight: 1.8 }}
                        >
                            Bring scattered observations into a consistent frame—so
                            users can understand what changed, where the evidence is
                            strong, and what still needs validation.
                        </p>
                    </div>

                    <div className="grid-auto">
                        {cards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.title}
                                    className="card"
                                    style={{ padding: 25 }}
                                >
                                    <span
                                        style={{
                                            width: 46,
                                            height: 46,
                                            display: "grid",
                                            placeItems: "center",
                                            borderRadius: 14,
                                            background: "#d5e3f5",
                                            color: "#014AAC",
                                        }}
                                    >
                                        <Icon size={23} />
                                    </span>

                                    <h3
                                        style={{
                                            fontSize: 19,
                                            color: "#123762",
                                            margin: "20px 0 9px",
                                        }}
                                    >
                                        {card.title}
                                    </h3>

                                    <p
                                        className="muted"
                                        style={{
                                            lineHeight: 1.7,
                                            fontSize: 14,
                                        }}
                                    >
                                        {card.desc}
                                    </p>

                                    <Link
                                        href={
                                            card.title === "Analysis & data"
                                                ? "/analysis"
                                                : "/solutions/price-intelligence"
                                        }
                                        style={{
                                            fontWeight: 750,
                                            fontSize: 13,
                                            color: "#014AAC",
                                        }}
                                    >
                                        Explore capability ↗
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================================================
          SOLUTIONS SECTION
      ================================================ */}

            <section className="section section-soft">
                <div className="container">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "end",
                            gap: 20,
                            flexWrap: "wrap",
                            marginBottom: 28,
                        }}
                    >
                        <div>
                            <div className="eyebrow">Research framework</div>

                            <h2
                                className="h2"
                                style={{ margin: "12px 0 0" }}
                            >
                                Solutions built around decisions
                            </h2>
                        </div>

                        <Link
                            href="/solutions/price-intelligence"
                            style={{
                                color: "#014AAC",
                                fontWeight: 750,
                            }}
                        >
                            All solutions ↗
                        </Link>
                    </div>

                    <div className="grid-auto">
                        {displayedSolutions.map((solution: any, index: number) => (
                            <Link
                                href={`/solutions/${solution.slug}`}
                                key={solution.slug}
                                className="card"
                                style={{
                                    padding: 23,
                                    display: "block",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: 12,
                                            color: "#014AAC",
                                            fontWeight: 800,
                                        }}
                                    >
                                        {String(index + 1).padStart(2, "0")} / SOLUTION
                                    </span>

                                    <ArrowUpRight color="#014AAC" size={18} />
                                </div>

                                <h3
                                    style={{
                                        fontSize: 20,
                                        color: "#123762",
                                        margin: "18px 0 8px",
                                    }}
                                >
                                    {solution.title}
                                </h3>

                                <p
                                    className="muted"
                                    style={{
                                        lineHeight: 1.7,
                                        fontSize: 14,
                                    }}
                                >
                                    {solution.shortDescription}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================
          RESEARCH NETWORK SECTION
      ================================================ */}

            <section className="section">
                <div
                    className="container"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 36,
                        alignItems: "center",
                    }}
                >
                    <div>
                        <div className="eyebrow">Research network</div>

                        <h2
                            className="h2"
                            style={{ margin: "14px 0" }}
                        >
                            Local observations. Shared standards.
                        </h2>

                        <p
                            className="muted"
                            style={{ lineHeight: 1.8 }}
                        >
                            The concept proposes a state-level network that can
                            structure recurring returns on milk supply, procurement,
                            prices, demand and market drivers. Coverage and
                            participation figures shown here are concept targets,
                            not verified operating claims.
                        </p>
                        <div
                            style={{
                                display: "flex",
                                gap: 12,
                                flexWrap: "wrap",
                                marginTop: 20,
                            }}
                        >
                            <Link
                                className="btn btn-primary"
                                href="/company#research-network"
                            >
                                Explore the network <ArrowRight size={16} />
                            </Link>

                        </div>


                    </div>

                    {/* Evidence workflow card */}

                    <div
                        className="card"
                        style={{
                            padding: 24,
                            background: "#f7faff",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: 10,
                                alignItems: "center",
                            }}
                        >
                            <b style={{ color: "#123762" }}>
                                Evidence workflow
                            </b>

                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 800,
                                    background: "#d5e3f5",
                                    color: "#014AAC",
                                    padding: "7px 9px",
                                    borderRadius: 7,
                                }}
                            >
                                PROPOSED MODEL
                            </span>
                        </div>

                        {[
                            "Field observations",
                            "Validation & source checks",
                            "State and regional panels",
                            "Decision-ready outputs",
                        ].map((title, index) => (
                            <div
                                key={title}
                                style={{
                                    display: "flex",
                                    gap: 14,
                                    alignItems: "center",
                                    padding: "18px 0",
                                    borderBottom:
                                        index === 3 ? 0 : "1px solid #e1eaf6",
                                }}
                            >
                                <span
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 10,
                                        display: "grid",
                                        placeItems: "center",
                                        background:
                                            index === 3 ? "#ffbf00" : "#d5e3f5",
                                        color: "#014AAC",
                                        fontWeight: 800,
                                    }}
                                >
                                    {index + 1}
                                </span>

                                <b
                                    style={{
                                        fontSize: 14,
                                        color: "#254668",
                                    }}
                                >
                                    {title}
                                </b>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================
          FINAL CALL TO ACTION
      ================================================ */}

            <section
                className="section"
                style={{ paddingTop: 10 }}
            >
                <div
                    className="container"
                    style={{
                        background: "#014AAC",
                        borderRadius: 28,
                        padding: "42px clamp(24px, 5vw, 60px)",
                        color: "white",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 25,
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontSize: 12,
                                letterSpacing: ".14em",
                                color: "#ffdf70",
                                fontWeight: 800,
                            }}
                        >
                            GET STARTED
                        </div>

                        <h2
                            style={{
                                fontSize: clamp(28, 4, 42),
                                fontWeight: 800,
                                letterSpacing: "-.03em",
                                margin: "12px 0",
                            }}
                        >
                            Start with the question you need to answer.
                        </h2>

                        <p
                            style={{
                                color: "#d5e3f5",
                                maxWidth: 650,
                                lineHeight: 1.7,
                            }}
                        >
                            Tell us which products, regions or decisions matter to
                            your organisation.
                        </p>
                    </div>

                    <Link
                        className="btn btn-amber"
                        href="/start-now"
                    >
                        Discuss your needs <ArrowUpRight size={17} />
                    </Link>
                </div>
            </section>
        </>
    );
}

// --------------------------------------------------
// Responsive CSS clamp helper
// --------------------------------------------------

function clamp(min: number, viewport: number, max: number) {
    return `clamp(${min}px, ${viewport}vw, ${max}px)`;
}
