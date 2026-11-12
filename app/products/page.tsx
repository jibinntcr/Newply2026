import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { PRODUCTS } from '@/lib/products';
import GradeMatrix from '@/components/GradeMatrix';

export const metadata: Metadata = {
  title: 'Plywood Product Catalog | Commercial, Marine, Hardwood & Shuttering',
  description:
    'Explore Newtech Ply & Boards complete range of IS:303, IS:710 Marine, and IS:4990 Film-Faced Plywood. Factory direct supply from Perumbavoor, Kerala.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="text-warning text-uppercase fw-bold small">Complete Product Range</span>
              <h1 className="display-5 fw-bold text-white mb-3">Engineered Plywood Catalog</h1>
              <p className="lead text-white-50 mb-0">
                Calibrated hardwood veneers, unextended phenolic resins, and certified Indian Standard
                compliance. Manufactured directly in Perumbavoor, Kerala for bulk supply and distribution.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link href="/contact#quote-form" className="btn btn-brand-primary btn-lg">
                <i className="bi bi-file-earmark-text me-2"></i> Request Wholesale Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section-padding bg-warm">
        <div className="container-xxl px-4">
          <div className="section-title text-center mb-5">
            <span className="section-eyebrow">Direct Mill Specifications</span>
            <h2 className="display-6">6 Specialized Plywood Formulations</h2>
            <p className="section-subtitle">
              Click into any product for detailed technical data sheets, tolerance charts, and application guides.
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
                      width={450}
                      height={260}
                      className="w-100 object-fit-cover"
                      style={{ height: '240px' }}
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

                    <div className="p-3 bg-light rounded small mb-3 border">
                      <div className="d-flex justify-content-between py-1 border-bottom">
                        <span className="text-muted">Standard:</span>
                        <strong className="text-dark">{prod.gradeStandard}</strong>
                      </div>
                      <div className="d-flex justify-content-between py-1 border-bottom">
                        <span className="text-muted">Bonding:</span>
                        <strong className="text-dark">{prod.bondingResin}</strong>
                      </div>
                      <div className="d-flex justify-content-between py-1">
                        <span className="text-muted">Thicknesses:</span>
                        <strong className="text-danger">{prod.thicknesses.split('(')[0]}</strong>
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <Link
                        href={`/products/${prod.slug}`}
                        className="btn btn-outline-wood flex-grow-1"
                      >
                        View Specifications <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                      <Link
                        href={`/contact?product=${encodeURIComponent(prod.name)}#quote-form`}
                        className="btn btn-primary"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Comparison Matrix Section */}
      <GradeMatrix />

      {/* Mill Supply Callout */}
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3 text-center">
          <span className="badge bg-danger px-3 py-2 text-uppercase mb-3">Mill Dispatch Facility</span>
          <h2 className="display-6 fw-bold text-white mb-3">Custom Bulk Thicknesses &amp; Mixed Truckloads</h2>
          <p className="lead text-white-50 mx-auto mb-4" style={{ maxWidth: '750px' }}>
            Looking for container exports or full truckload deliveries across South India? We manufacture
            custom thickness tolerances, oversized press formats, and project-specific resin blends.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary btn-lg px-4">
              <i className="bi bi-telephone-fill me-2"></i> Contact Plant Sales Desk
            </Link>
            <a
              href="https://wa.me/919526029853?text=Hello%20Newtech%20Team%2C%20I%20need%20a%20bulk%20wholesale%20quote%20for%20truckload%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg px-4"
            >
              <i className="bi bi-whatsapp me-2"></i> WhatsApp Sales Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
