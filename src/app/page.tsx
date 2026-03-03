'use client';

import { useState } from 'react';

/* ─────────────── IMAGE URLS ─────────────── */
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80',
  about: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&q=80',
  beachfrontVilla: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80',
  oceanSuite: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  gardenResidence: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  wellness: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
  ocean: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=800&q=80',
  location: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=1200&q=80',
};

/* ─────────────── RESIDENCE DATA ─────────────── */
const RESIDENCES = [
  {
    name: 'Beachfront Villa',
    type: 'Private Villa',
    size: '380 sqm',
    features: ['Private infinity pool', 'Direct beach access', 'Personal butler service', 'Outdoor rain shower'],
    price: 'From $1,250,000',
    image: IMAGES.beachfrontVilla,
  },
  {
    name: 'Ocean Suite',
    type: 'Luxury Suite',
    size: '180 sqm',
    features: ['Panoramic ocean views', 'Premium wet kitchen', 'Private terrace', 'Smart home system'],
    price: 'From $680,000',
    image: IMAGES.oceanSuite,
  },
  {
    name: 'Garden Residence',
    type: 'Residence',
    size: '120 sqm',
    features: ['Tropical garden patio', 'Open-plan living', 'Resort pool access', 'Concierge service'],
    price: 'From $420,000',
    image: IMAGES.gardenResidence,
  },
];

/* ─────────────── AMENITY DATA ─────────────── */
const AMENITIES = [
  { icon: '🏖️', name: 'Beach Club', description: 'An exclusive beachfront haven with sun loungers, craft cocktails, and live acoustic evenings under the stars.' },
  { icon: '🏊', name: 'Infinity Pool', description: 'A stunning 50-meter oceanfront pool that cascades into the horizon, blending seamlessly with the cerulean sea.' },
  { icon: '🧖', name: 'Spa & Wellness', description: 'A tranquil sanctuary offering Balinese treatments, hydrotherapy circuits, and holistic wellness programs.' },
  { icon: '🏄', name: 'Water Sports', description: 'Kayaking, paddle boarding, snorkeling, and sunset sailing curated by our expert marine activities team.' },
  { icon: '🌅', name: 'Sunset Lounge', description: 'An elevated terrace bar offering panoramic sunset views, premium wines, and artisanal small plates.' },
  { icon: '⛵', name: 'Private Marina', description: 'A 24-berth marina with concierge docking, fueling services, and island-hopping charter arrangements.' },
];

/* ─────────────── LIFESTYLE DATA ─────────────── */
const LIFESTYLE = [
  {
    title: 'Coastal Dining',
    description: 'Savor world-class cuisine at our oceanfront restaurants. From freshly caught seafood prepared by award-winning chefs to intimate sunset dinners on the beach, every meal becomes a cherished memory.',
    image: IMAGES.dining,
  },
  {
    title: 'Wellness Journeys',
    description: 'Begin each day with sunrise yoga on the shore, followed by rejuvenating spa treatments using organic marine botanicals. Our wellness programs are designed to restore balance and elevate your everyday.',
    image: IMAGES.wellness,
  },
  {
    title: 'Ocean Adventures',
    description: 'Dive into crystal-clear waters teeming with marine life, cruise to hidden coves aboard a private yacht, or master the waves with expert surf coaches. The ocean is your endless playground.',
    image: IMAGES.ocean,
  },
];

/* ─────────────── NAV LINKS ─────────────── */
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

