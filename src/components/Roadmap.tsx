"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Phase = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  status: "done" | "active" | "soon" | "future";
  icon: string;
};

const PHASES: Phase[] = [
  {
    id: "p1",
    num: "I",
    title: "The Coronation",
    subtitle: "Launch & Community",
    description:
      "Token launch on Nad.fun. Build the kingdom — Twitter, Telegram, the meme army assembles.",
    status: "done",
    icon: "/assets/emoji/2.png",
  },
  {
    id: "p2",
    num: "II",
    title: "The Throne",
    subtitle: "Staking Platform",
    description:
      "Stake $NADKING, earn rewards. Loyal subjects of the King are rewarded handsomely.",
    status: "soon",
    icon: "/assets/emoji/3.png",
  },
  {
    id: "p3",
    num: "III",
    title: "The Royal Decree",
    subtitle: "DAO Governance",
    description:
      "On-chain voting. Holders shape the kingdom — partnerships, treasury, future drops.",
    status: "soon",
    icon: "/assets/emoji/4.png",
  },
  {
    id: "p4",
    num: "IV",
    title: "The Crown Jewels",
    subtitle: "NFT Companion",
    description:
      "Limited NFT collection — exclusive perks, token boosts, and bragging rights for true Nads.",
    status: "soon",
    icon: "/assets/emoji/5.png",
  },
  {
    id: "p5",
    num: "V",
    title: "The Kingdom",
    subtitle: "Cross-chain Expansion",
    description:
      "Bridge the kingdom across chains. Wherever the Nads are, NADKING reigns.",
    status: "future",
    icon: "/assets/emoji/6.png",
  },
];

const statusLabel: Record<Phase["status"], string> = {
  done: "Complete",
  active: "In Progress",
  soon: "Soon™",
  future: "Future",
};

const statusColor: Record<Phase["status"], string> = {
  done: "bg-green-500/15 text-green-300 border-green-500/30",
  active: "bg-purple-500/20 text-[var(--color-purple-200)] border-purple-500/40",
  soon: "bg-yellow-500/10 text-[var(--color-gold-300)] border-yellow-500/30",
  future: "bg-white/5 text-[var(--color-ink-mute)] border-white/10",
};

export function Roadmap() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          {/* Pointing mascot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px]">
              <div
                className="absolute inset-0 -z-10 blur-3xl opacity-60 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(123,63,242,0.5), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <Image
                src="/mascot/mascot-roadmap.webp"
                alt="NADKING mascot pointing toward the roadmap"
                fill
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 160px"
                className="object-contain drop-shadow-[0_12px_28px_rgba(123,63,242,0.5)]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <div className="text-center lg:text-left">
            <motion.h2
              id="roadmap-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-royal"
            >
              The Royal Decree
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-[var(--color-ink-soft)] max-w-2xl mx-auto lg:mx-0 mt-3"
            >
              Five phases to build the kingdom. The path forward, decreed by the King.
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line: vertical on mobile, horizontal on desktop */}
          <div
            aria-hidden="true"
            className="absolute lg:hidden left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-gold-500)] via-[var(--color-purple-500)] to-transparent"
          />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.4)] to-transparent"
          />

          <ol className="relative grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-4">
            {PHASES.map((phase, i) => (
              <motion.li
                key={phase.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 lg:pl-0 group"
              >
                {/* Dot/Icon */}
                <div className="absolute lg:relative lg:left-0 left-0 lg:mx-auto top-0 lg:top-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full glass-strong flex items-center justify-center lg:mb-4 z-10 group-hover:glow-gold transition-shadow overflow-hidden">
                  <Image
                    src={phase.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="w-9 h-9 lg:w-11 lg:h-11 object-contain"
                  />
                </div>

                <div className="glass rounded-2xl p-4 sm:p-5 lg:mt-2 h-full flex flex-col gap-2 hover:border-[rgba(255,215,0,0.45)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-semibold text-[var(--color-gold-500)] tracking-widest">
                      Phase {phase.num}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColor[phase.status]}`}
                    >
                      {statusLabel[phase.status]}
                    </span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-ink)]">
                    {phase.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-ink-mute)]">
                    {phase.subtitle}
                  </div>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mt-1">
                    {phase.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
