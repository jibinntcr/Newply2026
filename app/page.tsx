import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import GradeMatrix from '@/components/GradeMatrix';
import TeamSection from '@/components/TeamSection';
import CrossLamination from '@/components/CrossLamination';
import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';
import { PRODUCTS } from '@/lib/products';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Carousel */}
      <HeroSlider />

      {/* 2. Key Proof Points Strip */}
      <section className="bg-white border-bottom py-4">
        <div className="container-xxl px-4">
          <div className="row g-4 align-items-center">
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon flex-shrink-0">
                  <i className="bi bi-geo-alt-fill text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0">Perumbavoor Mill</h4>
                  <small className="text-muted">Kerala Timber Hub</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon flex-shrink-0">
                  <i className="bi bi-award-fill text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0">IS:303 &amp; IS:710</h4>
                  <small className="text-muted">BIS Quality Certified</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon flex-shrink-0">
                  <i className="bi bi-shield-check text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0">72-Hr Boiling Water</h4>
                  <small className="text-muted">Marine Grade BWP</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon flex-shrink-0">
                  <i className="bi bi-truck text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0">Direct Mill Supply</h4>
                  <small className="text-muted">Wholesale Bulk Orders</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Company Brief */}
      <section className="section-padding bg-warm" id="about-brief">
        <div className="container-xxl px-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-eyebrow">Direct Mill Manufacturer</span>
              <h2 className="display-6 mb-3">
                Engineered Plywood Rooted in Kerala’s Timber Capital
              </h2>
              <p className="text-secondary mb-3">
                Operating from Perumbavoor, the epicenter of India’s plywood trade,{' '}
                <strong>Newtech Ply &amp; Boards</strong> manufactures commercial, structural, and marine-grade
                panels trusted by leading interior architects, developers, and cabinet makers.
              </p>
              <p className="text-secondary mb-4">
                We combine sustainably harvested plantation hardwood with high-solid phenolic resins and
                advanced multi-opening hydraulic hot-pressing to yield panels with zero core gap, flawless
                face calibration, and proven termite defense.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-4">
                  <div className="p-3 bg-white rounded border text-center">
                    <span className="display-6 fw-bold text-danger d-block">100%</span>
                    <small className="fw-semibold text-muted">Veneer Calibrated</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="p-3 bg-white rounded border text-center">
                    <span className="display-6 fw-bold text-danger d-block">72hr</span>
                    <small className="fw-semibold text-muted">Boiling Proof</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="p-3 bg-white rounded border text-center">
                    <span className="display-6 fw-bold text-danger d-block">40+</span>
                    <small className="fw-semibold text-muted">Dealer Outlets</small>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary px-4 py-2">
                  Our Manufacturing Story <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link href="/manufacturing-quality" className="btn btn-outline-wood px-4 py-2">
                  Quality Standards &amp; Lab Tests
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <Image
                  src="/img/carousel-2.jpg"
                  alt="Newtech Ply Factory Pressing Line"
                  width={650}
                  height={450}
                  className="img-fluid rounded shadow-lg w-100 object-fit-cover"
                  style={{ maxHeight: '450px' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 m-4 p-3 bg-white rounded shadow-sm border"
                  style={{ maxWidth: '280px' }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-patch-check-fill text-danger fs-3"></i>
                    <div>
                      <strong className="d-block text-dark small">Factory Quality Guarantee</strong>
                      <small className="text-muted">IS:303 &amp; IS:710 Batch Tested</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Overview Grid */}
      <section className="section-padding" id="products">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Product Catalog</span>
            <h2 className="display-6">Engineered for Specific Environments</h2>
            <p className="section-subtitle">
              Every board is formulated with the exact core species, resin chemistry, and pressure rating
              demanded by your application.
            </p>
          </div>

          <div className="row g-4">
            {PRODUCTS.map((prod) => (
              <div key={prod.slug} className="col-md-6 col-lg-4">
                <div className="product-card h-100 d-flex flex-column bg-white rounded border shadow-sm overflow-hidden">
                  <div className="product-card-img-wrap position-relative">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      width={400}
                      height={240}
                      className="w-100 object-fit-cover"
                      style={{ height: '220px' }}
                    />
                    <span className="product-badge">{prod.badge}</span>
                  </div>

                  <div className="product-card-body p-4 d-flex flex-column flex-grow-1">
                    <h3 className="product-title h5 fw-bold mb-2">
                      <Link href={`/products/${prod.slug}`} className="text-dark text-decoration-none hover-danger">
                        {prod.name}
                      </Link>
                    </h3>
                    <p className="product-desc text-secondary small mb-3 flex-grow-1">
                      {prod.shortDesc}
                    </p>

                    <ul className="product-specs-list list-unstyled small text-secondary border-top border-bottom py-2 mb-3">
                      <li className="d-flex justify-content-between py-1">
                        <span>Standard:</span>
                        <strong className="text-dark">{prod.gradeStandard.split(' ')[0]}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-1">
                        <span>Resin:</span>
                        <strong className="text-dark">{prod.bondingResin.split(' ')[0]}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-1">
                        <span>Calibration:</span>
                        <strong className="text-success">Dual-Head Sanded</strong>
                      </li>
                    </ul>

                    <div className="d-flex gap-2">
                      <Link
                        href={`/products/${prod.slug}`}
                        className="btn btn-sm btn-outline-wood flex-grow-1"
                      >
                        View Specs
                      </Link>
                      <Link
                        href={`/contact?product=${encodeURIComponent(prod.name)}#quote-form`}
                        className="btn btn-sm btn-primary"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link href="/products" className="btn btn-outline-wood px-4 py-2">
              Browse Full Catalog Specifications <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Cross-Lamination Science Component */}
      <CrossLamination />

      {/* 6. Manufacturing Excellence */}
      <section className="section-padding bg-warm" id="manufacturing">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Factory Production Workflow</span>
            <h2 className="display-6">6-Stage Calibrated Manufacturing Process</h2>
            <p className="section-subtitle">
              From sustainable plantation timber peeling to cyclic water boiling tests, every stage is
              governed by strict quality protocols.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="text-danger fw-bold fs-3 mb-2">01</div>
                <h3 className="h6 fw-bold mb-2">Log Grading &amp; Rotary Peeling</h3>
                <p className="small text-muted mb-0">
                  Select timber logs are debarked, conditioned, and peeled into continuous calibrated
                  veneer ribbons with uniform thickness.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="text-danger fw-bold fs-3 mb-2">02</div>
                <h3 className="h6 fw-bold mb-2">Mechanical Jet Roller Drying</h3>
                <p className="small text-muted mb-0">
                  Veneers are passed through multi-zone heated dryers to reduce moisture content to an
                  optimal 6% - 8%, preventing post-press warping.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="text-danger fw-bold fs-3 mb-2">03</div>
                <h3 className="h6 fw-bold mb-2">Resin Formulation &amp; Glue Spreading</h3>
                <p className="small text-muted mb-0">
                  In-house synthetic resins (Phenolic BWP / Melamine BWR) are applied uniformly using
                  four-roll precision adhesive coaters.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="text-danger fw-bold fs-3 mb-2">04</div>
                <h3 className="h6 fw-bold mb-2">Cold Pre-Press Assembly</h3>
                <p className="small text-muted mb-0">
                  Assembled stacks undergo hydraulic pre-pressing at ambient temperature to eliminate air
                  pockets and tack veneers together before heating.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="text-danger fw-bold fs-3 mb-2">05</div>
                <h3 className="h6 fw-bold mb-2">Thermal Hydraulic Hot-Pressing</h3>
                <p className="small text-muted mb-0">
                  High-tonnage hydraulic hot presses polymerize adhesives under 140°C - 150°C and 14 kg/cm²
                  pressure to form an unbreakable bond.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="p-4 bg-white rounded border h-100 shadow-sm">
                <div className="text-danger fw-bold fs-3 mb-2">06</div>
                <h3 className="h6 fw-bold mb-2">Dual-Head Calibrated Sanding</h3>
                <p className="small text-muted mb-0">
                  Panels are trimmed to square dimensions and sanded through heavy-duty calibrating drums,
                  achieving ±0.2 mm thickness consistency.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link href="/manufacturing-quality" className="btn btn-primary px-4 py-2">
              Explore Our Quality Control &amp; Testing Lab <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Plywood Grade Comparison Matrix */}
      <GradeMatrix />

      {/* 8. Applications Overview */}
      <section className="section-padding bg-warm" id="applications">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Proven in Practice</span>
            <h2 className="display-6">Built for Every Architectural Space</h2>
            <p className="section-subtitle">
              From residential luxury kitchens to heavy concrete infrastructure, see how Newtech grades
              perform in the real world.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded border h-100 shadow-sm text-center">
                <div className="proof-icon mx-auto mb-3">
                  <i className="bi bi-door-closed text-danger fs-3"></i>
                </div>
                <h3 className="h6 fw-bold mb-2">Wardrobes &amp; Storage</h3>
                <p className="small text-muted mb-3">
                  Dimensionally flat carcass panels for bedroom closets, dressers, and tall cabinets.
                </p>
                <span className="badge bg-light text-dark border">Commercial &amp; Alternate</span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded border h-100 shadow-sm text-center">
                <div className="proof-icon mx-auto mb-3">
                  <i className="bi bi-droplet-half text-danger fs-3"></i>
                </div>
                <h3 className="h6 fw-bold mb-2">Kitchens &amp; Vanities</h3>
                <p className="small text-muted mb-3">
                  72-hour boiling waterproof marine panels that never warp or swell under kitchen moisture.
                </p>
                <span className="badge bg-danger-subtle text-danger border border-danger-subtle">
                  Marine IS:710
                </span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded border h-100 shadow-sm text-center">
                <div className="proof-icon mx-auto mb-3">
                  <i className="bi bi-building-up text-danger fs-3"></i>
                </div>
                <h3 className="h6 fw-bold mb-2">Concrete Formwork</h3>
                <p className="small text-muted mb-3">
                  Film-faced shuttering panels delivering 30+ repetitions and mirror-finish slab surfaces.
                </p>
                <span className="badge bg-warning-subtle text-dark border border-warning-subtle">
                  Film Faced IS:4990
                </span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 bg-white rounded border h-100 shadow-sm text-center">
                <div className="proof-icon mx-auto mb-3">
                  <i className="bi bi-grid-3x3 text-danger fs-3"></i>
                </div>
                <h3 className="h6 fw-bold mb-2">CNC &amp; Architecture</h3>
                <p className="small text-muted mb-3">
                  100% solid hardwood core sheets with zero hollow cavities for precision jaali carving.
                </p>
                <span className="badge bg-secondary-subtle text-dark border">Hardwood Calibrated</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/applications" className="btn btn-outline-wood px-4 py-2">
              View Detailed Applications Gallery <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Leadership Team Section (Komet Studios Dribbble Style) */}
      <TeamSection />

      {/* 10. Frequently Asked Questions */}
      <section className="section-padding bg-warm" id="faq">
        <div className="container-xxl px-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-5">
                <span className="section-eyebrow">Technical Clarifications</span>
                <h2 className="display-6">Frequently Asked Questions</h2>
                <p className="section-subtitle">
                  Common queries from architects, interior contractors, and plywood distributors.
                </p>
              </div>

              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Quote Form Section */}
      <section className="section-padding" id="quote">
        <div className="container-xxl px-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
