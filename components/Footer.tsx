'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null; // Omit on admin portal
  }

  return (
    <>
      <footer className="site-footer">
        <div className="container-xxl px-4">
          <div className="row g-4">
            {/* Col 1: Brand Info */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <img src="/img/icon/icon-10.png" alt="Newtech Ply &amp; Boards" width="40" height="40" />
                <span className="text-white fw-bold fs-5">NEWTECH PLY &amp; BOARDS</span>
              </div>
              <p className="small text-secondary mb-3">
                Precision-engineered plywood manufactured in Perumbavoor, Kerala &mdash; South India's premier timber hub. High tensile strength, zero core gaps, and certified IS:303 &amp; IS:710 compliance for interior architecture, construction, and transport.
              </p>
              <div className="d-flex gap-2">
                <span className="badge bg-dark border border-secondary text-light">IS:710 Marine</span>
                <span className="badge bg-dark border border-secondary text-light">IS:303 BWR &amp; MR</span>
                <span className="badge bg-dark border border-secondary text-light">Shuttering</span>
              </div>
            </div>

            {/* Col 2: Products */}
            <div className="col-lg-3 col-md-6">
              <h5>Product Range</h5>
              <ul className="footer-links small">
                <li><Link href="/products/commercial-plywood">Commercial Plywood (MR)</Link></li>
                <li><Link href="/products/hardwood-plywood">Hardwood Plywood (Structural)</Link></li>
                <li><Link href="/products/marine-plywood">Marine Plywood (IS:710 BWP)</Link></li>
                <li><Link href="/products/bwr-plywood">BWR Plywood (IS:303)</Link></li>
                <li><Link href="/products/film-faced-plywood">Film Faced Shuttering</Link></li>
                <li><Link href="/products/alternate-plywood">Alternate Multi-Core</Link></li>
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5>Quick Links</h5>
              <ul className="footer-links small">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/applications">Applications</Link></li>
                <li><Link href="/manufacturing-quality">Manufacturing Quality</Link></li>
                <li><Link href="/resources">Buyer Resources</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact &amp; Mill Desk</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/admin/login" className="text-secondary opacity-75">Admin Portal</Link></li>
              </ul>
            </div>

            {/* Col 4: Factory Desk */}
            <div className="col-lg-3 col-md-6">
              <h5>Factory &amp; Sales Desk</h5>
              <address className="small text-secondary mb-2">
                Behind Kanjirakkad Juma Masjid Ayathupady, Koovappady P.O., Perumbavoor, Kerala - 683544, India
              </address>
              <div className="small mb-1">
                <span className="text-white-50">Head of Sales:</span>{' '}
                <a href="tel:+919526029853" className="text-white fw-bold text-decoration-none">
                  +91 95260 29853
                </a>
              </div>
              <div className="small mb-1">
                <span className="text-white-50">Managing Partner:</span>{' '}
                <a href="tel:+919745450618" className="text-white fw-bold text-decoration-none">
                  +91 97454 50618
                </a>
              </div>
              <div className="small mb-3">
                <span className="text-white-50">Email:</span>{' '}
                <a href="mailto:newtechply@gmail.com" className="text-white text-decoration-none">
                  newtechply@gmail.com
                </a>
              </div>
              <a
                href="https://wa.me/919526029853?text=Hello%20Newtech%20Ply%20%26%20Boards%2C%20I%20would%20like%20to%20request%20a%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-whatsapp w-100"
              >
                <i className="bi bi-whatsapp me-2"></i> WhatsApp Sales Desk
              </a>
            </div>
          </div>

          <div className="footer-bottom text-center">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
              <span>&copy; {new Date().getFullYear()} Newtech Ply &amp; Boards. All Rights Reserved.</span>
              <span>
                Website Designed &amp; Developed by{' '}
                <a href="https://infinio.co.in/" target="_blank" rel="noopener noreferrer">
                  Infinio Technology Solutions
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Button */}
      <a
        href="https://wa.me/919745450618?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20Newtech%20Ply."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}
