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
    title: "Project 2: Jenkins + Docker + Kubernetes CI/CD Pipeline",
    category: "DevOps & Automation",
    description:
      "This project demonstrates an end-to-end CI/CD pipeline automation. It covers building Docker images, pushing to DockerHub, and deploying to a Kubernetes cluster. Features Jenkins Pipeline integration with Kubernetes CLI and Docker plugins for seamless delivery.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Git", "kubectl", "CI/CD"],
    live: "",
    github: "https://github.com/lasmor2/jenkins-docker.git",
  },
  {
    title: "Project 3: Expo Mobile App",
    category: "Mobile Development",
    description:
      "A cross-platform mobile application built with Expo and React Native. Features secure user authentication via Clerk, custom UI components using Expo Vector Icons, and a modern mobile-first architecture.",
    tech: ["React Native", "Expo", "Clerk", "TypeScript", "Vector Icons"],
    live: "",
    github: "https://github.com/lasmor2/reactNative-mobile",
  },
  {
    title: "Project 4: WalletNative Mobile App",
    category: "FinTech / Full-Stack",
    description:
      "A digital wallet application featuring a React Native frontend built with Expo and a robust custom backend powered by Express.js. Focuses on secure transaction handling, real-time balance updates, and a sleek user interface.",
    tech: ["React Native", "Expo", "Express.js", "Node.js", "TypeScript"],
    live: "",
    github: "https://github.com/lasmor2/walletNative",
  },
  {
    title: "Project 5: Stock-Tracker",
    category: "Portfolio & Finance",
    description:
      "A sophisticated stock market tracking application built with Next.js. It allows users to monitor real-time stock prices, visualize market trends through interactive charts, and manage their investment portfolios effectively.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Financial APIs"],
    live: "",
    github: "https://github.com/lasmor2/Stock-Tracker",
  },
];
