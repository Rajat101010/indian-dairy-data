
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
    const [mobileSolutions, setMobileSolutions] = useState(false);

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
                        setMobileSolutions(false);
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
                    onClick={() => {
                        setMobile(!mobile);
                        setMobileSolutions(false);
                    }}
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
                    className="mobile-menu"
                    style={{
                        padding: "8px 20px 22px",
                        background: "white",
                        display: "grid",
                        gap: 10,
                        borderTop: "1px solid #e6edf6",
                    }}
                >
                    {/* Mobile Solutions Dropdown */}
                    <div
                        style={{
                            border: "1px solid #e2eaf4",
                            borderRadius: 12,
                            overflow: "hidden",
                        }}
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setMobileSolutions(!mobileSolutions)
                            }
                            aria-expanded={mobileSolutions}
                            style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "14px 15px",
                                background: "#f7faff",
                                border: "none",
                                color: "#0c2b57",
                                fontSize: 14,
                                fontWeight: 700,
                                textAlign: "left",
                                cursor: "pointer",
                            }}
                        >
                            Solutions
                            <ChevronDown
                                size={19}
                                style={{
                                    transition: "transform 0.2s ease",
                                    transform: mobileSolutions
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                }}
                            />
                        </button>

                        {mobileSolutions && (
                            <div
                                style={{
                                    display: "grid",
                                    gap: 0,
                                    padding: "4px 10px 10px",
                                    background: "#ffffff",
                                }}
                            >
                                {solutions.map(([title, description], i) => (
                                    <Link
                                        key={title}
                                        href={`/solutions/${solutionSlugs[i]}`}
                                        onClick={() => {
                                            setMobile(false);
                                            setMobileSolutions(false);
                                        }}
                                        style={{
                                            display: "block",
                                            padding: "12px 10px",
                                            borderBottom:
                                                i === solutions.length - 1
                                                    ? "none"
                                                    : "1px solid #edf2f8",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "block",
                                                color: "#014AAC",
                                                fontSize: 13,
                                                fontWeight: 700,
                                                marginBottom: 4,
                                            }}
                                        >
                                            {title}
                                        </span>
                                        <span
                                            style={{
                                                display: "block",
                                                color: "#64748b",
                                                fontSize: 12,
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {description}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setMobileSolutions(!mobileSolutions)
                        }
                        aria-expanded={mobileSolutions}
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "14px 15px",
                            background: "#f7faff",
                            border: "none",
                            color: "#0c2b57",
                            fontSize: 14,
                            fontWeight: 700,
                            textAlign: "left",
                            cursor: "pointer",
                        }}
                    >
                        <Link
                            className="mobile-nav-item"
                            onClick={() => setMobile(false)}
                            href="/company"
                        >
                            Company
                        </Link>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setMobileSolutions(!mobileSolutions)
                        }
                        aria-expanded={mobileSolutions}
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "14px 15px",
                            background: "#f7faff",
                            border: "none",
                            color: "#0c2b57",
                            fontSize: 14,
                            fontWeight: 700,
                            textAlign: "left",
                            cursor: "pointer",
                        }}
                    >
                        <Link
                            className="mobile-nav-item"
                            onClick={() => setMobile(false)}
                            href="/read"
                        >
                            Read
                        </Link>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            setMobileSolutions(!mobileSolutions)
                        }
                        aria-expanded={mobileSolutions}
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "14px 15px",
                            background: "#f7faff",
                            border: "none",
                            color: "#0c2b57",
                            fontSize: 14,
                            fontWeight: 700,
                            textAlign: "left",
                            cursor: "pointer",
                        }}
                    >
                        <Link
                            className="mobile-nav-item"
                            onClick={() => setMobile(false)}
                            href="/analysis"
                        >
                            Analysis
                        </Link>
                    </button>

                    <Link
                        onClick={() => setMobile(false)}
                        href="/start-now"
                        className="btn btn-amber mobile-start"
                        style={{
                            justifySelf: "stretch",
                            textAlign: "center",
                            padding: "13px 18px",
                            fontSize: 13,
                            marginTop: 4,
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

                    .mobile-nav-item {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        min-height: 48px;
                        box-sizing: border-box;
                        padding: 13px 15px;
                        border: 1px solid #e2eaf4;
                        border-radius: 12px;
                        background: #ffffff;
                        color: #0c2b57;
                        font-size: 14px;
                        font-weight: 600;
                        text-decoration: none;
                    }

                    .mobile-start {
                        box-sizing: border-box;
                        width: 100%;
                    }
                }
            `}</style>
        </header>
    );
}
