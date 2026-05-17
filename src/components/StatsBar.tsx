"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { formatNumber, formatPercent, formatUsd } from "@/lib/format";
import type { StatsPayload } from "@/app/api/stats/route";

const REFRESH_MS = 10_000;

export function StatsBar() {
  const [data, setData] = useState<StatsPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    async function tick() {
      try {
        const res = await fetch("/api/stats", { cache: "no-store" });
        const json = (await res.json()) as StatsPayload;
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (e) {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Failed to load stats");
      } finally {
        if (!cancelled) timer = setTimeout(tick, REFRESH_MS);
      }
    }

    tick();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Hydrate hero pill if present
  useEffect(() => {
    const node = document.getElementById("hero-mcap-value");
    if (!node) return;
    if (!data || data.status === "pending") {
      node.textContent = "Coming soon";
    } else {
      node.textContent = formatUsd(data.marketCap) || "—";
    }
  }, [data]);

  const isPending = !data || data.status === "pending";

  const cards = [
    {
      label: "Market Cap",
      value: isPending ? "—" : formatUsd(data?.marketCap),
      hint: isPending ? "Pending launch" : undefined,
    },
    {
      label: "Holders",
      value: isPending ? "—" : formatNumber(data?.holders),
      hint: isPending ? "Pending launch" : undefined,
    },
    {
      label: "Volume 24h",
      value: isPending ? "—" : formatUsd(data?.volume24h),
      hint: isPending ? "Pending launch" : undefined,
    },
    {
      label: "Bonding Progress",
      value: isPending ? "—" : formatPercent(data?.bondingProgress),
      hint: isPending ? "Pending launch" : undefined,
      progress: !isPending ? data?.bondingProgress : null,
    },
  ];

  return (
    <section
      id="stats"
      aria-label="Live token statistics"
      className="relative py-10 sm:py-14"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {cards.map((card) => (
            <div
              key={card.label}
              className="glass rounded-2xl px-4 sm:px-5 py-4 sm:py-5 flex flex-col gap-2 hover:border-[rgba(255,215,0,0.4)] transition-colors"
            >
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[var(--color-ink-mute)]">
                {card.label}
              </div>
              <div className="font-mono text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-gold">
                {card.value}
              </div>
              {typeof card.progress === "number" && (
                <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--color-purple-500)] to-[var(--color-gold-500)]"
                    style={{
                      width: `${Math.max(0, Math.min(100, card.progress))}%`,
                    }}
                  />
                </div>
              )}
              {card.hint && (
                <div className="text-[11px] text-[var(--color-ink-mute)]">
                  {card.hint}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {error && (
          <p className="mt-3 text-xs text-[var(--color-ink-mute)] text-center">
            Stats refresh paused — {error}
          </p>
        )}
      </div>
    </section>
  );
}
