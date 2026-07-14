import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, X, Clock, MapPin, Ticket } from "lucide-react";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  category: string;
  description: string;
  pricing: string;
  venue: string;
  address: string;
}

interface EventCalendarProps {
  events: CalendarEvent[];
}

const CATEGORY_COLORS: Record<string, string> = {
  "Community Theater": "#14b8a6",
  "Special Event": "#f59e0b",
  "Indie Film": "#8b5cf6",
  "Conference": "#60a5fa",
  "Youth Theater": "#ec4899",
  Music: "#3b82f6",
  Drama: "#ef4444",
  Dance: "#06b6d4",
  Comedy: "#22c55e",
  "Jazz / Blues": "#f97316",
};

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export function EventCalendar({ events }: EventCalendarProps) {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(1); // February (0-indexed)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const today = new Date(2026, 1, 28); // Feb 28, 2026

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const prevMonthDays = getDaysInMonth(
    currentMonth === 0 ? currentYear - 1 : currentYear,
    currentMonth === 0 ? 11 : currentMonth - 1
  );

  const eventsByDate = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};
    events.forEach((evt) => {
      const d = new Date(evt.date);
      if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
        const key = d.getDate();
        if (!map[key]) map[key] = [];
        map[key].push(evt);
      }
    });
    return map;
  }, [events, currentYear, currentMonth]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToToday = () => {
    setCurrentYear(2026);
    setCurrentMonth(1);
  };

  // Build calendar grid
  const calendarCells: Array<{
    day: number;
    isCurrentMonth: boolean;
    events: CalendarEvent[];
  }> = [];

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarCells.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      events: [],
    });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push({
      day: d,
      isCurrentMonth: true,
      events: eventsByDate[d] || [],
    });
  }

  // Next month leading days
  const remaining = 42 - calendarCells.length;
  for (let i = 1; i <= remaining; i++) {
    calendarCells.push({ day: i, isCurrentMonth: false, events: [] });
  }

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  // Upcoming events sidebar
  const upcomingEvents = events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 6);

  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* Main Calendar */}
      <div
        className="flex-1"
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
        {/* Calendar Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid #1b1f22" }}
        >
          <div className="flex items-center gap-4">
            <h3
              className="text-[#e8e8e8]"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              {MONTHS[currentMonth].toUpperCase()} {currentYear}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToToday}
              className="px-3 py-1.5 cursor-pointer hover:opacity-90 transition-opacity uppercase tracking-[0.08em]"
              style={{
                backgroundColor: "#1b1f22",
                color: "#14b8a6",
                border: "1px solid #14b8a633",
                borderRadius: "0px 8px 8px 0px",
                fontFamily: "'Noto Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
              }}
            >
              Today
            </button>
            <button
              onClick={prevMonth}
              className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-[#1b1f22] transition-colors"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #1b1f22",
                borderRadius: "0px 8px 8px 0px",
                color: "#8a8f98",
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextMonth}
              className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-[#1b1f22] transition-colors"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #1b1f22",
                borderRadius: "0px 8px 8px 0px",
                color: "#8a8f98",
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Day Headers */}
        <div
          className="grid grid-cols-7"
          style={{ borderBottom: "1px solid #1b1f22" }}
        >
          {DAYS.map((day) => (
            <div
              key={day}
              className="px-2 py-2.5 text-center"
              style={{
                fontFamily: "'League Spartan', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#8a8f98",
                letterSpacing: "0.1em",
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {calendarCells.map((cell, idx) => {
            const hasEvents = cell.events.length > 0;
            const isTodayCell = cell.isCurrentMonth && isToday(cell.day);
            const isHovered = cell.isCurrentMonth && hoveredDay === cell.day;

            return (
              <div
                key={idx}
                className="relative transition-colors"
                style={{
                  minHeight: "100px",
                  borderBottom: "1px solid #1b1f22",
                  borderRight: idx % 7 !== 6 ? "1px solid #1b1f22" : "none",
                  backgroundColor: isHovered
                    ? "#1b1f22"
                    : cell.isCurrentMonth
                    ? "#111315"
                    : "#0d0f10",
                  cursor: hasEvents ? "pointer" : "default",
                }}
                onMouseEnter={() =>
                  cell.isCurrentMonth ? setHoveredDay(cell.day) : null
                }
                onMouseLeave={() => setHoveredDay(null)}
              >
                {/* Day Number */}
                <div className="flex justify-end p-2">
                  <span
                    className="flex items-center justify-center"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: isTodayCell ? 700 : 400,
                      color: isTodayCell
                        ? "#111315"
                        : cell.isCurrentMonth
                        ? "#e8e8e8"
                        : "#3a3f45",
                      backgroundColor: isTodayCell ? "#14b8a6" : "transparent",
                      width: isTodayCell ? "26px" : "auto",
                      height: isTodayCell ? "26px" : "auto",
                      borderRadius: isTodayCell ? "50%" : "0",
                    }}
                  >
                    {cell.day}
                  </span>
                </div>

                {/* Events */}
                <div className="px-1 pb-1 flex flex-col gap-0.5">
                  {cell.events.slice(0, 3).map((evt) => (
                    <button
                      key={evt.id}
                      onClick={() => setSelectedEvent(evt)}
                      className="w-full text-left px-1.5 py-0.5 truncate cursor-pointer hover:opacity-80 transition-opacity"
                      style={{
                        backgroundColor:
                          (CATEGORY_COLORS[evt.category] || "#14b8a6") + "22",
                        borderLeft: `3px solid ${
                          CATEGORY_COLORS[evt.category] || "#14b8a6"
                        }`,
                        borderRadius: "0px 4px 4px 0px",
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 500,
                        color: "#e8e8e8",
                        border: "none",
                        borderLeftWidth: "3px",
                        borderLeftStyle: "solid",
                        borderLeftColor:
                          CATEGORY_COLORS[evt.category] || "#14b8a6",
                        background:
                          (CATEGORY_COLORS[evt.category] || "#14b8a6") + "22",
                      }}
                    >
                      {evt.title}
                    </button>
                  ))}
                  {cell.events.length > 3 && (
                    <span
                      className="px-1.5"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.6rem",
                        color: "#14b8a6",
                      }}
                    >
                      +{cell.events.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Legend */}
        <div
          className="px-6 py-3 flex flex-wrap gap-4"
          style={{ borderTop: "1px solid #1b1f22" }}
        >
          {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
            <div key={cat} className="flex items-center gap-2">
              <div
                className="w-3 h-3"
                style={{
                  backgroundColor: color,
                  borderRadius: "0px 3px 3px 0px",
                }}
              />
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.65rem",
                  color: "#8a8f98",
                }}
              >
                {cat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar - Upcoming Events */}
      <div
        className="xl:w-[320px] shrink-0"
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
        <div
          className="px-5 py-4"
          style={{ borderBottom: "1px solid #1b1f22" }}
        >
          <span
            className="text-[#14b8a6] uppercase tracking-[0.1em]"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
            }}
          >
            Upcoming Events
          </span>
        </div>
        <div className="flex flex-col">
          {upcomingEvents.map((evt) => {
            const evtDate = new Date(evt.date);
            const monthStr = MONTHS[evtDate.getMonth()].slice(0, 3).toUpperCase();
            const dayStr = evtDate.getDate();
            return (
              <button
                key={evt.id}
                onClick={() => setSelectedEvent(evt)}
                className="flex items-start gap-3 px-5 py-3.5 text-left cursor-pointer hover:bg-[#1b1f22] transition-colors"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: "1px solid #1b1f22",
                }}
              >
                {/* Date badge */}
                <div
                  className="shrink-0 w-11 flex flex-col items-center py-1.5"
                  style={{
                    backgroundColor: "#1b1f22",
                    borderRadius: "0px 6px 6px 0px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      color: "#14b8a6",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {monthStr}
                  </span>
                  <span
                    style={{
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#e8e8e8",
                      lineHeight: 1,
                    }}
                  >
                    {dayStr}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className="block text-[#e8e8e8] truncate"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                  >
                    {evt.title}
                  </span>
                  <span
                    className="block text-[#8a8f98]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.7rem",
                    }}
                  >
                    {evt.time}
                  </span>
                  <span
                    className="inline-block mt-1 px-2 py-0.5 uppercase tracking-[0.06em]"
                    style={{
                      backgroundColor:
                        (CATEGORY_COLORS[evt.category] || "#14b8a6") + "22",
                      color: CATEGORY_COLORS[evt.category] || "#14b8a6",
                      fontFamily: "'League Spartan', sans-serif",
                      fontSize: "0.55rem",
                      fontWeight: 700,
                      borderRadius: "0px 4px 4px 0px",
                    }}
                  >
                    {evt.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[480px]"
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
            {/* Modal Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid #1b1f22" }}
            >
              <span
                className="inline-block px-3 py-1 uppercase tracking-[0.08em]"
                style={{
                  backgroundColor:
                    (CATEGORY_COLORS[selectedEvent.category] || "#14b8a6") +
                    "22",
                  color:
                    CATEGORY_COLORS[selectedEvent.category] || "#14b8a6",
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  borderRadius: "0px 6px 6px 0px",
                }}
              >
                {selectedEvent.category}
              </span>
              <button
                onClick={() => setSelectedEvent(null)}
                className="w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-[#1b1f22] transition-colors"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #1b1f22",
                  borderRadius: "0px 8px 8px 0px",
                  color: "#8a8f98",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5">
              <h3
                className="text-[#e8e8e8] mb-4"
                style={{
                  fontFamily: "'League Spartan', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                {selectedEvent.title}
              </h3>

              <div className="flex flex-col gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <Clock size={16} color="#14b8a6" />
                  <span
                    className="text-[#e8e8e8]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "0.85rem",
                    }}
                  >
                    {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    at {selectedEvent.time}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} color="#14b8a6" />
                  <div>
                    <span
                      className="block text-[#e8e8e8]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.85rem",
                      }}
                    >
                      {selectedEvent.venue}
                    </span>
                    <span
                      className="text-[#8a8f98]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.75rem",
                      }}
                    >
                      {selectedEvent.address}
                    </span>
                  </div>
                </div>
                {selectedEvent.pricing && (
                  <div className="flex items-center gap-3">
                    <Ticket size={16} color="#14b8a6" />
                    <span
                      className="text-[#e8e8e8]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "0.85rem",
                      }}
                    >
                      {selectedEvent.pricing}
                    </span>
                  </div>
                )}
              </div>

              <p
                className="text-[#8a8f98] mb-6"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                {selectedEvent.description}
              </p>

              <div className="flex gap-3">
                <button
                  className="flex-1 flex items-center justify-center gap-2 py-3 uppercase tracking-[0.08em] hover:opacity-90 transition-opacity cursor-pointer"
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
                  <Ticket size={16} />
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
