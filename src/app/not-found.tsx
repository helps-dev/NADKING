import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Lost in the Kingdom",
  description: "Even kings get lost sometimes. Return to the throne.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Ambient glows */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(123,63,242,0.25), transparent 70%), radial-gradient(ellipse 50% 30% at 50% 90%, rgba(255,215,0,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Mascot */}
        <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]">
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-60 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(123,63,242,0.5), rgba(255,215,0,0.15) 50%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          <Image
            src="/mascot/mascot-funny-sad.webp"
            alt="NADKING mascot looking confused and lost"
            fill
            sizes="(min-width: 768px) 400px, (min-width: 640px) 340px, 260px"
            priority
            className="object-contain drop-shadow-[0_18px_36px_rgba(123,63,242,0.45)]"
          />
        </div>

        {/* 404 */}
        <p
          className="font-display text-7xl sm:text-8xl md:text-9xl font-black leading-none text-transparent"
          style={{
            WebkitTextStroke: "2px rgba(255,215,0,0.5)",
            letterSpacing: "0.02em",
          }}
          aria-hidden="true"
        >
          404
        </p>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-royal">
          Lost in the Kingdom
        </h1>

        <p className="text-base sm:text-lg text-[var(--color-ink-soft)] max-w-xl">
          Even kings get lost sometimes. The page you seek has vanished
          into the parallel chains of Monad — but the throne still awaits.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="btn-royal mt-2"
          aria-label="Return to the NADKING home page"
        >
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
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Return to Throne
        </Link>
      </div>
    </main>
  );
}
