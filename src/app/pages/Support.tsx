import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { BSTButton } from "../components/BSTButton";
import { Heart, Users, Wrench, Armchair, Gift, DollarSign } from "lucide-react";

const supportOptions = [
  {
    title: "Production Partnership",
    icon: <DollarSign size={36} />,
    description:
      "Partner with us on a mainstage production and receive prominent recognition across our marketing channels, in-house programs, and performance announcements.",
    tiers: ["Supporter: $500", "Champion: $1,200", "Premier: $3,000", "Executive: $6,000+"],
  },
  {
    title: "Technical Innovation Fund",
    icon: <Wrench size={36} />,
    description:
      "Support the acquisition and maintenance of modern theater technology. Your gift ensures our performers and audiences benefit from cutting-edge production capabilities.",
    needs: ["LED Stage Systems ($12,000)", "Digital Sound Console ($9,500)", "Rigging & Safety Equipment ($4,200)"],
  },
  {
    title: "Legacy Seating Program",
    icon: <Armchair size={36} />,
    description:
      "Honor a loved one or commemorate a milestone with a permanently named seat. Each legacy seat includes a custom plaque and recognition in perpetuity.",
    pricing: "$650 per seat - Custom engraving included",
  },
  {
    title: "Access & Opportunity Fund",
    icon: <Gift size={36} />,
    description:
      "Break down barriers to participation. Your contribution subsidizes tickets for underserved audiences and provides training scholarships for aspiring performers.",
    impact: "Last season: 250+ subsidized tickets and 20 program scholarships awarded",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#111315" }}>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span
              className="inline-block text-[#14b8a6] uppercase tracking-[0.15em] mb-4"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              Support the Theater
            </span>
            <h1
              className="text-[#e8e8e8] mb-6"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                lineHeight: 1.1,
              }}
            >
              HELP KEEP THE
              <br />
              CURTAIN RISING
            </h1>
            <p
              className="text-[#8a8f98] max-w-[600px] mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              As a nonprofit organization, Community Theater depends on the generosity of patrons like you. Your support ensures we can continue bringing world-class performances to local audiences while providing arts education to our community.
            </p>
          </div>
        </div>
      </section>

      {/* ========== IMPACT STATS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Your Impact" subtitle="2025 By The Numbers" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="p-8 text-center"
              style={{
                backgroundColor: "#111315",
                borderRadius: "0px 10px 10px 0px",
                borderTop: "2px solid #14b8a6",
                borderRight: "2px solid #14b8a6",
                borderBottom: "2px solid #14b8a6",
                borderLeft: "none",
                boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
              }}
            >
              <span
                className="block text-[#14b8a6] mb-2"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                32
              </span>
              <span
                className="block text-[#e8e8e8] uppercase"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Productions
              </span>
              <p
                className="text-[#8a8f98] mt-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                }}
              >
                Presented in 2025
              </p>
            </div>

            <div
              className="p-8 text-center"
              style={{
                backgroundColor: "#111315",
                borderRadius: "0px 10px 10px 0px",
                borderTop: "2px solid #14b8a6",
                borderRight: "2px solid #14b8a6",
                borderBottom: "2px solid #14b8a6",
                borderLeft: "none",
                boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
              }}
            >
              <span
                className="block text-[#14b8a6] mb-2"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                8,500
              </span>
              <span
                className="block text-[#e8e8e8] uppercase"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Tickets Sold
              </span>
              <p
                className="text-[#8a8f98] mt-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                }}
              >
                Community members served
              </p>
            </div>

            <div
              className="p-8 text-center"
              style={{
                backgroundColor: "#111315",
                borderRadius: "0px 10px 10px 0px",
                borderTop: "2px solid #14b8a6",
                borderRight: "2px solid #14b8a6",
                borderBottom: "2px solid #14b8a6",
                borderLeft: "none",
                boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
              }}
            >
              <span
                className="block text-[#14b8a6] mb-2"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                150
              </span>
              <span
                className="block text-[#e8e8e8] uppercase"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Youth Students
              </span>
              <p
                className="text-[#8a8f98] mt-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                }}
              >
                Enrolled in programs
              </p>
            </div>

            <div
              className="p-8 text-center"
              style={{
                backgroundColor: "#111315",
                borderRadius: "0px 10px 10px 0px",
                borderTop: "2px solid #14b8a6",
                borderRight: "2px solid #14b8a6",
                borderBottom: "2px solid #14b8a6",
                borderLeft: "none",
                boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
              }}
            >
              <span
                className="block text-[#14b8a6] mb-2"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "3rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                75
              </span>
              <span
                className="block text-[#e8e8e8] uppercase"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Volunteers
              </span>
              <p
                className="text-[#8a8f98] mt-2"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                }}
              >
                Contributing 2,000+ hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SUPPORT OPTIONS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Ways to Give" subtitle="Choose Your Impact" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="p-10"
                style={{
                  backgroundColor: "#111315",
                  borderRadius: "0px 10px 10px 0px",
                  borderTop: "2px solid #14b8a6",
                  borderRight: "2px solid #14b8a6",
                  borderBottom: "2px solid #14b8a6",
                  borderLeft: "none",
                  boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[#14b8a6]">{option.icon}</div>
                  <h3
                    className="text-[#e8e8e8] uppercase"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {option.title}
                  </h3>
                </div>

                <p
                  className="text-[#8a8f98] mb-6"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  {option.description}
                </p>

                {option.tiers && (
                  <div className="mb-6">
                    <span
                      className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-3"
                      style={{
                        fontFamily: "'League Spartan', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                      }}
                    >
                      Sponsorship Tiers
                    </span>
                    <ul className="space-y-2">
                      {option.tiers.map((tier, i) => (
                        <li
                          key={i}
                          className="text-[#8a8f98] flex items-start gap-2"
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "0.9rem",
                          }}
                        >
                          <span className="text-[#14b8a6]">●</span>
                          {tier}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {option.needs && (
                  <div className="mb-6">
                    <span
                      className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-3"
                      style={{
                        fontFamily: "'League Spartan', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                      }}
                    >
                      Current Needs
                    </span>
                    <ul className="space-y-2">
                      {option.needs.map((need, i) => (
                        <li
                          key={i}
                          className="text-[#8a8f98] flex items-start gap-2"
                          style={{
                            fontFamily: "'Roboto', sans-serif",
                            fontSize: "0.9rem",
                          }}
                        >
                          <span className="text-[#14b8a6]">●</span>
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {option.pricing && (
                  <p
                    className="text-[#14b8a6] mb-6"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {option.pricing}
                  </p>
                )}

                {option.impact && (
                  <p
                    className="text-[#8a8f98] italic mb-6"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {option.impact}
                  </p>
                )}

                <BSTButton variant="primary" size="md">
                  Learn More
                </BSTButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VOLUNTEER OPPORTUNITIES ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Volunteer Opportunities" subtitle="Give Your Time & Talent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div
              className="p-8"
              style={{
                backgroundColor: "#111315",
                borderRadius: "0px 10px 10px 0px",
                borderTop: "2px solid #14b8a6",
                borderRight: "2px solid #14b8a6",
                borderBottom: "2px solid #14b8a6",
                borderLeft: "none",
                boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
              }}
            >
              <div className="text-[#14b8a6] mb-4">
                <Users size={32} />
              </div>
              <h3
                className="text-[#e8e8e8] uppercase mb-3"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Front of House
              </h3>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Greet patrons, assist with seating, and ensure our guests have an exceptional theater experience.
              </p>
            </div>

            <div
              className="p-8"
              style={{
                backgroundColor: "#111315",
                borderRadius: "0px 10px 10px 0px",
                borderTop: "2px solid #14b8a6",
                borderRight: "2px solid #14b8a6",
                borderBottom: "2px solid #14b8a6",
                borderLeft: "none",
                boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
              }}
            >
              <div className="text-[#14b8a6] mb-4">
                <Wrench size={32} />
              </div>
              <h3
                className="text-[#e8e8e8] uppercase mb-3"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Technical Crew
              </h3>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Help with set construction, lighting, sound, or stage management. Training provided for all positions.
              </p>
            </div>

            <div
              className="p-8"
              style={{
                backgroundColor: "#111315",
                borderRadius: "0px 10px 10px 0px",
                borderTop: "2px solid #14b8a6",
                borderRight: "2px solid #14b8a6",
                borderBottom: "2px solid #14b8a6",
                borderLeft: "none",
                boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
              }}
            >
              <div className="text-[#14b8a6] mb-4">
                <Heart size={32} />
              </div>
              <h3
                className="text-[#e8e8e8] uppercase mb-3"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Administrative Support
              </h3>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Assist with marketing, social media, fundraising events, and day-to-day operations.
              </p>
            </div>
          </div>

          <div className="text-center">
            <BSTButton variant="primary" size="lg">
              Sign Up to Volunteer
            </BSTButton>
          </div>
        </div>
      </section>

      {/* ========== DONATION CTA ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div
            className="p-12 text-center"
            style={{
              backgroundColor: "#111315",
              borderRadius: "0px 10px 10px 0px",
              borderTop: "2px solid #14b8a6",
              borderRight: "2px solid #14b8a6",
              borderBottom: "2px solid #14b8a6",
              borderLeft: "none",
              boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
            }}
          >
            <span
              className="inline-block text-[#14b8a6] uppercase tracking-[0.15em] mb-4"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}
            >
              Make a Difference Today
            </span>
            <h2
              className="text-[#e8e8e8] mb-6"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "2rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                lineHeight: 1.2,
              }}
            >
              EVERY GIFT MATTERS
            </h2>
            <p
              className="text-[#8a8f98] max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Your tax-deductible donation directly supports our mission to provide exceptional live theater and arts education. Community Theater is a 501(c)(3) nonprofit organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BSTButton variant="primary" size="lg">
                Donate Now
              </BSTButton>
              <BSTButton variant="secondary" size="lg">
                Become a Monthly Donor
              </BSTButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
