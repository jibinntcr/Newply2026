export interface ProductSpec {
  slug: string;
  name: string;
  badge: string;
  shortDesc: string;
  heroDesc: string;
  image: string;
  gradeStandard: string;
  coreSpecies: string;
  bondingResin: string;
  thicknesses: string;
  dimensions: string;
  moistureContent: string;
  faceFinish: string;
  screwHolding: string;
  boilingTolerance: string;
  highlights: string[];
  applications: { title: string; desc: string; icon: string }[];
  guidelines: string[];
}

export const PRODUCTS: ProductSpec[] = [
  {
    slug: 'commercial-plywood',
    name: 'Commercial Plywood',
    badge: 'MR Grade · IS:303',
    shortDesc:
      'Moisture-resistant interior plywood bonded with synthetic amino resin. Formulated for dry interior joinery, residential furniture, wardrobes, and false ceilings.',
    heroDesc:
      'Engineered for premium interior joinery, Newtech Commercial Plywood (MR Grade) provides dimensionally stable panels with uniform core lamination, smooth calibrated faces, and high screw-holding power.',
    image: '/img/carousel-1.jpg',
    gradeStandard: 'IS:303 (MR Grade Moisture Resistant)',
    coreSpecies: 'Selected Plantation Hardwood Veneers',
    bondingResin: 'Synthetic Urea Formaldehyde (MR formulation)',
    thicknesses: '4 mm, 6 mm, 9 mm, 12 mm, 16 mm, 18 mm, 25 mm (±0.5 mm calibrated)',
    dimensions: '8 ft × 4 ft (2440 × 1220 mm), 7 ft × 4 ft, 7 ft × 3 ft',
    moistureContent: '8% to 12% at dispatch',
    faceFinish: 'Dual-head calibrated smooth sanded finish',
    screwHolding: 'High holding capacity on both surface and edges (>250 kgf)',
    boilingTolerance: 'Withstands warm water immersion at 60°C ± 2°C for 3 hours',
    highlights: [
      'Dual-side calibrated smooth sanded face ready for laminate or veneer bonding',
      'Gap-free core composition prevents internal hollows when cut',
      'Termite and borer preservative treatment infused prior to hot-pressing',
      'Excellent acoustic damping for commercial interior partitions',
    ],
    applications: [
      {
        title: 'Wardrobes & Bedroom Storage',
        desc: 'Internal carcasses, shelving, drawer boxes, and sliding shutters.',
        icon: 'bi-door-closed',
      },
      {
        title: 'Living Room Joinery & Paneling',
        desc: 'TV consoles, wall cladding, bookshelves, and dry-zone credenzas.',
        icon: 'bi-tv',
      },
      {
        title: 'Commercial Office Partitions',
        desc: 'Modular cubicles, executive desks, and acoustic wall paneling.',
        icon: 'bi-columns-gap',
      },
      {
        title: 'Industrial Crating & Pallets',
        desc: 'Protective packaging cases, equipment crates, and cargo dividers.',
        icon: 'bi-box-seam',
      },
    ],
    guidelines: [
      'Store panels horizontally flat on level runners in a dry, ventilated shed.',
      'Allow boards to acclimatize to local ambient humidity before fabrication.',
      'For wet zones (kitchens, sinks, washrooms), use Newtech Marine IS:710 or BWR.',
    ],
  },
  {
    slug: 'hardwood-plywood',
    name: 'Hardwood Plywood',
    badge: '100% Calibrated · Heavy Duty',
    shortDesc:
      'Heavy-duty 100% hardwood core plywood with zero core voids. Engineered for structural applications, high-load shelving, CNC carving, and luxury cabinetry.',
    heroDesc:
      'Manufactured exclusively with dense southern hardwood veneers, Newtech Hardwood Plywood provides exceptional tensile load capacity, uniform cross-sectional density, and zero hollow pockets for clean CNC edging.',
    image: '/img/carousel-2.jpg',
    gradeStandard: 'Heavy Duty Structural Grade (IS:303 / IS:710 options)',
    coreSpecies: '100% Selected Kerala Dense Hardwood Veneers',
    bondingResin: 'High Solid Phenolic / Melamine Fortified Adhesive',
    thicknesses: '6 mm, 9 mm, 12 mm, 16 mm, 18 mm, 19 mm, 25 mm',
    dimensions: '8 ft × 4 ft (2440 × 1220 mm), 7 ft × 4 ft',
    moistureContent: '8% to 11% controlled equilibrium',
    faceFinish: 'Micro-sanded hardwood face for veneer pressing and lacquering',
    screwHolding: 'Exceptional retention (>320 kgf on face, >200 kgf on edge)',
    boilingTolerance: 'Available in both BWR (8-hr) and BWP (72-hr) bonding specs',
    highlights: [
      '100% uniform hardwood core with zero soft timber filler',
      'True calibrated thickness across the entire 8x4 sheet (±0.3 mm)',
      'Clean edge profiling without chip-out during CNC routing or hand sawing',
      'Superior flexural modulus for wide-span shelving and heavy book racks',
    ],
    applications: [
      {
        title: 'Heavy-Load Shelving & Libraries',
        desc: 'High-span book storage, retail display racks, and warehouse shelving.',
        icon: 'bi-bookshelf',
      },
      {
        title: 'CNC Carved Architectural Panels',
        desc: 'Decorative jaali cutting, fretwork, and detailed relief carvings.',
        icon: 'bi-grid-3x3',
      },
      {
        title: 'Commercial Counters & Reception Desks',
        desc: 'High-traffic retail cash counters, hospitality check-in desks.',
        icon: 'bi-bank',
      },
      {
        title: 'Stair Treads & Mezzanine Floors',
        desc: 'Sub-flooring, riser backings, and structural platform underlayments.',
        icon: 'bi-layers',
      },
    ],
    guidelines: [
      'Use carbide-tipped saw blades and router bits for smooth, splinter-free cuts.',
      'Pre-drill pilot holes when driving heavy gauge screws into board edges.',
      'Seal trimmed edges with water-resistant primer before final site installation.',
    ],
  },
  {
    slug: 'marine-plywood',
    name: 'Marine Plywood',
    badge: 'BWP Grade · IS:710 Waterproof',
    shortDesc:
      'Boiling Water Proof (BWP) grade plywood bonded with unextended phenol formaldehyde resin. Guaranteed 72-hour boiling water immersion proof for kitchens and coastal projects.',
    heroDesc:
      'Newtech Marine Plywood is certified to IS:710 and engineered specifically to withstand relentless tropical humidity, coastal salt air, and direct water contact. Bonded with pure unextended Phenol Formaldehyde resin.',
    image: '/img/carousel-3.jpg',
    gradeStandard: 'IS:710 (Boiling Water Proof - BWP)',
    coreSpecies: '100% Calibrated Hardwood Veneers',
    bondingResin: 'Unextended Phenol Formaldehyde (PF) Synthetic Resin',
    thicknesses: '6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm',
    dimensions: '8 ft × 4 ft (2440 × 1220 mm), 7 ft × 4 ft',
    moistureContent: '6% to 10% dried veneer core',
    faceFinish: 'Ultra-smooth calibrated face for high-gloss laminate bonding',
    screwHolding: 'Superior screw withdrawal resistance (>340 kgf)',
    boilingTolerance: '72 hours continuous boiling without delamination (IS:710 pass)',
    highlights: [
      'Withstands 72 continuous hours of boiling water testing without delaminating',
      'Vacuum-pressure impregnated with anti-microbial and anti-borer chemicals',
      'Ideal for humid South Indian coastal climates and high-moisture interiors',
      'Backed by mill-level batch quality inspection and warranty certificate',
    ],
    applications: [
      {
        title: 'Modular Kitchen Under-Sink Cabinets',
        desc: 'Sink carcasses, dishwasher surrounds, and water-zone drawers.',
        icon: 'bi-droplet-half',
      },
      {
        title: 'Bathroom Vanities & Duct Enclosures',
        desc: 'Restroom vanity counters, pipe chases, and high-steam partitions.',
        icon: 'bi-water',
      },
      {
        title: 'Coastal Resumes & Beach Resorts',
        desc: 'Cottage paneling, coastal balcony doors, and exterior woodwork.',
        icon: 'bi-sun',
      },
      {
        title: 'Boat Building & Marine Interiors',
        desc: 'Deck bulkheads, cabin joinery, pontoon benches, and marine furniture.',
        icon: 'bi-tsunami',
      },
    ],
    guidelines: [
      'Always seal newly sawn board edges with waterproof paint or edge banding tape.',
      'Fasten with stainless steel (SS304/SS316) screws in high moisture environments.',
      'Check batch test mark and IS:710 stamp on every panel for genuine quality.',
    ],
  },
  {
    slug: 'bwr-plywood',
    name: 'BWR Plywood',
    badge: 'BWR Grade · IS:303 Exterior',
    shortDesc:
      'Boiling Water Resistant exterior grade plywood bonded with phenolic resin. Handles 8-hour boiling water cycles, ideal for semi-exposed balconies, utility rooms, and damp areas.',
    heroDesc:
      'Combining robust exterior weather resistance with optimal cost performance, Newtech BWR Plywood is bonded with thermosetting phenol formaldehyde resin to resist prolonged exposure to humidity, steam, and dampness.',
    image: '/img/carousel-1.jpg',
    gradeStandard: 'IS:303 (BWR - Boiling Water Resistant)',
    coreSpecies: 'Seasoned Plantation Timber & Selected Hardwood',
    bondingResin: 'Thermosetting Phenol Formaldehyde Synthetic Resin',
    thicknesses: '6 mm, 9 mm, 12 mm, 16 mm, 19 mm, 25 mm',
    dimensions: '8 ft × 4 ft (2440 × 1220 mm), 7 ft × 4 ft',
    moistureContent: '8% to 12% at dispatch',
    faceFinish: 'Calibrated dual-surface sanded',
    screwHolding: 'High screw and fastener retention (>280 kgf)',
    boilingTolerance: 'Passes 8 hours continuous boiling water cycle test',
    highlights: [
      'Reliable 8-hour boiling water resistance at an economical price point',
      'Chemically treated with borer-proof and termite-resistant additives',
      'Minimal thermal expansion under varying indoor and semi-outdoor temperatures',
      'Excellent balance of strength, weather durability, and fabrication ease',
    ],
    applications: [
      {
        title: 'Utility & Laundry Cabinets',
        desc: 'Washing machine storage, iron counters, and utility room shelves.',
        icon: 'bi-house-gear',
      },
      {
        title: 'Covered Balcony Furniture',
        desc: 'Outdoor seating benches, shoe racks, and covered terrace planters.',
        icon: 'bi-tree',
      },
      {
        title: 'Kitchen Upper Wall Cabinets',
        desc: 'Overhead kitchen units, pantry tall units, and chimney surrounds.',
        icon: 'bi-inbox',
      },
      {
        title: 'Window Sills & Pelmets',
        desc: 'Curtain pelmets, window ledge backings, and valance boards.',
        icon: 'bi-window',
      },
    ],
    guidelines: [
      'Ensure proper drainage and aeration around panels in semi-exposed installations.',
      'Pair with waterproof melamine edge tape on all exposed perimeter edges.',
      'For underwater or round-the-clock saturated exposure, use Newtech Marine IS:710.',
    ],
  },
  {
    slug: 'film-faced-plywood',
    name: 'Film-Faced Shuttering Plywood',
    badge: 'IS:4990 · 30+ Repetitions',
    shortDesc:
      'High-density concrete shuttering plywood coated with 120+ GSM phenolic mirror film. Engineered for 30+ concrete casting repetitions with mirror-smooth slab finishes.',
    heroDesc:
      'Engineered specifically for high-rise infrastructure, bridge construction, and commercial concrete casting. Coated with imported high-GSM phenolic resin film with hermetically sealed edges.',
    image: '/img/carousel-2.jpg',
    gradeStandard: 'IS:4990 (Concrete Shuttering Plywood Specification)',
    coreSpecies: '100% High-Density Compressed Hardwood Veneers',
    bondingResin: 'Unextended High-Pressure Phenol Formaldehyde (BWP Grade)',
    thicknesses: '12 mm (30 kg & 34 kg), 18 mm (34 kg, 38 kg, 42 kg heavy duty)',
    dimensions: '8 ft × 4 ft (2440 × 1220 mm)',
    moistureContent: 'Below 10% for dimensional stability under wet cement slurry',
    faceFinish: '120+ GSM dark brown phenolic film with mirror gloss release',
    screwHolding: 'High nail and tie-rod pull-through resistance',
    boilingTolerance: '72-hr boiling proof BWP core withstands alkaline cement leachate',
    highlights: [
      '30+ repetitions achieved when properly handled, cleaned, and oiled',
      'Produces mirror-smooth concrete surfaces that eliminate plastering costs',
      'All 4 perimeter edges sealed with specialized acrylic waterproof coating',
      'Available in 30 kg, 34 kg, and 38 kg weight categories for heavy pours',
    ],
    applications: [
      {
        title: 'High-Rise Columns & Beams',
        desc: 'Heavy vertical concrete formwork, shear walls, and core walls.',
        icon: 'bi-building-up',
      },
      {
        title: 'Bridge Decks & Flyovers',
        desc: 'Heavy civil infrastructure, box girder forms, and pier caps.',
        icon: 'bi-bezier2',
      },
      {
        title: 'Slab Formwork & Drop Beams',
        desc: 'Horizontal slab casting with clean strip release and minimal deflection.',
        icon: 'bi-square-half',
      },
      {
        title: 'Pre-Cast Concrete Moulds',
        desc: 'Reusable factory moulds for precast staircases, drains, and pavers.',
        icon: 'bi-boxes',
      },
    ],
    guidelines: [
      'Apply shuttering oil / mould release agent before every concrete pour.',
      'Reseal cut edges immediately with water-resistant acrylic paint on site.',
      'Never drop sheets from heights during shuttering de-staging; stack horizontally.',
    ],
  },
  {
    slug: 'alternate-plywood',
    name: 'Alternate Hardwood Plywood',
    badge: 'Engineered Core · Value Grade',
    shortDesc:
      'Precision-engineered plywood with alternating hardwood and plantation wood veneers. Delivers high flexural strength with lower sheet weight and attractive cost value.',
    heroDesc:
      'By interleaving dense hardwood veneers with lightweight plantation timber, Newtech Alternate Plywood delivers an optimal balance of structural rigidity, weight efficiency, and price competitiveness.',
    image: '/img/carousel-3.jpg',
    gradeStandard: 'IS:303 Commercial / MR / BWR Grades',
    coreSpecies: 'Alternating Hardwood and Fast-Growing Plantation Species',
    bondingResin: 'Fortified Urea / Phenolic Synthetic Resin Formulation',
    thicknesses: '6 mm, 9 mm, 12 mm, 16 mm, 18 mm, 25 mm',
    dimensions: '8 ft × 4 ft (2440 × 1220 mm), 7 ft × 4 ft',
    moistureContent: '8% to 12% controlled equilibrium',
    faceFinish: 'Double sanded calibrated smooth hardwood faces',
    screwHolding: 'Balanced holding capacity suitable for carpentry screws (>240 kgf)',
    boilingTolerance: 'Complies with standard IS:303 cyclic warm water immersion tests',
    highlights: [
      'Balanced sandwich architecture prevents panel warping and surface distortion',
      'Lighter weight eases installation for ceiling panels and tall wardrobe doors',
      'Eco-friendly design utilizing sustainable agro-forestry plantation timber',
      'Unmatched cost-to-performance ratio for volume commercial builders',
    ],
    applications: [
      {
        title: 'Turnkey Apartment Projects',
        desc: 'Large volume residential kitchen and wardrobe interior fitouts.',
        icon: 'bi-houses',
      },
      {
        title: 'False Ceilings & Baffles',
        desc: 'Suspended wooden acoustic grids, decorative ceiling beams.',
        icon: 'bi-layout-text-window-reverse',
      },
      {
        title: 'Commercial Retail Fixtures',
        desc: 'Store display counters, perimeter shelving, and showroom backdrops.',
        icon: 'bi-shop',
      },
      {
        title: 'Partition Wall Linings',
        desc: 'Drywall framing backing, acoustic double walls, and sub-panels.',
        icon: 'bi-border-style',
      },
    ],
    guidelines: [
      'Select appropriate screw length based on sheet thickness for secure fixing.',
      'Ideal for dry and climate-controlled indoor applications.',
      'Apply primer on cut edges when installed in areas with seasonal humidity shifts.',
    ],
  },
];

export function getProductBySlug(slug: string): ProductSpec | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
