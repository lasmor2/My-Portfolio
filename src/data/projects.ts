// src/data/projects.ts
export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "EcoSphere Dashboard",
    category: "Full-Stack Development",
    description:
      "A sophisticated environmental monitoring dashboard featuring real-time data visualization, interactive maps, and predictive analytics for climate trends.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Three.js"],
    live: "https://ecosphere.example.com",
    github: "https://github.com/lekan/ecosphere",
    image: "/images/projects/ecosphere.png",
  },
  {
    title: "Nexus Task API",
    category: "Backend Architecture",
    description:
      "High-performance RESTful API powering enterprise task management systems. Features robust authentication, role-based access control, and automated CI/CD pipelines.",
    tech: ["NestJS", "PostgreSQL", "Docker", "Redis", "Swagger"],
    live: "",
    github: "https://github.com/lekan/nexus-api",
    image: "/images/projects/nexus-api.png",
  },
  {
    title: "Aura E-Commerce",
    category: "Creative Frontend",
    description:
      "A premium lifestyle e-commerce platform with fluid micro-interactions, seamless transitions, and a focus on visual storytelling and user engagement.",
    tech: ["React", "Framer Motion", "Stripe API", "Node.js"],
    live: "https://aura-shop.example.com",
    github: "https://github.com/lekan/aura-shop",
    image: "/images/projects/aura.png",
  },
];
