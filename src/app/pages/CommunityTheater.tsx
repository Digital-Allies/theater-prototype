import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ShowCard } from "../components/ShowCard";
import { BSTButton } from "../components/BSTButton";
import { allEvents } from "../data/shows";
import { Theater, Mic, Palette, Users } from "lucide-react";

export default function CommunityTheater() {
  const communityShows = allEvents.filter((event) => event.category === "Community Theater");

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
              Community Theater
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
              YOUR STAGE
              <br />
              YOUR STORY
            </h1>
            <p
              className="text-[#8a8f98] max-w-[520px] mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              BST's Community Theater Program welcomes performers of all skill levels to participate in mainstage productions. From auditions to workshops, discover your place in our vibrant theater community.
            </p>
          </div>
        </div>
      </section>

      {/* ========== OPPORTUNITIES ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Get Involved" subtitle="Opportunities for All" />

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
                <Mic size={32} />
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
                Auditions
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Audition for roles in our community productions. All experience levels welcome.
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
                <Theater size={32} />
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
                Classes
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Develop your skills in acting, voice, movement, and more through ongoing classes.
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
                <Palette size={32} />
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
                Workshops
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Intensive workshops covering specialized techniques and performance styles.
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
                Crew & Tech
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Join our backstage crew to learn lighting, sound, costumes, and set design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMMUNITY PRODUCTIONS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Community Productions" subtitle="Current Season" />

          {communityShows.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityShows.map((show) => (
                <ShowCard
                  key={show.id}
                  title={show.title}
                  date={`${new Date(show.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })} - ${show.time}`}
                  category={show.category}
                  imageUrl="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
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
                Community productions coming soon! Check back for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========== AUDITION INFO ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Auditions" subtitle="How to Audition" />

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
              <h3
                className="text-[#e8e8e8] uppercase mb-6"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                FIRST-TIME AUDITIONERS
              </h3>
              <div className="space-y-4">
                <p
                  className="text-[#8a8f98]"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  Never auditioned before? No problem! We welcome performers of all experience levels and provide a supportive, encouraging environment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#14b8a6] mt-1">●</span>
                    <span
                      className="text-[#8a8f98]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Prepare a 1-2 minute monologue from a published play
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#14b8a6] mt-1">●</span>
                    <span
                      className="text-[#8a8f98]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Musical auditions require a song (16-32 bars)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#14b8a6] mt-1">●</span>
                    <span
                      className="text-[#8a8f98]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Bring a headshot and resume (not required for first audition)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#14b8a6] mt-1">●</span>
                    <span
                      className="text-[#8a8f98]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Fill out audition form at check-in
                    </span>
                  </li>
                </ul>
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
              <h3
                className="text-[#e8e8e8] uppercase mb-6"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                UPCOMING AUDITIONS
              </h3>
              <div className="space-y-6">
                <div>
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Spring Musical - May 2026
                  </span>
                  <p
                    className="text-[#8a8f98] mb-2"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Auditions: March 15-16, 2026 at 6:00 PM
                  </p>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Callbacks: March 18, 2026
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
                    Summer Drama - June 2026
                  </span>
                  <p
                    className="text-[#8a8f98] mb-2"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Auditions: April 20-21, 2026 at 6:00 PM
                  </p>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Callbacks: April 23, 2026
                  </p>
                </div>

                <BSTButton variant="primary" size="md">
                  View Full Audition Schedule
                </BSTButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CLASSES & WORKSHOPS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Classes & Workshops" subtitle="Build Your Skills" />

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
                ONGOING CLASSES
              </h3>
              <p
                className="text-[#8a8f98] mb-8"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                Develop your craft with professional instruction in acting technique, voice and speech, movement, improvisation, and musical theater. All classes are taught by experienced theater professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <span
                    className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-2"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    Acting Fundamentals
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Tuesdays, 7:00-9:00 PM • 8-week session
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
                    Musical Theater Workshop
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Thursdays, 7:00-9:00 PM • 8-week session
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
                    Scene Study
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Wednesdays, 7:00-9:00 PM • Ongoing
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
                    Improvisation
                  </span>
                  <p
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Saturdays, 10:00 AM-12:00 PM • Drop-in
                  </p>
                </div>
              </div>

              <BSTButton variant="primary" size="lg">
                Register for Classes
              </BSTButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
