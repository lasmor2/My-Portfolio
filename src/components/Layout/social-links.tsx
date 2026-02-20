import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      <Link
        href="https://github.com/your-username"
        target="_blank"
        aria-label="GitHub Profile"
        className="text-muted-foreground hover:text-foreground transition"
      >
        <Github size={22} />
      </Link>

      <Link
        href="https://linkedin.com/in/your-username"
        target="_blank"
        aria-label="LinkedIn Profile"
        className="text-muted-foreground hover:text-foreground transition"
      >
        <Linkedin size={22} />
      </Link>
    </div>
  );
}
