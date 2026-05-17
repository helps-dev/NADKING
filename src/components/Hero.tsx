"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown } from "./Crown";
import { Particles } from "./Particles";
import { SITE, buyUrl, chartUrl } from "@/lib/config";

const floatingCrowns = [
  { left: "8%", top: "18%", size: 28, delay: 0, dur: 7 },
  { left: "84%", top: "82%", size: 22, delay: 1.2, dur: 9 },
  { left: "14%", top: "68%", size: 18, delay: 2.4, dur: 8 },
  { left: "6%", top: "82%", size: 24, delay: 0.6, dur: 10 },
  { left: "50%", top: "10%", size: 16, delay: 3, dur: 11 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex items-center overflow-hidden pt-24 pb-12"
    >
      {/* Particle background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles density={48} />
      </div>

      {/* Floating crown sprites */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        {floatingCrowns.map((c, i) => (
          <motion.div
            key={i}
            className="absolute opacity-40"
            style={{ left: c.left, top: c.top }}
            animate={{ y: [0, -20, 0], rotate: [0, 6, 0] }}
            transition={{
              duration: c.dur,
              repeat: Infinity,
              delay: c.delay,
              ease: "easeInOut",
            }}
          >
            <Crown size={c.size} />
          </motion.div>
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(123,63,242,0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-10 lg:gap-12 items-center">
          {/* Text column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-8 order-2 lg:order-1">
            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-gradient-royal">The King of all Nads.</span>
              <br />
              <span className="text-[var(--color-ink)]">Long Live.</span>
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[var(--color-ink-soft)] max-w-2xl"
            >
              {SITE.subTagline}
            </motion.p>

            {/* Mcap pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
              id="hero-mcap"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--color-gold-500)] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-[var(--color-gold-500)]" />
              </span>
              <span className="text-[var(--color-ink-mute)]">Market Cap:</span>
              <span
                className="font-mono text-[var(--color-gold-400)] font-semibold"
                id="hero-mcap-value"
              >
                Loading…
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href={buyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal w-full sm:w-auto"
                aria-label="Buy NADKING on Nad.fun"
              >
                <span>Buy on Nad.fun</span>
                <svg
                  width="16"
                  height="16"
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
              <a
                href={chartUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
                aria-label="View NADKING chart on DexScreener"
              >
                View Chart
              </a>
            </motion.div>
          </div>

          {/* Mascot column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
              {/* Glow */}
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-70 anim-pulse-glow rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(123,63,242,0.55), rgba(255,215,0,0.15) 50%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/mascot/mascot-hero.webp"
                  alt="NADKING — the royal lion king mascot in regal pose"
                  fill
                  sizes="(min-width: 1024px) 480px, (min-width: 768px) 420px, (min-width: 640px) 360px, 280px"
                  priority
                  className="object-contain drop-shadow-[0_18px_36px_rgba(123,63,242,0.55)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        aria-label="Scroll to stats"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-ink-mute)] hover:text-[var(--color-gold-500)] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  );
}
