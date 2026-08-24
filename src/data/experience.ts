export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "NestArrival",
    role: "Backend Developer",
    period: "May 2026 - Present",
    location: "Remote",
    summary:
      "Building backend services and production workflows for a property platform.",
    achievements: [
      "Designing REST API modules for listing, verification, user, and admin workflows.",
      "Modeling relational data flows for property and account management features.",
      "Supporting production deployment practices with Node.js, PostgreSQL, AWS, Docker, Nginx, and PM2.",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "AWS", "Docker"],
  },
  {
    company: "Freelance / Independent Projects",
    role: "Full-Stack Engineer",
    period: "2023 - Present",
    location: "Nigeria / Remote",
    summary:
      "Delivering web, backend, mobile, and automation projects for real-world product scenarios.",
    achievements: [
      "Built full-stack applications with React, Next.js, React Native, Node.js, and TypeScript.",
      "Implemented authentication, API integration, dashboard views, and deployment workflows.",
      "Created portfolio-ready engineering projects that demonstrate backend, DevOps, and mobile capability.",
    ],
    tech: ["TypeScript", "Next.js", "React Native", "FastAPI", "Docker", "CI/CD"],
  },
];
