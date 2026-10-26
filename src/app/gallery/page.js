import Gallery from '@/components/Gallery'
import { PageIntro } from '@/components/Sections'

export const metadata = {
  title: 'Gallery',
  description: 'Photographs of Sanak Retreat Bali: the bungalows and pool villa, rice fields, waterfalls, food, spa and village life around Munduk.',
  alternates: { canonical: '/gallery' },
}

const photos = [
  'aerial', 'villaDusk', 'poolView', 'oneExterior',
  'villaPool', 'portraitKebaya', 'twoExterior', 'oneBedroom',
  'harvest', 'waterfall', 'villaVerandah', 'trekBananas',
  'reading', 'lake', 'healer', 'waterfallGuest',
  'holySpring', 'lakeSunset', 'dancers', 'offerings',
  'cooking', 'terrace', 'dinnerGuests', 'plates',
  'yoga', 'spaBath', 'lotus', 'fieldShelter',
]

export default function GalleryPage() {
  return (
    <>
      <PageIntro title="Gallery">
        <p>The retreat, its rooms and kitchen, and the people and landscapes of the Munduk mountain valley.</p>
      </PageIntro>
      <section className="section section-flush" aria-label="Photographs">
        <div className="container">
          {/* 4 features (2×2) + 4 tall (1×2) + 20 singles = 44 cells: rows fill evenly in 2 and 4 columns. */}
          <Gallery items={photos} feature={['aerial', 'harvest', 'dancers', 'yoga']} tall={['waterfall', 'waterfallGuest']} />
        </div>
      </section>
    </>
  )
}
