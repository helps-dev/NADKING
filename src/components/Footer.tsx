"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { CONTRACT_ADDRESS, HAS_CONTRACT, LINKS, buyUrl, chartUrl } from "@/lib/config";
import { shortenAddress } from "@/lib/format";

const SOCIAL_CARDS = [
  {
    label: "Twitter / X",
    handle: "@nadking_token",
    href: LINKS.twitter,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    handle: "t.me/nadking_official",
    href: LINKS.telegram,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "Nad.fun",
    handle: HAS_CONTRACT ? "Token Page" : "Coming soon",
    href: buyUrl(),
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
  {
    label: "DexScreener",
    handle: HAS_CONTRACT ? "View Chart" : "Coming soon",
    href: chartUrl(),
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 4 4 5-5" />
      </svg>
    ),
  },
];

export function Footer() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (!HAS_CONTRACT) return;
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <footer
      id="footer"
      aria-labelledby="footer-heading"
      className="relative py-20 sm:py-24 mt-8"
    >
      <div className="absolute inset-x-0 top-0 royal-divider" aria-hidden="true" />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative inline-block mb-6"
          >
            <div
              className="absolute inset-0 -z-10 blur-2xl opacity-60 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,215,0,0.4), transparent 70%)",
              }}
            />
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-32 h-32 sm:w-40 sm:h-40"
              style={{ transformOrigin: "50% 90%" }}
            >
              <Image
                src="/mascot/mascot-waving.webp"
                alt="NADKING mascot waving goodbye"
                fill
                sizes="160px"
                className="object-contain drop-shadow-[0_12px_24px_rgba(255,215,0,0.4)]"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
          <motion.h2
            id="footer-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-royal"
          >
            Join the Kingdom
          </motion.h2>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {SOCIAL_CARDS.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-[rgba(255,215,0,0.45)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-full glass-strong flex items-center justify-center text-[var(--color-gold-500)] group-hover:glow-gold transition-shadow">
                {card.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-[var(--color-ink-mute)]">
                  {card.label}
                </div>
                <div className="text-sm sm:text-base font-medium text-[var(--color-ink)] truncate">
                  {card.handle}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contract address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-2xl p-5 sm:p-6 max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="text-xs uppercase tracking-wider text-[var(--color-ink-mute)] mb-1">
                Contract Address
              </div>
              <div className="font-mono text-sm sm:text-base text-[var(--color-gold-400)] break-all">
                {HAS_CONTRACT ? (
                  <>
                    <span className="hidden sm:inline">{CONTRACT_ADDRESS}</span>
                    <span className="sm:hidden">
                      {shortenAddress(CONTRACT_ADDRESS, 6)}
                    </span>
                  </>
                ) : (
                  <span className="text-[var(--color-ink-soft)] italic">
                    Coming soon — launching on Nad.fun
                  </span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onCopy}
              disabled={!HAS_CONTRACT}
              className="btn-ghost text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={copied ? "Copied!" : "Copy contract address"}
            >
              {copied ? (
                <>
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
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[rgba(255,215,0,0.15)] flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex w-6 h-6 rounded-full overflow-hidden ring-1 ring-[rgba(255,215,0,0.4)]">
              <Image
                src="/assets/logo.png"
                alt=""
                fill
                sizes="24px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-base font-semibold text-gradient-royal">
              NADKING
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[var(--color-ink-mute)] max-w-2xl">
            $NADKING is a memecoin with no intrinsic value or expectation of
            financial return. Crypto investments carry risk. Do your own research.
          </p>
          <p className="text-xs text-[var(--color-ink-mute)]">
            © 2026 NADKING. Long live the King.
          </p>
        </div>
      </div>
    </footer>
  );
}
