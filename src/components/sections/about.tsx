import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/Layout/social-links";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10">
      {/* Left: Image */}
      <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border shadow-lg">
        <Image
          src="/images/my-pix.png" // your cartoon avatar
          alt="Profile picture"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="space-y-6 md:max-w-xl text-center md:text-left">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="text-muted-foreground">
          I am a **junior full-stack developer** who designs, builds, deploys,
          and scales production-ready applications. I focus on clean
          architecture, modern technologies, and DevOps best practices.
        </p>

        <p className="text-muted-foreground">
          My tech stack includes **Next.js, React, Express, NestJS, AWS, and
          Docker**, and I love creating applications that are both performant
          and maintainable.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <Button asChild size="default">
            <a href="/projects">View Projects</a>
          </Button>
          <Button asChild size="default" variant="outline">
            <a href="/contact">Contact Me</a>
          </Button>
        </div>

        {/* Social links */}
        <SocialLinks />
      </div>
    </section>
  );
}
