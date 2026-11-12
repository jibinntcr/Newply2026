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
              <Link href="/contact#quote-form" className="btn btn-brand-primary btn-lg">
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
            <span className="section-eyebrow">Material Science Comparison</span>
            <h2 className="display-6 fw-bold">Plywood vs. MDF &amp; Particle Board</h2>
            <p className="section-subtitle">
              Comprehensive technical evaluation: Why solid hardwood cross-laminated plywood outperforms fiber and particle composites across humid coastal climates.
            </p>
          </div>

          <div className="comparison-table-card shadow-sm border rounded-4 overflow-hidden mb-4">
            <div className="table-responsive mb-0">
              <table className="comparison-table align-middle">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '25%' }}>Performance Metric</th>
                    <th scope="col" style={{ width: '31%' }} className="text-white bg-dark">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-patch-check-fill text-warning fs-5"></i>
                        <div>
                          <span className="d-block text-warning fw-bold text-uppercase small tracking-wider">Top Benchmark</span>
                          <span className="fs-6 fw-bold">Newtech Calibrated Plywood</span>
                        </div>
                      </div>
                    </th>
                    <th scope="col" style={{ width: '22%' }}>MDF (Fiberboard)</th>
                    <th scope="col" style={{ width: '22%' }}>Particle / Chipboard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="bg-light text-dark fw-bold">Internal Construction</th>
                    <td className="table-highlight-cell">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
                        <div>
                          <strong className="text-dark d-block">100% Solid Hardwood Core</strong>
                          <span className="small text-secondary">Cross-laminated continuous veneers with zero internal voids</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-secondary small">Compressed fine wood sawdust &amp; fibers with synthetic binder</span>
                    </td>
                    <td>
                      <span className="text-secondary small">Loose pressed wood chips and flakes with resin matrix</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light text-dark fw-bold">Water &amp; Humidity Resistance</th>
                    <td className="table-highlight-cell">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-shield-fill-check text-success fs-5 flex-shrink-0 mt-1"></i>
                        <div>
                          <strong className="text-success d-block">72-Hour Boiling Water Proof (BWP)</strong>
                          <span className="small text-secondary">Withstands water submersion without thickness swelling or rot</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-start gap-2 text-danger">
                        <i className="bi bi-exclamation-triangle-fill flex-shrink-0 mt-1"></i>
                        <span className="small"><strong>Poor:</strong> Irreversible swelling &amp; softening on water contact</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-start gap-2 text-danger">
                        <i className="bi bi-x-circle-fill flex-shrink-0 mt-1"></i>
                        <span className="small"><strong>Extremely Poor:</strong> Crumbles and disintegrates when damp</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light text-dark fw-bold">Screw-Holding &amp; Hinge Strength</th>
                    <td className="table-highlight-cell">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
                        <div>
                          <strong className="text-dark d-block">High Tensile Grip (&gt;300 kgf)</strong>
                          <span className="small text-secondary">Screws anchor into dense natural grain; withstands repeat hinge opening</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-secondary small">Moderate grip; screws easily strip out if hinges are readjusted</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-start gap-2 text-danger">
                        <i className="bi bi-exclamation-circle-fill flex-shrink-0 mt-1"></i>
                        <span className="small">Low grip; screws pull out easily causing cabinet doors to sag</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light text-dark fw-bold">Bending &amp; Sag Resistance (MOE)</th>
                    <td className="table-highlight-cell">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
                        <div>
                          <strong className="text-dark d-block">Superior Span Strength</strong>
                          <span className="small text-secondary">Cross-directional veneer grain prevents bowing over wide book &amp; kitchen shelves</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-secondary small">Prone to continuous sagging under sustained shelf loads</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-start gap-2 text-danger">
                        <i className="bi bi-exclamation-circle-fill flex-shrink-0 mt-1"></i>
                        <span className="small">Severe permanent bowing under moderate crockery weights</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bg-light text-dark fw-bold">Lifespan in Tropical Coastal Climate</th>
                    <td className="table-highlight-cell">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-award-fill text-warning fs-5 flex-shrink-0 mt-1"></i>
                        <div>
                          <strong className="text-dark d-block">15 to 25+ Years Service Life</strong>
                          <span className="small text-secondary">Permanent chemical borer and termite resistance throughout the core</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-secondary small">3 to 7 years in humid air; prone to fungal attacks</span>
                    </td>
                    <td>
                      <span className="text-secondary small">2 to 5 years; unsuitable for humid kitchens or vanities</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
