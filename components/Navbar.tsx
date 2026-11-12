'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  // Sticky nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  if (pathname?.startsWith('/admin')) {
    return null; // Don't show public navbar on admin pages
  }

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Topbar */}
      <div className="topbar d-none d-lg-block">
        <div className="container-fluid px-3 px-xl-5">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-4 text-secondary small">
              <div>
                <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                <span>Perumbavoor, Kerala</span>
              </div>
              <div>
                <i className="bi bi-clock-fill text-danger me-1"></i>
                <span>Mon - Sat: 8:30 AM - 7:00 PM</span>
              </div>
              <div>
                <i className="bi bi-envelope-fill text-danger me-1"></i>
                <a href="mailto:newtechply@gmail.com" className="text-secondary text-decoration-none">
                  newtechply@gmail.com
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <a href="tel:+919526029853" className="topbar-phone text-decoration-none">
                <i className="bi bi-telephone-fill me-1"></i> +91 95260 29853
              </a>
              <span className="text-muted">|</span>
              <a
                href="https://wa.me/919526029853?text=Hello%20Newtech%20Ply%20%26%20Boards%2C%20I%20would%20like%20to%20enquire%20about%20your%20plywood%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-wa text-decoration-none"
              >
                <i className="bi bi-whatsapp me-1"></i> WhatsApp
              </a>
              <span className="text-muted">|</span>
              <div className="social-links d-inline-flex gap-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-custom ${isSticky ? 'sticky-active' : ''}`} aria-label="Main Navigation">
        <div className="container-fluid px-3 px-xl-5">
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src="/img/icon/icon-10.png" alt="Newtech Ply &amp; Boards Logo" width="46" height="46" className="brand-icon" />
            <div className="brand-text">
              <span className="brand-name">NEWTECH PLY &amp; BOARDS</span>
              <span className="brand-tagline">PREMIUM PLYWOOD MANUFACTURER</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="navbarContent"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>

              {/* Products Dropdown */}
              <li
                className={`nav-item dropdown ${productsOpen ? 'show' : ''}`}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`nav-link dropdown-toggle bg-transparent border-0 ${pathname?.startsWith('/products') ? 'active' : ''}`}
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  aria-expanded={productsOpen}
                >
                  Products
                </button>
                <ul className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
                  <li>
                    <Link href="/products" className="dropdown-item fw-bold text-danger border-bottom pb-2">
                      <i className="bi bi-grid-fill me-2"></i> All Products Catalog
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/commercial-plywood" className="dropdown-item">
                      Commercial Plywood (IS:303 MR)
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/hardwood-plywood" className="dropdown-item">
                      Hardwood Plywood (Structural)
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/marine-plywood" className="dropdown-item">
                      Marine Plywood (IS:710 BWP)
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/bwr-plywood" className="dropdown-item">
                      BWR Plywood (IS:303 BWR)
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/film-faced-plywood" className="dropdown-item">
                      Film Faced Shuttering Plywood
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/alternate-plywood" className="dropdown-item">
                      Alternate Plywood (Multi-Core)
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/applications" className={`nav-link ${isActive('/applications') ? 'active' : ''}`}>
                  Applications
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/manufacturing-quality" className={`nav-link ${isActive('/manufacturing-quality') ? 'active' : ''}`}>
                  Manufacturing &amp; Quality
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/resources" className={`nav-link ${isActive('/resources') ? 'active' : ''}`}>
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="nav-cta d-flex align-items-center gap-3">
              <Link href="/contact#quote" className="btn btn-primary d-inline-flex align-items-center gap-2">
                <i className="bi bi-file-earmark-text"></i>
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
