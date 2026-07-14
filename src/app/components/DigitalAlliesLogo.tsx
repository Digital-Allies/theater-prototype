import React from "react";

interface DigitalAlliesLogoProps {
  className?: string;
  height?: number;
}

export function DigitalAlliesLogo({ className = "", height = 40 }: DigitalAlliesLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ height }}>
      {/* Icon mark: two overlapping signal arcs with teal pulsing dot */}
      <div className="relative flex items-center justify-center" style={{ width: height, height }}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: height, height }}
        >
          {/* Outer arc */}
          <path
            d="M6 20 C6 12.268 12.268 6 20 6 C27.732 6 34 12.268 34 20"
            stroke="#14b8a6"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />
          {/* Mid arc */}
          <path
            d="M10 20 C10 14.477 14.477 10 20 10 C25.523 10 30 14.477 30 20"
            stroke="#14b8a6"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          {/* Inner arc */}
          <path
            d="M14 20 C14 16.686 16.686 14 20 14 C23.314 14 26 16.686 26 20"
            stroke="#14b8a6"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          {/* Center dot — static teal */}
          <circle cx="20" cy="20" r="2.5" fill="#14b8a6" />
        </svg>
        {/* Pulsing ring around the dot */}
        <span
          className="absolute"
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "#14b8a6",
            opacity: 0,
            animation: "da-pulse 2s ease-out infinite",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: 700,
            fontSize: height * 0.38,
            letterSpacing: "0.12em",
            color: "#e8e8e8",
            lineHeight: 1.1,
          }}
        >
          DIGITAL
        </span>
        <span
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontWeight: 700,
            fontSize: height * 0.38,
            letterSpacing: "0.12em",
            color: "#14b8a6",
            lineHeight: 1.1,
          }}
        >
          ALLIES
        </span>
      </div>

      <style>{`
        @keyframes da-pulse {
          0%   { transform: translate(-50%, -50%) scale(0.8); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(2.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
