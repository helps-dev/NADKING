"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Particles } from "./Particles";

const PARAGRAPHS = [
  "In the land of Monad, where 10,000 transactions per second flow like rivers of pure gold, a forgotten throne sat empty. The chain hummed with power — fast, parallel, eternal — but no king had yet claimed the crown.",
  "The Nads have wandered for too long, scattered across L1s and L2s, searching for a true home. They paid gas in ETH. They prayed for blockspace. They watched their bags bleed while validators ate the feast.",
  "Today, NADKING rises. Not just a token, but a movement. The crown belongs to whoever holds it. No team. No insiders. No promises. Just one rule — the King serves the Kingdom, and the Kingdom is forever.",
];

export function Lore() {
  return (
    <section
      id="lore"
      aria-labelledby="lore-heading"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
        <Particles density={24} color="rgba(168, 132, 255, 0.5)" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-10 lg:gap-14 items-center">
          {/* Crown art */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-60 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(123,63,242,0.45), transparent 70%)",
                }}
              />
              <div className="anim-float-slow relative w-full h-full">
                <Image
                  src="/mascot/mascot-roadmap.webp"
                  alt="NADKING mascot illustration"
                  fill
                  sizes="(min-width: 640px) 320px, 260px"
                  className="object-contain drop-shadow-[0_0_32px_rgba(123,63,242,0.5)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Vertical divider on desktop */}
          <div
            className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-[rgba(255,215,0,0.3)] to-transparent"
            aria-hidden="true"
          />

          {/* Story */}
          <div>
            <motion.h2
              id="lore-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient-royal"
            >
              The Legend of NADKING
            </motion.h2>

            <div className="flex flex-col gap-5 sm:gap-6">
              {PARAGRAPHS.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)] first-letter:font-display first-letter:text-3xl first-letter:text-[var(--color-gold-500)] first-letter:mr-1 first-letter:font-bold"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
