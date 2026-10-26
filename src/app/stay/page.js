import Link from '@/components/Link'
import Img from '@/components/Img'
import { PageIntro } from '@/components/Sections'
import { facilities, rooms } from '@/data/rooms'

export const metadata = {
  title: 'Accommodation',
  description: 'Wooden bungalows and a three-bedroom pool villa among the rice fields of Munduk, North Bali, with shared facilities and guest services.',
  alternates: { canonical: '/stay' },
}

export default function StayPage() {
  return (
    <>
      <PageIntro title="Accommodation" image="aerial">
        <p>
          Bungalows and a three-bedroom villa among the rice fields, with the comfort of home and none of the gadgets.
        </p>
      </PageIntro>

      <section className="section" aria-label="Room types">
        <div className="container">
          <ul className="compare">
            {rooms.map((room) => (
              <li key={room.slug} className="compare-item" data-reveal>
                <Link href={`/stay/${room.slug}`} className="compare-media" tabIndex={-1} aria-hidden="true">
                  <Img name={room.card} sizes="(min-width: 900px) 30vw, (min-width: 640px) 45vw, 100vw" decorative />
                </Link>
                <h2><Link href={`/stay/${room.slug}`}>{room.name}</Link></h2>
                <p className="muted">{room.summary}</p>
                <dl className="facts">
                  <div><dt>Beds</dt><dd>{room.beds}</dd></div>
                  <div><dt>Guests</dt><dd>{room.capacity ?? 'Please ask us for occupancy'}</dd></div>
                  <div><dt>Highlights</dt><dd>{room.highlights.slice(0, 3).join(' · ')}</dd></div>
                </dl>
                <Link className="btn btn-outline" href={`/stay/${room.slug}`}>View the {room.short}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="facilities-title">
        <div className="container split-head">
          <div className="section-head" data-reveal>
            <h2 id="facilities-title">Guest services &amp; facilities</h2>
            <p>Our team is knowledgeable and glad to help with whatever comes to mind during your stay.</p>
          </div>
          <div className="facilities">
            {facilities.map((f) => (
              <div key={f.group} data-reveal>
                <h3>{f.group}</h3>
                <ul className="tick-list">
                  {f.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
