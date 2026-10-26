import { notFound } from 'next/navigation'
import Gallery from '@/components/Gallery'
import { Card, PageIntro } from '@/components/Sections'
import { getRoom, rooms } from '@/data/rooms'
import { packages } from '@/data/packages'
import { booking, site } from '@/data/site'

export const dynamicParams = false

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }) {
  const room = getRoom((await params).slug)
  if (!room) return {}
  return {
    title: room.name,
    description: `${room.name} at Sanak Retreat Bali. ${room.summary}`,
    alternates: { canonical: `/stay/${room.slug}` },
  }
}

export default async function RoomPage({ params }) {
  const room = getRoom((await params).slug)
  if (!room) notFound()
  const related = packages.filter((p) => room.packageSlugs.includes(p.slug))
  const others = rooms.filter((r) => r.slug !== room.slug)

  return (
    <>
      <PageIntro title={room.name} image={room.hero}>
        <p>{room.intro}</p>
      </PageIntro>

      <section className="section">
        <div className="container room-detail">
          <div className="booking-bar" data-reveal>
            <dl className="booking-facts">
              <div><dt>Beds</dt><dd>{room.beds}</dd></div>
              <div><dt>Guests</dt><dd>{room.capacity ?? 'Please ask us for maximum occupancy'}</dd></div>
            </dl>
            <div className="booking-actions">
              <a className="btn btn-gold" href={booking.rooms} target="_blank" rel="noopener">
                Check availability<span className="sr-only"> (opens the booking site in a new tab)</span>
              </a>
              <a className="btn btn-outline" href={`mailto:${site.email}?subject=${encodeURIComponent(room.name)}`}>Email us</a>
            </div>
          </div>

          <div className="room-columns">
            <div className="room-text" data-reveal>
              <h2 className="subhead">About the {room.short}</h2>
              {room.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div data-reveal>
              <h2 className="subhead">Highlights</h2>
              <ul className="tick-list tick-cols">
                {room.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-stone section-tight" aria-labelledby="photos-title">
        <div className="container">
          <h2 id="photos-title" className="sr-only">Photos</h2>
          <Gallery items={room.gallery} layout="grid" sizes="(min-width: 760px) 33vw, 50vw" />
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="container split-head">
          <div className="section-head" data-reveal>
            <h2 id="features-title">Room features</h2>
            <p>Shared by all our bungalows and the villa, alongside the highlights above.</p>
          </div>
          <ul className="tick-list cols-list" data-reveal>
            {room.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="more-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="more-title">More to explore</h2>
          </div>
          <ul className="card-row" style={{ '--cols': related.length + others.length }}>
            {related.map((p) => (
              <li key={p.slug} data-reveal>
                <Card href={`/packages#${p.slug}`} image={p.image} meta="Package" title={p.name} text={`${p.nights} nights · ${p.guests}`} sizes="(min-width: 980px) 24vw, (min-width: 640px) 45vw, 100vw" />
              </li>
            ))}
            {others.map((r) => (
              <li key={r.slug} data-reveal>
                <Card href={`/stay/${r.slug}`} image={r.card} meta="Stay" title={r.name} text={r.meta} sizes="(min-width: 980px) 24vw, (min-width: 640px) 45vw, 100vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
