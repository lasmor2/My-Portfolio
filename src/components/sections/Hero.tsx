import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/Layout/social-links";
import { techStack, heroStats } from "@/data/heroData";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-32 pb-24 md:pt-0 md:pb-0">
        {/* ── Text content ── */}
        <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mt-30">
            <span className="block text-white">Full-Stack</span>
            <span className="block bg-clip-text text-transparent bg-linear-to-br from-white via-gray-300 to-gray-500">
              Developer
            </span>
          </h1>

          {/* Availability badge — below headline, works on both mobile and desktop */}
          <div className="flex justify-center md:justify-start">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to opportunities
              <Sparkles className="w-3 h-3 text-yellow-400" />
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
            I design, build, deploy, and scale production-ready applications
            using modern full-stack technologies and DevOps best practices.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/projects">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/contact">
                <Download className="w-4 h-4" />
                Download CV
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>

        {/* ── Profile image ── */}
        <div className="flex justify-center order-1 md:order-2 mt-30">
          <div className="relative">
            {/* Glow spotlight behind card */}
            <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl pointer-events-none" />

            {/* Card-style profile container */}
            <div className="relative w-64 md:w-80">
              {/* Image — rounded rectangle card */}
              <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60">
                <Image
                  src="/images/my-pix.png"
                  alt="Profile picture"
                  fill
                  priority
                  className="object-cover object-top"
                />
                {/* Subtle inner gradient overlay at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat badges */}
              {heroStats.map((stat, i) => (
                <div
                  key={stat.value}
                  className={`absolute flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md shadow-xl
                    ${i === 0 ? "-bottom-4 -left-5" : "-top-4 -right-5"}`}
                >
                  <span className="text-2xl font-bold text-white leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 leading-tight whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