/* ═══════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function CeruleanBayPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    guests: '',
    residenceType: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', checkIn: '', guests: '', residenceType: '' });
  };

  return (
    <>
      {/* ═══════════════ NAVIGATION ═══════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm nav-scrolled">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold tracking-wide text-ocean">
                CERULEAN BAY
              </span>
              <span className="text-[10px] tracking-[0.35em] text-gold font-semibold uppercase -mt-1">
                Beachfront Residences
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-ocean/70 hover:text-cerulean transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-gold text-white text-sm font-semibold tracking-wider rounded hover:bg-gold-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Reserve
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-ocean transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-ocean transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-ocean transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-ocean/10">
              <div className="flex flex-col gap-4 pt-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-ocean/80 hover:text-cerulean transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 px-6 py-3 bg-gold text-white text-sm font-semibold tracking-wider rounded text-center hover:bg-gold-dark transition-colors"
                >
                  Reserve
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Cerulean Bay beachfront luxury residences"
            className="img-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-gold font-semibold text-sm tracking-[0.35em] uppercase mb-6">
            Beachfront Living
          </p>
          <h1 className="font-serif text-white mb-2">
            <span className="block text-7xl sm:text-8xl lg:text-9xl font-light tracking-tight">
              CERULEAN
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-light tracking-[0.4em] mt-2">
              BAY
            </span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-white/80 italic mt-6 mb-10">
            Where the Ocean Meets Luxury
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#residences"
              className="px-8 py-3.5 bg-white text-ocean text-sm font-semibold tracking-wider rounded hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border-2 border-white text-white text-sm font-semibold tracking-wider rounded hover:bg-white hover:text-ocean transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule a Visit
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/60">
              <path d="M10 4 L10 16 M4 10 L10 16 L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-gold font-semibold text-xs tracking-[0.3em] uppercase mb-4">
                Our Vision
              </p>
              <div className="gold-line mb-8" />
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-ocean mb-8 leading-tight">
                A Sanctuary<br />by the Sea
              </h2>
              <p className="text-ocean/70 text-lg leading-relaxed mb-6">
                Nestled along a pristine stretch of coastline, Cerulean Bay is a rare collection of
                beachfront residences where architectural elegance meets the raw beauty of nature.
                Every detail has been crafted to honor the rhythm of the ocean.
              </p>
              <p className="text-ocean/70 text-lg leading-relaxed">
                From the gentle lull of waves at dawn to the golden light of sunset reflecting off
                your private terrace, life here unfolds at the pace of the tides. This is not simply
                a home — it is a way of living that reconnects you with the elements.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-[8px_8px_40px_rgba(46,134,171,0.15)]">
                <img
                  src={IMAGES.about}
                  alt="Aerial view of Cerulean Bay coastline"
                  className="img-cover aspect-[4/5] rounded-lg img-zoom"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-lg -z-10" />
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-ocean/10">
            {[
              { value: '8', label: 'Hectares', suffix: '' },
              { value: '45', label: 'Residences', suffix: '' },
              { value: '2', label: 'Coastline', suffix: 'km' },
              { value: '5', label: 'Star Service', suffix: '-Star' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-5xl lg:text-6xl font-light text-cerulean mb-2">
                  {stat.value}
                  {stat.suffix && <span className="text-3xl text-gold ml-1">{stat.suffix}</span>}
                </p>
                <p className="text-sm tracking-widest uppercase text-ocean/50 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider: White to Seafoam */}
      <div className="wave-divider-to-seafoam" />

      {/* ═══════════════ RESIDENCES ═══════════════ */}
      <section id="residences" className="bg-seafoam py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              The Collection
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-ocean">
              Our Residences
            </h2>
          </div>

          {/* Residence Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESIDENCES.map((residence) => (
              <div
                key={residence.name}
                className="bg-white rounded-lg overflow-hidden card-hover shadow-sm"
              >
                {/* Card Image */}
                <div className="overflow-hidden h-64">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="img-cover h-full img-zoom"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-ocean mb-2">{residence.name}</h3>
                  <p className="text-sm text-ocean/50 tracking-wide mb-4">
                    {residence.type} &middot; {residence.size}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {residence.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-ocean/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-cerulean flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-ocean/10">
                    <p className="font-serif text-lg text-ocean font-semibold">{residence.price}</p>
                    <a
                      href="#contact"
                      className="text-gold font-semibold text-sm tracking-wide hover:text-gold-dark transition-colors group"
                    >
                      Explore
                      <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider: Seafoam to White */}
      <div className="wave-divider-to-white" />

      {/* ═══════════════ AMENITIES ═══════════════ */}
      <section id="amenities" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              World-Class Facilities
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-ocean">
              Resort Amenities
            </h2>
          </div>

          {/* Amenities Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.name}
                className="text-center p-8 rounded-lg border border-ocean/5 hover:border-cerulean/20 hover:bg-seafoam/50 transition-all duration-400 card-hover"
              >
                <div className="text-5xl mb-5">{amenity.icon}</div>
                <h3 className="font-serif text-xl text-ocean mb-3">{amenity.name}</h3>
                <p className="text-ocean/60 text-sm leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider: White to Seafoam */}
      <div className="wave-divider-to-seafoam" />

      {/* ═══════════════ LIFESTYLE ═══════════════ */}
      <section id="lifestyle" className="bg-seafoam py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gold font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              Live Beautifully
            </p>
            <div className="gold-line-center mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-ocean">
              The Cerulean Lifestyle
            </h2>
          </div>

          {/* Lifestyle Blocks */}
          <div className="space-y-24">
            {LIFESTYLE.map((item, index) => (
              <div
                key={item.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={`overflow-hidden rounded-lg shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-cover aspect-[3/2] rounded-lg img-zoom"
                  />
                </div>

                {/* Text */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="gold-line mb-6" />
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-ocean mb-6">
                    {item.title}
                  </h3>
                  <p className="text-ocean/70 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider: Seafoam to White */}
      <div className="wave-divider-to-white" />

      {/* ═══════════════ LOCATION ═══════════════ */}
      <section id="location" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={IMAGES.location}
                alt="Cerulean Bay tropical location"
                className="img-cover aspect-[4/3] rounded-lg"
              />
            </div>

            {/* Right: Info */}
            <div>
              <p className="text-gold font-semibold text-xs tracking-[0.3em] uppercase mb-4">
                Prime Location
              </p>
              <div className="gold-line mb-8" />
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-ocean mb-8 leading-tight">
                Gateway to<br />Paradise
              </h2>
              <p className="text-ocean/70 text-lg leading-relaxed mb-10">
                Positioned on one of the most coveted stretches of coastline, Cerulean Bay offers
                effortless access to both natural wonders and modern conveniences.
              </p>

              {/* Proximity List */}
              <div className="space-y-5">
                {[
                  { icon: '✈️', label: 'International Airport', time: '25 min drive' },
                  { icon: '🏛️', label: 'Cultural Heritage Sites', time: '15 min drive' },
                  { icon: '🏄', label: 'Premier Surf Spots', time: '10 min drive' },
                  { icon: '⛳', label: 'Championship Golf Course', time: '20 min drive' },
                  { icon: '🛍️', label: 'Boutique Shopping District', time: '12 min drive' },
                  { icon: '🏥', label: 'International Hospital', time: '18 min drive' },
                ].map((place) => (
                  <div
                    key={place.label}
                    className="flex items-center gap-4 pb-4 border-b border-ocean/5 last:border-0 last:pb-0"
                  >
                    <span className="text-2xl w-10 text-center flex-shrink-0">{place.icon}</span>
                    <div className="flex-1">
                      <p className="text-ocean font-medium">{place.label}</p>
                    </div>
                    <p className="text-cerulean text-sm font-medium">{place.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider: White to Seafoam */}
      <div className="wave-divider-to-seafoam" />

      {/* ═══════════════ CONTACT ═══════════════ */}
      <section id="contact" className="bg-seafoam py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <p className="text-gold font-semibold text-xs tracking-[0.3em] uppercase mb-4">
                Get in Touch
              </p>
              <div className="gold-line mb-8" />
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-ocean mb-8 leading-tight">
                Begin Your<br />Journey
              </h2>
              <p className="text-ocean/70 text-lg leading-relaxed mb-12">
                Our dedicated team is ready to guide you through the Cerulean Bay experience.
                Schedule a private tour or request a comprehensive brochure.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cerulean/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cerulean text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-ocean mb-1">Visit Us</p>
                    <p className="text-ocean/60 text-sm leading-relaxed">
                      Cerulean Bay Estate<br />
                      Jl. Pantai Indah No. 1<br />
                      Bali, Indonesia 80361
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cerulean/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cerulean text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-ocean mb-1">Call Us</p>
                    <p className="text-ocean/60 text-sm">+62 361 888 8888</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cerulean/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cerulean text-lg">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-ocean mb-1">Email Us</p>
                    <p className="text-ocean/60 text-sm">residences@ceruleanbay.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 lg:p-10 shadow-[0_8px_40px_rgba(12,35,64,0.06)]"
              >
                <h3 className="font-serif text-2xl text-ocean mb-8">Request Information</h3>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ocean/80 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-ocean/15 rounded text-ocean text-sm bg-white placeholder:text-ocean/30 form-input"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ocean/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-ocean/15 rounded text-ocean text-sm bg-white placeholder:text-ocean/30 form-input"
                    />
                  </div>

                  {/* Check-in Date */}
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-ocean/80 mb-2">
                      Preferred Visit Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-ocean/15 rounded text-ocean text-sm bg-white form-input"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-ocean/80 mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleFormChange}
                      min="1"
                      max="20"
                      placeholder="2"
                      className="w-full px-4 py-3 border border-ocean/15 rounded text-ocean text-sm bg-white placeholder:text-ocean/30 form-input"
                    />
                  </div>

                  {/* Residence Type */}
                  <div>
                    <label htmlFor="residenceType" className="block text-sm font-medium text-ocean/80 mb-2">
                      Residence Type
                    </label>
                    <select
                      id="residenceType"
                      name="residenceType"
                      value={formData.residenceType}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-ocean/15 rounded text-ocean text-sm bg-white form-input"
                    >
                      <option value="">Select a residence type</option>
                      <option value="beachfront-villa">Beachfront Villa (380 sqm)</option>
                      <option value="ocean-suite">Ocean Suite (180 sqm)</option>
                      <option value="garden-residence">Garden Residence (120 sqm)</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full mt-4 px-8 py-3.5 bg-gold text-white font-semibold text-sm tracking-wider rounded hover:bg-gold-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider: Seafoam to Ocean */}
      <div className="wave-divider-to-ocean" />

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="bg-ocean text-white/70 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Col 1: Brand */}
            <div>
              <h4 className="font-serif text-2xl text-white font-semibold tracking-wide mb-2">
                CERULEAN BAY
              </h4>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
                Beachfront Residences
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                A rare collection of oceanfront residences where modern luxury meets the timeless
                beauty of the coast. Your sanctuary by the sea awaits.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h5 className="text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-6">
                Quick Links
              </h5>
              <div className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h5 className="text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-6">
                Contact
              </h5>
              <div className="space-y-3 text-sm text-white/50">
                <p>Jl. Pantai Indah No. 1</p>
                <p>Bali, Indonesia 80361</p>
                <p className="pt-2">+62 361 888 8888</p>
                <p>residences@ceruleanbay.com</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Cerulean Bay. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Made with <span className="text-gold">&hearts;</span> by Creativism
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
