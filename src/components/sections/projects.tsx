"use client";
import { Project, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderCode } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-10 px-4 md:py-20 md:px-0 overflow-visible">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/3 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground w-fit">
            <FolderCode size={14} className="text-emerald-500" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
              My Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-500 via-foreground to-foreground/50">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            A selection of my most recent work, ranging from complex enterprise
            APIs to creative frontend experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, idx: number) => (
            <div
              key={project.title}
              className="group relative flex flex-col h-full rounded-[2.5rem] border border-border bg-secondary/30 backdrop-blur-xl overflow-hidden hover:bg-secondary/50 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500 active:scale-[0.98]"
            >
              {/* Project Image Container */}
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  {/* Fallback pattern if image is missing/broken */}
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-secondary flex items-center justify-center -z-10">
                    <FolderCode className="w-12 h-12 text-muted-foreground/20" />
                  </div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = "0";
                    }}
                  />

                  {/* Overlay Glow */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-60" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-background/80 border border-border text-foreground backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Category Badge for imageless projects */}
              {!project.image && (
                <div className="px-8 pt-8">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-secondary border border-border text-foreground">
                    {project.category}
                  </span>
                </div>
              )}

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-border/40 bg-background/40 text-muted-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-6 mt-auto">
                  {project.live && (
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="rounded-full border border-border bg-secondary/30 text-foreground hover:bg-secondary transition-all active:scale-95"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={14} />
                      Codebase
                    </a>
                  </Button>
                </div>
              </div>

              {/* Decorative border highlight */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-emerald-500/0 group-hover:border-emerald-500/20 pointer-events-none transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
