import React from "react";
import { Link } from "react-router";
import { SectionHeader } from "../components/SectionHeader";
import { ShowCard } from "../components/ShowCard";
import { SpecCard } from "../components/SpecCard";
import { BSTButton } from "../components/BSTButton";
import { DataTable } from "../components/DataTable";
import { BarChart } from "../components/BarChart";
import { EventCalendar } from "../components/EventCalendar";
import { allEvents, shows } from "../data/shows";
import { DigitalAlliesLogo } from "../components/DigitalAlliesLogo";
import {
  Theater,
  Users,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const ticketSalesData = [
  { label: "Community", value: 842 },
  { label: "Concert", value: 723 },
  { label: "Youth", value: 491 },
  { label: "Special", value: 315 },
];

const monthlyData = [
  { label: "Feb", value: 120 },
  { label: "Mar", value: 680 },
  { label: "Apr", value: 540 },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#111315" }}>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span
                className="inline-block text-[#14b8a6] uppercase tracking-[0.15em] mb-4"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                2026 Season Now On Sale
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
                WHERE EVERY SEAT
                <br />
                IS CENTER STAGE
              </h1>
              <p
                className="text-[#8a8f98] max-w-[520px] mb-8"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                Your community theater brings local stories to life.
                From soul-stirring drama to electrifying live
                music, experience performances that move you — in a venue
                built for intimacy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/find-your-event">
                  <BSTButton variant="primary" size="lg">
                    View Season
                  </BSTButton>
                </Link>
                <Link to="/about">
                  <BSTButton variant="secondary" size="lg">
                    Our Story
                  </BSTButton>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
              <DigitalAlliesLogo height={80} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== EVENT CALENDAR ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            title="Event Calendar"
            subtitle="2026 Season Schedule"
          />
          <EventCalendar events={allEvents} />
        </div>
      </section>

      {/* ========== STRATEGY / DASHBOARD SECTION ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            title="Season Strategy"
            subtitle="Dashboard Overview"
          />

          {/* KPI Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SpecCard
              title="Total Shows"
              value="12"
              description="Productions in the 2026 season lineup"
              icon={<Theater size={20} />}
            />
            <SpecCard
              title="Est. Attendance"
              value="4,891"
              description="Projected ticket sales across all shows"
              icon={<Users size={20} />}
            />
            <SpecCard
              title="Season Span"
              value="3 MO"
              description="February through April 2026"
              icon={<CalendarDays size={20} />}
            />
            <SpecCard
              title="Growth"
              value="+24%"
              description="Year-over-year attendance increase"
              icon={<TrendingUp size={20} />}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BarChart
              title="Ticket Sales by Category"
              data={ticketSalesData}
            />
            <BarChart
              title="Monthly Projected Attendance"
              data={monthlyData}
            />
          </div>
        </div>
      </section>

      {/* ========== UPCOMING SHOWS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Upcoming Shows" subtitle="2026 Season" />

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

      {/* ========== COMMUNITY THEATER CTA ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div
            className="p-12"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="inline-block text-[#14b8a6] uppercase tracking-[0.15em] mb-4"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  Join the Community
                </span>
                <h2
                  className="text-[#e8e8e8] mb-6"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    lineHeight: 1.2,
                  }}
                >
                  BE PART OF THE SHOW
                </h2>
                <p
                  className="text-[#8a8f98] mb-6"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                  }}
                >
                  Our Community Theater Program welcomes performers of all ages and skill levels. Whether you're interested in auditioning for a mainstage production, taking classes, or enrolling young artists in our youth program — there's a place for you on our stage.
                </p>
                <Link to="/community-theater">
                  <BSTButton variant="primary" size="lg">
                    Explore Community Theater
                  </BSTButton>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "#0d0f11",
                    borderRadius: "0px 10px 10px 0px",
                    borderTop: "1px solid #14b8a633",
                    borderRight: "1px solid #14b8a633",
                    borderBottom: "1px solid #14b8a633",
                    borderLeft: "none",
                  }}
                >
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Auditions
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    All skill levels welcome
                  </p>
                </div>
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "#0d0f11",
                    borderRadius: "0px 10px 10px 0px",
                    borderTop: "1px solid #14b8a633",
                    borderRight: "1px solid #14b8a633",
                    borderBottom: "1px solid #14b8a633",
                    borderLeft: "none",
                  }}
                >
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Classes
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Year-round training
                  </p>
                </div>
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "#0d0f11",
                    borderRadius: "0px 10px 10px 0px",
                    borderTop: "1px solid #14b8a633",
                    borderRight: "1px solid #14b8a633",
                    borderBottom: "1px solid #14b8a633",
                    borderLeft: "none",
                  }}
                >
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Youth Programs
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Ages 8-18
                  </p>
                </div>
                <div
                  className="p-5"
                  style={{
                    backgroundColor: "#0d0f11",
                    borderRadius: "0px 10px 10px 0px",
                    borderTop: "1px solid #14b8a633",
                    borderRight: "1px solid #14b8a633",
                    borderBottom: "1px solid #14b8a633",
                    borderLeft: "none",
                  }}
                >
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Workshops
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Specialized techniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
