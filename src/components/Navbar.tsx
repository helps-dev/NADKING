"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buyUrl } from "@/lib/config";

const NAV_ITEMS = [
  { href: "#lore", label: "Lore" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#how-to-buy", label: "How to Buy" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 backdrop-blur-xl bg-[rgba(10,10,10,0.78)] border-b border-[rgba(255,215,0,0.18)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="NADKING home"
        >
          <span className="relative inline-flex w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-1 ring-[rgba(255,215,0,0.4)] glow-purple">
            <Image
              src="/assets/logo.png"
              alt=""
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-xl sm:text-2xl font-bold text-gradient-royal tracking-wider">
            NADKING
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-[var(--color-ink-soft)] hover:text-[var(--color-gold-500)] transition-colors group"
            >
              {item.label}
              <span className="absolute left-4 right-4 bottom-1 h-px bg-[var(--color-gold-500)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={buyUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-royal text-sm"
        >
          Buy on Nad.fun
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full glass"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Open"} menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6 L18 18" />
                <path d="M18 6 L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute left-0 right-0 top-full mt-2 mx-4 rounded-2xl glass-strong p-4"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-base text-[var(--color-ink-soft)] hover:bg-white/5 hover:text-[var(--color-gold-500)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-[rgba(255,215,0,0.16)] my-2" />
              <a
                href={buyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Buy on Nad.fun
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
