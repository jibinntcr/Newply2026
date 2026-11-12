import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing & Quality Standards | Newtech Ply & Boards',
  description:
    'Explore the 6-stage calibrated manufacturing process and in-house testing lab at Newtech Ply & Boards in Perumbavoor, Kerala.',
};

const STAGES = [
  {
    num: '01',
    title: 'Sustainably Harvested Log Grading & Peeling',
    desc: 'Round timber logs sourced from approved agro-forestry plantations are mechanically debarked, steam-conditioned to soften timber fibres, and peeled into continuous, uniform veneer ribbons on heavy-duty rotary lathes.',
    highlight: 'Zero diseased timber; uniform ribbon thickness calibrated from the first turn.',
  },
  {
    num: '02',
    title: 'Mechanical Jet Roller Veneer Drying',
    desc: 'Freshly peeled green veneers contain up to 70% moisture. They are passed through high-velocity jet roller drying tunnels, bringing moisture content down to a strictly monitored 6% - 8% equilibrium.',
    highlight: 'Eliminates internal moisture imbalances that cause post-pressing warpage.',
  },
  {
    num: '03',
    title: 'Formulation of Pure Phenolic & Synthetic Resins',
    desc: 'Adhesives are formulated in-house to guarantee purity without excessive chalk or flour fillers. BWP grades receive unextended Phenol Formaldehyde resin; BWR and MR receive melamine-fortified synthetic resins.',
    highlight: 'Pure polymer cross-linking creates impervious thermoset waterproof glue lines.',
  },
  {
    num: '04',
    title: 'Precision Pre-Pressing & Air Expulsion',
    desc: 'Cross-assembled veneer stacks are placed into a high-capacity ambient cold press. This compacts the loose layers, expels air voids, and initiates glue penetration prior to thermal curing.',
    highlight: 'Prevents veneer shifting and edge overlaps inside the high-temperature hot press.',
  },
  {
    num: '05',
    title: 'Hydraulic Multi-Daylight Hot-Pressing',
    desc: 'Panels are loaded into multi-daylight hydraulic hot presses operating at temperatures between 140°C and 150°C and pressures exceeding 14 kg/cm². Under these conditions, the resin cures into an irreversible solid matrix.',
    highlight: 'Thermal polymerization fuses timber veneers permanently into a monolithic board.',
  },
  {
    num: '06',
    title: 'Dual-Head Calibrated Sanding & Edge Dimensioning',
    desc: 'Cured panels undergo automatic 4-side dimension sawing to precise 8x4 tolerances. They are then processed through computerized wide-belt drum sanders to achieve mirror-smooth, uniform thickness across every square inch.',
    highlight: '±0.2 mm thickness calibration ensures flawless modular kitchen and laminate installations.',
  },
];

