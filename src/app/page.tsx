'use client';

import { useState, useEffect } from 'react';

/* ─── Data ─── */

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Residences', href: '#residences' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const residences = [
  {
    name: 'Beachfront Villa',
    size: '380 sqm',
    beds: 'Private Villa',
    description:
      'An expansive private sanctuary with direct beach access, infinity pool, personal butler service, and outdoor rain shower nestled among tropical gardens.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    name: 'Ocean Suite',
    size: '180 sqm',
    beds: 'Luxury Suite',
    description:
      'Panoramic ocean views frame every moment in this premium suite featuring a wet kitchen, private terrace, and intelligent smart home integration.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    name: 'Garden Residence',
    size: '120 sqm',
    beds: 'Residence',
    description:
      'Tropical garden living with open-plan spaces, resort pool access, and dedicated concierge service. A refined retreat amid lush coastal landscapes.',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
];

const amenities = [
  {
    name: 'Beach Club',
    description: 'Exclusive beachfront haven with sun loungers, craft cocktails, and live acoustic evenings.',
    icon: '\u2261', // hamburger-like lines
  },
  {
    name: 'Infinity Pool',
    description: '50-meter oceanfront pool cascading into the horizon, blending with the cerulean sea.',
    icon: '\u2248', // wave-like symbol
  },
  {
    name: 'Spa & Wellness',
    description: 'A tranquil sanctuary offering Balinese treatments, hydrotherapy, and holistic programs.',
    icon: '\u2662', // diamond
  },
  {
    name: 'Water Sports',
    description: 'Kayaking, paddle boarding, snorkeling, and sunset sailing curated by marine experts.',
    icon: '\u25B6', // play / sail
  },
  {
    name: 'Sunset Lounge',
    description: 'Elevated terrace bar with panoramic sunset views, premium wines, and artisanal plates.',
    icon: '\u2606', // star
  },
  {
    name: 'Private Marina',
    description: '24-berth marina with concierge docking, fueling services, and island-hopping charters.',
    icon: '\u2302', // anchor-like
  },
];

const lifestyleBlocks = [
  {
    title: 'Coastal Dining',
    description:
      'Savor world-class cuisine at our oceanfront restaurants. From freshly caught seafood prepared by award-winning chefs to intimate sunset dinners on the beach, every meal becomes a cherished memory.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    title: 'Wellness Journeys',
    description:
      'Begin each day with sunrise yoga on the shore, followed by rejuvenating spa treatments using organic marine botanicals. Our wellness programs restore balance and elevate your everyday.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
  },
  {
    title: 'Ocean Adventures',
    description:
      'Dive into crystal-clear waters teeming with marine life, cruise to hidden coves aboard a private yacht, or master the waves with expert surf coaches. The ocean is your endless playground.',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  },
];

const stats = [
  { value: '8', label: 'Hectares' },
  { value: '45', label: 'Residences' },
  { value: '2km', label: 'Coastline' },
  { value: '5\u2605', label: 'Service' },
];

