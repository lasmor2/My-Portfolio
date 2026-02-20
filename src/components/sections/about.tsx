import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/Layout/social-links";
import { aboutData } from "@/data/about";
import { ArrowRight, Terminal, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-10 md:py-5 px-4 md:px-0 overflow-visible">
      {/* Background glow accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/[3%] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {" "}
        {/* ── Profile Image Column (LG: 5 cols) ── */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
          <div className="relative group">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-white/20 via-white/5 to-transparent blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Main Image Card */}
            <div className="relative w-[17.5rem] md:w-[22.5rem] h-80 md:h-[30rem] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
              {" "}
              <Image
                src={aboutData.image}
                alt="Profile picture"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Name Tag / Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">
                  Developer
                </p>
                <h3 className="text-xl font-bold text-white">Okelola Lekan</h3>
              </div>
            </div>
          </div>
        </div>
        {/* ── Content Column (LG: 7 cols) ── */}
        <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-2">
          {/* Header */}
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 w-fit mx-auto lg:mx-0">
              <User size={14} className="text-emerald-400" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                {aboutData.title}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crafting Digital <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-white to-gray-500">
                Experiences
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 text-center lg:text-left">
            {aboutData.description.map((para, idx) => (
              <p
                key={idx}
                className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl"
              >
                {para.split(/(\*\*.*?\*\*)/).map((part, i) =>
                  part.startsWith("**") && part.endsWith("**") ? (
                    <strong key={i} className="text-white font-semibold">
                      {part.slice(2, -2)}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </p>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {aboutData.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center lg:text-left"
              >
                <p className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Interests / Tech Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {aboutData.interests.map((interest) => (
              <div
                key={interest}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400"
              >
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                {interest}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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
                className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/5 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Contact me
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
