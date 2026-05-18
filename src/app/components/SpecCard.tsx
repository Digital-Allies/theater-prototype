import React from "react";

interface SpecCardProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
}

export function SpecCard({ title, value, description, icon }: SpecCardProps) {
  return (
    <div
      className="p-6 flex flex-col gap-3"
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
      <div className="flex items-center justify-between">
        <span
          className="text-[#8a8f98] uppercase tracking-[0.1em]"
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontSize: "0.7rem",
          }}
        >
          {title}
        </span>
        {icon && <span className="text-[#14b8a6]">{icon}</span>}
      </div>
      <span
        className="text-[#e8e8e8]"
        style={{
          fontFamily: "'League Spartan', sans-serif",
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
        }}
      >
        {value}
      </span>
      <p
        className="text-[#8a8f98]"
        style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem" }}
      >
        {description}
      </p>
    </div>
  );
}
