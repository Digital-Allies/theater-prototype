import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import bstLogo from "figma:asset/632f070f62a4def86e86cfd0ee04bfd636adba53.png";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Get Tickets", path: "/get-tickets" },
    { label: "Youth Theater", path: "/youth-theater" },
    { label: "Community Theater", path: "/community-theater" },
    { label: "About", path: "/about" },
    { label: "Support", path: "/support" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "#111315",
        borderBottom: "1px solid #14b8a633",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={bstLogo}
            alt="Beale Street Theater"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition-colors uppercase tracking-[0.08em]"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                textDecoration: "none",
                color: isActive(link.path) ? "#14b8a6" : "#8a8f98",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/get-tickets">
            <button
              className="hidden sm:block px-5 py-2 uppercase tracking-[0.08em] cursor-pointer hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#14b8a6",
                color: "#111315",
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                border: "none",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              Buy Tickets
            </button>
          </Link>
          <button
            className="lg:hidden text-[#e8e8e8] cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ backgroundColor: "#111315" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="transition-colors uppercase tracking-[0.08em] py-2"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "none",
                borderBottom: "1px solid #1b1f22",
                color: isActive(link.path) ? "#14b8a6" : "#8a8f98",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/get-tickets" onClick={() => setMobileOpen(false)}>
            <button
              className="w-full py-3 uppercase tracking-[0.08em] cursor-pointer"
              style={{
                backgroundColor: "#14b8a6",
                color: "#111315",
                fontFamily: "'Noto Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                border: "none",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              Buy Tickets
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}