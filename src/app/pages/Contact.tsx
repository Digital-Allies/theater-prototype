import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { BSTButton } from "../components/BSTButton";
import { MapPin, Phone, Mail, Clock, Car, Calendar } from "lucide-react";

export default function Contact() {
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
              Contact Us
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
              PLAN YOUR VISIT
            </h1>
            <p
              className="text-[#8a8f98] max-w-[520px] mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Located on historic Route 66 in downtown Kingman, Beale Street Theater is easy to find and welcoming to all. Here's everything you need to know before your visit.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT INFO ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Visit Us" subtitle="Location & Contact" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <MapPin size={32} />
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
                Address
              </h3>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                302 E Beale St
                <br />
                Kingman, AZ 86401
                <br />
                <br />
                On Historic Route 66
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
                <Phone size={32} />
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
                Phone
              </h3>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                Box Office:
                <br />
                (928) 555-SHOW
                <br />
                <br />
                Administration:
                <br />
                (928) 555-2626
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
                <Mail size={32} />
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
                Email
              </h3>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                }}
              >
                General Inquiries:
                <br />
                info@bealestreettheater.com
                <br />
                <br />
                Box Office:
                <br />
                tickets@bealestreettheater.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOX OFFICE HOURS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Box Office Hours" subtitle="When to Visit" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
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
                <div className="text-[#14b8a6]">
                  <Clock size={36} />
                </div>
                <h3
                  className="text-[#e8e8e8] uppercase"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  Regular Hours
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.95rem",
                    }}
                  >
                    Monday - Friday
                  </span>
                  <span
                    className="text-[#14b8a6]"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    10:00 AM - 5:00 PM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.95rem",
                    }}
                  >
                    Saturday
                  </span>
                  <span
                    className="text-[#14b8a6]"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    12:00 PM - 4:00 PM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.95rem",
                    }}
                  >
                    Sunday
                  </span>
                  <span
                    className="text-[#14b8a6]"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    Closed
                  </span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#14b8a633]">
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.95rem",
                    }}
                  >
                    Performance Days
                  </span>
                  <span
                    className="text-[#14b8a6]"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    Opens 1 Hour Before Show
                  </span>
                </div>
              </div>

              <p
                className="text-[#8a8f98] mt-6 italic"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                }}
              >
                Note: Hours may vary during holidays. Please call ahead to confirm.
              </p>
            </div>

            <div
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
                <div className="text-[#14b8a6]">
                  <Calendar size={36} />
                </div>
                <h3
                  className="text-[#e8e8e8] uppercase"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  Will Call
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
                Tickets ordered online are available for pickup at our Will Call window beginning one hour before showtime. Please bring a valid ID matching the name on your order.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Arrive 30 minutes early for Will Call pickup
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Digital tickets can be shown on your mobile device
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Group tickets available at special rates (10+ guests)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARKING & ACCESSIBILITY ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Visitor Information" subtitle="Getting Here" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
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
                <div className="text-[#14b8a6]">
                  <Car size={36} />
                </div>
                <h3
                  className="text-[#e8e8e8] uppercase"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  Parking
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
                Free parking is available in our lot directly behind the theater, accessible from 4th Street. Additional street parking is available on Beale Street and surrounding blocks.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Accessible parking spaces available in rear lot
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Downtown Kingman is easily walkable from nearby hotels
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Drop-off zone at front entrance on Beale Street
                  </span>
                </div>
              </div>
            </div>

            <div
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
                <div className="text-[#14b8a6]">
                  <Users size={36} />
                </div>
                <h3
                  className="text-[#e8e8e8] uppercase"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  Accessibility
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
                Beale Street Theater is fully accessible to guests with disabilities. We are committed to ensuring all patrons can enjoy our performances comfortably.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Wheelchair accessible entrance and seating
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Assistive listening devices available at box office
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Service animals welcome
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Contact us in advance for special accommodation requests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM CTA ========== */}
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
              Get in Touch
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
              HAVE QUESTIONS?
            </h2>
            <p
              className="text-[#8a8f98] max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Our team is here to help with ticket inquiries, group sales, accessibility needs, or general questions about Beale Street Theater.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BSTButton variant="primary" size="lg">
                Contact Us
              </BSTButton>
              <BSTButton variant="secondary" size="lg">
                View FAQs
              </BSTButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
