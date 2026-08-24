"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = containerRef.current;
      if (!element) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(element, { autoAlpha: 1, clearProps: "transform" });
        return;
      }

      const x = direction === "left" ? -24 : direction === "right" ? 24 : 0;
      const y = direction === "up" ? 24 : direction === "down" ? -24 : 0;

      gsap.set(element, { willChange: "transform, opacity" });
      gsap.fromTo(
        element,
        { autoAlpha: 0, x, y, scale: 0.985 },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "power2.out",
          clearProps: "willChange,transform",
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
