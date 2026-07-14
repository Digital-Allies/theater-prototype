import React from "react";

interface CollectionItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  time: string;
  description: string;
  pricing: string;
  venue: string;
  address: string;
}

interface DataTableProps {
  data: CollectionItem[];
}

export function DataTable({ data }: DataTableProps) {
  const headers = [
    "Title",
    "Slug",
    "Category",
    "Date",
    "Time",
    "Pricing",
  ];

  return (
    <div
      className="overflow-x-auto"
      style={{
        borderRadius: "0px 10px 10px 0px",
        borderTop: "2px solid #14b8a6",
        borderRight: "2px solid #14b8a6",
        borderBottom: "2px solid #14b8a6",
        borderLeft: "none",
        boxShadow: "12px 0 20px -8px rgba(20, 184, 166, 0.4)",
      }}
    >
      <table className="w-full min-w-[900px]">
        <thead>
          <tr style={{ backgroundColor: "#1b1f22" }}>
            {headers.map((header) => (
              <th
                key={header}
                className="text-left px-4 py-3 text-[#14b8a6] uppercase tracking-[0.1em] whitespace-nowrap"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  borderBottom: "1px solid #14b8a633",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={item.id}
              className="group hover:bg-[#1b1f22] transition-colors"
              style={{
                backgroundColor: idx % 2 === 0 ? "#111315" : "#151819",
                borderBottom: "1px solid #1b1f22",
              }}
            >
              <td
                className="px-4 py-3 text-[#e8e8e8]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span
                    className="text-[#8a8f98] mt-0.5"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {item.description.length > 60
                      ? item.description.slice(0, 60) + "..."
                      : item.description}
                  </span>
                </div>
              </td>
              <td
                className="px-4 py-3"
                style={{
                  fontFamily: "'Roboto Mono', 'Roboto', monospace",
                  fontSize: "0.7rem",
                  color: "#8a8f98",
                }}
              >
                {item.slug}
              </td>
              <td className="px-4 py-3">
                <span
                  className="inline-block px-3 py-1 uppercase tracking-[0.08em] whitespace-nowrap"
                  style={{
                    backgroundColor: "#1b1f22",
                    color: "#14b8a6",
                    fontFamily: "'League Spartan', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    borderRadius: "0px 6px 6px 0px",
                    border: "1px solid #14b8a633",
                  }}
                >
                  {item.category}
                </span>
              </td>
              <td
                className="px-4 py-3 text-[#e8e8e8] whitespace-nowrap"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.8rem",
                }}
              >
                {item.date}
              </td>
              <td
                className="px-4 py-3 text-[#8a8f98] whitespace-nowrap"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.8rem",
                }}
              >
                {item.time}
              </td>
              <td
                className="px-4 py-3 text-[#8a8f98]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.75rem",
                  maxWidth: "160px",
                }}
              >
                {item.pricing || "TBD"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
