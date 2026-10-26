'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Page-level motion, kept deliberately small:
// - a hero entrance (text fades up, image settles from a slight zoom)
// - a gentle fade-up for [data-reveal] blocks that start below the fold
// Nothing runs when the visitor prefers reduced motion, and content above the
// fold is never hidden, so the page reads fine without JavaScript.
export default function Motion() {
  const pathname = usePathname()

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const heroItems = gsap.utils.toArray('[data-hero-item]')
      if (heroItems.length) {
        gsap.to(heroItems, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.12, delay: 0.1 })
      }
      const heroImage = document.querySelector('[data-hero-image]')
      if (heroImage) gsap.fromTo(heroImage, { scale: 1.06 }, { scale: 1, duration: 1.8, ease: 'power2.out' })

      const fold = window.innerHeight * 0.92
      const below = gsap.utils.toArray('[data-reveal]').filter((el) => el.getBoundingClientRect().top > fold)
      gsap.set(below, { opacity: 0, y: 28 })
      ScrollTrigger.batch(below, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08, overwrite: true }),
      })
    })
    // Hero items are hidden by CSS only when motion is allowed; make sure they
    // are visible if the media query does not match.
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set('[data-hero-item]', { opacity: 1, y: 0 })
    })
    return () => mm.revert()
  }, [pathname])

  return null
}
