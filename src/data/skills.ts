import {
  Code2,
  Layers,
  Cpu,
  Globe,
  Terminal,
  Database,
  Cloud,
  Box,
  GitBranch,
  Github,
  Workflow,
  Palette,
  Zap,
  Variable,
  Smartphone,
} from "lucide-react";

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "Next.js", level: "Intermediate", percentage: 75, icon: Zap },
      { name: "React", level: "Intermediate", percentage: 80, icon: Code2 },
      {
        name: "TypeScript",
        level: "Intermediate",
        percentage: 70,
        icon: Variable,
      },
      {
        name: "Tailwind CSS",
        level: "Intermediate",
        percentage: 85,
        icon: Palette,
      },
      { name: "GSAP", level: "Beginner", percentage: 40, icon: SparklesIcon },
      { name: "Three.js", level: "Beginner", percentage: 35, icon: Layers },
      {
        name: "React Native",
        level: "Beginner",
        percentage: 50,
        icon: Smartphone,
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Database,
    skills: [
      {
        name: "Express",
        level: "Intermediate",
        percentage: 70,
        icon: Terminal,
      },
      { name: "NestJS", level: "Beginner", percentage: 45, icon: Cpu },
      {
        name: "TypeScript",
        level: "Intermediate",
        percentage: 70,
        icon: Variable,
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "AWS", level: "Beginner", percentage: 40, icon: Cloud },
      { name: "Docker", level: "Beginner", percentage: 50, icon: Box },
      { name: "CI/CD", level: "Beginner", percentage: 45, icon: Workflow },
      { name: "Git", level: "Intermediate", percentage: 80, icon: GitBranch },
      { name: "GitHub", level: "Intermediate", percentage: 85, icon: Github },
    ],
  },
];

import { Sparkles as SparklesIcon } from "lucide-react";
