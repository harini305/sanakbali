'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Img, { imageData, imageSrcSet } from './Img'

// Photo grid with an accessible lightbox (Escape, arrow keys, focus kept in
// the dialog and returned to the thumbnail on close).
// layout "mosaic": aligned grid; portrait photos span two rows and names listed
// in `feature` span two columns and two rows. Thumbnails are cropped; the
// lightbox always shows the full photo.
const tileClass = (name, feature, tall) => {
  if (feature.includes(name)) return 'tile-feature'
  const { width, height } = imageData(name)
  return height > width || tall.includes(name) ? 'tile-tall' : undefined
}

export default function Gallery({ items, layout = 'mosaic', sizes, feature = [], tall = [] }) {
  const [index, setIndex] = useState(null)
  const triggers = useRef([])
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const open = index !== null

  const close = useCallback(() => {
    const last = index
    setIndex(null)
    requestAnimationFrame(() => triggers.current[last]?.focus())
  }, [index])
  const step = useCallback((d) => setIndex((i) => (i + d + items.length) % items.length), [items.length])

  useEffect(() => {
    if (!open) return
    document.documentElement.classList.add('lightbox-open')
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
      else if (e.key === 'Tab') {
        const focusable = dialogRef.current.querySelectorAll('button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('lightbox-open')
    }
  }, [open, close, step])

  const current = open ? imageData(items[index]) : null

  return (
    <>
      <ul className={`gallery gallery-${layout}`}>
        {items.map((name, i) => (
          <li key={name} className={layout === 'mosaic' ? tileClass(name, feature, tall) : undefined} data-reveal>
            <button
              type="button"
              className="gallery-item"
              ref={(el) => (triggers.current[i] = el)}
              onClick={() => setIndex(i)}
              aria-label={`Enlarge photo: ${imageData(name).alt}`}
            >
              <Img name={name} sizes={sizes ?? '(min-width: 1100px) 33vw, (min-width: 700px) 40vw, 60vw'} />
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" ref={dialogRef} onClick={(e) => e.target === e.currentTarget && close()}>
          <figure className="lightbox-figure">
            <img
              key={items[index]}
              src={`/images/${items[index]}-${current.widths.at(-1)}.webp`}
              srcSet={imageSrcSet(items[index])}
              sizes="92vw"
              width={current.width}
              height={current.height}
              alt={current.alt}
            />
            <figcaption>
              <span>{current.alt}</span>
              <span className="lightbox-count">{index + 1} / {items.length}</span>
            </figcaption>
          </figure>
          <button type="button" ref={closeRef} className="lightbox-btn lightbox-close" onClick={close} aria-label="Close photo viewer">
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3 3l14 14M17 3 3 17" stroke="currentColor" strokeWidth="1.8" /></svg>
          </button>
          <button type="button" className="lightbox-btn lightbox-prev" onClick={() => step(-1)} aria-label="Previous photo">
            <svg viewBox="0 0 12 20" width="12" height="20" aria-hidden="true"><path d="M10 2 2 10l8 8" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
          </button>
          <button type="button" className="lightbox-btn lightbox-next" onClick={() => step(1)} aria-label="Next photo">
            <svg viewBox="0 0 12 20" width="12" height="20" aria-hidden="true"><path d="m2 2 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>
          </button>
        </div>
      )}
    </>
  )
}
