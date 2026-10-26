
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
            <style>{`
                *,
                *::before,
                *::after {
                    box-sizing: border-box;
                }

                .home-hero {
                    padding: 86px 0 72px;
                    position: relative;
                }

                .home-hero-grid {
                    display: grid;
                    grid-template-columns:
                        minmax(0, 1.08fr)
                        minmax(0, 0.92fr);
                    gap: 40px;
                    align-items: center;
                }

                .home-hero-copy {
                    min-width: 0;
                }

                .home-hero-copy .h1 {
                    margin: 22px 0;
                    max-width: 700px;
                    overflow-wrap: anywhere;
                }

                .home-hero-description {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #526783;
                    max-width: 600px;
                }

                .home-hero-actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-top: 30px;
                }

                .home-hero-actions .btn {
                    min-height: 46px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .home-trust-note {
                    margin-top: 25px;
                    font-size: 12px;
                    line-height: 1.7;
                    color: #63758d;
                }

                .home-market-visual {
                    min-width: 0;
                    min-height: 360px;
                    position: relative;
                    border-radius: 30px;
                    background: linear-gradient(
                        145deg,
                        #014AAC,
                        #0b3471
                    );
                    padding: 24px;
                    overflow: hidden;
                    box-shadow: 0 28px 65px #014aac30;
                }

                .home-market-header {
                    position: relative;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                }

                .home-market-header h3 {
                    font-size: 23px;
                    margin: 8px 0;
                }

                .home-market-visual .sample-label {
                    flex-shrink: 0;
                    background: #ffbf00;
                    color: #172033;
                    padding: 7px 10px;
                    border-radius: 8px;
                    font-size: 11px;
                    font-weight: 800;
                }

                .home-market-chart {
                    position: relative;
                    width: 100%;
                    height: auto;
                    display: block;
                    margin-top: 26px;
                    overflow: visible;
                }

                .home-workflow {
                    position: relative;
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 10px;
                    margin-top: 10px;
                }

                .home-workflow-item {
                    min-width: 0;
                    border: 1px solid #ffffff2a;
                    background: #ffffff10;
                    border-radius: 13px;
                    padding: 12px;
                    color: white;
                }

                .home-workflow-title {
                    font-weight: 700;
                    margin-top: 5px;
                    overflow-wrap: anywhere;
                }

                .home-chart-caption {
                    position: relative;
                    font-size: 11px;
                    line-height: 1.6;
                    color: #d5e3f5;
                    margin-bottom: 0;
                }

                .home-kpi-section {
                    padding: 0 0 35px;
                    margin-top: -1px;
                    background: #f7faff;
                }

                .home-kpis {
                    display: grid;
                    grid-template-columns:
                        repeat(auto-fit, minmax(180px, 1fr));
                    gap: 14px;
                }

                .home-kpi-card {
                    padding: 22px;
                    border-radius: 16px;
                    min-width: 0;
                }

                .home-kpi-value {
                    font-size: 30px;
                    font-weight: 850;
                    color: #014AAC;
                    overflow-wrap: anywhere;
                }

                .home-kpi-label {
                    font-weight: 750;
                    margin-top: 5px;
                }

                .home-kpi-note {
                    display: block;
                    line-height: 1.5;
                    margin-top: 5px;
                }

                .home-section {
                    padding-top: 64px;
                    padding-bottom: 64px;
                }

                .home-section-intro {
                    max-width: 680px;
                    margin-bottom: 34px;
                }

                .home-section-intro h2 {
                    margin: 14px 0;
                }

                .home-section-intro p {
                    line-height: 1.8;
                }

                .home-capabilities,
                .home-solutions {
                    min-width: 0;
                }

                .home-capability-card {
                    padding: 25px;
                    min-width: 0;
                }

                .home-capability-card h3 {
                    font-size: 19px;
                    color: #123762;
                    margin: 20px 0 9px;
                }

                .home-capability-card p,
                .home-solution-card p {
                    line-height: 1.7;
                    font-size: 14px;
                    overflow-wrap: anywhere;
                }

                .home-solutions-heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: 20px;
                    flex-wrap: wrap;
                    margin-bottom: 28px;
                }

                .home-solution-card {
                    padding: 23px;
                    display: block;
                    min-width: 0;
                }

                .home-solution-card h3 {
                    font-size: 20px;
                    color: #123762;
                    margin: 18px 0 8px;
                    overflow-wrap: anywhere;
                }

                .home-network-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
                    gap: 36px;
                    align-items: center;
                }

                .home-network-copy {
                    min-width: 0;
                }

                .home-network-copy h2 {
                    margin: 14px 0;
                }

                .home-network-copy p {
                    line-height: 1.8;
                }

                .home-network-actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-top: 20px;
                }

                .home-evidence-card {
                    padding: 24px;
                    background: #f7faff;
                    min-width: 0;
                }

                .home-evidence-header {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;
                    align-items: center;
                }

                .home-evidence-step {
                    display: flex;
                    gap: 14px;
                    align-items: center;
                    padding: 18px 0;
                }

                .home-evidence-step:last-child {
                    border-bottom: 0 !important;
                }

                .home-evidence-step-label {
                    font-size: 14px;
                    color: #254668;
                    overflow-wrap: anywhere;
                }

                .home-cta-section {
                    padding-top: 10px;
                }

                .home-cta {
                    background: #014AAC;
                    border-radius: 28px;
                    padding: 42px clamp(24px, 5vw, 60px);
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 25px;
                    flex-wrap: wrap;
                }

                .home-cta-copy {
                    flex: 1 1 300px;
                    min-width: 0;
                }

                .home-cta h2 {
                    font-size: clamp(28px, 4vw, 42px);
                    font-weight: 800;
                    letter-spacing: -.03em;
                    line-height: 1.2;
                    margin: 12px 0;
                    overflow-wrap: anywhere;
                }

                .home-cta-copy p {
                    color: #d5e3f5;
                    max-width: 650px;
                    line-height: 1.7;
                }

                .home-cta > .btn {
                    flex-shrink: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    min-height: 46px;
                }

                @media (max-width: 1024px) {
                    .home-hero {
                        padding: 60px 0 48px;
                    }

                    .home-hero-grid {
                        grid-template-columns:
                            minmax(0, 1fr)
                            minmax(0, 0.9fr);
                        gap: 28px;
                    }

                    .home-market-visual {
                        padding: 20px;
                    }

                    .home-network-grid {
                        gap: 24px;
                    }
                }

                @media (max-width: 768px) {
                    .home-hero {
                        padding: 42px 0 36px;
                    }

                    .home-hero-grid {
                        grid-template-columns: minmax(0, 1fr);
                        gap: 28px;
                    }

                    .home-hero-copy .h1 {
                        font-size: clamp(2.15rem, 9vw, 3.25rem);
                        line-height: 1.12;
                        margin: 18px 0;
                    }

                    .home-hero-description {
                        font-size: 16px;
                        line-height: 1.7;
                    }

                    .home-hero-actions {
                        gap: 10px;
                        margin-top: 22px;
                    }

                    .home-hero-actions .btn {
                        min-height: 48px;
                        justify-content: center;
                    }

                    .home-trust-note {
                        margin-top: 18px;
                        font-size: 12px;
                    }

                    .home-market-visual {
                        min-height: 0;
                        padding: 18px;
                        border-radius: 22px;
                    }

                    .home-market-header h3 {
                        font-size: 20px;
                    }

                    .home-market-chart {
                        margin-top: 18px;
                    }

                    .home-workflow {
                        gap: 7px;
                    }

                    .home-workflow-item {
                        padding: 10px;
                    }

                    .home-workflow-title {
                        font-size: 13px;
                    }

                    .home-kpi-section {
                        padding-bottom: 28px;
                    }

                    .home-kpis {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 10px;
                    }

                    .home-kpi-card {
                        padding: 15px;
                    }

                    .home-kpi-value {
                        font-size: clamp(22px, 7vw, 30px);
                    }

                    .home-kpi-label {
                        font-size: 14px;
                    }

                    .home-kpi-note {
                        font-size: 12px;
                    }

                    .home-section {
                        padding-top: 42px;
                        padding-bottom: 42px;
                    }

                    .home-section-intro {
                        margin-bottom: 24px;
                    }

                    .home-section-intro h2 {
                        font-size: clamp(1.65rem, 6vw, 2.2rem);
                        line-height: 1.2;
                    }

                    .home-section-intro p {
                        font-size: 14px;
                    }

                    .home-capabilities,
                    .home-solutions {
                        grid-template-columns: minmax(0, 1fr);
                    }

                    .home-capability-card {
                        padding: 20px;
                    }

                    .home-capability-card h3 {
                        margin-top: 15px;
                    }

                    .home-solutions-heading {
                        align-items: flex-start;
                        gap: 14px;
                        margin-bottom: 22px;
                    }

                    .home-solutions-heading h2 {
                        font-size: clamp(1.65rem, 6vw, 2.2rem);
                        line-height: 1.2;
                    }

                    .home-solution-card {
                        padding: 19px;
                    }

                    .home-solution-card h3 {
                        margin-top: 14px;
                    }

                    .home-network-grid {
                        grid-template-columns: minmax(0, 1fr);
                        gap: 24px;
                    }

                    .home-network-copy h2 {
                        font-size: clamp(1.65rem, 6vw, 2.2rem);
                        line-height: 1.2;
                    }

                    .home-network-copy p {
                        font-size: 14px;
                    }

                    .home-evidence-card {
                        padding: 18px;
                    }

                    .home-evidence-header {
                        align-items: flex-start;
                        flex-wrap: wrap;
                    }

                    .home-evidence-step {
                        padding: 15px 0;
                    }

                    .home-cta {
                        padding: 28px 20px;
                        border-radius: 22px;
                        gap: 18px;
                    }

                    .home-cta h2 {
                        font-size: clamp(25px, 7vw, 34px);
                        line-height: 1.2;
                    }

                    .home-cta-copy p {
                        font-size: 14px;
                    }

                    .home-cta > .btn {
                        width: 100%;
                        text-align: center;
                    }
                }

                @media (max-width: 480px) {
                    .home-hero {
                        padding: 32px 0 28px;
                    }

                    .home-hero-grid {
                        gap: 24px;
                    }

                    .home-hero-copy .h1 {
                        font-size: clamp(2rem, 9vw, 2.6rem);
                    }

                    .home-hero-actions {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .home-hero-actions .btn {
                        width: 100%;
                    }

                    .home-market-visual {
                        padding: 14px;
                    }

                    .home-market-header {
                        align-items: flex-start;
                    }

                    .home-market-header small {
                        font-size: 10px;
                    }

                    .home-market-header h3 {
                        font-size: 18px;
                    }

                    .home-market-visual .sample-label {
                        font-size: 9px;
                        padding: 6px 7px;
                    }

                    .home-workflow {
                        gap: 6px;
                    }

                    .home-workflow-item {
                        padding: 8px;
                        border-radius: 10px;
                    }

                    .home-workflow-title {
                        font-size: 12px;
                    }

                    .home-chart-caption {
                        font-size: 10px;
                    }

                    .home-kpis {
                        gap: 8px;
                    }

                    .home-kpi-card {
                        padding: 12px;
                    }

                    .home-kpi-value {
                        font-size: clamp(21px, 7vw, 27px);
                    }

                    .home-kpi-label {
                        font-size: 13px;
                        line-height: 1.4;
                    }

                    .home-kpi-note {
                        font-size: 11px;
                    }

                    .home-section {
                        padding-top: 36px;
                        padding-bottom: 36px;
                    }

                    .home-solutions-heading {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .home-evidence-step {
                        gap: 10px;
                    }

                    .home-evidence-step-label {
                        font-size: 13px;
                    }

                    .home-cta {
                        padding: 24px 17px;
                    }

                    .home-cta h2 {
                        font-size: 26px;
                    }
                }

                @media (max-width: 350px) {
                    .home-market-visual {
                        padding: 12px;
                    }

                    .home-market-header {
                        gap: 6px;
                    }

                    .home-market-visual .sample-label {
                        font-size: 8px;
                        padding: 5px;
                    }

                    .home-workflow-item {
                        padding: 7px 5px;
                    }

                    .home-workflow-title {
                        font-size: 11px;
                    }

                    .home-kpi-card {
                        padding: 10px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .home-hero *,
                    .home-market-visual * {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>

            {/* HERO SECTION */}

            <section className="line-art home-hero">
                <div className="container home-hero-grid">
                    <div className="home-hero-copy">
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
                                    flexShrink: 0,
                                }}
                            />
                            Independent dairy market intelligence
                        </div>

                        <h1 className="h1">
                            Clearer signals for a{" "}
                            <span style={{ color: "#014AAC" }}>
                                complex dairy market.
                            </span>
                        </h1>

                        <p className="home-hero-description">
                            A research-led platform concept connecting price
                            intelligence, demand and supply analysis, and state-level
                            evidence for India's dairy value chain.
                        </p>

                        <div className="home-hero-actions">
                            <Link className="btn btn-amber" href="/start-now">
                                Start now <ArrowUpRight size={17} />
                            </Link>

                            <Link className="btn btn-primary" href="/analysis">
                                Explore analysis <ArrowRight size={17} />
                            </Link>
                        </div>

                        <div className="home-trust-note">
                            <CheckCircle2
                                size={14}
                                style={{
                                    display: "inline",
                                    marginRight: 6,
                                    color: "#014AAC",
                                    verticalAlign: "middle",
                                }}
                            />
                            Transparent methods · Evidence-led · Sample data clearly
                            labelled
                        </div>
                    </div>

                    {/* MARKET INTELLIGENCE VISUAL */}

                    <div className="drift home-market-visual">
                        <div
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                inset: 0,
                                opacity: 0.2,
                                backgroundImage:
                                    "linear-gradient(#ffffff30 1px, transparent 1px), linear-gradient(90deg, #ffffff30 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                                pointerEvents: "none",
                            }}
                        />

                        <div className="home-market-header">
                            <div>
                                <small
                                    style={{
                                        opacity: 0.7,
                                        letterSpacing: ".12em",
                                    }}
                                >
                                    MARKET SIGNALS
                                </small>

                                <h3>Dairy intelligence</h3>
                            </div>

                            <span className="sample-label">
                                SAMPLE UI
                            </span>
                        </div>

                        <svg
                            className="home-market-chart"
                            viewBox="0 0 460 200"
                            role="img"
                            aria-label="Illustrative market trend lines"
                        >
                            <defs>
                                <linearGradient
                                    id="home-chart-fill"
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
                                fill="url(#home-chart-fill)"
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

                        <div className="home-workflow">
                            {[
                                ["01", "Observe"],
                                ["02", "Validate"],
                                ["03", "Interpret"],
                            ].map(([number, title]) => (
                                <div
                                    key={number}
                                    className="home-workflow-item"
                                >
                                    <small style={{ color: "#ffbf00" }}>
                                        {number}
                                    </small>

                                    <div className="home-workflow-title">
                                        {title}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="home-chart-caption">
                            Illustrative visual only · no live price observations
                        </p>
                    </div>
                </div>
            </section>

            {/* KPI SECTION */}

            <section className="home-kpi-section">
                <div className="container home-kpis">
                    {(Array.isArray(kpis) ? kpis : defaultKpis).map(
                        (k: any) => (
                            <div
                                key={k.label}
                                className="card home-kpi-card"
                            >
                                <div className="home-kpi-value">
                                    {Number(k.value).toLocaleString("en-IN")}
                                    {k.label === "Pilot states" ||
                                    k.label === "Researchers"
                                        ? "+"
                                        : ""}
                                </div>

                                <div className="home-kpi-label">
                                    {k.label}
                                </div>

                                <small className="muted home-kpi-note">
                                    {k.note || "Sample concept value"}
                                </small>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* CAPABILITIES SECTION */}

            <section className="section home-section">
                <div className="container">
                    <div className="home-section-intro">
                        <div className="eyebrow">One connected view</div>

                        <h2 className="h2">
                            What we help the market understand
                        </h2>

                        <p className="muted">
                            Bring scattered observations into a consistent frame—so
                            users can understand what changed, where the evidence is
                            strong, and what still needs validation.
                        </p>
                    </div>

                    <div className="grid-auto home-capabilities">
                        {cards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.title}
                                    className="card home-capability-card"
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

                                    <h3>{card.title}</h3>

                                    <p className="muted">
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

            {/* SOLUTIONS SECTION */}

            <section className="section section-soft home-section">
                <div className="container">
                    <div className="home-solutions-heading">
                        <div>
                            <div className="eyebrow">
                                Research framework
                            </div>

                            <h2 className="h2" style={{ margin: "12px 0 0" }}>
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

                    <div className="grid-auto home-solutions">
                        {displayedSolutions.map(
                            (solution: any, index: number) => (
                                <Link
                                    href={`/solutions/${solution.slug}`}
                                    key={solution.slug}
                                    className="card home-solution-card"
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 12,
                                                color: "#014AAC",
                                                fontWeight: 800,
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")} /
                                            SOLUTION
                                        </span>

                                        <ArrowUpRight
                                            color="#014AAC"
                                            size={18}
                                        />
                                    </div>

                                    <h3>{solution.title}</h3>

                                    <p className="muted">
                                        {solution.shortDescription}
                                    </p>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* RESEARCH NETWORK SECTION */}

            <section className="section home-section">
                <div className="container home-network-grid">
                    <div className="home-network-copy">
                        <div className="eyebrow">
                            Research network
                        </div>

                        <h2 className="h2">
                            Local observations. Shared standards.
                        </h2>

                        <p className="muted">
                            The concept proposes a state-level network that can
                            structure recurring returns on milk supply, procurement,
                            prices, demand and market drivers. Coverage and
                            participation figures shown here are concept targets,
                            not verified operating claims.
                        </p>

                        <div className="home-network-actions">
                            <Link
                                className="btn btn-primary"
                                href="/company#research-network"
                            >
                                Explore the network <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* EVIDENCE WORKFLOW CARD */}

                    <div className="card home-evidence-card">
                        <div className="home-evidence-header">
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
                                className="home-evidence-step"
                                style={{
                                    borderBottom:
                                        index === 3
                                            ? 0
                                            : "1px solid #e1eaf6",
                                }}
                            >
                                <span
                                    style={{
                                        width: 32,
                                        height: 32,
                                        minWidth: 32,
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

                                <b className="home-evidence-step-label">
                                    {title}
                                </b>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}

            <section className="section home-section home-cta-section">
                <div className="container home-cta">
                    <div className="home-cta-copy">
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

                        <h2>
                            Start with the question you need to answer.
                        </h2>

                        <p>
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
