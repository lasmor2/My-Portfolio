import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/Layout/social-links";
import { aboutData } from "@/data/about";
import { ArrowRight, Terminal, User } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative w-full px-4 py-16 md:px-6" id="about">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="flex justify-center lg:col-span-5">
          <div className="about-photo-reveal w-full max-w-sm">
            <div className="effect-card relative aspect-4/5 min-h-[22rem] overflow-hidden rounded-lg border border-border bg-secondary shadow-2xl">
              <Image
                src={aboutData.image}
                alt="Lekan Okelola, Backend and Full-Stack Engineer"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 384px"
                className="object-cover object-top transition-transform duration-700 motion-reduce:transition-none hover:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/75 p-4 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-300">
                  {aboutData.subtitle}
                </p>
                <h3 className="mt-1 text-xl font-bold text-foreground">
                  Lekan Okelola
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 lg:col-span-7">
          <ScrollReveal direction="right" delay={0.15}>
            <div className="flex flex-col gap-3 text-center lg:text-left">
              <div className="mx-auto flex w-fit items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-1 text-muted-foreground lg:mx-0">
                <User size={14} className="text-emerald-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  {aboutData.title}
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-normal text-foreground md:text-5xl">
                Backend-first engineering with full-stack product range.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.25}>
            <div className="space-y-4 text-center lg:text-left">
              {aboutData.description.map((para) => (
                <p
                  key={para}
                  className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {para.split(/(\*\*.*?\*\*)/).map((part, index) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong
                        key={`${part}-${index}`}
                        className="font-semibold text-foreground"
                      >
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    ),
                  )}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35} stagger={0.06}>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="effect-card effect-lift rounded-lg border border-border bg-background/80 p-4 text-center shadow-sm hover:border-emerald-500/35 lg:text-left"
                >
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.45} stagger={0.04}>
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {aboutData.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.55}>
            <div className="flex flex-col gap-5 border-t border-border pt-7">
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="effect-button group rounded-md bg-foreground text-background hover:bg-foreground/90"
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="effect-button rounded-md border-border bg-secondary/50 text-foreground hover:bg-secondary"
                >
                  <Link href="/contact">
                    <Terminal className="h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start">
                <SocialLinks variant="simple" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
