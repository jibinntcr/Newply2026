import Link from 'next/link';
import { Metadata } from 'next';
import GradeMatrix from '@/components/GradeMatrix';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Buyer Resources & Plywood Selection Guides | Newtech Ply & Boards',
  description:
    'Comprehensive technical guides, thickness selectors, comparison tables, and FAQs for architects, interior designers, and plywood buyers.',
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="text-warning text-uppercase fw-bold small">Technical Knowledge Base</span>
              <h1 className="display-5 fw-bold text-white mb-3">Plywood Buyer Resources</h1>
              <p className="lead text-white-50 mb-0">
                Engineering guidelines, thickness calculators, and grade comparison matrices to help
                architects, interior contractors, and homeowners select the right plywood specifications.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link href="/contact#quote-form" className="btn btn-primary btn-lg">
                <i className="bi bi-file-earmark-text me-2"></i> Request Specification Sheet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Comparison Matrix */}
      <GradeMatrix />

      {/* Thickness Selection Guide */}
      <section className="section-padding bg-warm" id="thickness-guide">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Selection Guide</span>
            <h2 className="display-6">Recommended Thickness by Application</h2>
            <p className="section-subtitle">
              Avoid structural sagging and unnecessary sheet weight by choosing the optimal caliper for your joinery.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-danger px-3 py-1 fs-6">6 mm &amp; 9 mm</span>
                  <small className="text-muted">3-Ply to 5-Ply</small>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Backing Panels &amp; Drawer Bottoms</h3>
                <p className="small text-secondary mb-3">
                  Used for wardrobe rear linings, drawer bottom plates, false ceiling underlays, and curved
                  architectural column wraps.
                </p>
                <div className="text-muted small">
                  <strong>Key Benefit:</strong> Lightweight, flexible, easy to staple or nail into carcasses.
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-danger px-3 py-1 fs-6">12 mm &amp; 16 mm</span>
                  <small className="text-muted">7-Ply to 9-Ply</small>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Drawer Sides &amp; Interior Partitions</h3>
                <p className="small text-secondary mb-3">
                  Standard caliper for modular kitchen drawer boxes, intermediate cabinet dividers, and
                  wall acoustic paneling.
                </p>
                <div className="text-muted small">
                  <strong>Key Benefit:</strong> Balanced strength and screw retention without excessive bulk.
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-danger px-3 py-1 fs-6">18 mm &amp; 19 mm</span>
                  <small className="text-muted">11-Ply Structural</small>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Carcasses, Shutters &amp; Wardrobe Doors</h3>
                <p className="small text-secondary mb-3">
                  The primary structural caliper for modular kitchen carcasses, full-height wardrobe doors,
                  study desks, and bed frames.
                </p>
                <div className="text-muted small">
                  <strong>Key Benefit:</strong> Maximum screw-holding capacity for soft-close hinges and slide tracks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plywood vs MDF / Particle Board Comparison */}
      <section className="section-padding bg-white border-top">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Material Comparison</span>
            <h2 className="display-6">Plywood vs. MDF &amp; Particle Board</h2>
            <p className="section-subtitle">
              Why solid hardwood cross-laminated plywood outperforms fiber and particle composites across humid climates.
            </p>
          </div>

          <div className="table-responsive rounded border shadow-sm">
            <table className="table table-bordered mb-0 align-middle small">
              <thead className="table-dark">
                <tr>
                  <th scope="col" style={{ width: '25%' }}>Property / Benchmark</th>
                  <th scope="col" className="text-danger fw-bold" style={{ width: '25%' }}>
                    Newtech Calibrated Hardwood Plywood
                  </th>
                  <th scope="col" style={{ width: '25%' }}>MDF (Medium Density Fiberboard)</th>
                  <th scope="col" style={{ width: '25%' }}>Particle Board / Chipboard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="bg-light">Internal Construction</th>
                  <td className="fw-semibold text-success">Solid cross-laminated continuous hardwood veneers</td>
                  <td>Compressed sawdust and wood fibers with glue</td>
                  <td>Loose compressed wood chips with resin</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-light">Water &amp; Humidity Resistance</th>
                  <td className="fw-semibold text-success">
                    Excellent (72-hr boiling proof with BWP grade)
                  </td>
                  <td className="text-danger">Poor (swells irreversibly upon water contact)</td>
                  <td className="text-danger">Very Poor (crumbles and sags with moisture)</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-light">Screw-Holding &amp; Hinge Strength</th>
                  <td className="fw-semibold text-success">
                    High (&gt;300 kgf on face, &gt;200 kgf on edge)
                  </td>
                  <td>Moderate (screws can strip after repeated adjustment)</td>
                  <td className="text-danger">Low (screws pull out easily over time)</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-light">Bending &amp; Sag Resistance (MOE)</th>
                  <td className="fw-semibold text-success">Superior span capacity without sagging</td>
                  <td>Prone to bowing under long shelf spans</td>
                  <td className="text-danger">Severe sagging under books and crockery</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-light">Durability in Kerala Climate</th>
                  <td className="fw-semibold text-success">15 to 25+ years with lifetime borer defense</td>
                  <td>3 to 7 years in humid coastal air</td>
                  <td>2 to 5 years (not recommended for kitchens)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-warm" id="faqs">
        <div className="container-xxl px-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-5">
                <span className="section-eyebrow">Expert Advice</span>
                <h2 className="display-6">Frequently Asked Questions</h2>
                <p className="section-subtitle">
                  Got technical questions about veneer grades, adhesives, or testing?
                </p>
              </div>

              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
