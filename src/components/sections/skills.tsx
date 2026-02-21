import { skillCategories } from "@/data/skills";
import { BadgeCheck, Sparkles } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

export default function SkillsSection() {
  return (
    <section className="relative w-full py-10 px-4 md:px-0">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
              <Sparkles size={14} />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              Technical{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-500 via-foreground to-foreground/50">
                Skills
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              A comprehensive overview of the technologies and tools I use to
              build robust, scalable, and modern digital applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Grid */}
        <ScrollReveal
          direction="up"
          delay={0.3}
          stagger={0.2}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative p-8 rounded-[2.5rem] border border-border bg-secondary/30 backdrop-blur-xl hover:bg-secondary/50 transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1 rounded-md bg-secondary text-emerald-500/80 group-hover:text-emerald-500 transition-colors">
                              <SkillIcon size={14} />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/60">
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div
                          className="h-1.5 w-full bg-secondary rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={skill.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          {/* Shimmer effect inside progress bar */}
                          <div
                            className="h-full bg-linear-to-r from-emerald-500 to-emerald-400 rounded-full relative"
                            style={{ width: `${skill.percentage}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-shimmer -skew-x-12 translate-x-[-100%] motion-reduce:animate-none" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Hover Glow */}
                <div className="absolute -inset-px rounded-[2.5rem] bg-linear-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </ScrollReveal>

        {/* Floating Tooltips or Tags for secondary mentions */}
        <ScrollReveal
          direction="up"
          delay={0.5}
          stagger={0.05}
          className="pt-12 border-t border-border flex flex-wrap justify-center gap-3"
        >
          <p className="w-full text-center text-xs text-muted-foreground uppercase tracking-widest font-bold mb-4">
            Supporting Ecosystem
          </p>
          {[
            "Babel",
            "Webpack",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "Figma",
            "Linux",
            "Nginx",
          ].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-xl border border-border bg-secondary/50 text-xs font-semibold text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
