import Link from '@/components/Link'
import Img from '@/components/Img'
import { PageIntro } from '@/components/Sections'
import { experiences, onSite } from '@/data/experiences'
import { site } from '@/data/site'

export const metadata = {
  title: 'Experiences',
  description: 'Village treks, Lake Tamblingan by canoe, a Melukat water blessing, mountain biking, buggy tours and a cooking class around Munduk, North Bali.',
  alternates: { canonical: '/experiences' },
}

export default function ExperiencesPage() {
  return (
    <>
      <PageIntro title="Explore local">
        <p>
          Explore the Munduk mountain valley on foot, by bike and by canoe with our local guides.
        </p>
      </PageIntro>

      <section className="section section-flush" aria-label="Guided experiences">
        <div className="container">
          <ul className="exp-grid">
            {experiences.map((e, i) => (
              <li key={e.id} id={e.id} className="exp-card" data-reveal>
                <div className="exp-media">
                  <Img name={e.image} sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw" priority={i < 3} />
                </div>
                <h2>{e.title}</h2>
                <p className="exp-place">{e.place}</p>
                <p className="muted">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="onsite-title">
        <div className="container onsite">
          <div className="onsite-media" data-reveal>
            <Img name="cookingSpread" sizes="(min-width: 860px) 24vw, 50vw" />
            <Img name="offerings" sizes="(min-width: 860px) 24vw, 50vw" />
          </div>
          <div className="intro-text" data-reveal>
            <h2 id="onsite-title">At the retreat</h2>
            <p className="muted">Closer to home, guests can join on-site activities with the Sanak team:</p>
            <ul className="tick-list tick-cols">
              {onSite.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <p className="muted">
              Private dining and the Picnic de Luxe are on the <Link href="/dining-spa#private-dining">Dining &amp; Spa</Link> page.
              For details and to book an activity, <a href={`mailto:${site.email}`}>email us</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
