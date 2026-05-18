import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import GetTickets from "./pages/GetTickets";
import YouthTheater from "./pages/YouthTheater";
import CommunityTheater from "./pages/CommunityTheater";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "get-tickets", Component: GetTickets },
      { path: "youth-theater", Component: YouthTheater },
      { path: "community-theater", Component: CommunityTheater },
      { path: "blog", Component: Blog },
      { path: "support", Component: Support },
      { path: "contact", Component: Contact },
    ],
  },
]);
