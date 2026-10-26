import Link from '@/components/Link'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <section className="container not-found">
      <h1>This page could not be found</h1>
      <p className="muted">The page may have moved when the site was redesigned.</p>
      <div className="btn-row">
        <Link className="btn btn-gold" href="/">Go to the home page</Link>
        <Link className="btn btn-outline" href="/contact">Contact us</Link>
      </div>
    </section>
  )
}
