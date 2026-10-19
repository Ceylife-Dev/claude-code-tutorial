// ─────────────────────────────────────────────────────────────────────────────
// Summit View Landscapes: site content.
// Edit this file to update text, contact details, projects and reviews.
// Items marked PLACEHOLDER are sample copy: replace them with real details
// before the site goes live. (In dev mode they show a small "sample" tag.)
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: 'Summit View Landscapes',
  phone: '(512) 555-0123', // PLACEHOLDER
  phoneHref: 'tel:+15125550123', // PLACEHOLDER
  email: 'hello@summitviewlandscapes.com', // PLACEHOLDER
  city: 'Austin, Texas',
  hours: 'Mon–Fri 7am–6pm · Sat by appointment', // PLACEHOLDER
  serviceAreas: [
    'Austin',
    'Westlake',
    'Lakeway',
    'Bee Cave',
    'Dripping Springs',
    'Round Rock',
    'Cedar Park',
    'Georgetown',
  ],
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

// icon names map to lucide-react icons in Services.jsx
export const services = [
  {
    icon: 'PencilRuler',
    title: 'Landscape Design',
    text: 'Custom 2D and 3D plans built around how you live, your lot, and the Central Texas climate.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Patios & Hardscapes',
    text: 'Paver and flagstone patios, walkways, seat walls and retaining walls built to handle Hill Country slopes.',
  },
  {
    icon: 'Flame',
    title: 'Outdoor Living',
    text: 'Pergolas, outdoor kitchens and fire features that turn your backyard into the best room of the house.',
  },
  {
    icon: 'Waves',
    title: 'Water Features',
    text: 'Recirculating waterfalls, ponds and fountains that bring calm sound and movement to your space.',
  },
  {
    icon: 'Lightbulb',
    title: 'Landscape Lighting',
    text: 'Warm, low-voltage LED lighting for patios, paths and trees, so your yard works long after sunset.',
  },
  {
    icon: 'Sprout',
    title: 'Xeriscape & Turf',
    text: 'Drought-smart native plantings, decomposed granite and artificial turf that stay beautiful through Austin summers.',
  },
];

// PLACEHOLDER: locations, budgets and timelines are samples. Replace with real project details.
export const projects = [
  {
    title: 'Firelit Terrace',
    image: '/media/firelit-terrace.jpg',
    alt: 'Paver patio at dusk with a stone fire pit, cushioned chairs and lit seat walls beside a covered porch',
    text: 'A sprawling paver terrace with a contrasting border, gas fire pit and illuminated seat walls that step down from a covered porch. It is now the family’s favorite place to end the day.',
    location: 'Westlake, TX',
    budget: '$85–95K',
    design: '3 Weeks',
    install: '5 Weeks',
  },
  {
    title: 'The Grand Approach',
    image: '/media/grand-approach.jpg',
    alt: 'Tiered stone retaining walls with a central staircase and lit pillars leading up to a home at twilight',
    text: 'Tiered segmental retaining walls tame a sloped lot and frame a wide central staircase. Lit stone pillars, a flagstone path and river rock beds give the home a striking arrival from the yard.',
    location: 'Lakeway, TX',
    budget: '$120–140K',
    design: '1 Month',
    install: '7 Weeks',
  },
  {
    title: 'Pergola & Waterfall Retreat',
    image: '/media/pergola-waterfall.jpg',
    alt: 'Cedar pergola with string lights over an outdoor sofa next to a lit, multi-tier rock waterfall',
    text: 'A cedar pergola wrapped in café lights anchors a lounge patio, while a multi-tier recirculating waterfall spills through native boulders a few steps away. It’s a Hill Country getaway without leaving home.',
    location: 'Dripping Springs, TX',
    budget: '$70–80K',
    design: '3 Weeks',
    install: '6 Weeks',
  },
  {
    title: 'Low-Water Living',
    image: '/media/turf-retreat.jpg',
    alt: 'Backyard viewed from under a black pergola, with curved artificial turf, concrete stepping pads and river rock beds',
    text: 'A water-wise backyard with sculpted artificial turf, oversized concrete stepping pads and river rock beds with path lighting. It stays green all summer without the water bill.',
    location: 'Cedar Park, TX',
    budget: '$45–55K',
    design: '2 Weeks',
    install: '3 Weeks',
  },
];

export const process = [
  {
    step: '01',
    title: 'Consult',
    text: 'We visit your property, listen to how you want to use the space, and talk honestly about budget and timing.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Our designers create a detailed plan with materials, plants and lighting, then refine it with you until it feels right.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Our own crews handle the installation with a dedicated project lead, a clean site and clear daily communication.',
  },
  {
    step: '04',
    title: 'Enjoy',
    text: 'We walk the finished space with you, set up lighting and irrigation, and stay on call for seasonal care.',
  },
];

// PLACEHOLDER: sample reviews. Replace with real client testimonials before launch.
export const testimonials = [
  {
    quote:
      'From the first design meeting to the final walkthrough, Summit View was organized, honest and easy to work with. Our patio and fire pit get used every single night.',
    name: 'Sarah & Mike T.',
    location: 'Westlake',
  },
  {
    quote:
      'Our backyard was a steep, unusable slope. Now it has terraced walls, lighting and a place for the kids to play. The crew was respectful and finished on schedule.',
    name: 'David R.',
    location: 'Lakeway',
  },
  {
    quote:
      'We wanted something beautiful that wouldn’t drink water all summer. The xeriscape design is gorgeous, and our water bill dropped noticeably.',
    name: 'Jennifer L.',
    location: 'Cedar Park',
  },
];

export const serviceOptions = [
  'Full landscape design & build',
  ...services.map((s) => s.title),
  'Not sure yet',
];

export const budgetOptions = ['Under $25K', '$25K–$50K', '$50K–$100K', '$100K–$250K', '$250K+'];
