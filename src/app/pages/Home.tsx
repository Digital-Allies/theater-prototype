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
import bstLogo from "figma:asset/632f070f62a4def86e86cfd0ee04bfd636adba53.png";
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
                Beale Street Theater brings Kingman's boldest stories to life
                on Route 66. From soul-stirring drama to electrifying live
                music, experience performances that move you — in a venue
                built for intimacy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-tickets">
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
              <img
                src={bstLogo}
                alt="Beale Street Theater Logo"
                className="w-full max-w-[400px] h-auto object-contain"
              />
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
    </div>
  );
}
