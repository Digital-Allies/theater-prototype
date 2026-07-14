import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import { BSTButton } from "../components/BSTButton";
import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title: "Celebrating 10 Years of Theater Magic",
    date: "March 5, 2026",
    author: "Jennifer Morrison",
    excerpt:
      "As we mark our 10th anniversary, we reflect on a decade of unforgettable performances, community connections, and the artists who have graced our stage.",
    category: "News",
  },
  {
    title: "Behind the Scenes: Building The Phantom Tollbooth",
    date: "February 20, 2026",
    author: "David Rodriguez",
    excerpt:
      "Take a peek behind the curtain as our technical crew transforms the stage into the Land of Wisdom for our production of The Phantom Tollbooth.",
    category: "Production",
  },
  {
    title: "Youth Theater Showcase: Spring 2026",
    date: "February 15, 2026",
    author: "Sarah Williams",
    excerpt:
      "Our talented young performers are preparing for an incredible season. Meet the students bringing Davenport Deception and other productions to life.",
    category: "Youth Programs",
  },
  {
    title: "Meet Our New Artistic Director",
    date: "January 28, 2026",
    author: "Theater Staff",
    excerpt:
      "We're thrilled to introduce Michael Chen as our new Artistic Director. Learn about his vision for the future of community theater.",
    category: "News",
  },
  {
    title: "How to Audition Like a Pro",
    date: "January 15, 2026",
    author: "Michael Chen",
    excerpt:
      "Thinking about auditioning for community theater? Our Artistic Director shares insider tips to help you shine at your next audition.",
    category: "Tips & Advice",
  },
  {
    title: "The Magic of Live Music: Concert Series Preview",
    date: "January 10, 2026",
    author: "Jennifer Morrison",
    excerpt:
      "From baritone classics to Tuvan throat singing, our 2026 Concert Series promises diverse performances that will captivate music lovers.",
    category: "Concert Series",
  },
];

const digitalAlliesArticles = [
  {
    title: "SEO vs AEO: Make Your Business Visible to AI Search",
    description: "Schema markup, directory consistency, answer formatting, and maintenance for search visibility. Includes schema generator and AEO readiness checker.",
    url: "https://digitalallies.net/learn/seo-aeo",
    category: "Search Visibility",
  },
  {
    title: "Mastering Alt-Text: Good vs. Bad & Why It Matters",
    description: "Alt-text guidance with live checker and instant feedback for improved accessibility and SEO.",
    url: "https://digitalallies.net/learn/alttext",
    category: "Accessibility",
  },
  {
    title: "Design Decisions That Earn Trust — Or Quietly Lose It",
    description: "Covers color, typography, layout, and performance. Features the 95/5 rule, symmetry break concepts, and 10-point design audit.",
    url: "https://digitalallies.net/learn/design-bureau",
    category: "Design & Brand",
  },
  {
    title: "ADA Compliance: Your Website Has to Work for Everyone",
    description: "WCAG 2.1 AA compliance requirements and site audit process. Understanding legal requirements and best practices.",
    url: "https://digitalallies.net/learn/ada-compliance",
    category: "Accessibility",
  },
  {
    title: "Why Your Business Needs a Bilingual Website",
    description: "Reach broader audiences and improve engagement with bilingual web design strategies and implementation.",
    url: "https://digitalallies.net/learn/bilingual-web",
    category: "Bilingual Design",
  },
  {
    title: "Your Apps Talk to Each Other. You Don't Have To.",
    description: "Integration solutions for booking, POS, CRM, and accounting systems. Includes ROI calculator.",
    url: "https://digitalallies.net/learn/dept-cooperation",
    category: "Integrations",
  },
];

export default function Blog() {
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
              Theater Blog
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
              STORIES FROM
              <br />
              THE STAGE
            </h1>
            <p
              className="text-[#8a8f98] max-w-[520px] mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Go behind the curtain with news, artist spotlights, production updates, and insights into the world of Community Theater.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FEATURED POST ========== */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Featured Story" subtitle="Latest from the Stage" />

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
            <div className="max-w-4xl">
              <span
                className="inline-block text-[#14b8a6] uppercase tracking-[0.1em] mb-4"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                {blogPosts[0].category}
              </span>
              <h2
                className="text-[#e8e8e8] uppercase mb-4"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  lineHeight: 1.2,
                }}
              >
                {blogPosts[0].title}
              </h2>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#14b8a6]" />
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                    }}
                  >
                    {blogPosts[0].date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#14b8a6]" />
                  <span
                    className="text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                    }}
                  >
                    {blogPosts[0].author}
                  </span>
                </div>
              </div>

              <p
                className="text-[#8a8f98] mb-8"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                {blogPosts[0].excerpt}
              </p>

              <BSTButton variant="primary" size="lg">
                Read Full Story
              </BSTButton>
            </div>
          </div>
        </div>
      </section>

      {/* ========== RECENT POSTS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Recent Posts" subtitle="Latest Updates" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
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
                  className="inline-block text-[#14b8a6] uppercase tracking-[0.1em] mb-3"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  {post.category}
                </span>

                <h3
                  className="text-[#e8e8e8] uppercase mb-4"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#14b8a6]" />
                    <span
                      className="text-[#8a8f98]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.8rem",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-[#14b8a6]" />
                    <span
                      className="text-[#8a8f98]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.8rem",
                      }}
                    >
                      {post.author}
                    </span>
                  </div>
                </div>

                <p
                  className="text-[#8a8f98] mb-6"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {post.excerpt}
                </p>

                <button
                  className="flex items-center gap-2 text-[#14b8a6] hover:text-[#0fa291] transition-colors"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  READ MORE
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Browse by Category" subtitle="Find What Interests You" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["News", "Production", "Youth Programs", "Concert Series", "Tips & Advice", "Community"].map(
              (category) => (
                <button
                  key={category}
                  className="p-4 text-center transition-all hover:scale-105"
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
                    className="text-[#e8e8e8] uppercase block"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {category}
                  </span>
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========== DIGITAL ALLIES RESOURCES ========== */}
      <section className="py-16" style={{ backgroundColor: "#0d0f11" }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            title="Digital Strategy Resources"
            subtitle="Powered by Digital Allies"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalAlliesArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 transition-transform hover:scale-105"
                style={{
                  backgroundColor: "#111315",
                  borderRadius: "0px 10px 10px 0px",
                  borderTop: "2px solid #14b8a6",
                  borderRight: "2px solid #14b8a6",
                  borderBottom: "2px solid #14b8a6",
                  borderLeft: "none",
                  boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className="inline-block text-[#14b8a6] uppercase tracking-[0.1em]"
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    {article.category}
                  </span>
                  <ExternalLink size={16} className="text-[#14b8a6] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3
                  className="text-[#e8e8e8] uppercase mb-4 group-hover:text-[#14b8a6] transition-colors"
                  style={{
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    lineHeight: 1.3,
                  }}
                >
                  {article.title}
                </h3>

                <p
                  className="text-[#8a8f98]"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {article.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER CTA ========== */}
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
              Stay Connected
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
              SUBSCRIBE TO OUR NEWSLETTER
            </h2>
            <p
              className="text-[#8a8f98] max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Get the latest news, show announcements, and exclusive content delivered to your inbox monthly.
            </p>
            <BSTButton variant="primary" size="lg">
              Subscribe Now
            </BSTButton>
          </div>
        </div>
      </section>
    </div>
  );
}
