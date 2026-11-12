'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'What is the real difference between BWP (IS:710) and BWR (IS:303) plywood?',
    a: 'BWP (Boiling Water Proof) is certified to IS:710 standards and uses unextended Phenol Formaldehyde resin to withstand 72 continuous hours of boiling water without delaminating. BWR (Boiling Water Resistant) conforms to IS:303 and withstands 8 hours of boiling water. BWP is essential for modular kitchens, washrooms, and coastal zones; BWR is ideal for covered balconies and semi-wet areas.',
  },
  {
    q: 'What does "100% Calibrated Plywood" mean, and why is it important for modular kitchens?',
    a: 'Calibrated plywood undergoes a 2-stage automated dual-head thickness sanding process that ensures uniform panel thickness across the entire 8x4 sheet (within ±0.2mm to ±0.3mm tolerance). In modular kitchens and CNC woodwork, non-calibrated plywood results in uneven joints, visible laminate bubbles, and misalignment of drawer runners.',
  },
  {
    q: 'Can dealers or contractors order direct truckloads from your Perumbavoor mill?',
    a: 'Yes. We supply direct mill consignments to plywood dealers, turnkey interior contractors, furniture factories, and infrastructure builders across Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh. We offer custom mixed truckloads (different thicknesses and grades combined) with factory-direct wholesale pricing.',
  },
  {
    q: 'How does Newtech protect plywood panels against termites and wood borers?',
    a: 'Every veneer undergoes specialized chemical treatment using eco-compliant, broad-spectrum insecticides and fungicides. The preservative is impregnated deep into the timber cell walls prior to hydraulic hot-pressing, providing permanent lifetime defense against termites and powder post beetles.',
  },
  {
    q: 'What standard sizes and thicknesses do you produce?',
    a: 'Our standard sheet sizes are 8 ft × 4 ft (2440 × 1220 mm), 7 ft × 4 ft, and 7 ft × 3 ft. Standard thicknesses produced in-house are 4mm, 6mm, 9mm, 12mm, 16mm, 18mm/19mm, and 25mm. Custom dimensions and heavy-duty densities can be manufactured upon request for bulk orders.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion d-flex flex-column gap-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border rounded bg-white overflow-hidden shadow-sm">
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-100 p-3 p-md-4 text-start bg-transparent border-0 d-flex align-items-center justify-content-between gap-3 text-dark fw-bold"
              style={{ cursor: 'pointer' }}
              aria-expanded={isOpen}
            >
              <span className="fs-6">
                <i className="bi bi-question-circle-fill text-danger me-2"></i>
                {faq.q}
              </span>
              <i
                className={`bi bi-chevron-${isOpen ? 'up' : 'down'} text-muted flex-shrink-0 transition`}
                style={{ fontSize: '1.1rem' }}
              ></i>
            </button>
            {isOpen && (
              <div className="px-3 px-md-4 pb-4 pt-1 text-secondary border-top small bg-light-subtle">
                <p className="mb-0 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
