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
  sourceLabel?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "AIFIOS — AI Financial Operations Platform",
    category: "FinTech / Backend",
    role: "Backend Developer",
    description:
      "A production-focused financial operations platform with modular backend services, verification and security workflows, transaction handling, notifications, AI-assisted features, and web/mobile clients.",
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "AWS",
      "Nginx",
      "PM2",
    ],
    architecture: ["Web / Mobile", "NestJS API", "Services", "PostgreSQL", "Providers"],
    highlights: [
      "Built and hardened authentication, trusted-device, verification, notification, and financial workflow modules.",
      "Worked with provider integrations, ledger-oriented transaction flows, reconciliation concerns, and production error handling.",
      "Supported deployment and operations across AWS, Docker, Nginx, PM2, CI/CD, and environment-specific services.",
    ],
    result:
      "Demonstrates production backend work across security, data integrity, integrations, financial workflows, and operational delivery.",
    live: "",
    github: "",
    sourceLabel: "Private codebase",
  },
  {
    title: "NestArrival Property Platform",
    category: "Backend / Marketplace",
    role: "Backend Developer",
    description:
      "A property marketplace backend supporting authentication, listing management, owner and tenant verification, admin review, subscriptions, inquiries, CMS content, media workflows, and production deployment.",
    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Resend",
      "AWS EC2",
      "Nginx",
      "PM2",
    ],
    architecture: ["Web Client", "Express API", "Prisma", "PostgreSQL", "AWS"],
    highlights: [
      "Implemented and maintained REST endpoints for listings, verification, administration, inquiries, and supporting product workflows.",
      "Worked on verification state transitions, archive/restore flows, protected listing data, email notifications, and API contracts.",
      "Deployed and operated Node.js services on EC2 behind Nginx with PM2, database migrations, staging environments, and CI/CD checks.",
    ],
    result:
      "Shows end-to-end ownership of a real backend from API contracts and relational data to security, deployment, and production troubleshooting.",
    live: "https://nestarrival.com",
    github: "",
    sourceLabel: "Client codebase",
  },
  {
    title: "Business KYB & Operations Service",
    category: "FastAPI / Business Banking",
    role: "Backend Engineer",
    description:
      "A FastAPI microservice for business onboarding and operations, including KYB workflows, CAC/document verification, business restrictions, payments, invoices, expenses, reporting, reconciliation, and audit trails.",
    tech: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "Pydantic",
      "Dojah",
      "Docker",
      "CI/CD",
    ],
    architecture: ["Clients", "FastAPI", "Domain Services", "PostgreSQL", "KYB Providers"],
    highlights: [
      "Designed business onboarding around identity checks, CAC verification, document analysis, review states, and compliance auditability.",
      "Structured invoice, payment, expense, reporting, reconciliation, and business account flows as reusable backend modules.",
      "Added migration, lint, test, security-scan, deployment, and environment practices appropriate for an independently deployed microservice.",
    ],
    result:
      "Demonstrates Python backend architecture, compliance-aware workflows, service boundaries, and production engineering beyond CRUD-only APIs.",
    live: "",
    github: "",
    sourceLabel: "Private codebase",
  },
  {
    title: "Backend API Platform",
    category: "Backend Architecture",
    role: "Backend Developer",
    description:
      "A public backend project focused on authentication, validation, persistence, security middleware, logging, and email workflows for decoupled client applications.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcryptjs", "Joi", "Helmet"],
    architecture: ["Client", "REST API", "Auth", "MongoDB", "Email"],
    highlights: [
      "Designed modular REST endpoints for decoupled client applications.",
      "Implemented JWT authentication with password hashing and request validation.",
      "Added security middleware, logging, and transactional email support.",
    ],
    result:
      "Provides a public code sample of core backend patterns including auth, validation, persistence, and secure API boundaries.",
    live: "",
    github: "https://github.com/lasmor2/backend-only2",
  },
  {
    title: "Jenkins Docker Kubernetes Pipeline",
    category: "DevOps & Automation",
    role: "DevOps Engineer",
    description:
      "A public delivery pipeline demonstrating container image builds and application deployment to Kubernetes through Jenkins automation.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Git", "kubectl", "CI/CD"],
    architecture: ["GitHub", "Jenkins", "DockerHub", "Kubernetes", "Pods"],
    highlights: [
      "Created a repeatable CI/CD flow from source control to container deployment.",
      "Configured Docker image build/push steps and Kubernetes CLI deployment commands.",
      "Documented the deployment flow so the project can be reviewed and reproduced.",
    ],
    result:
      "Shows practical exposure to containers, CI/CD automation, and Kubernetes delivery alongside backend development.",
    live: "",
    github: "https://github.com/lasmor2/jenkins-docker",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    role: "Full-Stack Developer",
    description:
      "A responsive Next.js portfolio with typed content, recruiter-focused case studies, SEO metadata, structured data, analytics, and a server-side contact workflow.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Resend"],
    architecture: ["Next.js App Router", "Typed Data", "API Route", "SEO", "Vercel"],
    highlights: [
      "Built reusable responsive sections and accessible project presentation components.",
      "Added metadata, sitemap, robots, social previews, and JSON-LD structured data for discoverability.",
      "Implemented a server-side contact workflow with validation and spam controls.",
    ],
    result:
      "Turns the portfolio itself into a public example of frontend quality, SEO, API handling, and product presentation.",
    live: "https://lekanokelola.com",
    github: "https://github.com/lasmor2/My-Portfolio",
  },
];
