"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  className = "",
  stagger = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = containerRef.current;
      if (!element) return;

      const targets = Array.from(element.children);
      if (!targets.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      const x = direction === "left" ? -18 : direction === "right" ? 18 : 0;
      const y = direction === "up" ? 20 : direction === "down" ? -20 : 0;

      gsap.set(targets, { willChange: "transform, opacity" });
      gsap.fromTo(
        targets,
        { autoAlpha: 0, x, y, scale: 0.99 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          stagger,
          ease: "power2.out",
          clearProps: "willChange,transform",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
