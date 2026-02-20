import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function SocialLinks() {
  const links = [
    {
      href: "https://github.com/lasmor2",
      label: "GitHub",
      icon: Github,
      ariaLabel: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/lekan-okelola-17b828285/",
      label: "LinkedIn",
      icon: Linkedin,
      ariaLabel: "LinkedIn Profile",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label, icon: Icon, ariaLabel }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all hover:scale-105 text-xs font-medium backdrop-blur-sm"
        >
          <Icon size={14} className="shrink-0" />
          {label}
        </Link>
      ))}
    </div>
  );
}
