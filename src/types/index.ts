import React from "react";

export type Theme = "dark" | "light";

export interface NavLink {
  name: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}
