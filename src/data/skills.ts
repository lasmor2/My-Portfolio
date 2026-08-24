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
    title: "Backend Engineering",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 75, icon: Terminal },
      { name: "TypeScript", level: "Intermediate", percentage: 72, icon: Variable },
      { name: "Express.js", level: "Intermediate", percentage: 72, icon: Code2 },
      { name: "NestJS", level: "Growing", percentage: 55, icon: Cpu },
      { name: "FastAPI", level: "Growing", percentage: 48, icon: Zap },
      { name: "Authentication", level: "Intermediate", percentage: 70, icon: ShieldCheck },
    ],
  },
  {
    id: "data-api",
    title: "Data & API Design",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "Intermediate", percentage: 68, icon: Database },
      { name: "Prisma", level: "Intermediate", percentage: 65, icon: Layers },
      { name: "MongoDB", level: "Intermediate", percentage: 65, icon: Database },
      { name: "REST APIs", level: "Intermediate", percentage: 78, icon: GitBranch },
      { name: "Validation", level: "Intermediate", percentage: 72, icon: ShieldCheck },
    ],
  },
  {
    id: "product-delivery",
    title: "Product Delivery",
    icon: Globe,
    skills: [
      { name: "Next.js", level: "Intermediate", percentage: 75, icon: Zap },
      { name: "React", level: "Intermediate", percentage: 80, icon: Code2 },
      { name: "React Native", level: "Growing", percentage: 58, icon: Smartphone },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 85, icon: Palette },
      { name: "Docker", level: "Growing", percentage: 55, icon: Box },
      { name: "AWS", level: "Growing", percentage: 45, icon: Cloud },
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
  { name: "GSAP", url: "https://gsap.com/docs/v3/" },
  { name: "Three.js", url: "https://threejs.org/docs/" },
];

export const skillsBadgeIcon = SparklesIcon;
export const githubSkillIcon = Github;
