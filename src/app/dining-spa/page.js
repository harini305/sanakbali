import Img from '@/components/Img'
import { PageIntro } from '@/components/Sections'

export const metadata = {
  title: 'Dining & Spa',
  description: 'The Sanak Kitchen, private dining for two, the Sanak Bar and the Sanak Heal Spa with yoga, meditation and Reiki in Munduk, North Bali.',
  alternates: { canonical: '/dining-spa' },
}

export default function DiningSpaPage() {
  return (
    <>
      <PageIntro title="Dining & Spa" image="terrace">
        <p>Welcome to our family kitchen, a bar above the rice fields and a spa built on Balinese healing rituals.</p>
      </PageIntro>

      <section className="section" id="kitchen" aria-labelledby="kitchen-title">
        <div className="container chapter">
          <div className="intro-text" data-reveal>
            <h2 id="kitchen-title">Sanak Kitchen</h2>
            <p className="lede">Experience the essence of the land and its culture. We make every meal a celebration.</p>
            <p className="muted">
              We work closely with local farmers and cook with organic vegetables from our own garden, and fruit and spices
              from the slopes of Mount Batukaru, alongside meat from Buleleng and fresh seafood from Bali’s northern coast.
              Everything is home-cooked from scratch: comfort food from Bali, Java and other Indonesian islands, Asia and
              around the world.
            </p>
            <h3 id="bar">Sanak Bar</h3>
            <p className="muted">
              Overlooking the rice fields and West Bali National Park, the bar serves Sanak’s signature home-made cocktails,
              selected wines from the region and around the world, and handcrafted herbal drinks with local spices and fruit.
              Enjoy them in the library lounge, at the rice field cabana or over a game of petanque.
            </p>
          </div>
          <div className="mosaic" data-reveal>
            <Img name="cookingSpread" sizes="(min-width: 900px) 30vw, 60vw" />
            <Img name="plates" sizes="(min-width: 900px) 20vw, 40vw" />
            <Img name="drink" sizes="(min-width: 900px) 20vw, 40vw" />
          </div>
        </div>
      </section>

      <section className="section section-stone" id="private-dining" aria-labelledby="private-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="private-title">Private dining for two</h2>
          </div>
          <div className="duo">
            <article data-reveal>
              <Img name="dinnerPavilion" sizes="(min-width: 760px) 45vw, 100vw" />
              <h3>Chef’s Surprise Dinner</h3>
              <p className="muted">
                On a private dining island above a lotus pond, our chef prepares an exclusive three-course feast to your
                taste, with matched tasting wines and a private performance by Balinese dancers from the village.
              </p>
            </article>
            <article data-reveal>
              <Img name="picnic" sizes="(min-width: 760px) 45vw, 100vw" />
              <h3>Picnic de Luxe</h3>
              <p className="muted">
                A private lunch at the foot of the Banyuatis waterfall. After a short car ride, a walk through the rice fields
                and a dip in the waterfall, your personal waiter serves a freshly prepared picnic with a bottle of sparkling wine.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="spa" aria-labelledby="spa-title">
        <div className="container chapter chapter-reverse">
          <div className="intro-text" data-reveal>
            <h2 id="spa-title">Sanak Heal Spa</h2>
            <p className="muted">
              Signature massages, scrubs, flower baths and healing rituals, performed with the Balinese touch. Try our
              handcrafted scrubs, moisturising masks, herbal foot wraps or the signature blends Sanak Garden, Humanity and
              Kindred, made in small batches in Bali by the Sanak family from natural ingredients, with no additives or microbeads.
            </p>
            <h3 id="yoga">Yoga, meditation &amp; Reiki</h3>
            <p className="muted">
              Yoga at Sanak Heal Spa eases and strengthens the body and brings peace of mind; our instructor adapts to your
              preferred style. We also offer ancient Balinese meditation combined with Japanese Reiki, a guided energy
              practice for physical and emotional wellbeing, followed by meditation.
            </p>
          </div>
          <div className="mosaic" data-reveal>
            <Img name="yoga" sizes="(min-width: 900px) 30vw, 60vw" />
            <Img name="spaBath" sizes="(min-width: 900px) 20vw, 40vw" />
            <Img name="healShelf" sizes="(min-width: 900px) 20vw, 40vw" />
          </div>
        </div>
      </section>
    </>
  )
}
