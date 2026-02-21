"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/components/Layout/social-links";
import {
  Mail,
  MessageSquare,
  Send,
  User,
  AtSign,
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
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
    <section className="relative w-full py-10 px-4 md:px-0">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 -z-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ── Left Side: Contact Information (5 cols) ── */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
                <Sparkles size={14} />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                  Available for work
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                Let&apos;s build something <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-500 via-foreground to-foreground/50">
                  extraordinary
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Whether you have a specific project in mind or just want to chat
                about development, I&apos;m always open to new opportunities.
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Available for:
                </p>
                <ul className="space-y-2">
                  {[
                    "Full-time roles",
                    "Freelance projects",
                    "Contract work",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground/60 mb-1">
                    Email Me
                  </p>
                  <p className="text-foreground font-medium">
                    okelolalekan2019@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground/60 mb-1">
                    Location
                  </p>
                  <p className="text-foreground font-medium">
                    Lagos, Nigeria (GMT+1)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground/60 mb-1">
                    Availability
                  </p>
                  <p className="text-foreground font-medium">
                    Mon - Fri, 9am - 6pm
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground/60 mb-4 text-center lg:text-left">
                Find me on
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* ── Right Side: Contact Form (7 cols) ── */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-linear-to-tr from-emerald-500/20 via-foreground/5 to-transparent blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 md:p-10 rounded-4xl border border-border bg-background/40 backdrop-blur-2xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground/40">
                        <User size={18} />
                      </div>
                      <Input
                        id="contact-name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50 border-border pl-11 h-12 rounded-xl focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all text-foreground placeholder:text-muted-foreground/30"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground/40">
                        <AtSign size={18} />
                      </div>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-secondary/50 border-border pl-11 h-12 rounded-xl focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all text-foreground placeholder:text-muted-foreground/30"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 ml-1"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none text-muted-foreground/40">
                        <MessageSquare size={18} />
                      </div>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="How can I help you today?"
                        required
                        rows={5}
                        className="bg-secondary/50 border-border pl-11 rounded-xl focus:ring-emerald-500/30 focus:border-emerald-500/50 transition-all resize-none text-foreground placeholder:text-muted-foreground/30"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || success}
                    className={`w-full h-14 rounded-xl font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group
                      ${
                        success
                          ? "bg-emerald-500 text-white"
                          : "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5"
                      }
                    `}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    ) : success ? (
                      <>
                        <CheckCircle2 size={20} />
                        Message Sent
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </Button>

                  {success && (
                    <div className="flex items-center justify-center gap-2 text-emerald-500 dark:text-emerald-400 text-sm font-medium animate-fade-in-down">
                      <CheckCircle2 size={16} />
                      Thanks! I&apos;ll get back to you shortly.
                    </div>
                  )}

                  {error && (
                    <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400 text-sm font-medium animate-fade-in-down">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
