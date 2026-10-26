import Img from '@/components/Img'
import { PageIntro } from '@/components/Sections'
import { packages, packageTerms, seasons } from '@/data/packages'
import { booking, site } from '@/data/site'

export const metadata = {
  title: 'Packages',
  description: 'Stay packages at Sanak Retreat Bali: Made in Love, Sanak Spirit, Explore & Adventure, Sanak Family, Cultured Kids and Sanak Eco-Luxe, with seasonal rates.',
  alternates: { canonical: '/packages' },
}

export default function PackagesPage() {
  return (
    <>
      <PageIntro title="Packages">
        <p>
          Six ways to experience Sanak, each combining your stay with meals, massages and local experiences.
        </p>
      </PageIntro>

      <section className="section section-flush" aria-label="Packages and rates">
        <div className="container pkg-list">
          <ul className="anchor-nav" aria-label="Packages on this page" data-hero-item>
            {packages.map((p) => <li key={p.slug}><a href={`#${p.slug}`}>{p.name}</a></li>)}
          </ul>
          {packages.map((p) => (
            <article key={p.slug} id={p.slug} className="pkg" aria-labelledby={`${p.slug}-title`} data-reveal>
              <div className="pkg-media">
                <Img name={p.image} sizes="(min-width: 900px) 40vw, 100vw" />
              </div>
              <div className="pkg-body">
                <h2 id={`${p.slug}-title`}>{p.name}</h2>
                <ul className="pkg-facts">
                  <li>{p.stay}</li>
                  <li>{p.nights} nights</li>
                  <li>{p.guests}</li>
                </ul>
                <p className="muted">{p.teaser}</p>
                <details>
                  <summary>What’s included</summary>
                  <ul className="tick-list">
                    {p.inclusions.map((inc) => <li key={inc}>{inc}</li>)}
                  </ul>
                </details>
                <table className="rates">
                  <caption>Package rate (IDR)</caption>
                  <tbody>
                    {seasons.map((s) => (
                      <tr key={s.key}>
                        <th scope="row">{s.dates.join(' and ')}</th>
                        <td>{p.rates[s.key]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="btn-row">
                  <a className="btn btn-gold" href={booking.packages} target="_blank" rel="noopener">
                    Book this package<span className="sr-only"> (opens Secret Retreats in a new tab)</span>
                  </a>
                  <a className="btn btn-outline" href={`mailto:${site.email}?subject=${encodeURIComponent(`${p.name} package`)}`}>Ask about it</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="booking-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="booking-title">How to book</h2>
            <p>{packageTerms}</p>
          </div>
          <div className="how-to-book" data-reveal>
            <div>
              <h3>Packages</h3>
              <p className="muted small">
                Package bookings are made through Secret Retreats. The booking link includes the promotion
                code <code>{booking.packagePromo}</code>.
              </p>
              <p className="muted small">
                To customise or extend a package, or for more information, email <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
            <div>
              <h3>Room only</h3>
              <p className="muted small">To book a bungalow or the villa without a package, use our direct booking site.</p>
              <p>
                <a className="text-link" href={booking.rooms} target="_blank" rel="noopener">
                  Book a room<span className="sr-only"> (opens the booking site in a new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
