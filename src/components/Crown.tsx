import type { SVGProps } from "react";

/** Decorative SVG crown — accessible by default (aria-hidden). */
export function Crown({
  size = 48,
  className,
  ...rest
}: { size?: number; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <defs>
        <linearGradient id="crownGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE899" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#A88A00" />
        </linearGradient>
        <linearGradient id="crownPurple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A685FF" />
          <stop offset="100%" stopColor="#7B3FF2" />
        </linearGradient>
      </defs>
      <path
        d="M6 22 L16 38 L22 14 L32 32 L42 14 L48 38 L58 22 L54 50 L10 50 Z"
        fill="url(#crownGold)"
        stroke="#FFD700"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="10" y="50" width="44" height="6" rx="1" fill="url(#crownGold)" />
      <circle cx="22" cy="14" r="3" fill="url(#crownPurple)" stroke="#FFD700" strokeWidth="1" />
      <circle cx="42" cy="14" r="3" fill="url(#crownPurple)" stroke="#FFD700" strokeWidth="1" />
      <circle cx="32" cy="32" r="3" fill="url(#crownPurple)" stroke="#FFD700" strokeWidth="1" />
    </svg>
  );
}
