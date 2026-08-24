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
  <Reveal direction="up" delay={0.2} duration={1.1}>
    <h1 className={className}>
      <span className="block text-foreground">Backend &</span>
      <span className="block bg-clip-text text-transparent bg-linear-to-br from-emerald-500 via-foreground to-foreground/60">
        Full-Stack Engineer
      </span>
    </h1>
  </Reveal>
);

export const HeroBadge = ({ className }: { className?: string }) => (
  <Reveal direction="down" delay={0.1} duration={0.9}>
    <div className={className}>
      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 backdrop-blur-md">
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        {heroBadge.label}
        <Sparkles className="w-3 h-3 text-yellow-500" aria-hidden="true" />
      </span>
    </div>
  </Reveal>
);

export const HeroDescription = ({ className }: { className?: string }) => (
  <Reveal direction="up" delay={0.35} duration={1}>
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
  <Reveal direction="up" delay={0.5} duration={1}>
    <div className={containerClassName} aria-label="Primary technology stack">
      {techStack.map((tech) => (
        <a
          key={tech.name}
          href={tech.docs}
          target="_blank"
          rel="noopener noreferrer"
          className={pillClassName}
        >
          {tech.name}
        </a>
      ))}
    </div>
  </Reveal>
);

export const HeroCTAs = ({ size }: { size: "sm" | "lg" }) => (
  <Reveal direction="up" delay={0.65} duration={1}>
    <div className="flex flex-wrap gap-3">
      <Button
        asChild
        size={size}
        className="group rounded-md bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
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
        className="rounded-md border-border bg-secondary/50 text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5 active:translate-y-0"
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
        className="rounded-md border border-border bg-background/40 text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5 active:translate-y-0"
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
      if (!floatRef.current) return;

      gsap.to(floatRef.current, {
        y: -8,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: floatRef },
  );

  return (
    <Reveal direction={isDesktop ? "right" : "up"} delay={0.45} duration={1.2}>
      <div className={containerClassName}>
        <div className="w-full max-w-sm lg:max-w-md" ref={floatRef}>
          <div className={imageWrapperClassName}>
            <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden border border-border shadow-2xl bg-secondary">
              <Image
                src="/images/my-pix.png"
                alt="Lekan Okelola, Backend and Full-Stack Engineer"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/50 to-transparent" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-md border border-border bg-background/80 px-3 py-2 text-center shadow-sm backdrop-blur-md"
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
