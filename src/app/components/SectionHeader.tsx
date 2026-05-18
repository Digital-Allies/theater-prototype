import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div
      className="relative px-6 py-4 mb-8"
      style={{
        border: "2px solid #14b8a6",
        borderRadius: "0px",
        boxShadow:
          "0 0 10px rgba(20, 184, 166, 0.6), inset 0 0 10px rgba(20, 184, 166, 0.1)",
      }}
    >
      <div className="flex items-center gap-4">
        <h2
          className="text-[#e8e8e8] tracking-[0.08em]"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          {title}
        </h2>
        {subtitle && (
          <span
            className="text-[#8a8f98] ml-auto"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
