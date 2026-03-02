import { Home, User, LayoutGrid, Wrench } from "lucide-react";
import { NavLink } from "../types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    name: "About",
    link: "/about",
    icon: User,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: LayoutGrid,
  },
  {
    name: "Skills",
    link: "/skills",
    icon: Wrench,
  },
];
