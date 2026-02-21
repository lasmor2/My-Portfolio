import { SocialLinks } from "@/components/Layout/social-links";
import HeroCanvas from "@/components/three/HeroCanvas";
import {
  HeroHeadline,
  HeroBadge,
  HeroDescription,
  TechStackPills,
  HeroCTAs,
  ProfileImage,
} from "./hero-elements";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start md:mt-20 md:items-center px-5 md:px-6 overflow-hidden">
      {/* Three.js Background */}
      <HeroCanvas />

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col w-full pt-28 pb-16 gap-6">
        <HeroHeadline className="text-6xl font-bold tracking-tight leading-tight text-center" />
        <ProfileImage
          containerClassName="flex justify-center"
          imageWrapperClassName="relative w-60"
        />
        <HeroBadge className="flex justify-center mt-2" />
        <HeroDescription className="text-sm text-muted-foreground leading-relaxed text-center max-w-xs mx-auto" />
        <TechStackPills
          containerClassName="flex flex-wrap justify-center gap-2"
          pillClassName="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border bg-secondary/50 text-muted-foreground"
        />
        <div className="flex justify-center pt-5">
          <HeroCTAs size="sm" />
        </div>
        <div className="flex justify-center pt-10 border-t border-border">
          <SocialLinks />
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:grid max-w-6xl w-full mx-auto grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6 text-left">
          <HeroHeadline className="text-7xl font-extrabold tracking-tight leading-tight" />
          <HeroBadge className="flex justify-start" />
          <HeroDescription className="text-lg text-muted-foreground leading-relaxed max-w-md" />
          <TechStackPills
            containerClassName="flex flex-wrap gap-2"
            pillClassName="px-3 py-1 rounded-full text-xs font-medium border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors cursor-default"
          />
          <HeroCTAs size="lg" />
          <div className="flex justify-start">
            <SocialLinks />
          </div>
        </div>
        <ProfileImage
          containerClassName="flex justify-center"
          imageWrapperClassName="relative w-96"
          isDesktop
        />
      </div>
    </section>
  );
}
