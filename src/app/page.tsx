'use client';

import { useState, useEffect } from 'react';

/* ─────────────── IMAGE URLS ─────────────── */
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  resort1: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  resort2: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
  pool: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  villa: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  bedroom: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
  ocean: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=1200&q=80',
  spa: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  sunset: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1200&q=80',
};

/* ─────────────── VILLA DATA ─────────────── */
const VILLAS = [
  {
    name: 'Ocean Villa',
    size: '450 sqm',
    detail: 'Private pool · Beachfront · Butler service',
    price: '$850',
    image: IMAGES.resort1,
  },
  {
    name: 'Garden Villa',
    size: '280 sqm',
    detail: '3 Bedrooms · Tropical garden · Outdoor bath',
    price: '$620',
    image: IMAGES.villa,
  },
  {
    name: 'Cliff Suite',
    size: '120 sqm',
    detail: 'Panoramic ocean view · Rooftop terrace',
    price: '$420',
    image: IMAGES.bedroom,
  },
];

/* ─────────────── EXPERIENCES DATA ─────────────── */
const EXPERIENCES = [
  {
    emoji: '\u{1F3CA}',
    title: 'Infinity Pool',
    description: 'Horizon-edge pool overlooking the Indian Ocean, surrounded by swaying palms and cabanas.',
    image: IMAGES.pool,
  },
  {
    emoji: '\u{1F9D8}',
    title: 'Spa & Wellness',
    description: 'Balinese healing traditions in oceanfront pavilions. Rejuvenate with ancient rituals and modern therapies.',
    image: IMAGES.spa,
  },
  {
    emoji: '\u{1F37D}\u{FE0F}',
    title: 'Dining',
    description: 'Farm-to-ocean cuisine by Michelin-starred chefs. Four restaurants, infinite flavors.',
    image: IMAGES.dining,
  },
  {
    emoji: '\u{1F30A}',
    title: 'Water Sports',
    description: 'Surfing, diving, and sunset sailing. The Indian Ocean is your playground.',
    image: IMAGES.ocean,
  },
];

/* ─────────────── STATS DATA ─────────────── */
const STATS = [
  { value: '8', label: 'Hectares' },
  { value: '45', label: 'Private Villas' },
  { value: '2 km', label: 'Beach' },
  { value: '5-Star', label: 'Rating' },
];

