'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Slide {
  id: number;
  bgImage: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: '/img/carousel-1.jpg',
    badge: 'CERTIFIED MANUFACTURER • PERUMBAVOOR, KERALA',
    title: 'Plywood for interiors,',
    highlight: 'construction and industry.',
    description:
      'Explore Newtech Ply & Boards’ precision-engineered product range and speak directly with our technical team about your project requirements.',
    primaryBtnText: 'Explore Products',
    primaryBtnLink: '/products',
    secondaryBtnText: 'Request a Quote',
    secondaryBtnLink: '#quote',
  },
  {
    id: 2,
    bgImage: '/img/carousel-2.jpg',
    badge: '100% HARDWOOD CORE • IS:710 BWP GRADE',
    title: 'Marine plywood engineered',
    highlight: 'for extreme moisture endurance.',
    description:
      'Withstands 72+ hours of boiling water testing with zero core delamination. Perfect for luxury kitchens, bathroom vanities, and coastal structures.',
    primaryBtnText: 'View Marine Specs',
    primaryBtnLink: '/products/marine-plywood',
    secondaryBtnText: 'Consult Our Engineers',
    secondaryBtnLink: '/contact',
  },
  {
    id: 3,
    bgImage: '/img/carousel-3.jpg',
    badge: 'DIRECT MILL PRICING • BULK SUPPLY FOR CONTRACTORS',
    title: 'Precision calibration,',
    highlight: 'uniform thickness & zero core gap.',
    description:
      'Supplying architects, interior contractors, and commercial infrastructure builders across South India with certified quality plywood.',
    primaryBtnText: 'Inspect Quality Process',
    primaryBtnLink: '/manufacturing-quality',
    secondaryBtnText: 'Get Wholesale Quote',
    secondaryBtnLink: '#quote',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
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

  return (
    <section
      className="hero-slider-section position-relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel"
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`hero-slide-item ${idx === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.bgImage})`,
            display: idx === currentSlide ? 'block' : 'none',
          }}
        >
          <div className="hero-slide-overlay"></div>
          <div className="container-xxl px-4 position-relative" style={{ zIndex: 3 }}>
            <div className="row align-items-center min-vh-75 py-5">
              <div className="col-lg-8 col-xl-7">
                <span className="hero-badge mb-3 d-inline-flex align-items-center">
                  <i className="bi bi-shield-check me-2 text-warning"></i>
                  {slide.badge}
                </span>

                <h1 className="hero-title mb-4">
                  {slide.title} <span className="text-highlight d-block">{slide.highlight}</span>
                </h1>

                <p className="hero-lead mb-4">{slide.description}</p>

                <div className="hero-actions d-flex flex-wrap gap-3 mb-4">
                  <Link href={slide.primaryBtnLink} className="btn btn-primary btn-lg">
                    <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                    {slide.primaryBtnText}
                  </Link>
                  <Link href={slide.secondaryBtnLink} className="btn btn-outline-wood btn-lg">
                    <i className="bi bi-chat-square-text me-2"></i>
                    {slide.secondaryBtnText}
                  </Link>
                </div>

                <div className="hero-features d-flex flex-wrap gap-4 text-white-50 small">
                  <div className="feature-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-warning me-2"></i>
                    <span>IS:303 &amp; IS:710 Compliance</span>
                  </div>
                  <div className="feature-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-warning me-2"></i>
                    <span>Direct Mill Supply &amp; Bulk Orders</span>
                  </div>
                  <div className="feature-item d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-warning me-2"></i>
                    <span>Selected Hardwood Veneers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Slide Controls */}
      <button
        type="button"
        className="carousel-control-prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        type="button"
        className="carousel-control-next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>

      {/* Indicator dots */}
      <div className="carousel-indicators mb-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={idx === currentSlide ? 'active' : ''}
            onClick={() => goToSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
