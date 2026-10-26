import Link from '@/components/Link'
import Img from './Img'

export function PageIntro({ title, children, image, imageSizes = '(min-width: 1240px) 1160px, 100vw' }) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="page-intro-head">
          <div className="page-intro-title">
            <h1 data-hero-item>{title}</h1>
          </div>
          {children && <div className="lede" data-hero-item>{children}</div>}
        </div>
        {image && (
          <div className="page-intro-media">
            <Img name={image} priority sizes={imageSizes} />
          </div>
        )}
      </div>
    </section>
  )
}

// Image card used for rooms, packages and "more to explore" rows.
export function Card({ href, image, meta, title, text, sizes, priority }) {
  return (
    <Link className="card" href={href}>
      <div className="card-media"><Img name={image} sizes={sizes} priority={priority} /></div>
      <div className="card-body">
        {meta && <span className="meta">{meta}</span>}
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </div>
    </Link>
  )
}
