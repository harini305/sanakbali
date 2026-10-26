// One-off image pipeline: reads the selected originals from the audit folder
// (never modified) and writes resized WebP derivatives to public/images,
// plus a manifest consumed by the site, the logos, favicon and OG image.
import { mkdir, writeFile, rm } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import { imageSources } from '../src/data/imageSources.mjs'

const ROOT = path.resolve(import.meta.dirname, '..')
const UPLOADS = path.join(ROOT, 'docs/source-audit/assets/uploads')
const OUT = path.join(ROOT, 'public/images')
const WIDTHS = [480, 800, 1200, 1800]

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

const manifest = {}
let total = 0
for (const [key, { src, alt, max = WIDTHS.at(-1) }] of Object.entries(imageSources)) {
  const input = sharp(path.join(UPLOADS, src)).rotate()
  const { width, height } = await input.metadata()
  const cap = Math.min(width, max)
  const widths = WIDTHS.filter((w) => w < cap)
  widths.push(cap)
  for (const w of widths) {
    const file = `${key}-${w}.webp`
    const info = await input.clone().resize({ width: w }).webp({ quality: 72, effort: 5 }).toFile(path.join(OUT, file))
    total += info.size
  }
  manifest[key] = { alt, width, height, widths, original: src }
}

await writeFile(path.join(ROOT, 'src/data/images.json'), JSON.stringify(manifest, null, 1))

// Logo: the original lockup is white on transparent. Keep a white copy for dark
// surfaces and tint a dark copy for the light header.
const logo = path.join(UPLOADS, '2018/11/logo-sanak-retreat-bali.png')
await sharp(logo).png().toFile(path.join(OUT, 'logo-light.png'))
await sharp(logo).ensureAlpha().tint('#2a2620').linear(0.17, 0).png().toFile(path.join(OUT, 'logo-dark.png'))

// Favicon from the stamp emblem (128 px original; the largest available).
const stamp = path.join(UPLOADS, '2018/12/logo-sanak-bali-preloader.png')
await sharp(stamp).png().toFile(path.join(ROOT, 'src/app/icon.png'))
await sharp(stamp).png().toFile(path.join(OUT, 'stamp.png'))
await sharp(stamp).flatten({ background: '#FCFBF9' }).extend({ top: 26, bottom: 26, left: 26, right: 26, background: '#FCFBF9' }).png().toFile(path.join(ROOT, 'src/app/apple-icon.png'))

// Social sharing image.
await sharp(path.join(UPLOADS, imageSources.hero.src)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 78 }).toFile(path.join(ROOT, 'src/app/opengraph-image.jpg'))

console.log(`${Object.keys(manifest).length} images, ${(total / 1048576).toFixed(1)} MB of WebP derivatives`)
