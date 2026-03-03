'use client';

import { useState, useEffect } from 'react';

/* ─────────────── IMAGE URLS ─────────────── */
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  aerial: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80',
  beachfrontVilla: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80',
  oceanSuite: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  gardenResidence: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  beachClub: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
  infinityPool: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80',
  spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  waterSports: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?w=800&q=80',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  wellness: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
  activities: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=800&q=80',
  sunset: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=80',
  location: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=1200&q=80',
};

/* ─────────────── RESIDENCE DATA ─────────────── */
const RESIDENCES = [
  {
    name: 'Beachfront Villa',
    tagline: 'Steps from the shore',
    size: '480 sqm',
    bedrooms: '4 Bedrooms',
    features: ['Private infinity pool', 'Direct beach access', 'Personal butler', 'Outdoor rain shower'],
    price: 'From $1,200/night',
    image: IMAGES.beachfrontVilla,
  },
  {
    name: 'Ocean Suite',
    tagline: 'Panoramic sea views',
    size: '220 sqm',
    bedrooms: '2 Bedrooms',
    features: ['Floor-to-ceiling windows', 'Private terrace', 'Plunge pool', 'In-suite dining'],
    price: 'From $780/night',
    image: IMAGES.oceanSuite,
  },
  {
    name: 'Garden Residence',
    tagline: 'Tropical sanctuary',
    size: '320 sqm',
    bedrooms: '3 Bedrooms',
    features: ['Lush tropical gardens', 'Open-air living pavilion', 'Courtyard pool', 'Meditation deck'],
    price: 'From $650/night',
    image: IMAGES.gardenResidence,
  },
];

/* ─────────────── AMENITIES DATA ─────────────── */
const AMENITIES = [
  {
    title: 'Beach Club',
    description: 'A stylish oceanfront retreat with day beds, curated cocktails, and live sunset sessions.',
    image: IMAGES.beachClub,
    icon: '\u{2600}\u{FE0F}',
  },
  {
    title: 'Infinity Pool',
    description: 'A 50-metre horizon-edge pool that dissolves into the cerulean sea beyond.',
    image: IMAGES.infinityPool,
    icon: '\u{1F30A}',
  },
  {
    title: 'Spa & Wellness',
    description: 'Traditional healing arts meet modern therapies in our oceanfront spa sanctuary.',
    image: IMAGES.spa,
    icon: '\u{1F9D8}',
  },
  {
    title: 'Water Sports',
    description: 'Snorkeling, kayaking, paddle boarding, and sunset sailing from our private marina.',
    image: IMAGES.waterSports,
    icon: '\u{1F3C4}',
  },
];

/* ─────────────── LIFESTYLE DATA ─────────────── */
const LIFESTYLE = [
  {
    title: 'Coastal Dining',
    description: 'Three distinctive restaurants serving farm-to-ocean cuisine, from intimate beachside grills to refined degustation.',
    image: IMAGES.dining,
    accent: 'Culinary',
  },
  {
    title: 'Wellness Journeys',
    description: 'Sunrise yoga on the beach, guided meditation, holistic nutrition programs, and restorative sound healing.',
    image: IMAGES.wellness,
    accent: 'Wellbeing',
  },
  {
    title: 'Island Adventures',
    description: 'Explore hidden coves, visit ancient temples, embark on guided reef dives, or cruise into the golden hour.',
    image: IMAGES.activities,
    accent: 'Discovery',
  },
];

/* ─────────────── STATS DATA ─────────────── */
const STATS = [
  { value: '8', label: 'Hectares of Paradise' },
  { value: '45', label: 'Private Residences' },
  { value: '2 km', label: 'Pristine Coastline' },
  { value: '5\u2605', label: 'World-Class Rating' },
];

