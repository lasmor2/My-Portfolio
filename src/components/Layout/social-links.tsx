import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  variant?: "simple" | "premium";
}

export function SocialLinks({
  className = "",
  variant = "premium",
}: SocialLinksProps) {
  const links = [
    {
      href: "https://github.com/lasmor2",
      label: "GitHub",
      icon: Github,
      ariaLabel: "GitHub Profile",
      color: "hover:bg-white/10 hover:text-white",
      glow: "group-hover:shadow-white/20",
    },
    {
      href: "https://www.linkedin.com/in/lekan-okelola-17b828285/",
      label: "LinkedIn",
      icon: Linkedin,
      ariaLabel: "LinkedIn Profile",
      color: "hover:bg-blue-500/10 hover:text-blue-400",
      glow: "group-hover:shadow-blue-500/20",
    },
  ];

  if (variant === "simple") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {links.map(({ href, label, icon: Icon, ariaLabel }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
          >
            <Icon size={16} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-4 ${className}`}
    >
      {links.map(({ href, label, icon: Icon, ariaLabel, color, glow }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={`group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg ${color} ${glow} backdrop-blur-md overflow-hidden`}
        >
          {/* Subtle background glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <Icon
            size={18}
            className="relative z-10 shrink-0 group-hover:scale-110 transition-transform duration-300"
          />

          <div className="relative z-10 flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">
              Follow on
            </span>
            <span className="text-sm font-bold text-white tracking-tight">
              {label}
            </span>
          </div>

          {/* Animated border line? No, let's stick to clean premium look */}
        </Link>
      ))}
    </div>
  );
}
