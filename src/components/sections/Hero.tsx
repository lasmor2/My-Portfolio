import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/Layout/social-links";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">
            Junior Full-Stack Developer
          </h1>

          <p className="text-lg text-muted-foreground">
            I design, build, deploy, and scale production-ready applications
            using modern full-stack technologies and DevOps best practices.
          </p>

          <p className="text-sm font-medium">
            Next.js · React · Express · NestJS · AWS · Docker
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          <SocialLinks />
        </div>

        {/* Profile image */}
        <div className="flex justify-center md:justify-center">
          <div className="relative w-40 h-50 md:w-60 md:h-60 rounded-full overflow-hidden border">
            <Image
              src="/images/my-pix.png"
              alt="Profile picture"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
