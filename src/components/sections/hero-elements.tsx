"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { techStack, heroBadge, heroStats } from "@/data/heroData";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Reveal from "@/components/animations/Reveal";

export const HeroHeadline = ({ className }: { className?: string }) => (
  <Reveal direction="up" delay={0.16} duration={0.85}>
    <h1 className={className}>
      <span className="block text-foreground">Backend &</span>
      <span className="block bg-clip-text text-transparent bg-linear-to-br from-emerald-500 via-foreground to-cyan-500/70">
        Full-Stack Engineer
      </span>
    </h1>
  </Reveal>
);

export const HeroBadge = ({ className }: { className?: string }) => (
  <Reveal direction="down" delay={0.08} duration={0.7}>
    <div className={className}>
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 backdrop-blur-md">
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span className="motion-reduce:hidden animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        {heroBadge.label}
        <Sparkles className="w-3 h-3 text-yellow-500" aria-hidden="true" />
      </span>
    </div>
  </Reveal>
);

export const HeroDescription = ({ className }: { className?: string }) => (
  <Reveal direction="up" delay={0.26} duration={0.8}>
    <p className={className}>
      I build scalable APIs, backend systems, web applications, and cloud-ready
      products using Node.js, NestJS, TypeScript, FastAPI, PostgreSQL, AWS, and
      Docker.
    </p>
  </Reveal>
);

export const TechStackPills = ({
  containerClassName,
  pillClassName,
}: {
  containerClassName?: string;
  pillClassName?: string;
}) => (
  <Reveal direction="up" delay={0.36} duration={0.75}>
    <div className={containerClassName} aria-label="Primary technology stack">
      {techStack.map((tech) => (
        <a
          key={tech.name}
          href={tech.docs}
          target="_blank"
          rel="noopener noreferrer"
          className={`${pillClassName} effect-button`}
        >
          {tech.name}
        </a>
      ))}
    </div>
  </Reveal>
);

export const HeroCTAs = ({ size }: { size: "sm" | "lg" }) => (
  <Reveal direction="up" delay={0.48} duration={0.75}>
    <div className="flex flex-wrap gap-3">
      <Button
        asChild
        size={size}
        className="effect-button group rounded-md bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5"
      >
        <Link href="/projects">
          View My Work
          <ArrowRight
            className={`${size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} group-hover:translate-x-1 transition-transform`}
          />
        </Link>
      </Button>

      <Button
        asChild
        size={size}
        variant="outline"
        className="effect-button rounded-md border-border bg-secondary/50 text-foreground hover:bg-secondary"
      >
        <Link href="/contact">
          <Mail className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
          Contact Me
        </Link>
      </Button>

      <Button
        asChild
        size={size}
        variant="ghost"
        className="effect-button rounded-md border border-border bg-background/40 text-foreground hover:bg-secondary"
      >
        <a href="/documents/Lekan_Okelola_CV.pdf" download>
          <Download className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
          Download CV
        </a>
      </Button>
    </div>
  </Reveal>
);

export const ProfileImage = ({
  containerClassName,
  imageWrapperClassName,
  isDesktop = false,
}: {
  containerClassName?: string;
  imageWrapperClassName?: string;
  isDesktop?: boolean;
}) => {
  const floatRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = floatRef.current;
      if (!element) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(element, {
          y: -7,
          rotate: 0.35,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(element, { clearProps: "transform" });
      });

      return () => mm.revert();
    },
    { scope: floatRef },
  );

  return (
    <Reveal direction={isDesktop ? "right" : "up"} delay={0.38} duration={0.9}>
      <div className={containerClassName}>
        <div className="w-full max-w-sm lg:max-w-md" ref={floatRef}>
          <div className={imageWrapperClassName}>
            <div className="effect-card relative w-full aspect-4/5 rounded-lg overflow-hidden border border-border shadow-2xl bg-secondary">
              <Image
                src="/images/my-pix.png"
                alt="Lekan Okelola, Backend and Full-Stack Engineer"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 motion-reduce:transition-none hover:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/50 to-transparent" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="effect-card effect-lift rounded-md border border-border bg-background/80 px-3 py-2 text-center shadow-sm backdrop-blur-md hover:border-emerald-500/35"
              >
                <span className="block text-base md:text-xl font-bold text-foreground leading-none">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[9px] md:text-[10px] text-muted-foreground leading-tight whitespace-pre-line uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};
