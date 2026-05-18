import type { CalendarEvent } from "../components/EventCalendar";

// ─── All Shows / Calendar Events ─────────────────────────────────
export const allEvents: CalendarEvent[] = [
  {
    id: "evt-001",
    title: "The Phantom Tollbooth",
    date: "2026-02-28",
    time: "7:00 PM",
    category: "Community Theater",
    description:
      "Milo's adventures in the Land of Wisdom, where he's forced to think about many new things.",
    ludusUrl: "https://bst.ludus.com/200484012",
    pricing: "$5, $10, $15, $20, $25, $30, $35",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-002",
    title: 'Improv Group: "TBD"',
    date: "2026-03-06",
    time: "7:00 PM",
    category: "Special Event",
    description:
      "An energetic and fun improv group! You can expect lots of laughs and high energy comedy!",
    ludusUrl: "https://bst.ludus.com/200519317",
    pricing: "",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-003",
    title: "Baritone Robert Sims",
    date: "2026-03-07",
    time: "7:00 PM",
    category: "Concert Series",
    description:
      "When Robert Sims steps onto the stage, America's story finds its voice anew.",
    ludusUrl: "https://bst.ludus.com/200512719",
    pricing: "$15, $25, $35",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-004",
    title: "Davenport Deception",
    date: "2026-03-12",
    time: "7:00 PM",
    category: "Youth Theater",
    description:
      "Wealthy hotel owner Max Davenport thinks he's met the love of his life - on a blind dating website.",
    ludusUrl: "https://bst.ludus.com/200510689",
    pricing: "$5, $8, $10, $12, $15",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-005",
    title: "Cecilia",
    date: "2026-03-17",
    time: "7:00 PM",
    category: "Concert Series",
    description:
      "Traditional music that causes a wonderful stir and fills to overflowing every venue!",
    ludusUrl: "https://bst.ludus.com/200512726",
    pricing: "$15, $25, $35",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-006",
    title: "Alash",
    date: "2026-03-18",
    time: "7:00 PM",
    category: "Concert Series",
    description:
      "Alash are masters of Tuvan throat singing, a remarkable technique for singing multiple pitches at the same time.",
    ludusUrl: "https://bst.ludus.com/200512725",
    pricing: "",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-007",
    title: '"Catch A Wave" Beach Boys Show',
    date: "2026-03-21",
    time: "7:00 PM",
    category: "Concert Series",
    description:
      "A high-energy tribute celebrating the greatest hits of The Beach Boys. Surf's up at BST!",
    ludusUrl: "https://bst.ludus.com",
    pricing: "$15, $25, $35",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-008",
    title: "Spring Youth Concert Band Perf",
    date: "2026-03-28",
    time: "2:00 PM",
    category: "Youth Theater",
    description:
      "Our talented youth musicians take the stage for an inspiring afternoon of concert band performances.",
    ludusUrl: "https://bst.ludus.com",
    pricing: "$5, $10",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-009",
    title: "Spring Youth Concert Band Perf",
    date: "2026-03-29",
    time: "2:00 PM",
    category: "Youth Theater",
    description:
      "Second performance! Our talented youth musicians take the stage for an inspiring afternoon of concert band performances.",
    ludusUrl: "https://bst.ludus.com",
    pricing: "$5, $10",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-010",
    title: '"Paperback Writer" - The Beatles Experience',
    date: "2026-04-04",
    time: "7:00 PM",
    category: "Concert Series",
    description:
      "Experience the magic of The Beatles live! A full tribute performance featuring iconic hits from the Fab Four.",
    ludusUrl: "https://bst.ludus.com",
    pricing: "$15, $25, $35",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-011",
    title: "BST 10th Anniversary Gala!",
    date: "2026-04-18",
    time: "6:00 PM",
    category: "Special Event",
    description:
      "Celebrate a decade of live performance at Beale Street Theater! Join us for an unforgettable evening of entertainment, food, and community.",
    ludusUrl: "https://bst.ludus.com",
    pricing: "$50, $75, $100",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
  {
    id: "evt-012",
    title: "Astral Mixtape",
    date: "2026-04-25",
    time: "7:00 PM",
    category: "Concert Series",
    description:
      "A cosmic journey through sound and rhythm. Astral Mixtape blends genres into an out-of-this-world live experience.",
    ludusUrl: "https://bst.ludus.com",
    pricing: "$15, $25, $35",
    venue: "Beale Street Theater",
    address: "302 E Beale St, Kingman, AZ 86401",
  },
];

// ─── Show Cards (with images) ────────────────────────────────────
export const shows = [
  {
    id: "1",
    title: "The Phantom Tollbooth",
    date: "Feb 28, 2026 - 7:00 PM",
    category: "Community Theater",
    imageUrl:
      "https://images.unsplash.com/photo-1771942690809-49605caf6ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MjMwODk4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "2",
    title: 'Improv Group: "TBD"',
    date: "Mar 6, 2026 - 7:00 PM",
    category: "Special Event",
    imageUrl:
      "https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21lZHklMjBzdGFuZHVwJTIwbWljcm9waG9uZSUyMHBlcmZvcm1lcnxlbnwxfHx8fDE3NzIzMDg5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "3",
    title: "Baritone Robert Sims",
    date: "Mar 7, 2026 - 7:00 PM",
    category: "Concert Series",
    imageUrl:
      "https://images.unsplash.com/photo-1763336320780-e4bd80c19b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwbXVzaWNpYW4lMjBzYXhvcGhvbmUlMjBibHVlc3xlbnwxfHx8fDE3NzIzMDg5ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "4",
    title: "Davenport Deception",
    date: "Mar 12, 2026 - 7:00 PM",
    category: "Youth Theater",
    imageUrl:
      "https://images.unsplash.com/photo-1764763181076-62d433e72aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwZHJhbWElMjBwZXJmb3JtYW5jZSUyMGFjdG9yfGVufDF8fHx8MTc3MjMwODk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "5",
    title: "Cecilia",
    date: "Mar 17, 2026 - 7:00 PM",
    category: "Concert Series",
    imageUrl:
      "https://images.unsplash.com/photo-1758670331763-b0f3cd7c1a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsZXQlMjBkYW5jZSUyMHBlcmZvcm1hbmNlJTIwc3RhZ2V8ZW58MXx8fHwxNzcyMjE1MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "6",
    title: "Alash",
    date: "Mar 18, 2026 - 7:00 PM",
    category: "Concert Series",
    imageUrl:
      "https://images.unsplash.com/photo-1767969457898-51d5e9cf81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbGl2ZSUyMG11c2ljJTIwYmFuZCUyMHN0YWdlfGVufDF8fHx8MTc3MjMwODk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];
