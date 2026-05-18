import React from "react";

interface BarData {
  label: string;
  value: number;
}

interface BarChartProps {
  data: BarData[];
  title?: string;
}

export function BarChart({ data, title }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
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
      {title && (
        <span
          className="block mb-5 text-[#8a8f98] uppercase tracking-[0.1em]"
          style={{
            fontFamily: "'League Spartan', sans-serif",
            fontSize: "0.7rem",
          }}
        >
          {title}
        </span>
      )}
      <div className="flex flex-col gap-3">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span
              className="w-24 shrink-0 text-right text-[#8a8f98]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "0.8rem",
              }}
            >
              {item.label}
            </span>
            <div
              className="flex-1 h-6 relative"
              style={{ backgroundColor: "#1b1f22" }}
            >
              <div
                className="h-full"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: "#14b8a6",
                  transition: "width 0.6s ease",
                }}
              />
            </div>
            <span
              className="w-12 shrink-0 text-[#e8e8e8]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
