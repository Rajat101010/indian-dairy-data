
import Link from "next/link";
import {
  Mail,
  ArrowUpRight,
  Users,
  BookOpen,
  Network,
  Building2,
  FileText,
  Newspaper,
  Handshake,
} from "lucide-react";
import { db } from "@/lib/db";

const sections = [
  {
    slug: "about-us",
    title: "About Us",
    description:
      "Learn about our mission to make India's dairy sector more transparent, accessible and data-driven.",
    detail:
      "Indian Dairy Data brings together market information, industry insights and research to help stakeholders understand the evolving dairy landscape. Our aim is to make relevant information easier to discover, interpret and use.",
    icon: Building2,
    eyebrow: "OUR MISSION",
  },
  {
    slug: "knowledge-partners",
    title: "Knowledge Partners",
    description:
      "Connect with specialised dairy market intelligence and research expertise through Jordbrukare.",
    detail:
      "Jordbrukare is a dairy-focused market intelligence and market access firm working at the intersection of data, policy, pricing and industry realities. Its work includes market research, competitive benchmarking, regulatory analysis and strategic market-entry support. These capabilities complement our focus on making dairy-sector information more accessible and useful for informed decision-making.",
    icon: BookOpen,
    eyebrow: "MARKET INTELLIGENCE",
    externalUrl: "https://www.jordbrukare.com/",
    externalLabel: "Explore Jordbrukare",
  },
  {
    slug: "partners",
    title: "Our Partners",
    description:
      "Discover industry engagement and business opportunities through Dairy Industry Expo.",
    detail:
      "Dairy Industry Expo provides a platform for professionals across dairy farming, milk processing, equipment, technology and allied industries. Its exhibitions, conferences and workshops encourage knowledge sharing, product discovery and industry networking. The platform brings together stakeholders to explore emerging technologies, discuss sector challenges and build professional connections across the dairy value chain.",
    icon: Handshake,
    eyebrow: "INDUSTRY CONNECTIONS",
    externalUrl: "https://west.dairyindustryexpo.com/",
    externalLabel: "Visit Dairy Industry Expo",
  },
  {
    slug: "publisher",
    title: "Publisher",
    description:
      "Explore dairy-sector publishing, industry developments and specialist media from BENISON Media.",
    detail:
      "BENISON Media is an industry-focused media and events organisation serving the feed and dairy sectors. Its activities include industry publications and exhibitions that connect professionals, businesses and technology providers. Through specialist content and industry engagement, BENISON Media helps readers follow developments, explore innovations and stay connected with the wider dairy and feed ecosystem.",
    icon: FileText,
    eyebrow: "INDUSTRY PUBLISHING",
    externalUrl: "https://benisonmedia.com/",
    externalLabel: "Visit BENISON Media",
  },
  {
    slug: "research-network",
    title: "Research Network",
    description:
      "Explore dairy research, market insights and professional connections through Jordbrukare.",
    detail:
      "Jordbrukare's work spans dairy market research, pricing and trade intelligence, regulatory analysis and market access. Its professional network encourages knowledge exchange and relevant dialogue among stakeholders across the dairy value chain. Explore its research and network initiatives to discover perspectives that can contribute to a deeper understanding of India's dairy markets and their connections with global markets.",
    icon: Network,
    eyebrow: "RESEARCH & COLLABORATION",
    externalUrl: "https://www.jordbrukare.com/",
    externalLabel: "Explore Research & Network",
  },
  {
    slug: "news-and-articles",
    title: "News and Articles",
    description:
      "Stay informed with dairy news, industry analysis, expert perspectives and emerging market developments.",
    detail:
      "Dairy Dimension is a specialist dairy magazine and information platform covering dairy farming, milk production, processing technology, industry news and market trends. Its content includes expert perspectives, interviews, industry developments and articles relevant to dairy professionals. Visit Dairy Dimension to explore recent stories and follow developments shaping the Indian and global dairy sectors.",
    icon: Newspaper,
    eyebrow: "DAIRY INDUSTRY NEWS",
    externalUrl: "https://dairydimension.com/",
    externalLabel: "Read News & Articles",
  },
  {
    slug: "get-in-touch",
    title: "Get in Touch",
    description:
      "Have a question, partnership proposal or research idea? We would be glad to hear from you.",
    detail:
      "Reach out to discuss collaborations, knowledge partnerships, research initiatives or other opportunities related to India's dairy sector. We welcome enquiries from organisations, researchers and industry professionals.",
    icon: Mail,
    eyebrow: "LET'S CONNECT",
  },
];

