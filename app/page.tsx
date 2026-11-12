import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import TeamSection from '@/components/TeamSection';
import CrossLamination from '@/components/CrossLamination';

export default function HomePage() {
  return (
    <>
      {/* 1. Fresh, High-Contrast Architectural Hero Carousel */}
      <HeroSlider />

      {/* 2. Executive Proof & Heritage Ribbon */}
      <section className="bg-white border-bottom py-4 py-lg-5" aria-label="Mill Credentials">
        <div className="container-xxl px-4">
          <div className="row g-4 align-items-center">
            <div className="col-6 col-lg-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon-box flex-shrink-0">
                  <i className="bi bi-geo-alt-fill text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0 text-dark">Perumbavoor Mill</h4>
                  <small className="text-secondary">Kerala’s Timber Hub · Est. 2008</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon-box flex-shrink-0">
                  <i className="bi bi-patch-check-fill text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0 text-dark">Dual-Head Calibrated</h4>
                  <small className="text-secondary">±0.2mm Zero Core Gap</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon-box flex-shrink-0">
                  <i className="bi bi-shield-fill-check text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0 text-dark">72-Hr Boiling Water</h4>
                  <small className="text-secondary">IS:710 Marine Grade BWP</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="d-flex align-items-center gap-3">
                <div className="proof-icon-box flex-shrink-0">
                  <i className="bi bi-truck text-danger fs-3"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-0 text-dark">Direct Mill Supply</h4>
                  <small className="text-secondary">Wholesale &amp; Bulk Contractors</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Flagship Collections (Curated Editorial Showcase) */}
      <section className="section-padding bg-warm" id="signature-collections">
        <div className="container-xxl px-4">
          <div className="row justify-content-between align-items-end mb-5">
            <div className="col-lg-8">
              <span className="section-eyebrow">Signature Collections</span>
              <h2 className="display-6 fw-bold text-dark">Engineered for Demanding Environments</h2>
              <p className="section-subtitle mb-0">
                Precision-calibrated boards formulated with selected hardwood timber, advanced synthetic resin
                matrices, and heavy-tonnage hydraulic hot-pressing.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link href="/products" className="btn btn-brand-primary px-4 py-2">
                <span>View All 6 Grades</span>
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {/* Flagship 1: Marine Plywood */}
            <div className="col-md-6 col-lg-4">
              <div className="showcase-card h-100 d-flex flex-column bg-white rounded-4 border overflow-hidden shadow-sm">
                <div className="showcase-img-wrap position-relative">
                  <Image
                    src="/img/animal-md-1.jpg"
                    alt="Newtech Marine Plywood IS:710"
                    width={450}
                    height={280}
                    className="w-100 object-fit-cover showcase-img"
                  />
                  <div className="showcase-gradient"></div>
                  <span className="badge-flagship-pill">
                    <i className="bi bi-shield-fill-check me-1"></i> Flagship BWP Grade
                  </span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-danger-subtle text-danger border border-danger-subtle fw-semibold">
                      IS:710 Marine
                    </span>
                    <small className="text-muted fw-bold">72-Hr Boiling Proof</small>
                  </div>
                  <h3 className="h5 fw-bold mb-2">
                    <Link href="/products/marine-plywood" className="text-dark text-decoration-none hover-danger">
                      Marine Plywood (IS:710 BWP)
                    </Link>
                  </h3>
                  <p className="text-secondary small mb-4 flex-grow-1">
                    Bonded with 100% unextended phenol formaldehyde resin under extreme hydraulic pressure.
                    Guaranteed zero delamination in high-moisture kitchen carcasses and coastal projects.
                  </p>
                  <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                    <Link href="/products/marine-plywood" className="fw-bold text-danger text-decoration-none small">
                      Explore Specifications <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                    <Link
                      href="/contact?product=Marine%20Plywood%20(IS:710%20BWP)#quote"
                      className="btn btn-sm btn-outline-danger rounded-pill px-3"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Flagship 2: Calibrated Hardwood */}
            <div className="col-md-6 col-lg-4">
              <div className="showcase-card h-100 d-flex flex-column bg-white rounded-4 border overflow-hidden shadow-sm">
                <div className="showcase-img-wrap position-relative">
                  <Image
                    src="/img/animal-md-2.jpg"
                    alt="Newtech Hardwood Structural Plywood"
                    width={450}
                    height={280}
                    className="w-100 object-fit-cover showcase-img"
                  />
                  <div className="showcase-gradient"></div>
                  <span className="badge-flagship-pill bg-dark text-white">
                    <i className="bi bi-layers-fill me-1 text-warning"></i> Dual-Head Calibrated
                  </span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-secondary-subtle text-dark border fw-semibold">
                      Heavy Structural
                    </span>
                    <small className="text-muted fw-bold">±0.2mm Uniform</small>
                  </div>
                  <h3 className="h5 fw-bold mb-2">
                    <Link href="/products/hardwood-plywood" className="text-dark text-decoration-none hover-danger">
                      Hardwood Plywood (Structural)
                    </Link>
                  </h3>
                  <p className="text-secondary small mb-4 flex-grow-1">
                    Dense high-density timber veneers cross-laminated for superior screw holding (&gt;300 kgf) and
                    zero core cavities. Ideal for high-speed CNC fretwork and modular wardrobes.
                  </p>
                  <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                    <Link href="/products/hardwood-plywood" className="fw-bold text-danger text-decoration-none small">
                      Explore Specifications <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                    <Link
                      href="/contact?product=Hardwood%20Plywood%20(Structural)#quote"
                      className="btn btn-sm btn-outline-danger rounded-pill px-3"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Flagship 3: Film Faced Shuttering */}
            <div className="col-md-6 col-lg-4">
              <div className="showcase-card h-100 d-flex flex-column bg-white rounded-4 border overflow-hidden shadow-sm">
                <div className="showcase-img-wrap position-relative">
                  <Image
                    src="/img/animal-md-3.jpg"
                    alt="Newtech Film Faced Shuttering Plywood"
                    width={450}
                    height={280}
                    className="w-100 object-fit-cover showcase-img"
                  />
                  <div className="showcase-gradient"></div>
                  <span className="badge-flagship-pill bg-dark text-white">
                    <i className="bi bi-building-fill me-1 text-info"></i> 30+ Concrete Pours
                  </span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-warning-subtle text-dark border border-warning-subtle fw-semibold">
                      IS:4990 Formwork
                    </span>
                    <small className="text-muted fw-bold">120 GSM Phenolic Film</small>
                  </div>
                  <h3 className="h5 fw-bold mb-2">
                    <Link href="/products/film-faced-plywood" className="text-dark text-decoration-none hover-danger">
                      Film Faced Shuttering Plywood
                    </Link>
                  </h3>
                  <p className="text-secondary small mb-4 flex-grow-1">
                    High-density shuttering panels with mirror-smooth phenolic film overlays. Engineered for
                    bridge decks, high-rise slabs, columns, and heavy civil construction projects.
                  </p>
                  <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                    <Link href="/products/film-faced-plywood" className="fw-bold text-danger text-decoration-none small">
                      Explore Specifications <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                    <Link
                      href="/contact?product=Film%20Faced%20Plywood#quote"
                      className="btn btn-sm btn-outline-danger rounded-pill px-3"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invitation Banner to Full Product Catalog */}
          <div className="editorial-banner p-4 p-lg-5 rounded-4 text-white position-relative overflow-hidden shadow-sm">
            <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
              <div className="col-lg-8">
                <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold mb-2">
                  <i className="bi bi-collection-play-fill text-danger me-1"></i> Full Range Available
                </span>
                <h3 className="h4 fw-bold mb-2">Looking for Commercial MR, BWR Grade, or Alternate Core?</h3>
                <p className="text-white-75 mb-0 small">
                  We manufacture certified IS:303 Commercial Plywood for dry interiors, moisture-resistant BWR panels,
                  and alternate composite formulations for value engineering.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                <Link href="/products" className="btn btn-light btn-lg px-4 fw-bold rounded-pill shadow-sm">
                  <span>Browse Full Catalog</span>
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Material Anatomy & Wood Science */}
      <CrossLamination />

      {/* 5. Manufacturing Excellence Invitation Strip */}
      <section className="bg-white py-5 border-top border-bottom">
        <div className="container-xxl px-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="section-eyebrow">Factory Production Standards</span>
              <h3 className="h4 fw-bold mb-2 text-dark">6-Stage Calibrated Production &amp; Lab Testing</h3>
              <p className="text-secondary mb-0">
                From rotary log peeling and jet drying to cyclic boiling water tests, discover how our
                Perumbavoor mill guarantees zero core delamination.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/manufacturing-quality" className="btn btn-brand-primary px-4 py-2">
                <span>Explore Quality Lab &amp; Tests</span>
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Architectural Applications in the Built Environment */}
      <section className="section-padding bg-warm" id="applications-preview">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Architectural Sectors</span>
            <h2 className="display-6 fw-bold">Built for Real-World Demands</h2>
            <p className="section-subtitle">
              From residential kitchens to heavy civil infrastructure, see where Newtech panels are installed.
            </p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="sector-card h-100 bg-white rounded-4 overflow-hidden border shadow-sm d-flex flex-column">
                <div className="sector-img-wrap position-relative">
                  <Image
                    src="/img/application-interior-kitchen.jpg"
                    alt="Luxury Kitchen Modular Cabinetry"
                    width={400}
                    height={260}
                    className="w-100 object-fit-cover"
                    style={{ height: '220px' }}
                  />
                  <span className="sector-tag">Luxury Residential</span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h3 className="h6 fw-bold mb-2">Wet-Area Kitchens &amp; Vanities</h3>
                  <p className="text-secondary small mb-3 flex-grow-1">
                    100% BWP Marine Plywood that withstands continuous sink humidity, steam, and coastal moisture without swelling.
                  </p>
                  <Link href="/applications#residential" className="small fw-bold text-danger text-decoration-none">
                    View Specifications <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sector-card h-100 bg-white rounded-4 overflow-hidden border shadow-sm d-flex flex-column">
                <div className="sector-img-wrap position-relative">
                  <Image
                    src="/img/application-architectural-paneling.jpg"
                    alt="Commercial Joinery and CNC Carvings"
                    width={400}
                    height={260}
                    className="w-100 object-fit-cover"
                    style={{ height: '220px' }}
                  />
                  <span className="sector-tag">Commercial &amp; Joinery</span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h3 className="h6 fw-bold mb-2">High-Precision CNC &amp; Joinery</h3>
                  <p className="text-secondary small mb-3 flex-grow-1">
                    Calibrated uniform thickness allows high-speed CNC fretwork and flawless decorative laminate adhesion.
                  </p>
                  <Link href="/applications#commercial" className="small fw-bold text-danger text-decoration-none">
                    View Specifications <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="sector-card h-100 bg-white rounded-4 overflow-hidden border shadow-sm d-flex flex-column">
                <div className="sector-img-wrap position-relative">
                  <Image
                    src="/img/animal-lg-1.jpg"
                    alt="Heavy Concrete Formwork Construction"
                    width={400}
                    height={260}
                    className="w-100 object-fit-cover"
                    style={{ height: '220px' }}
                  />
                  <span className="sector-tag">Civil Infrastructure</span>
                </div>
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h3 className="h6 fw-bold mb-2">Concrete Formwork &amp; Shuttering</h3>
                  <p className="text-secondary small mb-3 flex-grow-1">
                    Phenolic film mirror-finish delivers flawless concrete surfaces with over 30 pour repetitions for bridges and towers.
                  </p>
                  <Link href="/applications#industrial" className="small fw-bold text-danger text-decoration-none">
                    View Specifications <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link href="/applications" className="btn btn-outline-wood px-4 py-2">
              <span>View Full Applications Gallery &amp; Project Case Studies</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Executive Leadership & Plant Contact Desk */}
      <TeamSection />

      {/* 8. Specifier & Contractor Conversion Hub */}
      <section className="section-padding bg-dark text-white position-relative overflow-hidden" id="contractor-hub">
        <div className="container-xxl px-4 position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-lg-8">
              <span className="badge bg-danger text-white px-3 py-2 rounded-pill fw-bold mb-3">
                <i className="bi bi-building-fill me-1"></i> Mill Wholesale Desk
              </span>
              <h2 className="display-6 fw-bold text-white mb-3">
                Supplying Architects, Builders &amp; Dealers Across South India
              </h2>
              <p className="text-white-75 mb-0" style={{ maxWidth: '680px' }}>
                Whether you need institutional bulk tenders, certified BIS laboratory reports, or custom calibrated
                thickness specifications, our Perumbavoor desk offers direct factory dispatch within 24 to 48 hours.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="d-flex flex-column flex-sm-row flex-lg-column gap-3 justify-content-lg-end">
                <Link href="/contact#quote" className="btn btn-brand-primary btn-lg px-4 py-3 fw-bold">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  <span>Request Factory Quote</span>
                </Link>
                <Link href="/resources" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                  <i className="bi bi-download me-2"></i>
                  <span>Technical Data Sheets</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
