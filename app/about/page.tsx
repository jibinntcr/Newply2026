import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import TeamSection from '@/components/TeamSection';

export const metadata: Metadata = {
  title: 'About Us | Newtech Ply & Boards - Perumbavoor, Kerala',
  description:
    'Learn about Newtech Ply & Boards, our manufacturing heritage in Perumbavoor, leadership team, and commitment to precision-engineered plywood.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="text-warning text-uppercase fw-bold small">Direct Mill Manufacturer</span>
              <h1 className="display-5 fw-bold text-white mb-3">About Newtech Ply &amp; Boards</h1>
              <p className="lead text-white-50 mb-0">
                Operating from Perumbavoor, Kerala, we engineer commercial, hardwood, and marine-grade
                plywood panels that deliver uncompromised structural integrity, zero core voids, and lasting
                durability across South India.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link href="/contact" className="btn btn-brand-primary btn-lg">
                <i className="bi bi-geo-alt-fill me-2"></i> Visit Our Perumbavoor Plant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage & Manufacturing Facility */}
      <section className="section-padding bg-warm">
        <div className="container-xxl px-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-eyebrow">Our Heritage</span>
              <h2 className="display-6 mb-3">Rooted in India’s Timber Capital</h2>
              <p className="text-secondary mb-3">
                Perumbavoor in Kerala has earned renown across the Indian subcontinent as the heartland of
                precision timber craftsmanship. Blessed with access to sustainably cultivated plantation timber
                and generational wood-peeling expertise, Newtech Ply &amp; Boards was established to bring modern
                technological calibration to this industrial heritage.
              </p>
              <p className="text-secondary mb-4">
                Unlike unorganized assemblers who mix soft timbers and weak extenders, Newtech operates an
                integrated facility where every phase—from raw log grading and jet drying to synthetic resin
                polymerization and automated wide-belt calibration—is strictly governed by certified BIS
                protocols.
              </p>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded border">
                    <div className="text-danger fw-bold fs-4 mb-1">100%</div>
                    <div className="fw-semibold text-dark small">Hardwood &amp; Plantation Timber</div>
                    <div className="text-muted small">Zero unseasoned soft wood</div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 bg-white rounded border">
                    <div className="text-danger fw-bold fs-4 mb-1">±0.2 mm</div>
                    <div className="fw-semibold text-dark small">Calibrated Tolerance</div>
                    <div className="text-muted small">Dual-head drum sanded</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative rounded overflow-hidden shadow-lg border">
                <Image
                  src="/img/carousel-2.jpg"
                  alt="Newtech Manufacturing Plant"
                  width={600}
                  height={420}
                  className="w-100 object-fit-cover"
                  style={{ maxHeight: '420px' }}
                />
                <div className="position-absolute bottom-0 start-0 m-3 p-3 bg-white rounded shadow-sm border">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-shield-check text-danger fs-3"></i>
                    <div>
                      <strong className="d-block small text-dark">Strict BIS Certification</strong>
                      <small className="text-muted">IS:303, IS:710, IS:4990 Compliance</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section (Komet Studios Dribbble Style) */}
      <TeamSection />

      {/* Environmental & Quality Commitment */}
      <section className="section-padding bg-warm border-top">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Our Principles</span>
            <h2 className="display-6">Built on Integrity, Science &amp; Sustainability</h2>
            <p className="section-subtitle">
              We engineer boards that protect contractor reputations and homeowner investments.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="proof-icon mb-3">
                  <i className="bi bi-tree text-danger fs-3"></i>
                </div>
                <h3 className="h6 fw-bold mb-2">Sustainable Plantation Agro-Forestry</h3>
                <p className="small text-secondary mb-0">
                  We strictly source fast-growing plantation timbers (Rubberwood, Melia Dubia, Eucalyptus)
                  from accredited local farmers, supporting rural agricultural economies while preserving
                  natural forests.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="proof-icon mb-3">
                  <i className="bi bi-shield-lock text-danger fs-3"></i>
                </div>
                <h3 className="h6 fw-bold mb-2">Borer &amp; Termite Preservative Infusion</h3>
                <p className="small text-secondary mb-0">
                  Every veneer ribbon is vacuum-impregnated with eco-safe organophosphorous preservatives
                  before hydraulic hot-pressing, permanently locking protection inside the cellular wood structure.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="proof-icon mb-3">
                  <i className="bi bi-cash-coin text-danger fs-3"></i>
                </div>
                <h3 className="h6 fw-bold mb-2">Direct Mill Wholesale Pricing</h3>
                <p className="small text-secondary mb-0">
                  By cutting out multiple layers of intermediary brokerage, we supply commercial developers,
                  dealers, and modular furniture factories with factory-direct pricing and guaranteed dispatch schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
