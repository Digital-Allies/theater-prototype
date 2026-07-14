import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { BSTButton } from "../components/BSTButton";
import { DigitalAlliesLogo } from "../components/DigitalAlliesLogo";
import { Users, Heart, Award, Building } from "lucide-react";

const staffMembers = [
  {
    name: "Jennifer Morrison",
    title: "Executive Director",
    bio: "Leading the theater's artistic vision since founding, Jennifer brings 20 years of professional theater experience.",
  },
  {
    name: "Michael Chen",
    title: "Artistic Director",
    bio: "Award-winning director passionate about developing new works and nurturing emerging talent.",
  },
  {
    name: "Sarah Williams",
    title: "Operations Manager",
    bio: "Ensuring seamless productions and exceptional guest experiences for every performance.",
  },
  {
    name: "David Rodriguez",
    title: "Technical Director",
    bio: "Master of stagecraft with expertise in lighting, sound, and scenic design.",
  },
];

export default function About() {
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
                About Us
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
                COMMUNITY THEATER
              </h1>
              <p
                className="text-[#8a8f98] max-w-[520px] mb-8"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                For over a decade, this theater has been the community's premier destination for live performance. We are committed to bringing world-class entertainment to local audiences while fostering a vibrant arts community.
              </p>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <DigitalAlliesLogo height={72} />
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VALUES ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Our Mission" subtitle="What We Stand For" />

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
                <Heart size={32} />
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
                Community First
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                We create opportunities for local artists and provide accessible arts education to youth throughout our region.
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
                <Award size={32} />
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
                Excellence
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                From Broadway classics to original works, we maintain the highest standards in every production we present.
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
                Inclusion
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Theater is for everyone. We champion diverse voices and stories that reflect our community's rich tapestry.
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
                <Building size={32} />
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
                Preservation
              </span>
              <p
                className="text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Our historic venue honors local heritage while serving as a cultural anchor for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EXECUTIVE STAFF ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Executive Staff" subtitle="Meet Our Leaders" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {staffMembers.map((member, index) => (
              <div
                key={index}
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
                <span
                  className="block text-[#e8e8e8] uppercase mb-2"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  {member.name}
                </span>
                <span
                  className="block text-[#14b8a6] uppercase tracking-[0.1em] mb-4"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {member.title}
                </span>
                <p
                  className="text-[#8a8f98]"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Our Story" subtitle="A Decade of Performance" />

          <div
            className="p-12 max-w-4xl mx-auto"
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
              className="text-[#8a8f98] mb-6"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              Founded over a decade ago, this community theater emerged from a simple vision: to create a professional theater company that would serve as the cultural heartbeat of our region. What began as a small company has grown into a thriving arts organization presenting over 30 productions annually.
            </p>
            <p
              className="text-[#8a8f98] mb-6"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              Our commitment to artistic excellence, community engagement, and youth education has made this theater a cornerstone of the local cultural landscape. Through mainstage productions, youth theater programs, and educational outreach, we've touched the lives of thousands of artists and audience members.
            </p>
            <p
              className="text-[#8a8f98]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              As we celebrate our 10th anniversary in 2026, we look forward to the next chapter of storytelling, community building, and artistic innovation. Thank you for being part of our journey.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
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
              Join Our Community
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
              BECOME A PART OF OUR STORY
            </h2>
            <p
              className="text-[#8a8f98] max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Whether you want to volunteer, audition, or support our mission, there are many ways to get involved with Community Theater.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BSTButton variant="primary" size="lg">
                Volunteer
              </BSTButton>
              <BSTButton variant="secondary" size="lg">
                Support the Theater
              </BSTButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
