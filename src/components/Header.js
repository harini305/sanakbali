'use client'

import Link from '@/components/Link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { booking, nav } from '@/data/site'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  // After a dropdown link is clicked, keep the dropdown shut even while the pointer still hovers it.
  const [hoverLock, setHoverLock] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)

  // Close menus on navigation.
  useEffect(() => {
    setMenuOpen(false)
    setSubOpen(false)
    // A focused dropdown link would keep the menu open via :focus-within.
    if (headerRef.current?.contains(document.activeElement)) document.activeElement.blur()
    // New pages always open at the very top; links with a #section keep their target.
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Escape closes; a click outside closes the desktop dropdown.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
      setSubOpen(false)
    }
    const onClick = (e) => {
      if (!headerRef.current?.contains(e.target)) setSubOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [menuOpen])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', menuOpen)
  }, [menuOpen])

  // Any link in the menu closes it straight away (also when it points to the current page).
  const onNavClick = (e) => {
    if (!e.target.closest('a')) return
    setMenuOpen(false)
    setSubOpen(false)
    setHoverLock(Boolean(e.target.closest('.has-sub')))
    if (headerRef.current?.contains(document.activeElement)) document.activeElement.blur()
  }

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`))

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Sanak Retreat Bali, home">
          <img src="/images/logo-dark.png" alt="" width="500" height="110" />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="menu-toggle-bars" aria-hidden="true" />
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <nav id="site-nav" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main" onClick={onNavClick}>
          <ul className="nav-list">
            {nav.map((item) =>
              item.children ? (
                <li key={item.href} className={`nav-item has-sub${subOpen ? ' is-open' : ''}${hoverLock ? ' hover-lock' : ''}`} onMouseLeave={() => setHoverLock(false)}>
                  <div className="nav-parent">
                    <Link href={item.href} className="nav-link" aria-current={isActive(item.href) ? 'page' : undefined}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="sub-toggle"
                      aria-expanded={subOpen}
                      aria-controls="sub-stay"
                      aria-label={`${item.label} pages`}
                      onClick={() => setSubOpen((v) => !v)}
                    >
                      <svg viewBox="0 0 12 8" width="12" height="8" aria-hidden="true">
                        <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </button>
                  </div>
                  <ul id="sub-stay" className="sub-list">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="sub-link" aria-current={pathname === child.href ? 'page' : undefined}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href} className="nav-item">
                  <Link href={item.href} className="nav-link" aria-current={isActive(item.href) ? 'page' : undefined}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <a className="btn btn-gold nav-book" href={booking.rooms} target="_blank" rel="noopener">
            Book a room<span className="sr-only"> (opens the booking site in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
