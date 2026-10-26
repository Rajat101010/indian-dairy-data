
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { db } from "@/lib/db";

export const solutionContent: Record<
    string,
    [string, string]
> = {
    "price-intelligence": [
        "Price Intelligence",
        "Farm-gate milk, fat and SNF, SMP, butter and ghee price series with range, median, coverage and source-quality context.",
    ],
    "price-index-method": [
        "Price Index Method",
        "A transparent protocol for product definition, observation, aggregation, governance and revision history.",
    ],
    "price-transmission": [
        "Price Transmission",
        "Follow value from farm-gate milk through fat and SNF components to processor products and market signals.",
    ],
    "outlook-and-forecasts": [
        "Outlook and Forecasts",
        "Scenario-based outlooks with upside and downside risks, confidence ranges and review triggers.",
    ],
    "farm-economics": [
        "Farm Economics",
        "Compare representative farms using standardised costs, margins and sensitivity assumptions.",
    ],
    "state-research-network": [
        "State Research Network",
        "A proposed research framework for monthly field returns on supply, procurement, prices, demand and market drivers.",
    ],
    "decision-products": [
        "Decision Products",
        "Weekly and monthly price pulses, benchmark context, state briefs and evidence packs.",
    ],
    "sector-roadmap": [
        "Sector Roadmap",
        "Dairy-first research roadmap. Buffalo, goat and sheep meat, eggs, poultry and cattle feed are marked as coming soon.",
    ],
};

const checklist = [
    "Documented definitions",
    "Source and revision log",
    "Coverage and quality context",
    "Decision-ready summaries",
];

const signalDetails = [
    "Source",
    "Observation date",
    "Location / coverage",
    "Unit and product basis",
    "Method",
    "Confidence and gaps",
];

type ContentBlock = {
    type?: string;
    text?: string;
};

export default async function SolutionTemplate({
    slug,
}: {
    slug: string;
}) {
    const fallback = solutionContent[slug];

    if (!fallback) {
        return null;
    }

    let solution: {
        title: string;
        shortDescription: string;
        content: unknown;
    } | null = null;

    try {
        solution = await db.solution.findUnique({
            where: { slug, visible: true },
        });
    } catch {
        // Use fallback content if the database is unavailable.
    }

    const title = solution?.title ?? fallback[0];
    const description =
        solution?.shortDescription ?? fallback[1];

    const blocks: ContentBlock[] = Array.isArray(solution?.content)
        ? (solution.content as ContentBlock[])
        : [];

    return (
        <>
            <section className="line-art section">
                <div
                    className="container"
                    style={{ maxWidth: 1000 }}
                >
                    <div className="eyebrow">
                        Solutions / Market intelligence
                    </div>

                    <h1
                        className="h1"
                        style={{
                            margin: "18px 0",
                            fontSize: "clamp(40px, 6vw, 66px)",
                        }}
                    >
                        {title}
                    </h1>

                    <p
                        style={{
                            fontSize: 19,
                            lineHeight: 1.8,
                            color: "#526783",
                            maxWidth: 780,
                        }}
                    >
                        {description}
                    </p>

                    <Link
                        href="/start-now"
                        className="btn btn-amber"
                        style={{ marginTop: 22 }}
                    >
                        Start now <ArrowUpRight size={17} />
                    </Link>
                </div>
            </section>

            <style>{`
                @media (max-width: 760px) {
                    .solution-layout {
                        grid-template-columns: 1fr !important;
                    }

                    .solution-sidebar {
                        width: 100%;
                        box-sizing: border-box;
                    }
                }
            `}</style>
        </>
    );
}
