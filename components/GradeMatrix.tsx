'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface GradeRow {
  name: string;
  sub: string;
  code: string;
  codeClass: string;
  resin: string;
  resinDetail: string;
  waterTitle: string;
  waterDetail: string;
  waterType: 'waterproof' | 'moisture' | 'interior';
  waterIcon: string;
  apps: string;
  link: string;
  category: string;
  isFlagship?: boolean;
}

const grades: GradeRow[] = [
  {
    name: 'Marine Plywood',
    sub: 'BWP 100% Waterproof',
    code: 'IS:710 (BWP)',
    codeClass: 'is710',
    resin: '100% Unextended Phenolic',
    resinDetail: 'Pure cross-linked PF resin',
    waterTitle: '72+ Hrs Boiling Proof',
    waterDetail: 'Zero delamination guaranteed',
    waterType: 'waterproof',
    waterIcon: 'bi-shield-fill-check',
    apps: 'Bathroom vanities, modular kitchens, marine craft, external ducts & coastal buildings',
    link: '/products/marine-plywood',
    category: 'waterproof',
    isFlagship: true,
  },
  {
    name: 'BWR Plywood',
    sub: 'Boiling Water Resistant',
    code: 'IS:303 (BWR)',
    codeClass: 'is303',
    resin: 'Phenol Formaldehyde Resin',
    resinDetail: 'Exterior synthetic adhesive',
    waterTitle: '8 Hrs Boiling Resistant',
    waterDetail: 'Steam & moisture resilient',
    waterType: 'waterproof',
    waterIcon: 'bi-droplet-half text-primary',
    apps: 'Modular kitchen cabinets, balcony doors, dining furniture, semi-exterior panels',
    link: '/products/bwr-plywood',
    category: 'waterproof',
  },
  {
    name: 'Commercial (MR)',
    sub: 'Moisture Resistant Standard',
    code: 'IS:303 (MR)',
    codeClass: 'is303',
    resin: 'Urea Formaldehyde',
    resinDetail: 'High tack amino resin',
    waterTitle: 'Moisture Resistant',
    waterDetail: 'Indoor dry climate use',
    waterType: 'interior',
    waterIcon: 'bi-house-check text-secondary',
    apps: 'Bedroom wardrobes, living room wall units, bookshelves, office cabinetry, partitions',
    link: '/products/commercial-plywood',
    category: 'interior',
  },
  {
    name: 'Hardwood Structural',
    sub: 'High-Density Timber Core',
    code: 'Heavy-Duty Calibrated',
    codeClass: 'heavy',
    resin: 'Fortified Phenolic Resin',
    resinDetail: 'High tensile bonding matrix',
    waterTitle: 'High Impact & Weatherproof',
    waterDetail: 'Immense load endurance',
    waterType: 'waterproof',
    waterIcon: 'bi-shield-check text-success',
    apps: 'Freight container flooring, bus & truck bodies, industrial mezzanine decks, stage platforms',
    link: '/products/hardwood-plywood',
    category: 'structural',
  },
  {
    name: 'Film Faced Shuttering',
    sub: 'Concrete Formwork Grade',
    code: 'Formwork Specification',
    codeClass: 'formwork',
    resin: '120 GSM Phenolic Overlay',
    resinDetail: 'Mirror-smooth protective film',
    waterTitle: '100% Concrete Waterproof',
    waterDetail: 'Withstands slurry & alkalis',
    waterType: 'waterproof',
    waterIcon: 'bi-water text-info',
    apps: 'RCC concrete casting, bridge decks, structural columns, beams, high-repetition slabs',
    link: '/products/film-faced-plywood',
    category: 'structural',
  },
  {
    name: 'Alternate Plywood',
    sub: 'Balanced Dual Species Core',
    code: 'Composite Formulation',
    codeClass: 'is303',
    resin: 'Synthetic Polymer Adhesive',
    resinDetail: 'Optimized tack adhesive',
    waterTitle: 'Moderate Humidity Tolerant',
    waterDetail: 'Balanced internal stress',
    waterType: 'interior',
    waterIcon: 'bi-check2-circle text-warning',
    apps: 'Decorative panelling, office workstation desks, light-weight interior partitions, ceilings',
    link: '/products/alternate-plywood',
    category: 'interior',
  },
];

export default function GradeMatrix() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredGrades = grades.filter((g) => {
    if (activeFilter === 'all') return true;
    return g.category === activeFilter;
  });

  return (
    <div className="grade-matrix-wrapper">
      {/* Filter Tabs */}
      <div className="table-filter-bar mb-4" role="tablist" aria-label="Filter plywood grades">
        <button
          type="button"
          className={`table-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All Grades
        </button>
        <button
          type="button"
          className={`table-filter-btn ${activeFilter === 'waterproof' ? 'active' : ''}`}
          onClick={() => setActiveFilter('waterproof')}
        >
          <i className="bi bi-shield-check me-1 text-success"></i> Waterproof &amp; Marine (IS:710 / BWR)
        </button>
        <button
          type="button"
          className={`table-filter-btn ${activeFilter === 'interior' ? 'active' : ''}`}
          onClick={() => setActiveFilter('interior')}
        >
          <i className="bi bi-house-door me-1 text-warning"></i> Interior &amp; Furniture (MR / Alternate)
        </button>
        <button
          type="button"
          className={`table-filter-btn ${activeFilter === 'structural' ? 'active' : ''}`}
          onClick={() => setActiveFilter('structural')}
        >
          <i className="bi bi-hammer me-1 text-primary"></i> Heavy Structural &amp; Formwork
        </button>
      </div>

      <div className="table-scroll-hint mb-2">
        <i className="bi bi-arrows-left-right me-1"></i> Swipe horizontally to view full technical parameters
      </div>

      <div className="comparison-table-card mb-5">
        <div className="table-responsive mb-0">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col" style={{ width: '23%' }}>Plywood Grade</th>
                <th scope="col" style={{ width: '14%' }}>Standard / Code</th>
                <th scope="col" style={{ width: '18%' }}>Resin &amp; Bonding</th>
                <th scope="col" style={{ width: '22%' }}>Moisture &amp; Water Resistance</th>
                <th scope="col" style={{ width: '23%' }}>Recommended Applications</th>
                <th scope="col" style={{ width: '10%', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredGrades.map((g, idx) => (
                <tr key={idx} className={g.isFlagship ? 'row-featured' : ''}>
                  <td>
                    <div className="d-flex flex-column align-items-start gap-1">
                      {g.isFlagship && (
                        <span className="badge-flagship">
                          <i className="bi bi-star-fill text-warning me-1"></i> Flagship Grade
                        </span>
                      )}
                      <strong className="badge-grade-title">{g.name}</strong>
                      <small className="text-muted">{g.sub}</small>
                    </div>
                  </td>
                  <td>
                    <span className={`badge-code-pill ${g.codeClass}`}>{g.code}</span>
                  </td>
                  <td>
                    <strong>{g.resin}</strong>
                    <br />
                    <small className="text-muted">{g.resinDetail}</small>
                  </td>
                  <td>
                    <div className={`badge-water-res ${g.waterType}`}>
                      <i className={`bi ${g.waterIcon} fs-5`}></i>
                      <span>
                        {g.waterTitle}
                        <br />
                        <small className="text-muted fw-normal">{g.waterDetail}</small>
                      </span>
                    </div>
                  </td>
                  <td>{g.apps}</td>
                  <td className="text-center">
                    <Link href={g.link} className="table-action-link">
                      View Specs <i className="bi bi-arrow-right"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
