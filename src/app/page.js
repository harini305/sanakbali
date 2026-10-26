import Link from '@/components/Link'
import Img, { imageSrcSet } from '@/components/Img'
import { booking, site } from '@/data/site'
import { rooms } from '@/data/rooms'
import { packages } from '@/data/packages'
import images from '@/data/images.json'
import s from './home.module.css'

export const metadata = {
  title: { absolute: `${site.name} · Mountain retreat in Munduk, North Bali` },
  description: site.description,
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: site.name,
  slogan: site.tagline,
  url: site.url,
  email: site.email,
  telephone: '+62811397758',
  image: `${site.url}/opengraph-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram],
}

const facts = [
  { title: 'Munduk, North Bali', text: 'A cool mountain valley' },
  { title: 'Bungalows & pool villa', text: 'Set among rice fields' },
  { title: 'Sanak Heal Spa', text: 'Massage, yoga & meditation' },
]

const explore = [
  { image: 'trek', title: 'Village trek', text: 'Rice fields to the waterfall', href: '/experiences#village-trek' },
  { image: 'lake', title: 'Lake Tamblingan', text: 'Jungle trek and canoe', href: '/experiences#lake-tamblingan' },
  { image: 'blessing', title: 'Water blessing', text: 'Melukat at a holy spring', href: '/experiences#water-blessing' },
  { image: 'cooking', title: 'Cooking class', text: 'In Ibu Jero’s home', href: '/experiences#cooking-class' },
  { image: 'dinnerPavilion', title: 'Private dining', text: 'Dinner above a lotus pond', href: '/dining-spa#private-dining' },
  { image: 'yoga', title: 'Spa & yoga', text: 'Balinese healing rituals', href: '/dining-spa#spa' },
]

const pillars = [
  { title: 'Kinfolk', text: '“Sanak” means kinfolk: a small, family-run retreat.' },
  { title: 'Handpicked', text: 'Every item chosen by the owners to share the essence of old Indonesia.' },
  { title: 'Digital detox', text: 'The comfort of home, without the gadgets.' },
]

const care = [
  { title: 'Local talent', text: 'Training and internships for young people from the surrounding villages.' },
  { title: 'Village school', text: 'Supplies and environmental lessons at the nearby primary school.' },
  { title: 'Plastic-free', text: 'Water refill stations, recycling and a Bank Sampah for the community.' },
]

const travel = [
  { time: '5 min', place: 'to Munduk village' },
  { time: '45 min', place: 'to Lovina by car' },
  { time: '2 hrs', place: 'to Ubud' },
  { time: '~3 hrs', place: 'to Ngurah Rai Airport' },
]

// Lowest published season rate, e.g. "8,800,000".
const fromRate = (p) => Object.values(p.rates).sort((a, b) => parseInt(a.replace(/,/g, '')) - parseInt(b.replace(/,/g, '')))[0]

export default function Home() {
  const hero = images.hero
  const [villa, ...bungalows] = rooms

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={s.hero} aria-labelledby="hero-title">
        <div className={s.heroMedia} data-hero-image>
          <picture>
            <source media="(max-width: 699px) and (orientation: portrait)" srcSet={imageSrcSet('heroMobile')} sizes="100vw" />
            <img
              src={`/images/hero-${hero.widths.at(-1)}.webp`}
              srcSet={imageSrcSet('hero')}
              sizes="100vw"
              width={hero.width}
              height={hero.height}
              alt="Rice fields and wooden bungalows below the volcanoes of North Bali"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className={`container ${s.heroInner}`}>
          <div className={s.heroContent}>
            <h1 id="hero-title" data-hero-item>An authentic mountain retreat in North Bali</h1>
            <div className="btn-row" data-hero-item>
              <a className="btn btn-gold" href={booking.rooms} target="_blank" rel="noopener">
                Book a room<span className="sr-only"> (opens the booking site in a new tab)</span>
              </a>
              <Link className="btn btn-light" href="/stay">See the accommodation</Link>
            </div>
          </div>
          <ul className={s.heroBar} data-hero-item>
            {facts.map((f) => (
              <li key={f.title}>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Welcome */}
      <section className={s.welcomeSection} aria-labelledby="welcome-title">
        <div className={s.welcome}>
          <div className={s.welcomeMedia} data-reveal>
            <Img name="reading" sizes="(min-width: 900px) 50vw, 100vw" />
          </div>
          <img className={s.seal} src="/images/stamp.png" alt="" width="128" height="128" loading="lazy" />
          <div className={s.welcomePanel}>
            <div className={s.welcomeText} data-reveal>
              <h2 id="welcome-title">Welcome to the real Bali</h2>
              <p className={s.statement}>
                A tropical adventure wonderland in the cooler Munduk mountain valley, close to jungle, mountains, clove and
                coffee plantations, rice fields, lakes, waterfalls, springs and the sea.
              </p>
              <ul className={s.pillars}>
                {pillars.map((p) => (
                  <li key={p.title}>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn btn-outline" href="/we-care">Our story</Link>
                <Link className="text-link" href="/stay">See the rooms</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stays */}
      <section className="section" aria-labelledby="stays-title">
        <div className="container">
          <div className={s.head} data-reveal>
            <h2 id="stays-title">Where you’ll stay</h2>
            <Link className="text-link" href="/stay">Compare all rooms</Link>
          </div>
          <div className={s.stays}>
            <Link href={`/stay/${villa.slug}`} className={s.stayFeature} data-reveal>
              <Img name={villa.card} sizes="(min-width: 900px) 58vw, 100vw" decorative />
              <div className={s.stayFeatureText}>
                <span className={s.meta}>{villa.meta}</span>
                <h3>{villa.name}</h3>
                <p>{villa.summary}</p>
              </div>
            </Link>
            {bungalows.map((room) => (
              <Link key={room.slug} href={`/stay/${room.slug}`} className={s.stay} data-reveal>
                <div className={s.stayMedia}><Img name={room.card} sizes="(min-width: 900px) 20vw, 45vw" decorative /></div>
                <div className={s.stayText}>
                  <span className={s.meta}>{room.meta}</span>
                  <h3>{room.name}</h3>
                  <p>{room.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className={s.explore} aria-labelledby="explore-title">
        <div className="container">
          <div className={s.head} data-reveal>
            <div className={s.headText}>
              <h2 id="explore-title">Explore local</h2>
              <p>Guided walks, lakes, temples and holy springs around the retreat, plus a family kitchen and spa at home.</p>
            </div>
            <Link className="text-link" href="/experiences">All experiences</Link>
          </div>
          <ul className={s.exploreGrid}>
            {explore.map((e) => (
              <li key={e.href} data-reveal>
                <Link href={e.href} className={s.exploreItem}>
                  <Img name={e.image} sizes="(min-width: 900px) 30vw, 50vw" decorative />
                  <span className={s.exploreText}>
                    <strong>{e.title}</strong>
                    <span>{e.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Packages */}
      <section className="section" aria-labelledby="packages-title">
        <div className="container">
          <div className={s.head} data-reveal>
            <div className={s.headText}>
              <h2 id="packages-title">Packages</h2>
              <p>Stays with meals, massages and experiences included. Rates include tax and service.</p>
            </div>
            <Link className="text-link" href="/packages">Rates and inclusions</Link>
          </div>
          <ul className={s.pkgGrid}>
            {packages.map((p) => (
              <li key={p.slug} data-reveal>
                <Link href={`/packages#${p.slug}`} className={s.pkg}>
                  <div className={s.pkgMedia}><Img name={p.image} sizes="(min-width: 900px) 30vw, 75vw" decorative /></div>
                  <div className={s.pkgBody}>
                    <h3>{p.name}</h3>
                    <span className={s.pkgMeta}>{p.stay} · {p.nights} nights</span>
                    <span className={s.pkgPrice}>From <strong>IDR {fromRate(p)}</strong></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* We care */}
      <section className={s.care} aria-labelledby="care-title">
        <div className={s.careMedia}>
          <Img name="villageWomen" sizes="100vw" decorative />
        </div>
        <div className={`container ${s.careInner}`}>
          <div className={s.careText} data-reveal>
            <h2 id="care-title">Sanak giving back</h2>
            <p>Sanak was founded to give back to the villages around it, and it is run as a plastic-free retreat.</p>
            <Link className={`text-link ${s.careLink}`} href="/we-care">How Sanak gives back</Link>
          </div>
          <ul className={s.careList} data-reveal>
            {care.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Getting here */}
      <section className={s.visit} aria-labelledby="visit-title">
        <div className={`container ${s.visitInner}`}>
          <div className={s.visitText} data-reveal>
            <h2 id="visit-title">Getting here</h2>
            <p>Just west of Munduk in North Bali. We can arrange private transport from anywhere on the island.</p>
            <Link className="text-link" href="/contact">Directions and map</Link>
          </div>
          <ul className={s.travel} data-reveal>
            {travel.map((t) => (
              <li key={t.place}>
                <strong>{t.time}</strong>
                <span>{t.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
