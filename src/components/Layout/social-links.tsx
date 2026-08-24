import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  variant?: "simple" | "premium";
}

export function SocialLinks({
  className = "",
  variant = "premium",
}: SocialLinksProps) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const links = [
    {
      href: "https://github.com/lasmor2",
      label: "GitHub",
      prefix: "Follow on",
      icon: Github,
      ariaLabel: "GitHub Profile",
      color: "hover:bg-foreground/5 hover:text-foreground",
    },
    {
      href: "https://www.linkedin.com/in/lekan-okelola-17b828285/",
      label: "LinkedIn",
      prefix: "Connect on",
      icon: Linkedin,
      ariaLabel: "LinkedIn Profile",
      color: "hover:bg-blue-500/10 hover:text-blue-500",
    },
    ...(whatsappNumber
      ? [
          {
            href: `https://wa.me/${whatsappNumber}`,
            label: "WhatsApp",
            prefix: "Chat on",
            icon: MessageCircle,
            ariaLabel: "WhatsApp Contact",
            color: "hover:bg-emerald-500/10 hover:text-emerald-500",
          },
        ]
      : []),
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
            title={label}
            className="rounded-md border border-border bg-secondary/50 p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <Icon size={16} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-3 md:flex-row ${className}`}>
      {links.map(({ href, label, prefix, icon: Icon, ariaLabel, color }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={`group inline-flex items-center gap-3 rounded-md border border-border bg-secondary/50 px-4 py-3 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${color}`}
        >
          <Icon size={18} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">
              {prefix}
            </span>
            <span className="text-sm font-bold text-foreground">{label}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
