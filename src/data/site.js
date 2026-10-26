// Verified business facts (docs/source-audit/03-content-inventory.md §1).
// Disputed facts (bungalow count, Two Bedroom capacity, brochure phone number,
// deals) are intentionally not stated anywhere on the site. See README.

export const site = {
  name: 'Sanak Retreat Bali',
  tagline: 'Handpicked with Humanity in Mind',
  description: 'An authentic mountain retreat in Munduk, North Bali: wooden bungalows and a three-bedroom pool villa among rice fields, with local experiences, a family kitchen and the Sanak Heal Spa.',
  url: 'https://sanakbali.com',
  address: {
    lines: ['Banjar Dinas Menagung, Desa Kayu Putih', 'Buleleng, Bali 81152', 'Indonesia'],
    street: 'Banjar Dinas Menagung, Desa Kayu Putih',
    locality: 'Buleleng',
    region: 'Bali',
    postalCode: '81152',
    country: 'ID',
  },
  phone: { display: '+62 811 397 758', href: 'tel:+62811397758' },
  whatsapp: 'https://wa.me/62811397758',
  email: 'intouch@sanakbali.com',
  instagram: 'https://instagram.com/sanakbali/',
  facebook: 'https://web.facebook.com/sanakbali/',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15794.010546447962!2d115.02285993646241!3d-8.252661383811956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf48bba591c11b9a4!2sSANAK+RETREAT+BALI!5e0!3m2!1sen!2sid!4v1542677498039',
}

// Two verified booking destinations. They are not interchangeable:
// - rooms: the header "BOOK NOW" engine on the current site
// - packages: the link on every current package detail page, which carries the
//   RET-SANAK promotion code. The code is only used with this destination.
export const booking = {
  rooms: 'https://www.boutiquehoteldirectbookings.com/hotels/SanakRetreatBali?src=hws',
  packages: 'https://www.secret-retreats.com/en/bookings/property/sanakretreatdirect?promotion_code=RET-SANAK',
  packagePromo: 'RET-SANAK',
}

export const nav = [
  {
    label: 'Stay',
    href: '/stay',
    children: [
      { label: 'All accommodation', href: '/stay' },
      { label: 'Three Bedroom Pool Villa', href: '/stay/three-bedroom-pool-villa' },
      { label: 'One Bedroom Bungalow', href: '/stay/one-bedroom-bungalow' },
      { label: 'Two Bedroom Bungalow', href: '/stay/two-bedroom-bungalow' },
    ],
  },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Dining & Spa', href: '/dining-spa' },
  { label: 'Packages', href: '/packages' },
  { label: 'We Care', href: '/we-care' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]
