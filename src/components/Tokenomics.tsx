"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { SITE } from "@/lib/config";

type StatItem =
  | {
      label: string;
      value: number;
      suffix: string;
      formatNum: boolean;
      isText?: false;
    }
  | { label: string; value: string; isText: true };

const STATS: readonly StatItem[] = [
  {
    label: "Total Supply",
    value: SITE.totalSupply,
    suffix: "",
    formatNum: true,
  },
  { label: "Tax", value: 0, suffix: "%", formatNum: false },
  { label: "Team Allocation", value: 0, suffix: "%", formatNum: false },
  { label: "LP Status", value: "Burned", isText: true },
];

export function Tokenomics() {
  return (
    <section
      id="tokenomics"
      aria-labelledby="tokenomics-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            id="tokenomics-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-royal mb-4"
          >
            The Royal Treasury
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[var(--color-ink-soft)] max-w-2xl mx-auto"
          >
            100% fair launch. No insiders. No promises. Just the king.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
          {/* Left: donut + stats */}
          <div className="flex flex-col gap-8 sm:gap-10">
            {/* Pie / donut */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <svg
                  width="280"
                  height="280"
                  viewBox="0 0 200 200"
                  aria-label="Token distribution: 100% bonding curve"
                  role="img"
                  className="drop-shadow-[0_0_24px_rgba(123,63,242,0.45)]"
                >
                  <defs>
                    <linearGradient
                      id="pieGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#A685FF" />
                      <stop offset="50%" stopColor="#7B3FF2" />
                      <stop offset="100%" stopColor="#321673" />
                    </linearGradient>
                    <linearGradient
                      id="pieRing"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#A88A00" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="92"
                    fill="none"
                    stroke="url(#pieRing)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="76"
                    fill="none"
                    stroke="url(#pieGrad)"
                    strokeWidth="32"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="52"
                    fill="none"
                    stroke="rgba(255,215,0,0.25)"
                    strokeWidth="1"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="font-display text-4xl sm:text-5xl text-gradient-gold font-bold">
                    100%
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--color-ink-soft)] mt-1">
                    Bonding Curve
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5 sm:p-6 flex flex-col gap-2 hover:border-[rgba(255,215,0,0.4)] transition-colors"
                >
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-[var(--color-ink-mute)]">
                    {stat.label}
                  </div>
                  <div className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-gold leading-none">
                    {stat.isText ? (
                      <span>{stat.value}</span>
                    ) : stat.formatNum ? (
                      <CountUp
                        value={stat.value}
                        format={(v) => v.toLocaleString("en-US")}
                      />
                    ) : (
                      <>
                        <CountUp value={stat.value} />
                        {stat.suffix}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: mascot with coins */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]">
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-60 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,215,0,0.35), rgba(123,63,242,0.25) 50%, transparent 75%)",
                }}
                aria-hidden="true"
              />
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/mascot/mascot-tokenomic.webp"
                  alt="NADKING mascot holding piles of gold coins"
                  fill
                  sizes="(min-width: 1280px) 420px, (min-width: 1024px) 380px, (min-width: 640px) 340px, 260px"
                  className="object-contain drop-shadow-[0_18px_36px_rgba(255,215,0,0.35)]"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
