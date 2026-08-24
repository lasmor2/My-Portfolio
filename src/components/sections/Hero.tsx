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
    <section className="relative min-h-[92svh] overflow-hidden px-5 pt-28 pb-14 md:px-6 md:pt-32 lg:flex lg:items-center">
      <HeroCanvas />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <HeroBadge className="flex justify-center lg:justify-start" />
          <HeroHeadline className="max-w-4xl text-5xl font-extrabold leading-tight tracking-normal text-foreground sm:text-6xl lg:text-7xl" />
          <HeroDescription className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg" />
          <TechStackPills
            containerClassName="flex flex-wrap justify-center gap-2 lg:justify-start"
            pillClassName="rounded-md border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-foreground"
          />
          <HeroCTAs size="lg" />
          <div className="flex justify-center pt-2 lg:justify-start">
            <SocialLinks variant="simple" />
          </div>
        </div>

        <ProfileImage
          containerClassName="flex justify-center lg:justify-end"
          imageWrapperClassName="relative w-full"
          isDesktop
        />
      </div>
    </section>
  );
}
