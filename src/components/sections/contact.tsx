"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/components/Layout/social-links";
import ScrollReveal from "../animations/ScrollReveal";
import {
  AlertCircle,
  AtSign,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Send,
  Sparkles,
  User,
} from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(
          data.error ||
            data.message ||
            "Failed to send message. Please try again.",
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative w-full px-4 py-16 md:px-6" id="contact">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-8 lg:col-span-5">
          <ScrollReveal direction="left" delay={0.1} className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-emerald-700 dark:text-emerald-300">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Available for work
              </span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-normal text-foreground md:text-5xl">
              Open to remote Backend & Full-Stack Engineering roles.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Based in Nigeria and available for remote international teams, backend roles, full-stack roles, contract builds, and production-focused freelance work.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.2} stagger={0.08} className="space-y-3">
            <a
              href="mailto:contact@lekanokelola.com"
              className="effect-card effect-lift flex items-start gap-4 rounded-lg border border-border bg-background/80 p-4 shadow-sm hover:border-emerald-500/35"
            >
              <span className="rounded-md bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-300">
                <Mail size={20} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <span className="mt-1 block font-medium text-foreground">
                  contact@lekanokelola.com
                </span>
              </span>
            </a>

            <div className="effect-card effect-lift flex items-start gap-4 rounded-lg border border-border bg-background/80 p-4 shadow-sm hover:border-emerald-500/35">
              <span className="rounded-md bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-300">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Location
                </span>
                <span className="mt-1 block font-medium text-foreground">
                  Lagos, Nigeria (GMT+1)
                </span>
              </span>
            </div>

            <div className="effect-card effect-lift flex items-start gap-4 rounded-lg border border-border bg-background/80 p-4 shadow-sm hover:border-emerald-500/35">
              <span className="rounded-md bg-violet-500/10 p-3 text-violet-600 dark:text-violet-300">
                <Clock size={20} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Availability
                </span>
                <span className="mt-1 block font-medium text-foreground">
                  Remote roles, contract work, and freelance projects
                </span>
              </span>
            </div>

            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="effect-card effect-lift flex items-start gap-4 rounded-lg border border-border bg-background/80 p-4 shadow-sm hover:border-emerald-500/35"
              >
                <span className="rounded-md bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-300">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-medium text-foreground">
                    Quick chat option
                  </span>
                </span>
              </a>
            )}
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.35} className="border-t border-border pt-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Professional Links
            </p>
            <SocialLinks variant="simple" />
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <ScrollReveal direction="right" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="effect-card rounded-lg border border-border bg-background/80 p-5 shadow-xl backdrop-blur md:p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">Send a message</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Email is the best route for recruiter and project conversations.
                </p>
              </div>

              <div className="space-y-5">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <Input
                    id="contact-website"
                    name="website"
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-name" className="ml-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="Jane Recruiter"
                      required
                      maxLength={80}
                      className="h-12 rounded-md border-border bg-secondary/45 pl-11 text-foreground placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="ml-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      maxLength={160}
                      className="h-12 rounded-md border-border bg-secondary/45 pl-11 text-foreground placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="ml-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-muted-foreground/50" />
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me about the role, project, or backend problem you want help with."
                      required
                      maxLength={3000}
                      rows={6}
                      className="rounded-md border-border bg-secondary/45 pl-11 text-foreground placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading || success}
                  className={`effect-button h-12 w-full rounded-md font-bold active:scale-[0.99] ${
                    success
                      ? "bg-emerald-600 text-white hover:bg-emerald-600"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {loading ? (
                    <span className="h-5 w-5 rounded-full border-2 border-background/30 border-t-background animate-spin" />
                  ) : success ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </Button>

                {success && (
                  <p className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-300">
                    <CheckCircle2 size={16} />
                    Thanks. I will get back to you shortly.
                  </p>
                )}

                {error && (
                  <p className="flex items-center justify-center gap-2 text-sm font-medium text-red-500 dark:text-red-400">
                    <AlertCircle size={16} />
                    {error}
                  </p>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
