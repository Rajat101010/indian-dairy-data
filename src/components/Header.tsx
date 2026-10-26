"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, BarChart3 } from "lucide-react";

const solutions = [
    ["Price Intelligence", "Transparent dairy price signals"],
    ["Price Index Method", "Comparable, documented methods"],
    ["Price Transmission", "Trace value through the chain"],
    ["Outlook and Forecasts", "Scenarios and confidence ranges"],
    ["Farm Economics", "Costs, margins and sensitivity"],
    ["State Research Network", "Structured state-level evidence"],
    ["Decision Products", "Briefings for decision makers"],
    ["Sector Roadmap", "Adjacent sectors · coming soon"],
];

const solutionSlugs = [
    "price-intelligence",
    "price-index-method",
    "price-transmission",
    "outlook-and-forecasts",
    "farm-economics",
    "state-research-network",
    "decision-products",
    "sector-roadmap",
];

export default function Header({
    brand = "Indian Dairy Consortium",
}: {
    brand?: string;
}) {
    const [mobile, setMobile] = useState(false);
    const [menu, setMenu] = useState("");

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 40,
                background: "#ffffffed",
                backdropFilter: "blur(14px)",
                borderBottom: "1px solid #e6edf6",
            }}
        >
            <div
                className="container"
                style={{
                    height: 78,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                }}
            >
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        minWidth: 210,
                    }}
                    onClick={() => {
                        setMobile(false);
                        setMenu("");
                    }}
                >
                    <span
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 13,
                            background: "#014AAC",
                            display: "grid",
                            placeItems: "center",
                            color: "white",
                        }}
                    >
                        <BarChart3 size={23} />
                    </span>

                    <span
                        style={{
                            fontWeight: 800,
                            color: "#0c2b57",
                            lineHeight: 1.12,
                            fontSize: 15,
                        }}
                    >
                        {brand}
                        <small
                            style={{
                                display: "block",
                                fontSize: 10,
                                letterSpacing: ".16em",
                                marginTop: 4,
                                color: "#55708f",
                            }}
                        >
                            MARKET INTELLIGENCE
                        </small>
                    </span>
                </Link>

                <nav
                    className="desktop-nav"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 24,
                    }}
                >
                    <div
                        onMouseEnter={() => setMenu("solutions")}
                        onMouseLeave={() => setMenu("")}
                        style={{ position: "relative" }}
                    >
                        <button
                            className="nav-link"
                            onClick={() =>
                                setMenu(
                                    menu === "solutions" ? "" : "solutions"
                                )
                            }
                            aria-expanded={menu === "solutions"}
                        >
                            Solutions{" "}
                            <ChevronDown
                                size={13}
                                style={{ display: "inline" }}
                            />
                        </button>

                        {menu === "solutions" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: 28,
                                    left: -100,
                                    width: 520,
                                    padding: 18,
                                    background: "white",
                                    border: "1px solid #e2eaf4",
                                    borderRadius: 18,
                                    boxShadow: "0 18px 50px #0c2b5718",
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 8,
                                }}
                            >
                                {solutions.map(([title, description], i) => (
                                    <Link
                                        key={title}
                                        href={`/solutions/${solutionSlugs[i]}`}
                                        onClick={() => setMenu("")}
                                        style={{
                                            padding: 12,
                                            borderRadius: 12,
                                            background: "#f7faff",
                                        }}
                                    >
                                        <b
                                            style={{
                                                display: "block",
                                                fontSize: 13,
                                                color: "#014AAC",
                                            }}
                                        >
                                            {title}
                                        </b>
                                        <small className="muted">
                                            {description}
                                        </small>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        className="nav-link"
                        href="/company"
                        onClick={() => setMenu("")}
                    >
                        Company
                    </Link>

                    <Link className="nav-link" href="/read">
                        Read
                    </Link>

                    <Link className="nav-link" href="/analysis">
                        Analysis
                    </Link>

                    <Link
                        className="btn btn-amber"
                        href="/start-now"
                        style={{ padding: "11px 18px", fontSize: 13 }}
                    >
                        Start now <span>↗</span>
                    </Link>
                </nav>

                <button
                    aria-label={mobile ? "Close navigation" : "Open navigation"}
                    aria-expanded={mobile}
                    onClick={() => setMobile(!mobile)}
                    style={{
                        display: "none",
                        border: 0,
                        background: "transparent",
                        cursor: "pointer",
                        color: "#123762",
                    }}
                    className="mobile-toggle"
                >
                    {mobile ? <X size={25} /> : <Menu size={25} />}
                </button>
            </div>

            {mobile && (
                <div
                    style={{
                        padding: "8px 20px 22px",
                        background: "white",
                        display: "grid",
                        gap: 15,
                        borderTop: "1px solid #e6edf6",
                    }}
                >
                    <Link
                        onClick={() => setMobile(false)}
                        href="/solutions/price-intelligence"
                    >
                        Solutions
                    </Link>

                    <Link
                        onClick={() => setMobile(false)}
                        href="/company"
                    >
                        Company
                    </Link>

                    <Link onClick={() => setMobile(false)} href="/read">
                        Read
                    </Link>

                    <Link onClick={() => setMobile(false)} href="/analysis">
                        Analysis
                    </Link>

                    <Link
                        onClick={() => setMobile(false)}
                        href="/start-now"
                        className="btn btn-amber"
                        style={{
                            justifySelf: "start",
                            padding: "11px 18px",
                            fontSize: 13,
                        }}
                    >
                        Start now <span>↗</span>
                    </Link>
                </div>
            )}

            <style jsx>{`
                @media (max-width: 760px) {
                    .desktop-nav {
                        display: none !important;
                    }

                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </header>
    );
}