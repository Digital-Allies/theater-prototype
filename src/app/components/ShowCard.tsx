import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ShowCardProps {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  onGetTickets?: () => void;
}

export function ShowCard({
  title,
  date,
  category,
  imageUrl,
  onGetTickets,
}: ShowCardProps) {
  return (
    <div
      className="relative overflow-hidden group"
      style={{
        aspectRatio: "2 / 3",
        borderRadius: "0px 10px 10px 0px",
        borderTop: "2px solid #14b8a6",
        borderRight: "2px solid #14b8a6",
        borderBottom: "2px solid #14b8a6",
        borderLeft: "none",
        boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
      }}
    >
      <ImageWithFallback
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end"
        style={{
          background:
            "linear-gradient(to top, #111315 0%, #111315ee 40%, transparent 100%)",
          minHeight: "45%",
        }}
      >
        <span
          className="text-[#14b8a6] uppercase tracking-[0.1em] mb-1"
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontSize: "0.7rem",
          }}
        >
          {category}
        </span>
        <h3
          className="text-[#e8e8e8] mb-1"
          style={{
            fontFamily: "'League Spartan', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-[#8a8f98] mb-4"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "0.85rem" }}
        >
          {date}
        </p>
        <button
          onClick={onGetTickets}
          className="w-full py-2.5 px-4 uppercase tracking-[0.08em] cursor-pointer transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "#14b8a6",
            color: "#111315",
            fontFamily: "'Noto Sans', sans-serif",
            fontWeight: 700,
            fontSize: "0.8rem",
            borderRadius: "0px 10px 10px 0px",
            border: "none",
          }}
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
}
