"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { techStack, heroBadge, heroStats } from "@/data/heroData";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Reveal from "@/components/animations/Reveal";

export const HeroHeadline = ({ className }: { className?: string }) => (
  <Reveal direction="up" delay={0.2} duration={1.2}>
    <h1 className={className}>
      <span className="block text-foreground">Full-Stack</span>
      <span className="block bg-clip-text text-transparent bg-linear-to-br from-foreground via-foreground/70 to-foreground/40">
        Developer
      </span>
    </h1>
  </Reveal>
);

export const HeroBadge = ({ className }: { className?: string }) => (
  <Reveal direction="down" delay={0.1} duration={1}>
    <div className={className}>
      <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 backdrop-blur-md">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        {heroBadge.label}
        <Sparkles className="w-3 h-3 text-yellow-500 shadow-sm" />
      </span>
    </div>
  </Reveal>
);

export const HeroDescription = ({ className }: { className?: string }) => (
  <Reveal direction="up" delay={0.4} duration={1}>
    <p className={className}>
      I design, build, deploy, and scale production-ready applications using
      modern full-stack technologies and DevOps best practices.
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
  <Reveal direction="up" delay={0.6} duration={1}>
    <div className={containerClassName}>
      {techStack.map((tech) => (
        <span key={tech} className={pillClassName}>
          {tech}
        </span>
      ))}
    </div>
  </Reveal>
);

export const HeroCTAs = ({ size }: { size: "sm" | "lg" }) => (
  <Reveal direction="up" delay={0.8} duration={1}>
    <div className="flex gap-3">
      <Button
        asChild
        size={size}
        className="group rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5 transition-all hover:scale-105 active:scale-95"
      >
        <Link href="/projects">
          View Projects
          <ArrowRight
            className={`${size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} group-hover:translate-x-1 transition-transform`}
          />
        </Link>
      </Button>

      <Button
        asChild
        size={size}
        variant="outline"
        className="rounded-full border-border bg-secondary/50 text-foreground hover:bg-secondary transition-all hover:scale-105 active:scale-95"
      >
        <a href="/resume.pdf" download>
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
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: floatRef },
  );

  return (
    <Reveal direction={isDesktop ? "right" : "up"} delay={0.5} duration={1.5}>
      <div className={containerClassName}>
        <div className="relative" ref={floatRef}>
          <div
            className={`absolute ${isDesktop ? "-inset-4 blur-2xl" : "-inset-3 blur-xl"} rounded-3xl bg-foreground/5 pointer-events-none`}
          />{" "}
          <div className={imageWrapperClassName}>
            <div
              className={`relative w-full aspect-3/4 rounded-3xl overflow-hidden border border-border/50 shadow-2xl ${isDesktop ? "shadow-foreground/20" : "shadow-foreground/10"}`}
            >
              <Image
                src="/images/my-pix.png"
                alt="Profile picture"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {heroStats.map((stat, i) => (
              <div
                key={stat.value}
                className={`absolute flex items-center bg-background/80 border border-border backdrop-blur-md shadow-xl
                ${
                  isDesktop
                    ? `gap-2 px-4 py-2.5 rounded-2xl ${i === 0 ? "-bottom-4 -left-5" : "-top-4 -right-5"}`
                    : `gap-1.5 px-3 py-2 rounded-xl ${i === 0 ? "-bottom-3 -left-4" : "-top-3 -right-4"}`
                }`}
              >
                <span
                  className={`${isDesktop ? "text-2xl" : "text-lg"} font-bold text-foreground leading-none`}
                >
                  {stat.value}
                </span>
                <span
                  className={`${isDesktop ? "text-xs" : "text-[10px]"} text-muted-foreground leading-tight whitespace-pre-line`}
                >
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
