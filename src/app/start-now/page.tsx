
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Building2,
  Target,
} from "lucide-react";

export default function StartNow() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const body: Record<string, FormDataEntryValue | string> =
      Object.fromEntries(form.entries());

    body.interests = form.getAll("interests").join(", ");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(
          result.error || "Please check the form and try again."
        );
      }

      setSent(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setBusy(false);
    }
  }

  const startingPoints = [
    "Product and region coverage",
    "Price benchmarking methodology",
    "Demand and supply indicators",
    "Research and data partnerships",
  ];

  const interests = [
    "Milk",
    "Fat / SNF",
    "SMP",
    "Butter",
    "Ghee",
    "Farm economics",
    "State data",
  ];

  return (
    <main>
      <style>{`
        .start-hero-description {
          max-width: 780px;
          margin: 0;
          color: #526783;
          font-size: 19px;
          line-height: 1.8;
        }

        .start-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 40px;
          align-items: start;
        }

        .start-info {
          padding-top: 8px;
        }

        .start-info-card {
          margin-top: 28px;
          padding: 26px;
          border: 1px solid #e1eaf5;
          border-radius: 18px;
          background: #ffffff;
        }

        .start-info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 20px;
          color: #526783;
          font-size: 14px;
          line-height: 1.7;
        }

        .start-info-item:first-of-type {
          margin-top: 22px;
        }

        .start-form-card {
          min-width: 0;
          padding: clamp(20px, 4vw, 34px);
          border: 1px solid #e1eaf5;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 8px 32px rgba(18, 55, 98, 0.04);
        }

        .start-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .start-field {
          display: block;
          min-width: 0;
          color: #123762;
          font-size: 13px;
          font-weight: 700;
        }

        .start-field .input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin-top: 8px;
        }

        .start-field input,
        .start-field select,
        .start-field textarea {
          color: #123762;
        }

        .start-interest {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 12px;
          border: 1px solid #e1eaf5;
          border-radius: 9px;
          background: #f5f8fc;
          color: #244668;
          font-size: 12px;
          cursor: pointer;
        }

        .start-interest input {
          accent-color: #014aac;
          margin: 0;
        }

        .start-interest:has(input:checked) {
          border-color: #014aac;
          background: #eaf2ff;
        }

        .start-submit {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          width: 100%;
          margin-top: 4px;
        }

        .start-success {
          padding: 50px 15px;
          text-align: center;
        }

        .start-consent {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #526783;
          font-size: 12px;
          line-height: 1.7;
        }

        .start-consent input {
          margin-top: 3px;
          accent-color: #014aac;
          flex-shrink: 0;
        }

        @media (max-width: 800px) {
          .start-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .start-info {
            padding-top: 0;
          }
        }

        @media (max-width: 520px) {
          .start-form-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 15px;
          }

          .start-info-card {
            padding: 22px;
          }
        }
      `}</style>

      {/* Hero section — matches the Solution pages */}
      <section className="line-art section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="eyebrow">
            Get started / Research enquiries
          </div>

          <h1
            className="h1"
            style={{
              margin: "18px 0",
              fontSize: "clamp(40px, 6vw, 66px)",
            }}
          >
            Start a conversation.
          </h1>

          <p className="start-hero-description">
            Tell us what you want to understand about India&apos;s
            dairy sector. Whether you need market indicators, price
            benchmarking, research support or a data partnership,
            let&apos;s explore how we can help.
          </p>

          <Link
            href="#enquiry-form"
            className="btn btn-amber"
            style={{ marginTop: 22 }}
          >
            Submit an enquiry <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Enquiry content */}
      <section
        id="enquiry-form"
        className="section section-soft"
        style={{ scrollMarginTop: 28 }}
      >
        <div className="container">
          <div className="start-layout">
            {/* Left column */}
            <div className="start-info">
              <div className="eyebrow">
                YOUR RESEARCH REQUIREMENTS
              </div>

              <h2
                className="h2"
                style={{
                  margin: "14px 0",
                  color: "#123762",
                }}
              >
                What would you like to understand?
              </h2>

              <p
                className="muted"
                style={{
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                Share details about your organisation, market
                questions and the products or regions you are
                interested in. This form is for research and data
                enquiries, not brokerage or trade negotiation.
              </p>

              <div className="start-info-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: "#d5e3f5",
                      color: "#014aac",
                    }}
                  >
                    <Target size={21} />
                  </span>

                  <h3
                    style={{
                      margin: 0,
                      color: "#123762",
                      fontSize: 17,
                    }}
                  >
                    Useful starting points
                  </h3>
                </div>

                {startingPoints.map((point) => (
                  <div className="start-info-item" key={point}>
                    <CheckCircle2
                      size={17}
                      color="#014aac"
                      style={{
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 13,
                  marginTop: 25,
                  padding: "0 4px",
                }}
              >
                <MessageSquare
                  size={20}
                  color="#014aac"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />

                <div>
                  <h3
                    style={{
                      margin: "0 0 6px",
                      color: "#123762",
                      fontSize: 15,
                    }}
                  >
                    Have a specific research question?
                  </h3>

                  <p
                    className="muted"
                    style={{
                      margin: 0,
                      fontSize: 13,
                      lineHeight: 1.8,
                    }}
                  >
                    Use the message field to explain your requirements,
                    intended use and the information you need.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column: enquiry form */}
            <div className="start-form-card">
              {sent ? (
                <div className="start-success">
                  <CheckCircle2
                    size={54}
                    color="#014aac"
                    style={{ margin: "0 auto 20px" }}
                  />

                  <h2
                    style={{
                      margin: "0 0 12px",
                      color: "#123762",
                      fontSize: 27,
                    }}
                  >
                    Thank you for reaching out.
                  </h2>

                  <p
                    className="muted"
                    style={{
                      maxWidth: 420,
                      margin: "0 auto",
                      lineHeight: 1.8,
                    }}
                  >
                    Your enquiry has been submitted successfully.
                    Thank you for your interest in our research
                    and data services.
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginTop: 24 }}
                    onClick={() => {
                      setSent(false);
                      setError("");
                    }}
                  >
                    Submit another enquiry
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 25 }}>
                    <div className="eyebrow">
                      ENQUIRY FORM
                    </div>

                    <h2
                      style={{
                        margin: "10px 0 8px",
                        color: "#123762",
                        fontSize: 25,
                      }}
                    >
                      Tell us about your requirements
                    </h2>

                    <p
                      className="muted"
                      style={{
                        margin: 0,
                        fontSize: 13,
                        lineHeight: 1.8,
                      }}
                    >
                      Fields marked with * are required.
                    </p>
                  </div>

                  <form
                    onSubmit={submit}
                    style={{
                      display: "grid",
                      gap: 21,
                    }}
                  >
                    <div className="start-form-grid">
                      <label className="start-field">
                        Full name *
                        <input
                          className="input"
                          name="name"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                        />
                      </label>

                      <label className="start-field">
                        Organisation *
                        <input
                          className="input"
                          name="organisation"
                          required
                          autoComplete="organization"
                          placeholder="Organisation name"
                        />
                      </label>

                      <label className="start-field">
                        Designation
                        <input
                          className="input"
                          name="designation"
                          placeholder="Your role"
                        />
                      </label>

                      <label className="start-field">
                        Email *
                        <input
                          className="input"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          placeholder="you@organisation.com"
                        />
                      </label>

                      <label className="start-field">
                        Phone
                        <input
                          className="input"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="Contact number"
                        />
                      </label>

                      <label className="start-field">
                        Organisation type *
                        <select
                          className="input"
                          name="organisationType"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select organisation type
                          </option>

                          {[
                            "Processor",
                            "Cooperative",
                            "Trader",
                            "Policy / industry body",
                            "Researcher",
                            "Other",
                          ].map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <fieldset
                      style={{
                        border: 0,
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      <legend
                        style={{
                          marginBottom: 12,
                          color: "#123762",
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        States or products of interest
                      </legend>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 9,
                        }}
                      >
                        {interests.map((interest) => (
                          <label
                            key={interest}
                            className="start-interest"
                          >
                            <input
                              type="checkbox"
                              name="interests"
                              value={interest}
                            />
                            {interest}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <label className="start-field">
                      What would you like to start with?
                      <input
                        className="input"
                        name="startingPoint"
                        placeholder="e.g. state price benchmarking"
                      />
                    </label>

                    <label className="start-field">
                      Message
                      <textarea
                        className="input"
                        name="message"
                        rows={4}
                        placeholder="Describe your research or data requirements..."
                        style={{ resize: "vertical" }}
                      />
                    </label>

                    <label className="start-consent">
                      <input
                        type="checkbox"
                        name="consent"
                        value="true"
                        required
                      />

                      <span>
                        I consent to being contacted about this
                        enquiry. *
                      </span>
                    </label>

                    {/* Honeypot field for basic spam protection */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-10000px",
                        width: 1,
                        height: 1,
                        overflow: "hidden",
                      }}
                    >
                      <label>
                        Website
                        <input
                          name="website"
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </label>
                    </div>

                    <button
                      className="btn btn-amber start-submit"
                      disabled={busy}
                      type="submit"
                    >
                      {busy ? "Submitting..." : "Submit enquiry"}
                      <ArrowRight size={17} />
                    </button>

                    {error && (
                      <p
                        role="alert"
                        style={{
                          margin: 0,
                          color: "#b42318",
                          fontSize: 13,
                          lineHeight: 1.7,
                        }}
                      >
                        {error}
                      </p>
                    )}

                    <p
                      className="muted"
                      style={{
                        margin: 0,
                        fontSize: 11,
                        lineHeight: 1.8,
                      }}
                    >
                      Please do not submit confidential commercial
                      information. Your enquiry is intended for
                      research and data-related discussions.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
