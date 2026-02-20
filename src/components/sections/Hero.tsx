import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/Layout/social-links";
import { techStack, heroBadge, heroStats } from "@/data/heroData";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start md:mt-20 md:items-center px-5 md:px-6 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
      </div>
      <div className="flex md:hidden flex-col w-full pt-28 pb-16 gap-6">
        {/* Headline  mobile*/}
        <h1 className="text-6xl font-bold tracking-tight leading-tight text-center">
          <span className="block text-white">Full-Stack</span>
          <span className="block bg-clip-text text-transparent bg-linear-to-br from-white via-gray-300 to-gray-500">
            Developer
          </span>{" "}
        </h1>

        {/* Profile image — compact, centred */}
        <div className="flex justify-center">
          <div className="relative w-60">
            <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl pointer-events-none" />
            <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60">
              <Image
                src="/images/my-pix.png"
                alt="Profile picture"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Stat badges — smaller on mobile */}
            {heroStats.map((stat, i) => (
              <div
                key={stat.value}
                className={`absolute flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md shadow-lg
                  ${i === 0 ? "-bottom-3 -left-4" : "-top-3 -right-4"}`}
              >
                <span className="text-lg font-bold text-white leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] text-gray-400 leading-tight whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mt-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {heroBadge.label}
            <Sparkles className="w-3 h-3 text-yellow-400" />
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed text-center max-w-xs mx-auto">
          I design, build, deploy, and scale production-ready applications using
          modern full-stack technologies and DevOps best practices.
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/10 bg-white/5 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-3 pt-5">
          <Button
            asChild
            size="sm"
            className="group rounded-full bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <Link href="/projects">
              View Projects
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
          >
            <a href="/resume.pdf" download>
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Social links — bottom */}
        <div className="flex justify-center pt-10 border-t border-white/5">
          <SocialLinks />
        </div>
      </div>

      {/* ════════════════════════════════════════
          DESKTOP LAYOUT  (grid 2-col, hidden on mobile)
      ══════════════════════════════════════════ */}
      <div className="hidden md:grid max-w-6xl w-full mx-auto grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div className="flex flex-col gap-6 text-left">
          {/* Headline */}
          <h1 className="text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block text-white">Full-Stack</span>
            <span className="block bg-clip-text text-transparent bg-linear-to-br from-white via-gray-300 to-gray-500">
              Developer
            </span>
          </h1>

          {/* Badge */}
          <div className="flex justify-start">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {heroBadge.label}
              <Sparkles className="w-3 h-3 text-yellow-400" />
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 leading-relaxed max-w-md">
            I design, build, deploy, and scale production-ready applications
            using modern full-stack technologies and DevOps best practices.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2">
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
          <div className="flex gap-3">
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
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-start">
            <SocialLinks />
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl pointer-events-none" />
            <div className="relative w-96">
              <div className="relative w-full aspect-3/4 rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60">
                <Image
                  src="/images/my-pix.png"
                  alt="Profile picture"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>

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
