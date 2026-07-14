import type { CalendarEvent } from "../components/EventCalendar";

// ─── All Shows / Calendar Events ─────────────────────────────────
export const allEvents: CalendarEvent[] = [
  {
    id: "evt-001",
    title: "A Streetcar Named Desire",
    date: "2026-02-28",
    time: "7:30 PM",
    category: "Community Theater",
    description:
      "Tennessee Williams' searing portrait of illusion versus reality. A must-see production featuring the theater's resident ensemble cast.",
    pricing: "$12, $18, $24",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-002",
    title: "Indie Shorts Block: Vol. 1",
    date: "2026-03-06",
    time: "7:00 PM",
    category: "Indie Film",
    description:
      "An evening of locally and regionally produced short films — drama, documentary, and experimental — followed by a Q&A with filmmakers.",
    pricing: "$8, $12",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-003",
    title: "Creative Futures Summit",
    date: "2026-03-07",
    time: "9:00 AM",
    category: "Conference",
    description:
      "A full-day gathering for artists, nonprofit leaders, and community organizers. Panels on arts funding, venue management, and audience development.",
    pricing: "$35, $55, $75",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-004",
    title: "The Rocky Horror Picture Show",
    date: "2026-03-12",
    time: "11:00 PM",
    category: "Community Theater",
    description:
      "A cult classic midnight showing with live shadow cast, audience participation, and props. Celebrate queer joy, camp, and liberation. Come as you are — or as someone else entirely.",
    pricing: "$12, $18, $24",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-005",
    title: "Feature Screening: \"After the Flood\"",
    date: "2026-03-17",
    time: "7:00 PM",
    category: "Indie Film",
    description:
      "Award-winning independent feature exploring resilience in a small river town. Followed by a live conversation with the director.",
    pricing: "$10, $15",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-006",
    title: "One-Act Festival",
    date: "2026-03-18",
    time: "7:00 PM",
    category: "Youth Theater",
    description:
      "Six original one-act plays written and performed by youth program participants. Raw, honest, and surprising every year.",
    pricing: "$5, $10",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-007",
    title: "Local Nonprofit Leadership Forum",
    date: "2026-03-21",
    time: "10:00 AM",
    category: "Conference",
    description:
      "A half-day symposium connecting nonprofit directors and board members across arts, education, and social services sectors.",
    pricing: "$25, $40",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-008",
    title: "Open Stage Night",
    date: "2026-03-28",
    time: "7:00 PM",
    category: "Special Event",
    description:
      "The stage is yours. Stand-up, spoken word, original music, dance — all welcome. Sign up at the door.",
    pricing: "$5",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-009",
    title: "Indie Shorts Block: Vol. 2",
    date: "2026-03-29",
    time: "7:00 PM",
    category: "Indie Film",
    description:
      "Second installment of our spring shorts program, featuring animated, narrative, and documentary works from emerging directors.",
    pricing: "$8, $12",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-010",
    title: "Death of a Salesman",
    date: "2026-04-04",
    time: "7:30 PM",
    category: "Community Theater",
    description:
      "Arthur Miller's defining American tragedy. A powerful production that asks whether the dream was ever within reach.",
    pricing: "$12, $18, $24",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-011",
    title: "Arts & Culture Gala",
    date: "2026-04-18",
    time: "6:00 PM",
    category: "Special Event",
    description:
      "Our annual celebration of the artists, donors, and community members who keep live performance alive. Dinner, awards, and live entertainment.",
    pricing: "$50, $75, $100",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
  {
    id: "evt-012",
    title: "Feature Screening: \"The Last Projection\"",
    date: "2026-04-25",
    time: "7:00 PM",
    category: "Indie Film",
    description:
      "A love letter to analog cinema. This narrative feature follows the final projectionist at a dying repertory house — haunting and gorgeous.",
    pricing: "$10, $15",
    venue: "Community Theater",
    address: "[Street Address, City, State]",
  },
];

// ─── Show Cards (with images) ────────────────────────────────────
export const shows = [
  {
    id: "1",
    title: "A Streetcar Named Desire",
    date: "Feb 28, 2026 · 7:30 PM",
    category: "Community Theater",
    imageUrl:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBkcmFtYXRpYyUyMHNwb3RsaWdodCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3OTc4NzE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    title: "Indie Shorts Block: Vol. 1",
    date: "Mar 6, 2026 · 7:00 PM",
    category: "Indie Film",
    imageUrl:
      "https://images.unsplash.com/photo-1758232589376-9f3db5aa371d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGZpbG0lMjBjaW5lbWElMjBkYXJrJTIwbW9vZHklMjBzY3JlZW5pbmd8ZW58MXx8fHwxNzc5Nzg3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    title: "Creative Futures Summit",
    date: "Mar 7, 2026 · 9:00 AM",
    category: "Conference",
    imageUrl:
      "https://images.unsplash.com/photo-1731004270606-d39d246c1e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMGRhcmslMjBhdWRpdG9yaXVtfGVufDF8fHx8MTc3OTc4NzE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    title: "The Rocky Horror Picture Show",
    date: "Mar 12, 2026 · 11:00 PM",
    category: "Community Theater",
    imageUrl:
      "https://images.unsplash.com/photo-1770782986192-d786218838e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NreSUyMGhvcnJvciUyMHBpY3R1cmUlMjBzaG93JTIwZGFyayUyMG1vb2R5JTIwdGhlYXRlciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc4MDkwODQ0NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    title: "Feature Screening: \"After the Flood\"",
    date: "Mar 17, 2026 · 7:00 PM",
    category: "Indie Film",
    imageUrl:
      "https://images.unsplash.com/photo-1760170437237-a3654545ab4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMGRhcmslMjBhdWRpdG9yaXVtfGVufDF8fHx8MTc3OTc4NzE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    title: "One-Act Festival",
    date: "Mar 18, 2026 · 7:00 PM",
    category: "Youth Theater",
    imageUrl:
      "https://images.unsplash.com/photo-1770844102881-f8823e9f3c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMGRhcmslMjBhdWRpdG9yaXVtfGVufDF8fHx8MTc3OTc4NzE3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
