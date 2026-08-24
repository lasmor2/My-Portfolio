"use client";

import { Project, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, GitBranch, Server } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Architecture flow">
      {steps.map((step, index) => (
        <span key={`${step}-${index}`} className="flex items-center gap-2">
          <span className="rounded-md border border-border bg-background/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {step}
          </span>
          {index < steps.length - 1 && (
            <ArrowRight className="h-3 w-3 text-emerald-500" aria-hidden="true" />
          )}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="effect-card effect-lift group flex h-full flex-col rounded-lg border border-border bg-background/80 p-5 shadow-sm backdrop-blur hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
          {project.category}
        </span>
        <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          {project.role}
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold tracking-normal text-foreground transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-300">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      <div className="mt-5 border-y border-border py-4">
        <ArchitectureFlow steps={project.architecture} />
      </div>

      <ul className="mt-5 space-y-3">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <GitBranch className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 rounded-md border border-border bg-secondary/40 px-3 py-2 text-xs font-medium leading-relaxed text-foreground">
        {project.result}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border/70 bg-background/60 px-2 py-1 text-[11px] font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
        {project.live && (
          <Button asChild size="sm" className="effect-button rounded-md bg-emerald-600 text-white hover:bg-emerald-700">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              Live Demo
            </a>
          </Button>
        )}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="effect-button rounded-md border-border bg-secondary/40 text-foreground hover:bg-secondary"
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={14} />
            Codebase
          </a>
        </Button>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="relative w-full px-4 py-16 md:px-6" id="projects">
      <div className="mx-auto max-w-6xl space-y-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="flex w-fit items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-1 text-muted-foreground">
                <Server size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Featured Engineering Work
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-normal text-foreground md:text-5xl">
                Projects that show backend depth, architecture, and delivery.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Each project is framed around role, system shape, engineering decisions, and the practical result instead of screenshots alone.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={0.2}
          stagger={0.08}
          className="grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          {projects.slice(0, 5).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
