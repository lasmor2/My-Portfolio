// src/data/projects.ts
export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Project 1: Backend Only",
    category: "Backend Architecture",
    description:
      "This project focuses solely on the backend logic of a web application. It includes API development, database integration, authentication (JWT/Bcrypt), security middleware (Helmet/CORS), robust validation (Joi), logging (Morgan), and email capabilities (Nodemailer). Ideal for decoupled architectures where the frontend is handled independently.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcryptjs",
      "Nodemailer",
      "Joi",
      "Helmet",
      "Morgan",
    ],
    live: "",
    github: "https://github.com/lasmor2/backend-only2.git",
  },
  {
    title: "EcoSphere Dashboard",
    category: "Full-Stack Development",
    description:
      "A sophisticated environmental monitoring dashboard featuring real-time data visualization, interactive maps, and predictive analytics for climate trends.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "Three.js"],
    live: "https://ecosphere.example.com",
    github: "https://github.com/lekan/ecosphere",
  },
  {
    title: "Aura E-Commerce",
    category: "Creative Frontend",
    description:
      "A premium lifestyle e-commerce platform with fluid micro-interactions, seamless transitions, and a focus on visual storytelling and user engagement.",
    tech: ["React", "Framer Motion", "Stripe API", "Node.js"],
    live: "https://aura-shop.example.com",
    github: "https://github.com/lekan/aura-shop",
  },
];
