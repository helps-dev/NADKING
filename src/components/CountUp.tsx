"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up number animation triggered when component scrolls into view.
 * Falls back to formatter prop for arbitrary value formatting.
 */
export function CountUp({
  value,
  duration = 1600,
  format = (v) => v.toLocaleString("en-US"),
  className,
}: {
  value: number;
  duration?: number;
  format?: (v: number) => string;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);
  const elRef = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
              setDisplay(Math.floor(eased * value));
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={elRef} className={className}>
      {format(display)}
    </span>
  );
}
