import { rooms } from '@/data/rooms'
import { site } from '@/data/site'

export default function sitemap() {
  const paths = ['', '/stay', ...rooms.map((r) => `/stay/${r.slug}`), '/experiences', '/dining-spa', '/packages', '/we-care', '/gallery', '/contact']
  return paths.map((p) => ({ url: `${site.url}${p}` }))
}
