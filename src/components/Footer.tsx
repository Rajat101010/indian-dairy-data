import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                background: "#092953",
                color: "white",
                padding: "52px 0 24px",
                marginTop: 60,
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr",
                        gap: 32,
                    }}
                >
                    <div>
                        <b style={{ fontSize: 20 }}>
                            Indian Dairy Consortium
                        </b>

                        <p
                            style={{
                                color: "#c5d7ef",
                                maxWidth: 400,
                                lineHeight: 1.7,
                            }}
                        >
                            A market-intelligence concept for structured
                            dairy-sector evidence, transparent methods and
                            better-informed decisions.
                        </p>

                        <small style={{ color: "#ffdf70" }}>
                            Sample concept site · no live market series loaded
                        </small>
                    </div>

                    <div>
                        <b>Explore</b>

                        {[
                            ["Read", "/read"],
                            ["Analysis", "/analysis"],
                            ["Solutions", "/solutions/price-intelligence"],
                            ["Start now", "/start-now"],
                        ].map(([title, href]) => (
                            <Link
                                key={title}
                                href={href}
                                style={{
                                    display: "block",
                                    marginTop: 12,
                                    color: "#c5d7ef",
                                }}
                            >
                                {title}
                            </Link>
                        ))}
                    </div>

                    <div>
                        <b>Company</b>

                        <Link
                            href="/company"
                            style={{
                                display: "block",
                                marginTop: 12,
                                color: "#c5d7ef",
                            }}
                        >
                            About the Consortium
                        </Link>

                        <Link
                            href="/company#research-network"
                            style={{
                                display: "block",
                                marginTop: 12,
                                color: "#c5d7ef",
                            }}
                        >
                            Research Network
                        </Link>

                        <Link
                            href="/company#partners"
                            style={{
                                display: "block",
                                marginTop: 12,
                                color: "#c5d7ef",
                            }}
                        >
                            Partners
                        </Link>

                        <Link
                            href="/company#get-in-touch"
                            style={{
                                display: "block",
                                marginTop: 12,
                                color: "#c5d7ef",
                            }}
                        >
                            Get in Touch
                        </Link>

                        <Link
                            href="/admin/login"
                            style={{
                                display: "block",
                                marginTop: 12,
                                color: "#c5d7ef",
                            }}
                        >
                            Admin
                        </Link>
                    </div>
                </div>

                <div
                    style={{
                        borderTop: "1px solid #24456e",
                        marginTop: 40,
                        paddingTop: 18,
                        fontSize: 12,
                        color: "#b4c7e0",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        flexWrap: "wrap",
                    }}
                >
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