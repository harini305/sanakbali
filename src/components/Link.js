import NextLink from 'next/link'

// Internal links without automatic prefetching. Pages are static and small, so
// fetching them on click is fast, and it avoids a burst of background CDN
// requests for every link that scrolls into view.
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />
}