/* ═══════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* ════════════════ NAVIGATION ════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm nav-scrolled' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl tracking-wider"
            style={{
              fontFamily: "var(--font-heading)",
              color: 'var(--color-ocean)',
              fontWeight: 600,
            }}
          >
            CERULEAN BAY
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Villas', 'Experiences', 'Dining', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide hover:text-[#06B6D4] transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  color: 'var(--color-dark)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="cta-button px-6 py-2.5 rounded-full text-sm text-white tracking-wide"
              style={{
                background: 'var(--color-ocean)',
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1E293B] transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1E293B] transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1E293B] transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
            {['Villas', 'Experiences', 'Dining', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-sm tracking-wide"
                style={{
                  fontFamily: "var(--font-body)",
                  color: 'var(--color-dark)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-3 px-6 py-2.5 rounded-full text-sm text-white text-center tracking-wide"
              style={{
                background: 'var(--color-ocean)',
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </nav>

      {/* ════════════════ HERO SECTION ════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={IMAGES.hero}
          alt="Tropical beach at Cerulean Bay Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay — bottom only for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(12,74,110,0.7) 0%, rgba(12,74,110,0.3) 35%, transparent 60%)',
          }}
        />

        {/* Hero Content — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-20 md:pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Location Tag */}
            <p
              className="text-white/80 text-xs md:text-sm tracking-[0.3em] mb-4 animate-fade-in"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              NUSA DUA &middot; BALI &middot; INDONESIA
            </p>

            {/* Title */}
            <h1
              className="text-white text-5xl md:text-7xl lg:text-8xl leading-none mb-2 animate-fade-in"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}
            >
              CERULEAN BAY
            </h1>
            <p
              className="text-white/90 text-xl md:text-2xl lg:text-3xl mb-8 animate-fade-in"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 300, fontStyle: 'italic' }}
            >
              Resort &amp; Residences
            </p>

            {/* CTA */}
            <a
              href="#introduction"
              className="cta-button inline-block px-8 py-3.5 rounded-full text-sm tracking-[0.15em] border-2 border-white text-white hover:bg-white hover:text-[#0C4A6E] transition-all duration-300 animate-fade-in"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Discover Paradise
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════ INTRODUCTION ════════════════ */}
      <section id="introduction" className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Small Label */}
          <p
            className="text-xs tracking-[0.3em] mb-4"
            style={{
              fontFamily: "var(--font-body)",
              color: 'var(--color-aqua)',
              fontWeight: 600,
            }}
          >
            WELCOME TO
          </p>

          {/* Heading */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              color: 'var(--color-ocean)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Where the Ocean <br className="hidden md:block" />
            Meets Luxury
          </h2>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: '#475569', fontWeight: 400 }}
          >
            Nestled along 2 kilometres of pristine beachfront in Nusa Dua, Cerulean Bay Resort &amp;
            Residences spans 8 hectares of tropical paradise. Here, the rhythm of the Indian Ocean
            sets the pace for an unhurried life of extraordinary beauty.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed mb-16"
            style={{ color: '#475569', fontWeight: 400 }}
          >
            With 45 private villas designed by award-winning architects, each residence is a
            sanctuary of refined elegance — where floor-to-ceiling glass meets natural stone, and
            every terrace frames an endless horizon. This is not just a place to stay. It is a place
            to belong.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-3xl md:text-4xl mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: 'var(--color-ocean)',
                    fontWeight: 600,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: 'var(--color-aqua)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider — white to sand */}
      <div className="wave-divider" />

      {/* ════════════════ VILLAS SECTION ════════════════ */}
      <section
        id="villas"
        className="py-20 md:py-28"
        style={{ background: 'var(--color-sand)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: 'var(--color-aqua)',
                fontWeight: 600,
              }}
            >
              ACCOMMODATIONS
            </p>
            <h2
              className="text-3xl md:text-5xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: 'var(--color-ocean)',
                fontWeight: 400,
              }}
            >
              The Villas
            </h2>
          </div>

          {/* Villa Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VILLAS.map((villa) => (
              <div
                key={villa.name}
                className="villa-card bg-white rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={villa.image}
                    alt={villa.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3
                    className="text-2xl mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: 'var(--color-ocean)',
                      fontWeight: 600,
                    }}
                  >
                    {villa.name}
                  </h3>
                  <p
                    className="text-sm mb-1"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: 'var(--color-aqua)',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {villa.size}
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: '#64748B', fontWeight: 400 }}
                  >
                    {villa.detail}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        className="text-xs tracking-wider"
                        style={{ color: '#94A3B8', fontWeight: 500 }}
                      >
                        FROM
                      </span>
                      <p
                        className="text-xl"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: 'var(--color-ocean)',
                          fontWeight: 700,
                        }}
                      >
                        {villa.price}
                        <span className="text-sm font-normal" style={{ color: '#94A3B8' }}>
                          /night
                        </span>
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="text-sm tracking-wide hover:underline"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: 'var(--color-aqua)',
                        fontWeight: 600,
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

      {/* Wave Divider — sand to white */}
      <div className="wave-divider-reverse" />

      {/* ════════════════ EXPERIENCES SECTION ════════════════ */}
      <section id="experiences" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.3em] mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: 'var(--color-aqua)',
                fontWeight: 600,
              }}
            >
              CURATED FOR YOU
            </p>
            <h2
              className="text-3xl md:text-5xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: 'var(--color-ocean)',
                fontWeight: 400,
              }}
            >
              Experiences
            </h2>
          </div>

          {/* Experience Grid — 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.title}
                className="experience-card bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{exp.emoji}</span>
                    <h3
                      className="experience-title text-xl md:text-2xl transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: 'var(--color-ocean)',
                        fontWeight: 600,
                      }}
                    >
                      {exp.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: '#64748B', fontWeight: 400 }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SUNSET / QUOTE SECTION ════════════════ */}
      <section id="dining" className="relative w-full" style={{ height: '70vh', minHeight: '400px' }}>
        {/* Background Image */}
        <img
          src={IMAGES.sunset}
          alt="Sunset at Cerulean Bay"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 quote-overlay" />

        {/* Quote Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-3xl text-center">
            <p
              className="text-white text-2xl md:text-4xl lg:text-5xl leading-snug mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Some places you visit. <br className="hidden md:block" />
              Cerulean Bay, you feel.&rdquo;
            </p>
            <p
              className="text-white/60 text-sm tracking-[0.2em]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              &mdash; COND&Eacute; NAST TRAVELER
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════ CONTACT / RESERVATION ════════════════ */}
      <section
        id="contact"
        className="py-20 md:py-28"
        style={{ background: 'var(--color-seafoam)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column — Info */}
            <div>
              <p
                className="text-xs tracking-[0.3em] mb-4"
                style={{
                  fontFamily: "var(--font-body)",
                  color: 'var(--color-aqua)',
                  fontWeight: 600,
                }}
              >
                RESERVATIONS
              </p>
              <h2
                className="text-3xl md:text-5xl mb-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: 'var(--color-ocean)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                Plan Your Escape
              </h2>

              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: '#475569', fontWeight: 400 }}
              >
                Let our concierge team craft your perfect Bali experience. From private transfers to
                customized itineraries, every detail is attended to with the utmost care.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--color-ocean)' }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm mb-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: 'var(--color-ocean)',
                        fontWeight: 600,
                      }}
                    >
                      Address
                    </p>
                    <p className="text-sm" style={{ color: '#64748B' }}>
                      Jl. Pantai Cerulean No. 1<br />
                      Nusa Dua, Bali 80363<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--color-ocean)' }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm mb-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: 'var(--color-ocean)',
                        fontWeight: 600,
                      }}
                    >
                      Phone
                    </p>
                    <p className="text-sm" style={{ color: '#64748B' }}>
                      +62 361 XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--color-ocean)' }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-sm mb-1"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: 'var(--color-ocean)',
                        fontWeight: 600,
                      }}
                    >
                      Email
                    </p>
                    <p className="text-sm" style={{ color: '#64748B' }}>
                      reservations@ceruleanbay.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Form */}
            <div>
              <form
                className="bg-white rounded-2xl p-8 md:p-10"
                style={{ boxShadow: '0 8px 40px rgba(12,74,110,0.08)' }}
                onSubmit={(e) => e.preventDefault()}
              >
                <h3
                  className="text-2xl mb-8"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: 'var(--color-ocean)',
                    fontWeight: 600,
                  }}
                >
                  Reserve Your Villa
                </h3>

                {/* Name */}
                <div className="mb-5">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: 'var(--color-ocean)',
                      fontWeight: 600,
                    }}
                  >
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 text-sm"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--color-dark)' }}
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: 'var(--color-ocean)',
                      fontWeight: 600,
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 text-sm"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--color-dark)' }}
                  />
                </div>

                {/* Check-in Date */}
                <div className="mb-5">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: 'var(--color-ocean)',
                      fontWeight: 600,
                    }}
                  >
                    CHECK-IN DATE
                  </label>
                  <input
                    type="date"
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 text-sm"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--color-dark)' }}
                  />
                </div>

                {/* Number of Guests */}
                <div className="mb-8">
                  <label
                    className="block text-xs tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: 'var(--color-ocean)',
                      fontWeight: 600,
                    }}
                  >
                    NUMBER OF GUESTS
                  </label>
                  <select
                    className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 text-sm appearance-none bg-white"
                    style={{ fontFamily: "var(--font-body)", color: 'var(--color-dark)' }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select guests
                    </option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="submit-button w-full py-4 rounded-xl text-white text-sm tracking-[0.15em]"
                  style={{
                    background: 'var(--color-ocean)',
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  RESERVE YOUR VILLA
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer style={{ background: 'var(--color-ocean)' }} className="text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* About */}
            <div>
              <h4
                className="text-2xl mb-4"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}
              >
                CERULEAN BAY
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}
              >
                A haven of coastal luxury in Nusa Dua, Bali. Where every moment is designed for those
                who seek the extraordinary in the tranquil embrace of the Indian Ocean.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5
                className="text-xs tracking-[0.2em] mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: 'var(--color-aqua)',
                }}
              >
                QUICK LINKS
              </h5>
              <ul className="space-y-3">
                {[
                  { label: 'The Villas', href: '#villas' },
                  { label: 'Experiences', href: '#experiences' },
                  { label: 'Dining', href: '#dining' },
                  { label: 'Reservations', href: '#contact' },
                  { label: 'Privacy Policy', href: '#' },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[#06B6D4] transition-colors duration-300"
                      style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}
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
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: 'var(--color-aqua)',
                }}
              >
                CONTACT
              </h5>
              <div className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
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
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <p
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}
            >
              &copy; 2026 Cerulean Bay Resort &amp; Residences. All rights reserved.
            </p>
            <p
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}
            >
              Made with &#9829; by{' '}
              <a
                href="https://creativism.id"
                style={{ color: '#06B6D4' }}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
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