const LAB_TESTS = [
  {
    name: '72-Hour Boiling Water Test (IS:710)',
    desc: 'Sample specimens are submerged in continuously boiling water at 100°C for 72 hours, followed by rapid cooling in cold water. Specimens must show zero glue-line delamination.',
    passRate: '100% Pass Required for BWP Stamping',
  },
  {
    name: 'Adhesion of Plies (Knife Test IS:1734)',
    desc: 'A specialized chisel knife is forced between consecutive veneer plies. The failure must occur in the wood fibers, not in the glue line, proving the adhesive is stronger than the wood itself.',
    passRate: 'Wood Failure > 85%',
  },
  {
    name: 'Screw & Fastener Withdrawal Resistance',
    desc: 'Measures the force required to pull out standard wood screws driven both into the sheet face and into the edge grain, verifying high density and fastener grip for furniture hardware.',
    passRate: 'Face: >300 kgf | Edge: >200 kgf',
  },
  {
    name: 'Cyclic Immersion Test (IS:303 BWR)',
    desc: 'Panels are immersed in boiling water for 8 hours, then baked dry in a 65°C oven for 16 hours across multiple consecutive cycles to simulate severe outdoor weather swings.',
    passRate: 'Zero Separation on All Glue Lines',
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="text-warning text-uppercase fw-bold small">Production Standards</span>
              <h1 className="display-5 fw-bold text-white mb-3">Manufacturing &amp; Quality Control</h1>
              <p className="lead text-white-50 mb-0">
                How Newtech Ply &amp; Boards engineers defect-free plywood panels in Perumbavoor, Kerala
                through calibrated hot-pressing and rigorous laboratory batch testing.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link href="/contact#quote-form" className="btn btn-brand-primary btn-lg">
                <i className="bi bi-file-earmark-check me-2"></i> Request Lab Test Certs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Stages */}
      <section className="section-padding bg-warm">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Factory Production Workflow</span>
            <h2 className="display-6">6-Stage Calibrated Manufacturing Process</h2>
            <p className="section-subtitle">
              Every Newtech sheet passes through sequential automated checkpoints designed to eliminate core
              gaps, uneven thickness, and delamination risks.
            </p>
          </div>

          <div className="row g-4">
            {STAGES.map((s) => (
              <div key={s.num} className="col-md-6 col-lg-4">
                <div className="p-4 bg-white rounded border h-100 shadow-sm d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="display-5 fw-bold text-danger">{s.num}</span>
                    <span className="badge bg-light text-secondary border">Station Stage</span>
                  </div>
                  <h3 className="h6 fw-bold mb-2 text-dark">{s.title}</h3>
                  <p className="small text-secondary mb-3 flex-grow-1">{s.desc}</p>
                  <div className="p-2 bg-light rounded small text-dark border-start border-3 border-danger">
                    <strong>Quality Check:</strong> {s.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Lab Testing */}
      <section className="section-padding bg-white border-top">
        <div className="container-xxl px-4">
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6">
              <span className="section-eyebrow">In-House Testing Facility</span>
              <h2 className="display-6 mb-3">Certified In-House Quality Laboratory</h2>
              <p className="text-secondary mb-3">
                At our Perumbavoor manufacturing facility, we do not rely on random batch checks. Every
                production run is subjected to destructive physical and chemical testing in accordance with
                Bureau of Indian Standards (BIS) specifications.
              </p>
              <p className="text-secondary mb-4">
                Our lab technicians test for core adhesion, moisture equilibrium, fungal resistance, and
                mechanical bending strength before releasing finished consignments for dispatch.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-light text-dark border p-2">
                  <i className="bi bi-shield-check text-success me-1"></i> IS:303 Certified
                </span>
                <span className="badge bg-light text-dark border p-2">
                  <i className="bi bi-shield-check text-success me-1"></i> IS:710 Certified
                </span>
                <span className="badge bg-light text-dark border p-2">
                  <i className="bi bi-shield-check text-success me-1"></i> IS:4990 Certified
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden border shadow-sm">
                <Image
                  src="/img/carousel-1.jpg"
                  alt="Quality Lab Testing"
                  width={600}
                  height={380}
                  className="w-100 object-fit-cover"
                  style={{ maxHeight: '360px' }}
                />
              </div>
            </div>
          </div>

          <div className="row g-4">
            {LAB_TESTS.map((t, idx) => (
              <div key={idx} className="col-md-6">
                <div className="p-4 bg-warm rounded border h-100 shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h3 className="h6 fw-bold text-dark mb-0">{t.name}</h3>
                    <i className="bi bi-patch-check-fill text-danger fs-5"></i>
                  </div>
                  <p className="small text-secondary mb-3">{t.desc}</p>
                  <div className="text-success small fw-semibold">
                    <i className="bi bi-check2-circle me-1"></i> Benchmark: {t.passRate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Visit & Quality Tour */}
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3 text-center">
          <h2 className="display-6 fw-bold text-white mb-3">Architect &amp; Contractor Mill Tours</h2>
          <p className="lead text-white-50 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            We welcome architects, developers, and wholesale plywood stockists to inspect our veneer peeling,
            resin synthesis, and hot-press operations at our Perumbavoor plant.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary btn-lg px-4">
              Schedule a Mill Visit
            </Link>
            <a
              href="https://wa.me/919745450618?text=Hello%20Muneer%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20the%20Newtech%20Perumbavoor%20mill."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg px-4"
            >
              <i className="bi bi-whatsapp me-2"></i> WhatsApp Plant Managing Partner
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