/* ═══════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>

      {/* ════════════════ NAVIGATION ════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md nav-scrolled'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl tracking-widest transition-colors duration-300"
            style={{
              fontFamily: 'var(--font-heading)',
              color: scrolled ? '#0C2340' : '#FFFFFF',
              fontWeight: 600,
            }}
          >
            CERULEAN BAY
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Residences', 'Amenities', 'Lifestyle', 'Location', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: scrolled ? '#0C2340' : 'rgba(255,255,255,0.9)',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary px-7 py-2.5 rounded-full text-sm tracking-wider"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              Reserve
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{ background: scrolled ? '#0C2340' : '#FFFFFF' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
              style={{ background: scrolled ? '#0C2340' : '#FFFFFF' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{ background: scrolled ? '#0C2340' : '#FFFFFF' }}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 px-6 py-4">
            {['Residences', 'Amenities', 'Lifestyle', 'Location', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-sm tracking-wider"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: '#0C2340',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-3 px-6 py-3 rounded-full text-sm text-white text-center tracking-wider"
              style={{
                background: '#2E86AB',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserve
            </a>
          </div>
        )}
      </nav>

      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={IMAGES.hero}
          alt="Pristine tropical beach at Cerulean Bay"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto">
            {/* Gold line accent */}
            <div
              className="mb-6 animate-fade-in"
              style={{
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, #C4A265, rgba(196,162,101,0.3))',
              }}
            />

            {/* Location */}
            <p
              className="text-xs md:text-sm tracking-[0.35em] mb-4 animate-fade-in"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 400,
              }}
            >
              COASTAL LUXURY &middot; BALI &middot; INDONESIA
            </p>

            {/* Title */}
            <h1
              className="text-white text-5xl md:text-7xl lg:text-8xl leading-none mb-3 animate-fade-in"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 300,
                letterSpacing: '0.02em',
              }}
            >
              Cerulean Bay
            </h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-8 animate-fade-in"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#C4A265',
              }}
            >
              Resort &amp; Residences
            </p>

            {/* Tagline */}
            <p
              className="text-sm md:text-base mb-10 max-w-lg animate-fade-in"
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Where the rhythm of the ocean orchestrates a life of extraordinary beauty,
              and every horizon promises a new beginning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a
                href="#about"
                className="btn-outline inline-block px-8 py-3.5 rounded-full text-sm tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Discover Paradise
              </a>
              <a
                href="#contact"
                className="btn-gold inline-block px-8 py-3.5 rounded-full text-sm tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                Reserve Now
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-float">
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
            style={{ borderColor: 'rgba(255,255,255,0.4)' }}
          >
            <div
              className="w-1 h-2.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.6)' }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════ ABOUT CERULEAN BAY ════════════════ */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              <p className="section-label mb-4">OUR PHILOSOPHY</p>
              <div className="gold-line mb-8" />
              <h2
                className="section-heading text-3xl md:text-4xl lg:text-5xl mb-8"
              >
                A Life Shaped <br className="hidden md:block" />
                by the Sea
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ color: '#5a6a7a', fontWeight: 400 }}
              >
                Cerulean Bay is more than a destination -- it is a coastal philosophy.
                Nestled along 2 kilometres of pristine beachfront, our 8-hectare sanctuary
                offers a rare harmony between architectural refinement and the raw beauty
                of the Indonesian archipelago.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed mb-10"
                style={{ color: '#5a6a7a', fontWeight: 400 }}
              >
                Every residence is designed to dissolve the boundary between interior and ocean,
                with natural stone, aged teak, and floor-to-ceiling glass framing an endless horizon.
                Here, luxury is not ostentation -- it is the gentle sound of waves at dawn, the warmth
                of golden sand, and the freedom to simply be.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-2xl md:text-3xl mb-1"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: '#2E86AB',
                        fontWeight: 600,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs tracking-wider"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: '#C4A265',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={IMAGES.aerial}
                  alt="Aerial view of Cerulean Bay Resort"
                  className="w-full h-auto object-cover img-zoom"
                  style={{ aspectRatio: '4/5', opacity: 1 }}
                />
              </div>
              {/* Gold accent corner */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-bl-2xl"
                style={{ border: '2px solid #C4A265', borderTop: 'none', borderRight: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider-to-seafoam" />

      {/* ════════════════ RESIDENCES ════════════════ */}
      <section id="residences" className="py-20 lg:py-32 bg-pattern-seafoam">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-4">ACCOMMODATIONS</p>
            <div className="gold-line-center mb-8" />
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Our Residences
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: '#5a6a7a', fontWeight: 400 }}
            >
              Three distinctive living experiences, each designed to celebrate
              the unique character of coastal Bali.
            </p>
          </div>

          {/* Residence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {RESIDENCES.map((res) => (
              <div
                key={res.name}
                className="card-hover bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(46, 134, 171, 0.06)' }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={res.image}
                    alt={res.name}
                    className="w-full h-full object-cover img-zoom"
                    style={{ opacity: 1 }}
                  />
                  {/* Gold badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs tracking-wider"
                    style={{
                      background: 'rgba(196, 162, 101, 0.9)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {res.bedrooms}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p
                    className="text-xs tracking-wider mb-2"
                    style={{
                      color: '#C4A265',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                    }}
                  >
                    {res.tagline}
                  </p>
                  <h3
                    className="text-2xl mb-1"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: '#0C2340',
                      fontWeight: 600,
                    }}
                  >
                    {res.name}
                  </h3>
                  <p
                    className="text-sm mb-5"
                    style={{
                      color: '#2E86AB',
                      fontWeight: 600,
                    }}
                  >
                    {res.size}
                  </p>

                  {/* Features list */}
                  <ul className="mb-6 space-y-2">
                    {res.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: '#5a6a7a' }}
                      >
                        <span style={{ color: '#C4A265', fontSize: '8px' }}>{'\u25C6'}</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid #edf2f7' }}>
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: '#0C2340',
                        fontWeight: 600,
                        fontSize: '1.05rem',
                      }}
                    >
                      {res.price}
                    </p>
                    <a
                      href="#contact"
                      className="text-sm tracking-wider transition-colors duration-300"
                      style={{
                        color: '#2E86AB',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}
                    >
                      Explore &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider-to-white" />

      {/* ════════════════ RESORT AMENITIES ════════════════ */}
      <section id="amenities" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-4">RESORT AMENITIES</p>
            <div className="gold-line-center mb-8" />
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Curated Experiences
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: '#5a6a7a', fontWeight: 400 }}
            >
              World-class facilities designed to enrich every moment of your coastal retreat.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.title}
                className="card-hover rounded-2xl overflow-hidden bg-white"
                style={{
                  boxShadow: '0 4px 20px rgba(46, 134, 171, 0.06)',
                  border: '1px solid rgba(46, 134, 171, 0.08)',
                }}
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover img-zoom"
                    style={{ opacity: 1 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{amenity.icon}</span>
                    <h3
                      className="text-xl md:text-2xl"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: '#0C2340',
                        fontWeight: 600,
                      }}
                    >
                      {amenity.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: '#5a6a7a', fontWeight: 400 }}
                  >
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ LIFESTYLE SECTION ════════════════ */}
      <section id="lifestyle" className="py-20 lg:py-32 bg-pattern-seafoam">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="section-label mb-4">THE CERULEAN LIFESTYLE</p>
            <div className="gold-line-center mb-8" />
            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Live Beautifully
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: '#5a6a7a', fontWeight: 400 }}
            >
              A tapestry of dining, wellness, and adventure woven into the fabric of each day.
            </p>
          </div>

          {/* Lifestyle Cards - Alternating layout */}
          <div className="space-y-16 lg:space-y-24">
            {LIFESTYLE.map((item, index) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover img-zoom"
                    style={{ aspectRatio: '3/2', opacity: 1 }}
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p
                    className="text-xs tracking-[0.25em] mb-3"
                    style={{
                      color: '#C4A265',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.accent}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl mb-6"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: '#0C2340',
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed mb-8"
                    style={{ color: '#5a6a7a', fontWeight: 400 }}
                  >
                    {item.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm tracking-wider transition-colors duration-300"
                    style={{
                      color: '#2E86AB',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                    }}
                  >
                    Learn More
                    <span style={{ fontSize: '1.1em' }}>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ QUOTE / PARALLAX SECTION ════════════════ */}
      <section className="relative w-full" style={{ height: '65vh', minHeight: '400px' }}>
        <img
          src={IMAGES.sunset}
          alt="Golden sunset over the ocean at Cerulean Bay"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
        />
        <div className="absolute inset-0 quote-overlay" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-3xl text-center">
            <div
              className="gold-line-center mb-8"
              style={{ background: 'linear-gradient(90deg, rgba(196,162,101,0.2), #C4A265, rgba(196,162,101,0.2))' }}
            />
            <p
              className="text-white text-2xl md:text-4xl lg:text-5xl leading-snug mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Some places you visit. <br className="hidden md:block" />
              Cerulean Bay, you feel.&rdquo;
            </p>
            <p
              className="text-sm tracking-[0.25em]"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              &mdash; COND&Eacute; NAST TRAVELER
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ LOCATION SECTION ════════════════ */}
      <section id="location" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={IMAGES.location}
                alt="Beachfront location at Cerulean Bay"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3', opacity: 1 }}
              />
              {/* Location overlay card */}
              <div
                className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs p-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(12, 35, 64, 0.12)',
                }}
              >
                <p
                  className="text-xs tracking-wider mb-1"
                  style={{ color: '#C4A265', fontWeight: 700 }}
                >
                  COORDINATES
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#0C2340',
                    fontWeight: 500,
                  }}
                >
                  8.8191&deg; S, 115.2311&deg; E
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="section-label mb-4">BEACHFRONT PARADISE</p>
              <div className="gold-line mb-8" />
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-8">
                The Perfect <br className="hidden md:block" />
                Address
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: '#5a6a7a', fontWeight: 400 }}
              >
                Positioned along Bali&apos;s celebrated southern coast, Cerulean Bay occupies
                a coveted stretch of white-sand beach in Nusa Dua. The resort sits within
                easy reach of world-class dining, ancient temples, and vibrant cultural experiences,
                yet feels a world apart.
              </p>

              {/* Location features */}
              <div className="space-y-4 mb-10">
                {[
                  { label: 'Ngurah Rai International Airport', detail: '25 minutes' },
                  { label: 'Uluwatu Temple', detail: '35 minutes' },
                  { label: 'Seminyak & Canggu', detail: '45 minutes' },
                  { label: 'Ubud Cultural Center', detail: '75 minutes' },
                ].map((loc) => (
                  <div key={loc.label} className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid #edf2f7' }}>
                    <p className="text-sm" style={{ color: '#0C2340', fontWeight: 500 }}>
                      {loc.label}
                    </p>
                    <p className="text-sm" style={{ color: '#2E86AB', fontWeight: 600 }}>
                      {loc.detail}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="btn-primary inline-block px-8 py-3.5 rounded-full text-sm tracking-wider"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.1em' }}
              >
                Request Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-divider-to-seafoam" />

      {/* ════════════════ CONTACT / CTA SECTION ════════════════ */}
      <section id="contact" className="py-20 lg:py-32 bg-pattern-seafoam">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: Info */}
            <div>
              <p className="section-label mb-4">BEGIN YOUR JOURNEY</p>
              <div className="gold-line mb-8" />
              <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl mb-8">
                Plan Your <br className="hidden md:block" />
                Coastal Escape
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-10"
                style={{ color: '#5a6a7a', fontWeight: 400 }}
              >
                Our dedicated concierge team is here to craft your perfect Cerulean Bay experience.
                From private airport transfers to bespoke itineraries, every detail
                is attended to with the utmost care and discretion.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#0C2340' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#0C2340', fontWeight: 600 }}>
                      Address
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#5a6a7a' }}>
                      Jl. Pantai Cerulean No. 1<br />
                      Nusa Dua, Bali 80363<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#0C2340' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#0C2340', fontWeight: 600 }}>
                      Reservations
                    </p>
                    <p className="text-sm" style={{ color: '#5a6a7a' }}>
                      +62 361 XXX XXXX
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#0C2340' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: '#0C2340', fontWeight: 600 }}>
                      Email
                    </p>
                    <p className="text-sm" style={{ color: '#5a6a7a' }}>
                      reservations@ceruleanbay.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form
                className="bg-white rounded-2xl p-8 md:p-10"
                style={{ boxShadow: '0 8px 40px rgba(12, 35, 64, 0.08)' }}
                onSubmit={(e) => e.preventDefault()}
              >
                <h3
                  className="text-2xl mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#0C2340',
                    fontWeight: 600,
                  }}
                >
                  Reserve Your Residence
                </h3>
                <p
                  className="text-sm mb-8"
                  style={{ color: '#5a6a7a', fontWeight: 400 }}
                >
                  Complete the form below and our concierge will be in touch within 24 hours.
                </p>

                {/* Full Name */}
                <div className="mb-5">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{ color: '#0C2340', fontWeight: 600 }}
                  >
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="form-input w-full px-4 py-3 rounded-xl border text-sm"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: '#0C2340',
                      borderColor: '#dce5ec',
                    }}
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{ color: '#0C2340', fontWeight: 600 }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="form-input w-full px-4 py-3 rounded-xl border text-sm"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: '#0C2340',
                      borderColor: '#dce5ec',
                    }}
                  />
                </div>

                {/* Date & Guests Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      className="block text-xs tracking-wider mb-2"
                      style={{ color: '#0C2340', fontWeight: 600 }}
                    >
                      CHECK-IN DATE
                    </label>
                    <input
                      type="date"
                      className="form-input w-full px-4 py-3 rounded-xl border text-sm"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: '#0C2340',
                        borderColor: '#dce5ec',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-wider mb-2"
                      style={{ color: '#0C2340', fontWeight: 600 }}
                    >
                      GUESTS
                    </label>
                    <select
                      className="form-input w-full px-4 py-3 rounded-xl border text-sm appearance-none bg-white"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: '#0C2340',
                        borderColor: '#dce5ec',
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>Select</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Residence Type */}
                <div className="mb-5">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{ color: '#0C2340', fontWeight: 600 }}
                  >
                    PREFERRED RESIDENCE
                  </label>
                  <select
                    className="form-input w-full px-4 py-3 rounded-xl border text-sm appearance-none bg-white"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: '#0C2340',
                      borderColor: '#dce5ec',
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select residence type</option>
                    <option value="beachfront">Beachfront Villa</option>
                    <option value="ocean">Ocean Suite</option>
                    <option value="garden">Garden Residence</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="mb-8">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{ color: '#0C2340', fontWeight: 600 }}
                  >
                    SPECIAL REQUESTS
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any special requirements or celebrations..."
                    className="form-input w-full px-4 py-3 rounded-xl border text-sm resize-none"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: '#0C2340',
                      borderColor: '#dce5ec',
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white text-sm tracking-[0.15em] transition-all duration-300"
                  style={{
                    background: '#0C2340',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2E86AB';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(46, 134, 171, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0C2340';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  RESERVE YOUR RESIDENCE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer style={{ background: '#0C2340' }} className="text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h4
                className="text-2xl tracking-wider mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}
              >
                CERULEAN BAY
              </h4>
              <p
                className="text-sm leading-relaxed max-w-sm mb-6"
                style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}
              >
                A haven of coastal luxury in Nusa Dua, Bali. Where every moment is designed
                for those who seek the extraordinary in the tranquil embrace of the sea.
              </p>
              <div
                style={{
                  width: '40px',
                  height: '2px',
                  background: '#C4A265',
                }}
              />
            </div>

            {/* Quick Links */}
            <div>
              <h5
                className="text-xs tracking-[0.2em] mb-6"
                style={{
                  fontWeight: 700,
                  color: '#C4A265',
                }}
              >
                EXPLORE
              </h5>
              <ul className="space-y-3">
                {[
                  { label: 'Residences', href: '#residences' },
                  { label: 'Amenities', href: '#amenities' },
                  { label: 'Lifestyle', href: '#lifestyle' },
                  { label: 'Location', href: '#location' },
                  { label: 'Reservations', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-300"
                      style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#2E86AB'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5
                className="text-xs tracking-[0.2em] mb-6"
                style={{
                  fontWeight: 700,
                  color: '#C4A265',
                }}
              >
                CONTACT
              </h5>
              <div className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <p>
                  Jl. Pantai Cerulean No. 1<br />
                  Nusa Dua, Bali 80363
                </p>
                <p>+62 361 XXX XXXX</p>
                <p>reservations@ceruleanbay.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}
            >
              &copy; 2026 Cerulean Bay Resort &amp; Residences. All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}
            >
              Made with &#9829; by{' '}
              <a
                href="https://creativism.id"
                style={{ color: '#C4A265' }}
                className="transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => { e.currentTarget.style.color = '#2E86AB'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#C4A265'; }}
              >
                Creativism
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
