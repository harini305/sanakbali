import { PageIntro } from '@/components/Sections'
import { booking, site } from '@/data/site'

export const metadata = {
  title: 'Contact & directions',
  description: 'Contact Sanak Retreat Bali by email, phone or WhatsApp, and find directions to the retreat near Munduk in Buleleng, North Bali.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact & directions">
        <p>Questions about rooms, packages, activities or transfers? Write to us or send a WhatsApp message.</p>
      </PageIntro>

      <section className="section section-flush">
        <div className="container contact-layout">
          <div className="contact-main">
            <dl className="contact-cards" data-reveal>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
              <div>
                <dt>Phone &amp; WhatsApp</dt>
                <dd><a href={site.phone.href}>{site.phone.display}</a><br /><a href={site.whatsapp} target="_blank" rel="noopener">Message on WhatsApp</a></dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd><address>{site.address.lines.map((l) => <span key={l} className="block">{l}</span>)}</address></dd>
              </div>
              <div>
                <dt>Follow</dt>
                <dd><a href={site.instagram} target="_blank" rel="noopener">Instagram</a><br /><a href={site.facebook} target="_blank" rel="noopener">Facebook</a></dd>
              </div>
            </dl>

            <div className="intro-text" data-reveal>
              <h2>Getting here</h2>
              <p className="muted">
                Sanak Retreat Bali is just five minutes west of the mountain village of Munduk in North Bali. It is about
                45 minutes by car from the coastal town of Lovina, two hours on a scenic road from Ubud and approximately
                three hours from Ngurah Rai International Airport.
              </p>
              <p className="muted">If you would like us to arrange private transport from anywhere in Bali, please contact us.</p>
              <div className="btn-row">
                <a className="btn btn-gold" href={booking.rooms} target="_blank" rel="noopener">
                  Book a room<span className="sr-only"> (opens the booking site in a new tab)</span>
                </a>
                <a className="btn btn-outline" href={`mailto:${site.email}`}>Email us</a>
              </div>
            </div>
          </div>

          <div className="map-wrap" data-reveal>
            <iframe
              className="map"
              src={site.mapEmbed}
              title="Map showing the location of Sanak Retreat Bali"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
