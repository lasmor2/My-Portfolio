export interface Project {
  title: string;
  category: string;
  role: string;
  description: string;
  tech: string[];
  architecture: string[];
  highlights: string[];
  result: string;
  live: string;
  github: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Backend API Platform",
    category: "Backend Architecture",
    role: "Backend Developer",
    description:
      "A decoupled backend service focused on authentication, validation, database access, security middleware, logging, and email workflows for production-style web applications.",
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
    architecture: ["Client", "REST API", "Auth", "MongoDB", "Email"],
    highlights: [
      "Designed modular REST endpoints for decoupled client applications.",
      "Implemented JWT authentication with password hashing and request validation.",
      "Added security middleware, structured logs, and transactional email support.",
    ],
    result:
      "Demonstrates backend patterns recruiters expect to see: auth, validation, persistence, observability, and secure API boundaries.",
    live: "",
    github: "https://github.com/lasmor2/backend-only2",
  },
  {
    title: "Jenkins Docker Kubernetes Pipeline",
    category: "DevOps & Automation",
    role: "DevOps Engineer",
    description:
      "An end-to-end delivery pipeline that builds Docker images, pushes versioned artifacts, and deploys application workloads to Kubernetes from Jenkins.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Git", "kubectl", "CI/CD"],
    architecture: ["GitHub", "Jenkins", "DockerHub", "Kubernetes", "Pods"],
    highlights: [
      "Created a repeatable CI/CD flow from source control to container deployment.",
      "Configured Docker image build/push steps and Kubernetes CLI deployment commands.",
      "Documented deployment steps so the pipeline can be reproduced locally.",
    ],
    result:
      "Shows practical cloud delivery knowledge beyond local development, including containers, pipeline automation, and Kubernetes deployment flow.",
    live: "",
    github: "https://github.com/lasmor2/jenkins-docker",
  },
  {
    title: "Expo Mobile App",
    category: "Mobile Development",
    role: "Full-Stack Mobile Developer",
    description:
      "A cross-platform React Native application built with Expo, secure authentication, reusable mobile UI components, and a mobile-first application structure.",
    tech: ["React Native", "Expo", "Clerk", "TypeScript", "Vector Icons"],
    architecture: ["Expo App", "Clerk Auth", "Screens", "Services", "APIs"],
    highlights: [
      "Built reusable mobile screens and UI patterns with Expo and TypeScript.",
      "Integrated Clerk for user authentication and session handling.",
      "Structured the app for future backend API integrations.",
    ],
    result:
      "Highlights the ability to ship client experiences that connect cleanly to authenticated backend systems.",
    live: "",
    github: "https://github.com/lasmor2/reactNative-mobile",
  },
  {
    title: "WalletNative Mobile App",
    category: "FinTech / Full-Stack",
    role: "Full-Stack Developer",
    description:
      "A digital wallet application with a React Native frontend and a custom Express.js backend for account flows, balances, and transaction-style interactions.",
    tech: ["React Native", "Expo", "Express.js", "Node.js", "TypeScript"],
    architecture: [
      "Mobile Client",
      "Express API",
      "Auth",
      "Wallet Logic",
      "Data Store",
    ],
    highlights: [
      "Connected a mobile client to custom backend services.",
      "Modeled wallet-oriented flows around balances and user actions.",
      "Used TypeScript across the stack for clearer contracts and safer iteration.",
    ],
    result:
      "Presents a full-stack product example with stronger backend relevance than a UI-only mobile project.",
    live: "",
    github: "https://github.com/lasmor2/walletNative",
  },
  {
    title: "Stock-Tracker",
    category: "Portfolio & Finance",
    role: "Full-Stack Developer",
    description:
      "A finance dashboard built with Next.js for tracking market data, visualizing trends, and organizing portfolio information in a responsive web interface.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Financial APIs"],
    architecture: [
      "Next.js",
      "API Layer",
      "Market Data",
      "Charts",
      "Portfolio UI",
    ],
    highlights: [
      "Built responsive dashboard views for market and portfolio data.",
      "Integrated external financial data patterns through API-driven UI states.",
      "Organized reusable components for charts, metrics, and user-facing data views.",
    ],
    result:
      "Shows product thinking around data-heavy interfaces and API-backed user workflows.",
    live: "",
    github: "https://github.com/lasmor2/Stock-Tracker",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    role: "Frontend / Full-Stack Developer",
    description:
      "A fast portfolio site built with Next.js, typed content data, responsive sections, SEO metadata, and recruiter-focused project presentation.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    architecture: [
      "Next.js App Router",
      "Typed Data",
      "Sections",
      "SEO",
      "Vercel",
    ],
    highlights: [
      "Built a responsive App Router site with reusable section components.",
      "Added metadata, sitemap, robots, and structured data for discoverability.",
      "Presented engineering work with backend-focused case-study content.",
    ],
    result:
      "Turns the portfolio itself into evidence of thoughtful frontend, SEO, and product presentation work.",
    live: "",
    github: "https://github.com/lasmor2/my-portfoil",
  },
];
