import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ShowCard } from "../components/ShowCard";
import { BSTButton } from "../components/BSTButton";
import { allEvents } from "../data/shows";
import { Sparkles, Calendar, Users, Star } from "lucide-react";

export default function YouthTheater() {
  const youthShows = allEvents.filter((event) => event.category === "Youth Theater");

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
              Youth Theater
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
              WHERE YOUNG ARTISTS
              <br />
              SHINE BRIGHT
            </h1>
            <p
              className="text-[#8a8f98] max-w-[520px] mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Our Youth Theater Program provides professional training and performance opportunities for young artists ages 8-18. From workshops to full productions, we nurture the next generation of theater makers.
            </p>
          </div>
        </div>
      </section>

      {/* ========== PROGRAM FEATURES ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Program Benefits" subtitle="What We Offer" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="text-[#14b8a6] mb-4">
                <Sparkles size={32} />
              </div>
              <span
                className="block text-[#e8e8e8] uppercase mb-3"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Professional Training
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Learn from experienced theater professionals in acting, voice, movement, and stagecraft.
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
              <div className="text-[#14b8a6] mb-4">
                <Star size={32} />
              </div>
              <span
                className="block text-[#e8e8e8] uppercase mb-3"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Performance Opportunities
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Perform on our mainstage in full productions with costumes, sets, and lighting.
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
              <div className="text-[#14b8a6] mb-4">
                <Users size={32} />
              </div>
              <span
                className="block text-[#e8e8e8] uppercase mb-3"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Community Building
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Join a supportive community of young artists building lifelong friendships.
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
              <div className="text-[#14b8a6] mb-4">
                <Calendar size={32} />
              </div>
              <span
                className="block text-[#e8e8e8] uppercase mb-3"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Year-Round Programs
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Ongoing classes, summer intensives, and seasonal productions throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== YOUTH PRODUCTIONS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Youth Productions" subtitle="Upcoming Shows" />

          {youthShows.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {youthShows.map((show) => (
                <ShowCard
                  key={show.id}
                  title={show.title}
                  date={`${new Date(show.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} - ${show.time}`}
                  category={show.category}
                  imageUrl="https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                />
              ))}
            </div>
          ) : (
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
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                Youth productions coming soon! Check back for upcoming shows.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========== AUDITIONS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Youth Auditions" subtitle="Join the Cast" />

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
            <div className="max-w-3xl">
              <h3
                className="text-[#e8e8e8] uppercase mb-6"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                OPEN AUDITIONS
              </h3>
              <p
                className="text-[#8a8f98] mb-6"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                Auditions for youth productions are open to all young performers ages 8-18. No previous experience required! We believe in nurturing talent at every level and providing opportunities for growth.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    What to Prepare
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Prepare a 1-minute monologue or song. Bring a headshot and resume if available (not required).
                  </p>
                </div>

                <div>
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Audition Process
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    All auditions are held at Beale Street Theater. Callbacks will be posted within 48 hours.
                  </p>
                </div>
              </div>

              <BSTButton variant="primary" size="lg">
                View Audition Schedule
              </BSTButton>
            </div>
          </div>
        </div>
      </section>

      {/* ========== REGISTRATION CTA ========== */}
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
              Get Started Today
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
              REGISTER FOR YOUTH PROGRAMS
            </h2>
            <p
              className="text-[#8a8f98] max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Enroll your young artist in classes, workshops, or audition for upcoming productions. Scholarships available based on need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BSTButton variant="primary" size="lg">
                Register Now
              </BSTButton>
              <BSTButton variant="secondary" size="lg">
                Learn About Scholarships
              </BSTButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
