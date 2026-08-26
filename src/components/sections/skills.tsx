import { skillCategories, supportingEcosystem } from "@/data/skills";
import { Sparkles } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

export default function SkillsSection() {
  return (
    <section className="relative w-full px-4 py-16 md:px-6" id="skills">
      <div className="mx-auto max-w-6xl space-y-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-emerald-700 dark:text-emerald-300">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Technical Skills
              </span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-normal text-foreground md:text-5xl">
              A stack built around APIs, data, and production delivery.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Backend-focused engineering across APIs, databases, cloud deployment, and the web and mobile clients that consume those services.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={0.2}
          stagger={0.12}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.id}
                className="effect-card effect-lift rounded-lg border border-border bg-background/80 p-5 shadow-sm backdrop-blur hover:border-emerald-500/35 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-md border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-md border border-border/70 bg-secondary/35 px-3 py-2.5"
                      >
                        <span className="rounded-md bg-background p-1.5 text-emerald-500 shadow-sm">
                          <SkillIcon size={15} />
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </ScrollReveal>

        <ScrollReveal
          direction="up"
          delay={0.35}
          stagger={0.04}
          className="flex flex-wrap gap-2 border-t border-border pt-8"
        >
          <p className="w-full text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Supporting Ecosystem
          </p>
          {supportingEcosystem.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-foreground"
            >
              {tool.name}
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
