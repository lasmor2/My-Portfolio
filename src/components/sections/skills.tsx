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
              The homepage now foregrounds backend keywords while still showing the full-stack and mobile range needed for product teams.
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
                className="rounded-lg border border-border bg-background/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/35 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-md border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <span className="rounded-md bg-secondary p-1 text-emerald-500">
                              <SkillIcon size={14} />
                            </span>
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                            {skill.level}
                          </span>
                        </div>

                        <div
                          className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
                          role="progressbar"
                          aria-valuenow={skill.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <div
                            className="h-full rounded-full bg-linear-to-r from-emerald-600 to-cyan-500"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
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
