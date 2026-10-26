import { Oswald, Source_Sans_3 } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Motion from '@/components/Motion'
import { site } from '@/data/site'
import './globals.css'

// Exactly two families: Oswald for headings (the closest web font to the condensed
// lettering in the Sanak logo), Source Sans 3 for everything else.
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-heading', display: 'swap' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-body', display: 'swap' })

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Mountain retreat in Munduk, North Bali`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, type: 'website', locale: 'en_GB' },
  twitter: { card: 'summary_large_image' },
}

export const viewport = { themeColor: '#FCFBF9' }

// Hides hero text before first paint only when motion is allowed, so GSAP can
// fade it in without a flash. CSS restores it after 2.5 s if scripts fail.
const motionFlag = "if(matchMedia('(prefers-reduced-motion: no-preference)').matches)document.documentElement.classList.add('motion')"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  )
}
