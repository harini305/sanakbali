import images from '@/data/images.json'

// Responsive <img> backed by the pre-generated WebP widths in public/images.
// `sizes` should describe the rendered width; `priority` is for the LCP image.
export default function Img({ name, sizes = '100vw', priority = false, alt, className, decorative = false }) {
  const img = images[name]
  if (!img) throw new Error(`Unknown image: ${name}`)
  const largest = img.widths.at(-1)
  return (
    <img
      className={className}
      src={`/images/${name}-${largest}.webp`}
      srcSet={img.widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={decorative ? '' : alt ?? img.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  )
}

export const imageSrcSet = (name) => images[name].widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ')
export const imageData = (name) => images[name]
