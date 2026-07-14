import React, { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { BSTButton } from "../components/BSTButton";
import { MapPin, Phone, Mail, Clock, Car, Users, Send, CheckCircle } from "lucide-react";

const bstCard = {
  backgroundColor: "#111315",
  borderRadius: "0px 10px 10px 0px",
  borderTop: "2px solid #14b8a6",
  borderRight: "2px solid #14b8a6",
  borderBottom: "2px solid #14b8a6",
  borderLeft: "none",
  boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#1a1d1f",
  border: "1px solid #14b8a633",
  borderRadius: "0px 6px 6px 0px",
  padding: "0.75rem 1rem",
  color: "#e8e8e8",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "0.95rem",
  outline: "none",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const focusStyle = (field: string): React.CSSProperties =>
    focused === field
      ? { ...inputStyle, border: "1px solid #14b8a6", boxShadow: "0 0 0 2px rgba(20,184,166,0.15)" }
      : inputStyle;

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: "#111315" }}>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span
              className="inline-block text-[#14b8a6] uppercase tracking-[0.15em] mb-4"
              style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.7rem", fontWeight: 700 }}
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
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
            >
              Community Theater is easy to find and welcoming to all.
              Here's everything you need to know before your visit.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT INFO ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Visit Us" subtitle="Location & Contact" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin size={32} />,
                label: "Address",
                content: (
                  <>[Street Address]<br />[City, State ZIP]<br /><br />[Neighborhood / Landmark]</>
                ),
              },
              {
                icon: <Phone size={32} />,
                label: "Phone",
                content: (
                  <>Box Office:<br />(555) 555-SHOW<br /><br />Administration:<br />(555) 555-0000</>
                ),
              },
              {
                icon: <Mail size={32} />,
                label: "Email",
                content: (
                  <>General Inquiries:<br />info@yourtheater.com<br /><br />Box Office:<br />tickets@yourtheater.com</>
                ),
              },
            ].map(({ icon, label, content }) => (
              <div key={label} className="p-8" style={bstCard}>
                <div className="text-[#14b8a6] mb-4">{icon}</div>
                <h3
                  className="text-[#e8e8e8] uppercase mb-3"
                  style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.06em" }}
                >
                  {label}
                </h3>
                <p
                  className="text-[#8a8f98]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}
                >
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOX OFFICE HOURS ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Box Office Hours" subtitle="When to Visit" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-10" style={bstCard}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#14b8a6]"><Clock size={36} /></div>
                <h3
                  className="text-[#e8e8e8] uppercase"
                  style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.06em" }}
                >
                  Regular Hours
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  ["Monday – Friday", "10:00 AM – 5:00 PM"],
                  ["Saturday", "12:00 PM – 4:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-[#8a8f98]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem" }}>{day}</span>
                    <span className="text-[#14b8a6]" style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.9rem", fontWeight: 700 }}>{time}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 border-t border-[#14b8a633]">
                  <span className="text-[#8a8f98]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem" }}>Performance Days</span>
                  <span className="text-[#14b8a6]" style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.9rem", fontWeight: 700 }}>Opens 1 Hour Before Show</span>
                </div>
              </div>
              <p className="text-[#8a8f98] mt-6 italic" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem", lineHeight: 1.6 }}>
                Note: Hours may vary during holidays. Please call ahead to confirm.
              </p>
            </div>

            <div className="p-10" style={bstCard}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#14b8a6]"><Car size={36} /></div>
                <h3
                  className="text-[#e8e8e8] uppercase"
                  style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.06em" }}
                >
                  Will Call &amp; Parking
                </h3>
              </div>
              <p className="text-[#8a8f98] mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Tickets ordered online are available for pickup at our Will Call window beginning one hour before showtime. Free parking is available in the rear lot off 4th Street.
              </p>
              <div className="space-y-3">
                {[
                  "Arrive 30 minutes early for Will Call pickup",
                  "Digital tickets can be shown on your mobile device",
                  "Group tickets available at special rates (10+ guests)",
                  "Accessible parking spaces available in rear lot",
                  "Drop-off zone at front entrance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#14b8a6] mt-1">●</span>
                    <span className="text-[#8a8f98]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ACCESSIBILITY ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Visitor Information" subtitle="Accessibility" />
          <div className="p-10" style={bstCard}>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#14b8a6]"><Users size={36} /></div>
              <h3
                className="text-[#e8e8e8] uppercase"
                style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.06em" }}
              >
                Accessibility
              </h3>
            </div>
            <p className="text-[#8a8f98] mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Community Theater is fully accessible to guests with disabilities. We are committed to ensuring all patrons can enjoy our performances comfortably.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Wheelchair accessible entrance and seating",
                "Assistive listening devices available at box office",
                "Service animals welcome",
                "Contact us in advance for special accommodation requests",
                "Accessible restrooms on main floor",
                "Reserved companion seating available",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-[#14b8a6] mt-1">●</span>
                  <span className="text-[#8a8f98]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader title="Send a Message" subtitle="Get in Touch" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Sidebar blurb */}
            <div className="lg:col-span-2 p-10 h-full" style={bstCard}>
              <div className="text-[#14b8a6] mb-4"><Send size={36} /></div>
              <h3
                className="text-[#e8e8e8] uppercase mb-4"
                style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.06em" }}
              >
                We&apos;d Love to Hear From You
              </h3>
              <p className="text-[#8a8f98] mb-8" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Whether you have questions about upcoming shows, group ticket pricing, sponsorship opportunities, or just want to say hello — our team will get back to you within one business day.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Phone size={16} />, text: "(555) 555-SHOW" },
                  { icon: <Mail size={16} />, text: "info@yourtheater.com" },
                  { icon: <MapPin size={16} />, text: "[Street Address, City, State]" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="text-[#14b8a6]">{icon}</span>
                    <span className="text-[#8a8f98]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-10" style={bstCard}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
                  <CheckCircle size={56} className="text-[#14b8a6]" />
                  <h3
                    className="text-[#e8e8e8] uppercase"
                    style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-[#8a8f98] max-w-sm" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}>
                    Thank you for reaching out. A member of our team will be in touch within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" }); }}
                    className="text-[#14b8a6] uppercase tracking-[0.1em] cursor-pointer"
                    style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.75rem", fontWeight: 700, background: "none", border: "none" }}
                  >
                    Send Another Message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#8a8f98] uppercase tracking-[0.1em]" style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.7rem", fontWeight: 700 }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        style={focusStyle("name")}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#8a8f98] uppercase tracking-[0.1em]" style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.7rem", fontWeight: 700 }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={focusStyle("email")}
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#8a8f98] uppercase tracking-[0.1em]" style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.7rem", fontWeight: 700 }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        style={focusStyle("phone")}
                        placeholder="(555) 555-0000"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#8a8f98] uppercase tracking-[0.1em]" style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.7rem", fontWeight: 700 }}>
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        style={focusStyle("subject")}
                      >
                        <option>General Inquiry</option>
                        <option>Ticket Questions</option>
                        <option>Group Sales</option>
                        <option>Accessibility Request</option>
                        <option>Sponsorship / Donation</option>
                        <option>Youth Theater</option>
                        <option>Community Theater</option>
                        <option>Press / Media</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#8a8f98] uppercase tracking-[0.1em]" style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "0.7rem", fontWeight: 700 }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={{ ...focusStyle("message"), resize: "vertical" }}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <BSTButton variant="primary" size="lg">
                      Send Message
                    </BSTButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP EMBED PLACEHOLDER ========== */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div
            className="w-full flex items-center justify-center"
            style={{
              ...bstCard,
              height: "340px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(90deg, #14b8a6 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center space-y-3">
              <MapPin size={40} className="text-[#14b8a6] mx-auto" />
              <p
                className="text-[#e8e8e8] uppercase"
                style={{ fontFamily: "'League Spartan', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                [Street Address] · [City, State ZIP]
              </p>
              <p className="text-[#8a8f98]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem" }}>
                [ Duda Map Widget — drop here ]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