export default async function CompanyPage() {
  let pages: { slug: string; title: string }[] = [];

  try {
    pages = await db.companyPage.findMany({
      where: { visible: true },
      select: {
        slug: true,
        title: true,
      },
    });
  } catch {
    // Use code-defined content if CMS data is unavailable.
  }

  const pageTitles = new Map(
    pages.map((page) => [page.slug, page.title])
  );

  return (
    <main>
      <style>{`
        .company-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .company-nav a {
          display: inline-flex;
          align-items: center;
          border: 1px solid #d5e3f5;
          border-radius: 999px;
          padding: 10px 16px;
          color: #014aac;
          background: #ffffff;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .company-nav a:hover {
          background: #d5e3f5;
          border-color: #014aac;
        }

        .company-section {
          padding: 64px 0;
          border-bottom: 1px solid #e5edf7;
          scroll-margin-top: 32px;
        }

        .company-section-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 48px;
          align-items: stretch;
        }

        .company-description {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-self: stretch;
          min-width: 0;
          padding: 20px 0;
        }

        .company-detail {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          min-width: 0;
          padding: 32px;
          border: 1px solid #d5e3f5;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 8px 28px rgba(1, 74, 172, 0.04);
        }

        .company-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          margin-bottom: 22px;
          border-radius: 14px;
          background: #d5e3f5;
          color: #014aac;
        }

        .company-description p {
          margin: 0;
          max-width: 460px;
          color: #526783;
          font-size: 18px;
          line-height: 1.8;
        }

        .company-detail p {
          margin: 0;
          color: #526783;
          font-size: 16px;
          line-height: 1.9;
        }

        .company-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 24px;
          padding: 12px 18px;
          border: 1px solid #014aac;
          border-radius: 9px;
          background: #014aac;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .company-action:hover {
          background: #00377f;
          transform: translateY(-1px);
        }

        .company-description-action {
          align-self: flex-start;
        }

        .company-contact-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 48px;
          padding: 32px;
          border: 1px solid #d5e3f5;
          border-radius: 20px;
          background: #f1f6fd;
        }

        @media (max-width: 700px) {
          .company-section {
            padding: 44px 0;
          }

          .company-section-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .company-description {
            padding: 8px 0;
          }

          .company-detail {
            padding: 24px;
          }

          .company-contact-card {
            align-items: flex-start;
            flex-direction: column;
            padding: 24px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="line-art section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="eyebrow">ABOUT OUR ORGANISATION</div>

          <h1
            className="h1"
            style={{
              margin: "18px 0",
              fontSize: "clamp(40px, 6vw, 66px)",
            }}
          >
            About Indian Dairy Data
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.8,
              color: "#526783",
              maxWidth: 780,
              margin: 0,
            }}
          >
            Explore our organisation, knowledge partners, industry
            connections, research network and publishing resources
            supporting India's dairy sector.
          </p>

          <Link
            href="#about-us"
            className="btn btn-amber"
            style={{ marginTop: 22 }}
          >
            Explore our company <ArrowUpRight size={17} />
          </Link>

          <nav className="company-nav" aria-label="Company sections">
            {sections.map((section) => (
              <a key={section.slug} href={`#${section.slug}`}>
                {pageTitles.get(section.slug) || section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Company sections */}
      <div className="container">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const title =
            pageTitles.get(section.slug) || section.title;

          return (
            <section
              id={section.slug}
              className="company-section"
              key={section.slug}
            >
              <div className="company-section-layout">
                {/* Section introduction */}
                <div className="company-description">
                  <div className="company-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div className="eyebrow">
                    {String(index + 1).padStart(2, "0")} / COMPANY
                  </div>

                  <h2
                    className="h2"
                    style={{
                      margin: "12px 0 18px",
                      color: "#123762",
                    }}
                  >
                    {title}
                  </h2>

                  <p>{section.description}</p>

                  {section.slug === "get-in-touch" && (
                    <Link
                      href="/start-now"
                      className="company-action company-description-action"
                    >
                      Contact the team <ArrowUpRight size={17} />
                    </Link>
                  )}
                </div>

                {/* Section details and relevant website button */}
                <div className="company-detail">
                  <div
                    className="eyebrow"
                    style={{ marginBottom: 16 }}
                  >
                    {section.eyebrow}
                  </div>

                  <p>{section.detail}</p>

                  {section.externalUrl && (
                    <a
                      href={section.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-action"
                      aria-label={`${section.externalLabel} (opens in a new tab)`}
                    >
                      {section.externalLabel}
                      <ArrowUpRight size={17} />
                    </a>
                  )}

                  {section.slug === "get-in-touch" && (
                    <Link
                      href="/start-now"
                      className="company-action"
                    >
                      Get in touch <ArrowUpRight size={17} />
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {/* Bottom contact section */}
        <section style={{ padding: "48px 0 72px" }}>
          <div className="company-contact-card">
            <div>
              <div className="eyebrow">BUILD A CONNECTION</div>

              <h2
                className="h2"
                style={{
                  margin: "12px 0",
                  color: "#123762",
                }}
              >
                Let&apos;s work together
              </h2>

              <p
                style={{
                  margin: 0,
                  maxWidth: 600,
                  color: "#526783",
                  lineHeight: 1.8,
                }}
              >
                Connect with us to explore research, knowledge
                partnerships and opportunities across the dairy sector.
              </p>
            </div>

            <Link
              href="/start-now"
              className="btn btn-amber"
              style={{ flexShrink: 0 }}
            >
              Contact us <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
