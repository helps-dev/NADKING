import { createPublicClient, http, type Address, type Chain } from "viem";
import { CHAIN } from "./config";

/**
 * Minimal Monad chain definition for viem.
 * We don't need to import a chain package — viem accepts custom chain objects.
 */
export const monadChain: Chain = {
  id: CHAIN.chainId,
  name: "Monad",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: { http: [CHAIN.rpc] },
    public: { http: [CHAIN.rpc] },
  },
};

/**
 * Lazily-instantiated public client. Created once per server instance.
 */
let _client: ReturnType<typeof createPublicClient> | null = null;
export function getClient() {
  if (!_client) {
    _client = createPublicClient({
      chain: monadChain,
      transport: http(CHAIN.rpc, { timeout: 8_000, retryCount: 1 }),
    });
  }
  return _client;
}

/**
 * Standard ERC-20 ABI subset — enough to read totalSupply / balanceOf / decimals.
 */
export const ERC20_ABI = [
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint8" }],
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ type: "uint256" }],
  },
] as const;

export function isAddress(value: string): value is Address {
  return /^0x[a-fA-F0-9]{40}$/.test(value);
}
