import { BriefcaseBusiness, Home, LayoutGrid, User, Wrench } from "lucide-react";
import { NavLink } from "../types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: LayoutGrid,
  },
  {
    name: "Experience",
    link: "/#experience",
    icon: BriefcaseBusiness,
  },
  {
    name: "Skills",
    link: "/skills",
    icon: Wrench,
  },
  {
    name: "About",
    link: "/about",
    icon: User,
  },
];
