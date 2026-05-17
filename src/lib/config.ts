/**
 * Centralized site configuration.
 * Edit env values in `.env.local` to update — code does not need to change.
 */

export const SITE = {
  name: "NADKING",
  symbol: "$NADKING",
  tagline: "The King of all Nads. Long Live.",
  subTagline: "Live on Monad. Forever in your bag.",
  totalSupply: 1_000_000_000,
  decimals: 18,
  chainName: "Monad",
  chainId: 143,
} as const;

const env = (key: string, fallback = ""): string => {
  // Next.js inlines NEXT_PUBLIC_* at build time
  return process.env[key] ?? fallback;
};

export const LINKS = {
  nadfun: env("NEXT_PUBLIC_NADFUN_URL", "https://nad.fun"),
  twitter: env("NEXT_PUBLIC_TWITTER_URL", "https://x.com/nadking_token"),
  telegram: env("NEXT_PUBLIC_TELEGRAM_URL", "https://t.me/nadking_official"),
  dexscreener: env(
    "NEXT_PUBLIC_DEXSCREENER_URL",
    "https://dexscreener.com/monad",
  ),
  bridge: env("NEXT_PUBLIC_BRIDGE_URL", "https://bridge.monad.xyz"),
} as const;

export const CHAIN = {
  rpc: env("NEXT_PUBLIC_MONAD_RPC", "https://rpc.monad.xyz"),
  chainId: Number(env("NEXT_PUBLIC_MONAD_CHAIN_ID", "143")),
} as const;

export const CONTRACT_ADDRESS: string =
  env("NEXT_PUBLIC_CONTRACT_ADDRESS", "").trim();

export const HAS_CONTRACT = /^0x[a-fA-F0-9]{40}$/.test(CONTRACT_ADDRESS);

export const buyUrl = (): string => {
  if (HAS_CONTRACT) return `${LINKS.nadfun}/token/${CONTRACT_ADDRESS}`;
  return LINKS.nadfun;
};

export const chartUrl = (): string => {
  if (HAS_CONTRACT) return `${LINKS.dexscreener}/${CONTRACT_ADDRESS}`;
  return LINKS.dexscreener;
};
