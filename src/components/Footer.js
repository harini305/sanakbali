import Link from '@/components/Link'
import { booking, nav, site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="footer-logo" aria-label="Sanak Retreat Bali, home">
            <img src="/images/logo-light.png" alt="" width="500" height="110" loading="lazy" />
          </Link>
          <nav aria-label="Footer" className="footer-nav">
            <ul>
              {nav.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
          <a className="btn btn-gold footer-btn" href={booking.rooms} target="_blank" rel="noopener">
            Book a room<span className="sr-only"> (opens the booking site in a new tab)</span>
          </a>
        </div>

        <div className="footer-bottom">
          <address>{site.address.lines.join(', ')}</address>
          <ul className="footer-contact">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.phone.href}>{site.phone.display}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href={site.instagram} target="_blank" rel="noopener">Instagram</a></li>
            <li><a href={site.facebook} target="_blank" rel="noopener">Facebook</a></li>
          </ul>
          <p>© {new Date().getFullYear()} Sanak Retreat Bali</p>
        </div>
      </div>
    </footer>
  )
}
