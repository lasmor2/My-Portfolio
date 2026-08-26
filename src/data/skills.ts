import {
  Box,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Github,
  Globe,
  Layers,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles as SparklesIcon,
  Terminal,
  Variable,
  Zap,
} from "lucide-react";

export const skillCategories = [
  {
    id: "backend",
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "TypeScript", icon: Variable },
      { name: "NestJS", icon: Cpu },
      { name: "Express.js", icon: Code2 },
      { name: "FastAPI", icon: Zap },
      { name: "Authentication & Security", icon: ShieldCheck },
    ],
  },
  {
    id: "data",
    title: "Data & Persistence",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Database },
      { name: "REST API Design", icon: GitBranch },
      { name: "Validation & Data Modeling", icon: ShieldCheck },
    ],
  },
  {
    id: "delivery",
    title: "Product & Delivery",
    icon: Globe,
    skills: [
      { name: "Next.js", icon: Zap },
      { name: "React", icon: Code2 },
      { name: "React Native", icon: Smartphone },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
    ],
  },
];

export const supportingEcosystem = [
  { name: "Python", url: "https://docs.python.org/3/" },
  { name: "Redis", url: "https://redis.io/" },
  { name: "Nginx", url: "https://nginx.org/" },
  { name: "PM2", url: "https://pm2.keymetrics.io/" },
  { name: "Jenkins", url: "https://www.jenkins.io/doc/" },
  { name: "Kubernetes", url: "https://kubernetes.io/docs/home/" },
  { name: "Git", url: "https://git-scm.com/doc" },
  { name: "GitHub", url: "https://docs.github.com/" },
  { name: "CI/CD", url: "https://docs.github.com/en/actions" },
  { name: "GSAP", url: "https://gsap.com/docs/v3/" },
  { name: "Three.js", url: "https://threejs.org/docs/" },
];

export const skillsBadgeIcon = SparklesIcon;
export const githubSkillIcon = Github;
