import Img from '@/components/Img'
import { PageIntro } from '@/components/Sections'

export const metadata = {
  title: 'Our Story & We Care',
  description: 'How Sanak Retreat Bali began, and its social, cultural and environmental programmes with the villages around Munduk, North Bali.',
  alternates: { canonical: '/we-care' },
}

// Programme descriptions are condensed from the We Care page. Percentages and
// counts are left out until the owner confirms they are current.
const social = [
  { title: 'Local employment', text: 'We support and train local talent from Buleleng and the villages around Sanak, and help our team take pride and ownership in their work.' },
  { title: 'Education', text: 'We work with the nearby primary school to teach pupils about caring for their environment and about nutrition, and supply whiteboards, posters, books, pens and pencils. The children help in return on our clean-up days.' },
  { title: 'Cultural support', text: 'Sanak supports the children’s tari rejang dance group, which performs at village ceremonies throughout the year and practises at Sanak at sunset.' },
  { title: 'Training', text: 'Each year we sponsor internships for high school and hotel school students, with in-house job training and the chance of permanent employment.' },
  { title: 'Pack for a Purpose', text: 'Save a few kilos in your suitcase for supplies our local elementary school needs, and visit the children while you are here.', link: { href: 'https://www.packforapurpose.org/destinations/southeast-asia/indonesia/sanak-retreat/', label: 'See the supplies list' } },
  { title: 'Local food', text: 'Our meat, salads, vegetables and rice are sourced locally, from the immediate neighbourhood and elsewhere on the island.' },
]

const environment = [
  { title: 'Zero % landfill', text: 'By avoiding, reducing, reusing, sorting and recycling we run our own waste management system. Sanak is plastic-free, and we work with suppliers who help us avoid non-recyclable packaging.' },
  { title: 'Recycling & Bank Sampah', text: 'We built a recycling and sorting station for the community, and a “Bank Sampah” where locals can bring sorted recyclables and be paid the market price.' },
  { title: 'Ecobricks', text: 'We teach employees, families and school children to turn unrecyclable plastic into bricks for furniture and building.', link: { href: 'https://www.ecobricks.org/', label: 'About ecobricks' } },
  { title: 'Refill My Bottle', text: 'Every room has glass drinking bottles and there are water refill stations around the retreat. We are part of Refill My Bottle, which maps free or low-cost refill points across Bali.', link: { href: 'https://refillmybottle.com/', label: 'Refill My Bottle' } },
]

function Programmes({ items, cols = 3 }) {
  return (
    <ul className={`programmes programmes-${cols}`}>
      {items.map((p) => (
        <li key={p.title} data-reveal>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          {p.link && <a href={p.link.href} target="_blank" rel="noopener">{p.link.label}</a>}
        </li>
      ))}
    </ul>
  )
}

export default function WeCarePage() {
  return (
    <>
      <PageIntro title="Our story & how we give back" image="storyHut">
        <p>
          Founded by French philanthropists and committed to social, cultural and environmental responsibility.
        </p>
      </PageIntro>

      <section className="section" aria-labelledby="story-title">
        <div className="container chapter">
          <div className="intro-text" data-reveal>
            <h2 id="story-title">The Sanak story</h2>
            <p className="muted">
              The French founders first travelled to Bali in 2011 and befriended a Balinese family with a history of rice
              farming. From the start they wanted not only to take from the island and its people, but to give back to the
              local community.
            </p>
            <p className="muted">
              They bought land in the village of Kayu Putih near Munduk, famous for its coffee, clove and cacao plantations,
              and with Pak Gusti, the Indonesian owner, created Sanak: a small family-run retreat that the Indonesian family
              would one day own and operate themselves.
            </p>
            <p className="muted">
              Sanak is a small local business that does not compete with the international hotels. It prides itself on
              old-fashioned, quality hospitality, and encourages guests to allow their souls to travel.
            </p>
          </div>
          <div className="mosaic" data-reveal>
            <Img name="villageWomen" sizes="(min-width: 900px) 30vw, 60vw" />
            <Img name="portraitCarrier" sizes="(min-width: 900px) 20vw, 40vw" />
            <Img name="portraitElder" sizes="(min-width: 900px) 20vw, 40vw" />
          </div>
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="social-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="social-title">Social programmes</h2>
            <p>We respect and help to preserve the traditional heritage of our community, and work together on solutions that reduce our impact on the environment.</p>
          </div>
          <Programmes items={social} />
        </div>
      </section>

      <section className="section" aria-labelledby="env-title">
        <div className="container split-head">
          <div className="env-intro" data-reveal>
            <h2 id="env-title">Environmental programmes</h2>
            <p className="muted">We support soft tourism: walks through rice fields and coffee and cacao plantations with local village guides.</p>
            <Img name="recycling" sizes="(min-width: 900px) 34vw, 100vw" />
          </div>
          <Programmes items={environment} cols={2} />
        </div>
      </section>
    </>
  )
}
