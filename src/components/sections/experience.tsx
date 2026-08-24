"use client";

import { experiences } from "@/data/experience";
import { BadgeCheck, BriefcaseBusiness, MapPin } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

export default function ExperienceSection() {
  return (
    <section className="w-full px-4 py-16 md:px-6" id="experience">
      <div className="mx-auto max-w-6xl space-y-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl space-y-3">
            <div className="flex w-fit items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-1 text-muted-foreground">
              <BriefcaseBusiness size={14} className="text-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Experience
              </span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-normal text-foreground md:text-5xl">
              Professional work recruiters can evaluate fast.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Projects show what I can build. Experience shows where I have been trusted to ship production-oriented engineering work.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} stagger={0.12} className="space-y-5">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-lg border border-border bg-background/80 p-5 shadow-sm backdrop-blur md:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                    {item.role}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-normal text-foreground">
                    {item.company}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground md:text-right">
                  <p className="font-semibold text-foreground">{item.period}</p>
                  <p className="inline-flex items-center gap-1.5 md:justify-end">
                    <MapPin size={14} className="text-emerald-500" />
                    {item.location}
                  </p>
                </div>
              </div>

              <ul className="mt-5 grid gap-3 md:grid-cols-3">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/70 bg-secondary/40 px-2 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