/* ─── Component ─── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ══════════════════════════════════════════════════════════════════
          1. FIXED NAVIGATION
      ══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#0C2340]/5 shadow-[0_4px_24px_rgba(12,35,64,0.08)]'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className="flex flex-col"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-[#0C2340] text-xl tracking-[0.2em] uppercase font-semibold">
                CERULEAN BAY
              </span>
              <span className="font-[family-name:var(--font-source)] text-[#C4A265] text-[9px] tracking-[0.35em] uppercase font-semibold -mt-0.5">
                Beachfront Residences
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-source)] text-[#0C2340]/60 hover:text-[#2E86AB] text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-block px-6 py-2.5 bg-[#C4A265] text-white font-[family-name:var(--font-source)] text-xs tracking-[0.15em] uppercase hover:bg-[#A8894F] transition-all duration-300 rounded"
            >
              Reserve
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1px] bg-[#0C2340] transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#0C2340] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-[1px] bg-[#0C2340] transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-[family-name:var(--font-cormorant)] text-[#0C2340] text-2xl tracking-[0.2em] uppercase hover:text-[#2E86AB] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-[#C4A265] text-white font-[family-name:var(--font-source)] text-sm tracking-[0.15em] uppercase rounded"
          >
            Reserve
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          2. HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
            alt="Cerulean Bay beachfront luxury residences"
            className="w-full h-full object-cover"
          />
          {/* Blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C2340]/50 via-[#2E86AB]/20 to-[#0C2340]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340]/30 via-transparent to-[#0C2340]/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          {/* Subtitle */}
          <p className="font-[family-name:var(--font-source)] text-[#C4A265] text-sm tracking-[0.5em] uppercase mb-6 font-semibold">
            Beachfront Living
          </p>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-white text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] uppercase mb-2 font-light">
            CERULEAN BAY
          </h1>

          {/* Gold Line */}
          <div className="w-20 h-[1px] bg-[#C4A265] mb-8" />

          {/* Tagline */}
          <p className="font-[family-name:var(--font-cormorant)] text-white/80 text-lg md:text-xl italic mb-12 max-w-lg">
            Where the Ocean Meets Luxury
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#residences"
              className="px-8 py-3.5 bg-white text-[#0C2340] font-[family-name:var(--font-source)] text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 rounded"
            >
              Explore Residences
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white text-white font-[family-name:var(--font-source)] text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 rounded"
            >
              Schedule a Visit
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="font-[family-name:var(--font-source)] text-white/60 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C4A265] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. ABOUT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#C4A265]" />
                <span className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Our Vision
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.2] mb-8">
                A Sanctuary
                <br />
                <span className="italic text-[#2E86AB]">by the Sea</span>
              </h2>

              <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm md:text-base leading-relaxed mb-6">
                Nestled along a pristine stretch of coastline, Cerulean Bay is a
                rare collection of beachfront residences where architectural
                elegance meets the raw beauty of nature. Every detail has been
                crafted to honor the rhythm of the ocean.
              </p>

              <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm leading-relaxed mb-10">
                From the gentle lull of waves at dawn to the golden light of
                sunset reflecting off your private terrace, life here unfolds at
                the pace of the tides. This is not simply a home &mdash; it is a
                way of living that reconnects you with the elements.
              </p>

              {/* Gold Accent Line */}
              <div className="w-16 h-[1px] bg-[#C4A265]" />
            </div>

            {/* Right: Image with accent frame */}
            <div className="relative">
              <div className="relative p-3 border border-[#2E86AB]/20 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Luxury beachfront interior with ocean views"
                  className="w-full h-auto aspect-[4/5] object-cover rounded-lg"
                />
              </div>
              {/* Offset corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#C4A265] rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#C4A265] rounded-br-lg" />
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20 pt-16 border-t border-[#0C2340]/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center py-8 md:py-0 ${
                    index < stats.length - 1
                      ? 'md:border-r md:border-[#2E86AB]/20'
                      : ''
                  } ${
                    index < 2 ? 'border-b md:border-b-0 border-[#2E86AB]/20' : ''
                  }`}
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-[#2E86AB] text-4xl md:text-5xl lg:text-6xl block mb-2">
                    {stat.value}
                  </span>
                  <span className="font-[family-name:var(--font-source)] text-[#0C2340]/50 text-xs tracking-[0.2em] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. RESIDENCES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="residences" className="py-24 lg:py-32 bg-[#F0F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4A265]" />
              <span className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase font-semibold">
                The Collection
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4A265]" />
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.2]">
              Our <span className="italic text-[#2E86AB]">Residences</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {residences.map((residence) => (
              <div
                key={residence.name}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-[0_20px_60px_rgba(46,134,171,0.12)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={residence.image}
                    alt={residence.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[#0C2340] mb-2">
                    {residence.name}
                  </h3>
                  <p className="font-[family-name:var(--font-source)] text-[#2E86AB] text-xs tracking-[0.1em] mb-4">
                    {residence.beds} &middot; {residence.size}
                  </p>
                  <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm leading-relaxed mb-6">
                    {residence.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-source)] text-[#C4A265] text-xs tracking-[0.15em] uppercase font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Explore
                    <span className="text-sm">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. AMENITIES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="amenities" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4A265]" />
              <span className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase font-semibold">
                World-Class Facilities
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4A265]" />
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.2]">
              Resort <span className="italic text-[#2E86AB]">Amenities</span>
            </h2>
          </div>

          {/* 2x3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="bg-[#F0F7F4] border border-[#0C2340]/5 p-8 rounded-lg hover:border-[#2E86AB]/30 transition-colors duration-500"
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-[#2E86AB]/40 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2E86AB] text-xl">{amenity.icon}</span>
                </div>

                {/* Name */}
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[#0C2340] mb-3">
                  {amenity.name}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. LIFESTYLE
      ══════════════════════════════════════════════════════════════════ */}
      <section id="lifestyle" className="py-24 lg:py-32 bg-[#F0F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4A265]" />
              <span className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase font-semibold">
                Live Beautifully
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4A265]" />
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.2]">
              The Cerulean <span className="italic text-[#2E86AB]">Lifestyle</span>
            </h2>
          </div>

          {/* 3 Alternating Blocks */}
          <div className="space-y-24">
            {lifestyleBlocks.map((item, index) => (
              <div
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Text */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-[1px] bg-[#C4A265] mb-6" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl text-[#0C2340] leading-[1.2] mb-6">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. LOCATION
      ══════════════════════════════════════════════════════════════════ */}
      <section id="location" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative p-3 border border-[#2E86AB]/20 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Cerulean Bay tropical coastline location"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-[#C4A265] rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-[#C4A265] rounded-br-lg" />
            </div>

            {/* Right: Info */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#C4A265]" />
                <span className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase font-semibold">
                  Prime Location
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.2] mb-8">
                Gateway to
                <br />
                <span className="italic text-[#2E86AB]">Paradise</span>
              </h2>

              <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm md:text-base leading-relaxed mb-10">
                Positioned on one of the most coveted stretches of coastline,
                Cerulean Bay offers effortless access to both natural wonders
                and modern conveniences.
              </p>

              {/* Proximity List */}
              <div className="space-y-4">
                {[
                  { label: 'International Airport', time: '25 min drive' },
                  { label: 'Cultural Heritage Sites', time: '15 min drive' },
                  { label: 'Premier Surf Spots', time: '10 min drive' },
                  { label: 'Championship Golf Course', time: '20 min drive' },
                  { label: 'Boutique Shopping District', time: '12 min drive' },
                  { label: 'International Hospital', time: '18 min drive' },
                ].map((place) => (
                  <div
                    key={place.label}
                    className="flex items-center justify-between pb-4 border-b border-[#0C2340]/5 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E86AB]" />
                      <span className="font-[family-name:var(--font-source)] text-[#0C2340] text-sm">
                        {place.label}
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-source)] text-[#2E86AB] text-sm font-medium">
                      {place.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. CONTACT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 lg:py-32 bg-[#F0F7F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4A265]" />
              <span className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase font-semibold">
                Get in Touch
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4A265]" />
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.2] mb-4">
              Begin Your <span className="italic text-[#2E86AB]">Journey</span>
            </h2>
            <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm max-w-lg mx-auto">
              Our dedicated team is ready to guide you through the Cerulean Bay
              experience. Schedule a private tour or request a comprehensive brochure.
            </p>
          </div>

          {/* Two Columns: Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase mb-3 font-semibold">
                    Visit Us
                  </h3>
                  <p className="font-[family-name:var(--font-source)] text-[#0C2340] text-sm leading-relaxed">
                    Cerulean Bay Estate
                    <br />
                    Jl. Pantai Indah No. 1
                    <br />
                    Bali, Indonesia 80361
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase mb-3 font-semibold">
                    Phone
                  </h3>
                  <p className="font-[family-name:var(--font-source)] text-[#0C2340] text-sm">
                    +62 361 888 8888
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase mb-3 font-semibold">
                    Email
                  </h3>
                  <p className="font-[family-name:var(--font-source)] text-[#0C2340] text-sm">
                    residences@ceruleanbay.com
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase mb-3 font-semibold">
                    Viewing Hours
                  </h3>
                  <p className="font-[family-name:var(--font-source)] text-[#0C2340] text-sm">
                    By Appointment Only
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-white border border-[#0C2340]/5 p-8 md:p-10 rounded-lg shadow-[0_8px_40px_rgba(12,35,64,0.06)]"
                >
                  {/* Name */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-transparent border-b border-[#0C2340]/10 focus:border-[#2E86AB] text-[#0C2340] font-[family-name:var(--font-source)] text-sm py-3 outline-none transition-colors placeholder:text-[#0C2340]/30"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-[#0C2340]/10 focus:border-[#2E86AB] text-[#0C2340] font-[family-name:var(--font-source)] text-sm py-3 outline-none transition-colors placeholder:text-[#0C2340]/30"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 3456 7890"
                      className="w-full bg-transparent border-b border-[#0C2340]/10 focus:border-[#2E86AB] text-[#0C2340] font-[family-name:var(--font-source)] text-sm py-3 outline-none transition-colors placeholder:text-[#0C2340]/30"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-10">
                    <label className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-[10px] tracking-[0.2em] uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your ideal beachfront residence..."
                      className="w-full bg-transparent border-b border-[#0C2340]/10 focus:border-[#2E86AB] text-[#0C2340] font-[family-name:var(--font-source)] text-sm py-3 outline-none transition-colors resize-none placeholder:text-[#0C2340]/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C4A265] text-white font-[family-name:var(--font-source)] text-xs tracking-[0.2em] uppercase hover:bg-[#A8894F] transition-all duration-300 rounded hover:shadow-[0_0_30px_rgba(196,162,101,0.3)]"
                  >
                    Send Inquiry
                  </button>

                  <p className="font-[family-name:var(--font-source)] text-[#0C2340]/30 text-[10px] mt-4 text-center">
                    We respect your privacy. Your information will never be
                    shared.
                  </p>
                </form>
              ) : (
                <div className="bg-white border border-[#2E86AB]/30 p-8 md:p-10 rounded-lg flex flex-col items-center justify-center min-h-[460px] text-center">
                  <div className="w-12 h-12 border border-[#2E86AB] rounded-full flex items-center justify-center mb-8">
                    <span className="text-[#2E86AB] text-lg">
                      &#10003;
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#0C2340] mb-4">
                    Thank You
                  </h3>
                  <p className="font-[family-name:var(--font-source)] text-[#0C2340]/60 text-sm max-w-sm leading-relaxed">
                    Your inquiry has been received. Our team will contact you
                    within 24 hours to arrange your private viewing.
                  </p>
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C4A265] to-transparent mt-8" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. FOOTER
      ══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0C2340] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-white text-lg tracking-[0.2em] uppercase mb-1">
                Cerulean Bay
              </h3>
              <p className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase mb-4 font-semibold">
                Beachfront Residences
              </p>
              <p className="font-[family-name:var(--font-source)] text-white/40 text-xs leading-relaxed">
                A rare collection of oceanfront residences where modern luxury
                meets the timeless beauty of the coast. Your sanctuary by the
                sea awaits.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase mb-6 font-semibold">
                Quick Links
              </h3>
              <div className="space-y-3">
                {['About', 'Residences', 'Amenities', 'Lifestyle', 'Location', 'Contact'].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block font-[family-name:var(--font-source)] text-white/40 text-xs hover:text-[#C4A265] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-[family-name:var(--font-source)] text-[#C4A265] text-[10px] tracking-[0.3em] uppercase mb-6 font-semibold">
                Contact
              </h3>
              <div className="space-y-3">
                <p className="font-[family-name:var(--font-source)] text-white/40 text-xs">
                  Cerulean Bay Estate
                </p>
                <p className="font-[family-name:var(--font-source)] text-white/40 text-xs">
                  Jl. Pantai Indah No. 1
                </p>
                <p className="font-[family-name:var(--font-source)] text-white/40 text-xs">
                  Bali, Indonesia 80361
                </p>
                <p className="font-[family-name:var(--font-source)] text-white/40 text-xs">
                  +62 361 888 8888
                </p>
                <p className="font-[family-name:var(--font-source)] text-white/40 text-xs">
                  residences@ceruleanbay.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-source)] text-white/30 text-[10px] tracking-[0.1em]">
                &copy; 2026 Cerulean Bay. All rights reserved.
              </p>
              <p className="font-[family-name:var(--font-source)] text-white/30 text-[10px] tracking-[0.1em]">
                Made with &#9829; by{' '}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4A265]/50 hover:text-[#C4A265] transition-colors"
                >
                  Creativism
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
