// Room content from the current room pages (03-content-inventory.md §3.4).
// Typos are corrected; facts are unchanged. Brochure-only sizes are not used.

const shared = [
  'Complimentary fruit basket',
  'Complimentary drinking water',
  'Free wireless internet',
  'Mini bar',
  'Room and bar service',
  'Mobile phone',
  'Safety deposit box',
  'Air conditioning and ceiling fan',
  'Decorative Indonesian artefacts',
  'Private indoor shower',
  'Hot water',
  'Natural bathroom amenities',
  'Hairdryer',
  'Universal 220V power sockets',
  'Laundry service',
  'Baby cots available',
  'Bamboo toothbrush on request',
  'Mosquito plug on request',
  'No smoking indoors',
]

export const rooms = [
  {
    slug: 'three-bedroom-pool-villa',
    name: 'Three Bedroom Pool Villa',
    short: 'Pool Villa',
    summary: 'Sanak House: a private three-bedroom enclave with its own pool, set back from the main retreat.',
    hero: 'villaAerial',
    card: 'villaPool',
    beds: '3 king beds or 6 twin beds, with a maximum of 2 extra beds',
    capacity: 'Sleeps 8 guests',
    meta: 'Sleeps 8 guests',
    intro: 'Using the human spirit of family as the mantra, the architecture, design and interiors for the Sanak House were created.',
    body: [
      'A sensuous and considered space designed with family and friends in mind. Set back from the main retreat, this three-bedroom private enclave provides multiple living spaces for family and friends to come together, form a sense of calm and tune out from the world.',
      'With your own private pool, indoor/outdoor living, dining experiences and a private meditation deck, there is no reason to leave.',
    ],
    highlights: [
      'Private pool',
      'Outdoor dining pavilion',
      'Private wooden verandahs with daybeds',
      'Dining room',
      'Separate bathrooms with double sink',
      'Super king sized beds',
      'Cable / satellite TV',
      'Coffee / tea making facilities',
      'Daily housekeeping',
      'Extra beds on request',
    ],
    features: shared,
    gallery: ['villaVerandah', 'villaNight', 'villaLiving', 'villaBedroom', 'villaLounge', 'villaDeck'],
    packageSlugs: ['sanak-eco-luxe'],
  },
  {
    slug: 'one-bedroom-bungalow',
    name: 'One Bedroom Bungalow',
    short: 'One Bedroom',
    summary: 'A cosy wooden bungalow over the rice fields, with a private terrace facing the mountains.',
    hero: 'oneExterior',
    card: 'oneExterior',
    beds: '1 king bed or 2 twin beds, with a maximum of 1 extra bed',
    capacity: 'Sleeps 3 guests',
    meta: 'Sleeps 3 guests',
    intro: 'Your bungalow sits over ancient rice fields with uninterrupted views to the mystical Bali mountains.',
    body: [
      'Make your way down a verdant tropical pathway into your cosy bungalow, handcrafted from local wood. A burst of batik on your headboard above your sumptuous bed immerses you instantly in the rich Balinese culture.',
      'Your bathroom, surrounded by soothing textures of wood and stone, opens to the lush garden. Wake in the morning and bask in the sunshine and morning mist on your private terrace.',
    ],
    highlights: [
      'Private wooden verandah with daybed',
      'Super king sized beds',
      'Daily cleaning service',
      'Extra bed on request',
    ],
    features: shared,
    gallery: ['oneTerrace', 'oneBedroom', 'oneMorning'],
    packageSlugs: ['made-in-love', 'sanak-explore-and-adventure', 'sanak-spirit-package'],
  },
  {
    slug: 'two-bedroom-bungalow',
    name: 'Two Bedroom Bungalow',
    short: 'Two Bedroom',
    summary: 'Two-storey bungalows with terraces on both sides for sunrise and sunset over North Bali.',
    hero: 'twoTerrace',
    card: 'twoExterior',
    beds: '2 king beds or 4 twin beds',
    // Capacity is disputed (site: 6 guests; brochure: 4 adults + 1 extra bed).
    capacity: null,
    meta: 'Two storeys · two bedrooms',
    intro: 'Spacious two-storey bungalows with generous terraces on both sides for sunrise and sunset.',
    body: [
      'From sunrise to sunset, the terraces give a dramatic 360-degree view of the surrounding ecological wonderland of North Bali.',
      'Made from local wood and artfully furnished with a collection of handpicked curiosities from the islands, the bedrooms and shared bathroom make this a great shared space to enjoy your rice paddy experience.',
    ],
    highlights: [
      'Sunset and sunrise balcony',
      'Shared bathroom with double sink',
      'Private wooden verandah with daybed',
      'Daily cleaning service',
      'Extra bed on request',
    ],
    features: shared,
    gallery: ['twoExterior', 'twoBedroom', 'twoOpen'],
    packageSlugs: ['sanak-family-package', 'cultured-kids-package'],
  },
]

export const getRoom = (slug) => rooms.find((r) => r.slug === slug)

// Guest services & facilities (03 §3.7), grouped for scanning.
export const facilities = [
  { group: 'Around the retreat', items: ['Swimming pool and sun loungers', 'Communal fire pit', 'Rice field cabana', 'Library with TV and book exchange', 'Games area, darts and petanque', 'Vegetable garden', "Kids' craft corner"] },
  { group: 'Wellbeing & culture', items: ['Spa & retail gallery', 'Yoga & meditation', 'Cooking classes', 'Balinese offering class', 'Daily activities', 'Exclusive private tours'] },
  { group: 'Practical', items: ['Free Wi-Fi', 'Free mobile phone during your stay', 'Laundry services', 'Babysitting service', 'Shuttle services and scooter rental', 'Currency exchange; Mastercard and Visa accepted', '24-hour security and free parking'] },
]
