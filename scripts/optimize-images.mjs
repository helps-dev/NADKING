import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, parse } from "node:path";

/**
 * One-off image optimizer.
 *
 * Run with: `npm run optimize-images`
 *
 * Generates:
 *   public/og.png                      1200×630   social share card
 *   public/apple-touch-icon.png         180×180   iOS home-screen icon
 *   public/icon.png                     512×512   PWA icon
 *   public/mascot/<name>.webp           ≤1280px wide, quality 85
 *
 * Source artwork lives in public/assets/king/ + public/mascot/.
 * Re-running is safe — outputs are overwritten only when newer.
 */

const ROOT = "public";

async function genOG() {
  const out = `${ROOT}/og.png`;
  await sharp(`${ROOT}/assets/king/king-1.png`)
    .resize(630, 630, {
      fit: "contain",
      background: { r: 10, g: 10, b: 10, alpha: 1 },
    })
    .extend({
      top: 0,
      bottom: 0,
      left: 285,
      right: 285,
      background: { r: 10, g: 10, b: 10, alpha: 1 },
    })
    .png({ quality: 90 })
    .toFile(out);
  console.log("✓", out);
}

async function genIcons() {
  await sharp(`${ROOT}/assets/logo.png`)
    .resize(180, 180, { fit: "cover" })
    .png({ quality: 90 })
    .toFile(`${ROOT}/apple-touch-icon.png`);
  console.log("✓ public/apple-touch-icon.png");

  await sharp(`${ROOT}/assets/logo.png`)
    .resize(512, 512, { fit: "cover" })
    .png({ quality: 90 })
    .toFile(`${ROOT}/icon.png`);
  console.log("✓ public/icon.png");
}

/**
 * Convert every PNG mascot into a WebP at max 1280 px wide.
 * Keeps the original PNG for fallback / source.
 */
async function optimizeMascots() {
  const dir = `${ROOT}/mascot`;
  if (!existsSync(dir)) return;
  const files = await readdir(dir);
  for (const f of files) {
    if (!f.endsWith(".png")) continue;
    const src = join(dir, f);
    const dst = join(dir, `${parse(f).name}.webp`);
    const srcStat = await stat(src);
    if (existsSync(dst)) {
      const dstStat = await stat(dst);
      if (dstStat.mtimeMs >= srcStat.mtimeMs) continue;
    }
    const meta = await sharp(src).metadata();
    const targetWidth = Math.min(meta.width ?? 1280, 1280);
    await sharp(src)
      .resize(targetWidth, null, { withoutEnlargement: true })
      .webp({ quality: 85, effort: 5 })
      .toFile(dst);
    console.log(`✓ ${dst}`);
  }
}

async function main() {
  await mkdir(ROOT, { recursive: true });
  await genOG();
  await genIcons();
  await optimizeMascots();
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
