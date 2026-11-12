'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  bgImage: string;
  badge: string;
  badgeIcon: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  statNumber: string;
  statLabel: string;
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: '/img/carousel-1.jpg',
    badge: 'Direct Mill Supply · Perumbavoor, Kerala',
    badgeIcon: 'bi-patch-check-fill',
    title: 'Architectural Plywood for',
    highlight: 'Interiors, Construction & Industry',
    description:
      'Engineered with select southern plantation hardwood veneers, dual-head calibrated thickness, and permanent phenolic bonding for flawless modern millwork.',
    primaryBtnText: 'Explore Product Catalog',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Request Wholesale Quote',
    secondaryBtnLink: '/contact#quote-form',
    statNumber: '100%',
    statLabel: 'Calibrated Hardwood Core',
  },
  {
    id: 2,
    bgImage: '/img/carousel-2.jpg',
    badge: '100% Hardwood Core · IS:710 Certified',
    badgeIcon: 'bi-droplet-fill',
    title: 'Marine Plywood Engineered for',
    highlight: 'Extreme Moisture Endurance',
    description:
      'Guaranteed 72-hour boiling water immersion proof with zero core delamination. Formulated for luxury modular kitchens, high-steam vanities, and coastal villas.',
    primaryBtnText: 'View Marine IS:710 Specs',
    primaryBtnLink: '/products/marine-plywood',
    secondaryBtnText: 'Speak with Technical Head',
    secondaryBtnLink: '/contact',
    statNumber: '72hr',
    statLabel: 'Boiling Proof BWP Guarantee',
  },
  {
    id: 3,
    bgImage: '/img/carousel-3.jpg',
    badge: 'Zero Core Voids · Factory Wholesale Supply',
    badgeIcon: 'bi-shield-check',
    title: 'Precision Calibration &',
    highlight: 'Permanent Termite Protection',
    description:
      'Multi-opening hydraulic hot-pressing polymerizes resins at 150°C and 14 kg/cm² pressure, delivering true ±0.2mm tolerance for high-speed CNC joinery.',
    primaryBtnText: 'Inspect Testing Standards',
    primaryBtnLink: '/manufacturing-quality',
    secondaryBtnText: 'Download Grade Matrix',
    secondaryBtnLink: '/resources',
    statNumber: '30+',
    statLabel: 'Concrete Shuttering Pours',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section
      className="hero-slider-section position-relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Newtech Ply & Boards Hero Showcase"
    >
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero-slide-item ${isActive ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
              position: idx === 0 ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {/* Elegant Directional Lighting: Clear Natural Photography on Right, Crisp Text on Left */}
            <div className="hero-gradient-overlay"></div>

            <div className="container-xxl px-4 position-relative" style={{ zIndex: 3 }}>
              <div className="row align-items-center min-vh-70 py-5">
                <div className="col-lg-8 col-xl-7">
                  {/* Floating Trust Badge */}
                  <div className="hero-badge mb-3 d-inline-flex align-items-center">
                    <i className={`bi ${slide.badgeIcon} me-2 text-warning fs-6`}></i>
                    <span>{slide.badge}</span>
                  </div>

                  {/* Main Display Headline */}
                  <h1 className="hero-title mb-3">
                    {slide.title}{' '}
                    <span className="hero-highlight d-block">{slide.highlight}</span>
                  </h1>

                  {/* Descriptive Subtext */}
                  <p className="hero-lead mb-4">{slide.description}</p>

                  {/* High-Contrast Action CTAs */}
                  <div className="hero-actions d-flex flex-wrap align-items-center gap-3 mb-4">
                    <Link href={slide.primaryBtnLink} className="btn btn-hero-primary">
                      <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                      {slide.primaryBtnText}
                    </Link>
                    <Link href={slide.secondaryBtnLink} className="btn btn-hero-secondary">
                      <i className="bi bi-arrow-right-circle-fill me-2"></i>
                      {slide.secondaryBtnText}
                    </Link>
                  </div>

                  {/* Trust Feature Badges */}
                  <div className="hero-features d-flex flex-wrap gap-4 text-white-50 small border-top border-white border-opacity-15 pt-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-warning"></i>
                      <span className="text-white-75">BIS IS:303 &amp; IS:710 Certified</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-warning"></i>
                      <span className="text-white-75">Factory Direct Wholesale Pricing</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-warning"></i>
                      <span className="text-white-75">100% Plantation Timber</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Card (Visible on Desktop) */}
                <div className="col-lg-4 col-xl-5 d-none d-lg-flex justify-content-end">
                  <div className="hero-stat-card p-4 rounded-4 text-white">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="hero-stat-icon">
                        <i className="bi bi-award-fill text-warning fs-3"></i>
                      </div>
                      <div>
                        <span className="text-uppercase tracking-wider small text-white-50 d-block">
                          Quality Benchmark
                        </span>
                        <strong className="text-white">{slide.statLabel}</strong>
                      </div>
                    </div>
                    <div className="display-4 fw-bold text-white mb-2">{slide.statNumber}</div>
                    <p className="small text-white-75 mb-0">
                      Precision-calibrated in Perumbavoor with certified batch lab reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Manual Slide Navigation Arrows */}
      <button
        type="button"
        className="hero-arrow-btn hero-arrow-prev d-none d-md-flex"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <i className="bi bi-chevron-left fs-5"></i>
      </button>

      <button
        type="button"
        className="hero-arrow-btn hero-arrow-next d-none d-md-flex"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <i className="bi bi-chevron-right fs-5"></i>
      </button>

      {/* Modern Capsule Slide Indicators */}
      <div className="hero-indicators-bar">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`hero-indicator-pill ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
