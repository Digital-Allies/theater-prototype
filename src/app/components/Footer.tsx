import React from "react";
import { Link } from "react-router";
import { DigitalAlliesLogo } from "./DigitalAlliesLogo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="w-full py-12"
      style={{
        backgroundColor: "#0d0f11",
        borderTop: "1px solid #14b8a633",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Digital Allies Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <DigitalAlliesLogo height={32} />
            </div>
            <p
              className="text-[#8a8f98] mb-4 max-w-md"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              This is a demo portfolio template created by Digital Allies.
              We build custom websites and digital experiences for small businesses,
              nonprofits, and community organizations.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@digitalallies.net"
                className="flex items-center gap-2 text-[#8a8f98] hover:text-[#14b8a6] transition-colors"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <Mail size={16} className="text-[#14b8a6]" />
                contact@digitalallies.net
              </a>
              <a
                href="tel:+19283570051"
                className="flex items-center gap-2 text-[#8a8f98] hover:text-[#14b8a6] transition-colors"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <Phone size={16} className="text-[#14b8a6]" />
                (928) 228-5769
              </a>
              <div
                className="flex items-start gap-2 text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                }}
              >
                <MapPin size={16} className="text-[#14b8a6] mt-0.5" />
                <span>Kingman, Arizona</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span
              className="block text-[#e8e8e8] uppercase mb-4"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              Quick Links
            </span>
            <nav className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Find Your Event", path: "/find-your-event" },
                { label: "Community Theater", path: "/community-theater" },
                { label: "About", path: "/about" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-[#8a8f98] hover:text-[#14b8a6] transition-colors"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Get Involved */}
          <div>
            <span
              className="block text-[#e8e8e8] uppercase mb-4"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              Get Involved
            </span>
            <nav className="space-y-2">
              {[
                { label: "Support", path: "/support" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-[#8a8f98] hover:text-[#14b8a6] transition-colors"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://digitalallies.net"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#8a8f98] hover:text-[#14b8a6] transition-colors"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                View Digital Allies
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6"
          style={{
            borderTop: "1px solid #14b8a633",
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-[#8a8f98]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "0.8rem",
              }}
            >
              © 2026 Community Theater. Demo template by{" "}
              <a
                href="https://digitalallies.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline"
              >
                Digital Allies
              </a>
              .
            </p>
            <p
              className="text-[#8a8f98]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "0.8rem",
              }}
            >
              Looking for a custom website?{" "}
              <a
                href="https://digitalallies.net/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14b8a6] hover:underline"
              >
                Let's talk
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
