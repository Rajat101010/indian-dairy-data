
import Link from "next/link";

const exploreLinks = [
    ["Read", "/read"],
    ["Analysis", "/analysis"],
    ["Solutions", "/solutions/price-intelligence"],
    ["Start now", "/start-now"],
];

const companyLinks = [
    ["About the Consortium", "/company"],
    ["Research Network", "/company#research-network"],
    ["Partners", "/company#partners"],
    ["Get in Touch", "/company#get-in-touch"],
    ["Admin", "/admin/login"],
];

export default function Footer() {
    return (
        <footer className="site-footer">
            <style>{`
                .site-footer {
                    background: #092953;
                    color: white;
                    padding: 48px 0 22px;
                    margin-top: 48px;
                    overflow-wrap: anywhere;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
                    gap: 36px;
                }

                .footer-brand {
                    font-size: 20px;
                    line-height: 1.4;
                    display: inline-block;
                }

                .footer-description {
                    color: #c5d7ef;
                    max-width: 400px;
                    line-height: 1.8;
                    margin: 14px 0;
                    font-size: 14px;
                }

                .footer-notice {
                    color: #ffdf70;
                    font-size: 12px;
                    line-height: 1.7;
                }

                .footer-heading {
                    display: block;
                    font-size: 15px;
                    margin-bottom: 10px;
                }

                .footer-links {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .footer-link {
                    display: inline-flex;
                    align-items: center;
                    min-height: 40px;
                    padding: 7px 0;
                    color: #c5d7ef;
                    font-size: 14px;
                    line-height: 1.5;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .footer-link:hover {
                    color: #ffdf70;
                }

                .footer-link:focus-visible {
                    outline: 2px solid #ffdf70;
                    outline-offset: 4px;
                    border-radius: 2px;
                }

                .footer-bottom {
                    border-top: 1px solid #24456e;
                    margin-top: 36px;
                    padding-top: 18px;
                    font-size: 12px;
                    line-height: 1.8;
                    color: #b4c7e0;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 12px 24px;
                    flex-wrap: wrap;
                }

                .footer-bottom span {
                    min-width: 0;
                }

                @media (max-width: 768px) {
                    .site-footer {
                        padding: 36px 0 20px;
                        margin-top: 36px;
                    }

                    .footer-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 28px 24px;
                    }

                    .footer-brand-section {
                        grid-column: 1 / -1;
                    }

                    .footer-description {
                        max-width: 100%;
                    }

                    .footer-bottom {
                        margin-top: 28px;
                    }
                }

                @media (max-width: 480px) {
                    .site-footer {
                        padding: 30px 0 18px;
                        margin-top: 28px;
                    }

                    .footer-grid {
                        grid-template-columns: minmax(0, 1fr);
                        gap: 24px;
                    }

                    .footer-brand-section {
                        grid-column: auto;
                    }

                    .footer-brand {
                        font-size: 19px;
                    }

                    .footer-description {
                        font-size: 14px;
                        line-height: 1.75;
                        margin: 12px 0;
                    }

                    .footer-heading {
                        font-size: 15px;
                        margin-bottom: 6px;
                    }

                    .footer-link {
                        min-height: 42px;
                        width: 100%;
                        padding: 9px 0;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        gap: 8px;
                        margin-top: 24px;
                        padding-top: 16px;
                        font-size: 11px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .footer-link {
                        transition: none;
                    }
                }
            `}</style>

            <div className="container">
                <div className="footer-grid">
                    {/* BRAND AND DESCRIPTION */}

                    <div className="footer-brand-section">
                        <b className="footer-brand">
                            Indian Dairy Consortium
                        </b>

                        <p className="footer-description">
                            A market-intelligence concept for structured
                            dairy-sector evidence, transparent methods and
                            better-informed decisions.
                        </p>

                        <small className="footer-notice">
                            Sample concept site · no live market series loaded
                        </small>
                    </div>

                    {/* EXPLORE LINKS */}

                    <nav aria-label="Explore">
                        <b className="footer-heading">Explore</b>

                        <div className="footer-links">
                            {exploreLinks.map(([title, href]) => (
                                <Link
                                    key={title}
                                    href={href}
                                    className="footer-link"
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* COMPANY LINKS */}

                    <nav aria-label="Company">
                        <b className="footer-heading">Company</b>

                        <div className="footer-links">
                            {companyLinks.map(([title, href]) => (
                                <Link
                                    key={title}
                                    href={href}
                                    className="footer-link"
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>

                {/* COPYRIGHT AND DISCLAIMER */}

                <div className="footer-bottom">
                    <span>
                        © {new Date().getFullYear()} Indian Dairy Consortium
                        {" "}· Sample platform
                    </span>

                    <span>
                        Market data is not live unless a source basis is
                        explicitly provided.
                    </span>
                </div>
            </div>
        </footer>
    );
}
