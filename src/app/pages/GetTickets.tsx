import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ShowCard } from "../components/ShowCard";
import { BSTButton } from "../components/BSTButton";
import { EventCalendar } from "../components/EventCalendar";
import { allEvents, shows } from "../data/shows";
import { Calendar, Ticket, MapPin } from "lucide-react";

export default function GetTickets() {
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
              Get Tickets
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
              SEE WHAT'S ON STAGE
            </h1>
            <p
              className="text-[#8a8f98] max-w-[520px] mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Browse our full 2026 season lineup and reserve your seats for unforgettable performances. All tickets are managed through our Ludus ticketing system for secure, easy purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* ========== TICKET INFO CARDS ========== */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div
              className="p-6"
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
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#14b8a6]">
                  <Ticket size={28} />
                </div>
                <span
                  className="text-[#e8e8e8] uppercase"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  Secure Tickets
                </span>
              </div>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                All tickets are sold through Ludus, our trusted ticketing partner. Select your show and complete your purchase in just a few clicks.
              </p>
            </div>

            <div
              className="p-6"
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
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#14b8a6]">
                  <Calendar size={28} />
                </div>
                <span
                  className="text-[#e8e8e8] uppercase"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  Season Pass
                </span>
              </div>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Get the best value with a full season pass. Enjoy priority seating and exclusive benefits for all 2026 productions.
              </p>
            </div>

            <div
              className="p-6"
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
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#14b8a6]">
                  <MapPin size={28} />
                </div>
                <span
                  className="text-[#e8e8e8] uppercase"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  Best Seats
                </span>
              </div>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Our intimate theater means every seat offers a great view. Choose your preferred section during checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EVENT CALENDAR ========== */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            title="Full Season Calendar"
            subtitle="February - April 2026"
          />
          <EventCalendar events={allEvents} />
        </div>
      </section>

      {/* ========== ALL SHOWS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="All Shows" subtitle="2026 Season Lineup" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shows.map((show) => (
              <ShowCard
                key={show.id}
                title={show.title}
                date={show.date}
                category={show.category}
                imageUrl={show.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== GROUP SALES CTA ========== */}
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
              Group Rates Available
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
              PLANNING A GROUP OUTING?
            </h2>
            <p
              className="text-[#8a8f98] max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Bring 10 or more guests and enjoy special group pricing. Perfect for schools, organizations, and corporate events. Contact our box office for details.
            </p>
            <BSTButton variant="primary" size="lg">
              Contact Box Office
            </BSTButton>
          </div>
        </div>
      </section>
    </div>
  );
}
