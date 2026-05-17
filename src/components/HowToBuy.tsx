"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS, buyUrl } from "@/lib/config";

const STEPS = [
  {
    n: "01",
    title: "Get Monad",
    description:
      "Bridge your assets to Monad mainnet. Fast finality, low fees.",
    cta: "Open Bridge",
    href: LINKS.bridge,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12h6" />
        <path d="M16 12h6" />
        <path d="M8 12c0-3 2-6 4-6s4 3 4 6-2 6-4 6-4-3-4-6Z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Connect to Nad.fun",
    description:
      "Visit Nad.fun and connect your wallet. MetaMask, Rabby, anything Monad-compatible.",
    cta: "Open Nad.fun",
    href: LINKS.nadfun,
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Search NADKING",
    description:
      "Type NADKING in the search, or paste the contract address directly.",
    cta: "Find NADKING",
    href: buyUrl(),
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Buy with MON",
    description:
      "Set your amount, confirm the transaction, and welcome to the kingdom.",
    cta: "Buy Now",
    href: buyUrl(),
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 7h18l-2 13H5z" />
        <path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
      </svg>
    ),
  },
];

export function HowToBuy() {
  return (
    <section
      id="how-to-buy"
      aria-labelledby="howtobuy-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          {/* Heading */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.h2
              id="howtobuy-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-royal mb-4"
            >
              Claim Your Throne
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-[var(--color-ink-soft)] max-w-2xl mx-auto lg:mx-0"
            >
              Four steps. No gatekeepers. The crown is yours for the taking.
            </motion.p>
          </div>

          {/* Welcome mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mx-auto lg:mx-0 order-1 lg:order-2"
          >
            <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px]">
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-60 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,215,0,0.4), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <Image
                src="/mascot/mascot-welcome.webp"
                alt="NADKING mascot welcoming you to the kingdom"
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 160px"
                className="object-contain drop-shadow-[0_12px_28px_rgba(255,215,0,0.4)]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6 flex flex-col gap-3 hover:border-[rgba(255,215,0,0.45)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <span
                  className="font-display text-5xl font-black leading-none text-transparent"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255,215,0,0.4)",
                  }}
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-[var(--color-gold-500)] group-hover:glow-gold transition-shadow">
                  {step.icon}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mt-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed flex-1">
                {step.description}
              </p>
              <a
                href={step.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold-400)] hover:text-[var(--color-gold-500)] transition-colors"
              >
                {step.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
