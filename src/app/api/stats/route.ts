import { NextResponse } from "next/server";
import { CONTRACT_ADDRESS, HAS_CONTRACT, SITE } from "@/lib/config";
import { ERC20_ABI, getClient, isAddress } from "@/lib/onchain";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export type StatsPayload = {
  status: "live" | "pending";
  contract: string | null;
  marketCap: number | null;
  holders: number | null;
  volume24h: number | null;
  bondingProgress: number | null;
  totalSupply: number;
  updatedAt: string;
  message?: string;
};

/**
 * GET /api/stats
 *
 * When CONTRACT_ADDRESS is unset → returns "pending" placeholders so the UI
 * can render "—" without errors.
 *
 * When CONTRACT_ADDRESS is set → reads totalSupply on-chain via Monad RPC.
 * Market cap / holders / volume require an indexer or DEX API — when those
 * become available, plug them in here. For now we report a "live" response
 * with on-chain totalSupply only.
 */
export async function GET(): Promise<NextResponse<StatsPayload>> {
  const now = new Date().toISOString();

  if (!HAS_CONTRACT || !isAddress(CONTRACT_ADDRESS)) {
    return NextResponse.json({
      status: "pending",
      contract: null,
      marketCap: null,
      holders: null,
      volume24h: null,
      bondingProgress: null,
      totalSupply: SITE.totalSupply,
      updatedAt: now,
      message: "Contract not deployed yet. Stats will go live after launch.",
    });
  }

  try {
    const client = getClient();
    const supplyRaw = (await client.readContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: ERC20_ABI,
      functionName: "totalSupply",
    })) as bigint;

    const supply = Number(supplyRaw / BigInt(10 ** SITE.decimals));

    return NextResponse.json({
      status: "live",
      contract: CONTRACT_ADDRESS,
      marketCap: null,
      holders: null,
      volume24h: null,
      bondingProgress: null,
      totalSupply: supply || SITE.totalSupply,
      updatedAt: now,
    });
  } catch (err) {
    return NextResponse.json(
      {
        status: "pending",
        contract: CONTRACT_ADDRESS,
        marketCap: null,
        holders: null,
        volume24h: null,
        bondingProgress: null,
        totalSupply: SITE.totalSupply,
        updatedAt: now,
        message:
          err instanceof Error
            ? `RPC error: ${err.message}`
            : "Failed to read contract.",
      },
      { status: 200 },
    );
  }
}
