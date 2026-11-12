import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { PRODUCTS, getProductBySlug } from '@/lib/products';
import QuoteForm from '@/components/QuoteForm';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Product Not Found | Newtech Ply & Boards',
    };
  }

  return {
    title: `${product.name} (${product.badge}) | Newtech Ply & Boards`,
    description: `${product.name} specifications, core species, boiling tolerances, and applications. Certified Indian Standard manufacturing in Perumbavoor, Kerala.`,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const otherProducts = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* Product Hero Header */}
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-2">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/products" className="text-white-50 text-decoration-none">
                  Products
                </Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="badge bg-danger px-3 py-2 text-uppercase mb-2">{product.badge}</span>
              <h1 className="display-5 fw-bold text-white mb-3">{product.name}</h1>
              <p className="lead text-white-50 mb-0">{product.heroDesc}</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#product-quote" className="btn btn-primary btn-lg">
                <i className="bi bi-file-earmark-text me-2"></i> Request Specification Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs */}
      <main className="section-padding bg-warm" id="main-content">
        <div className="container-xxl px-4">
          <div className="row g-5">
            {/* Left Column: Specs & Details */}
            <div className="col-lg-8">
              {/* Product Visual & Highlights */}
              <div className="bg-white rounded border shadow-sm p-4 p-md-5 mb-5">
                <div className="position-relative rounded overflow-hidden mb-4 border">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={400}
                    className="w-100 object-fit-cover"
                    style={{ maxHeight: '380px' }}
                    priority
                  />
                  <div className="position-absolute bottom-0 start-0 m-3">
                    <span className="badge bg-dark bg-opacity-75 text-white px-3 py-2 fs-6">
                      <i className="bi bi-shield-check text-warning me-1"></i> Factory Calibrated Hardwood
                    </span>
                  </div>
                </div>

                <h2 className="h4 fw-bold mb-3 text-dark">Engineering Highlights</h2>
                <div className="row g-3">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="col-md-6">
                      <div className="d-flex align-items-start gap-2">
                        <i className="bi bi-check-circle-fill text-danger fs-5 flex-shrink-0"></i>
                        <span className="small text-secondary">{h}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <section className="mb-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h2 className="h4 fw-bold mb-0 text-dark">
                    <i className="bi bi-sliders text-danger me-2"></i>Technical Specification Sheet
                  </h2>
                  <span className="badge bg-light text-secondary border">Mill Quality Lab Tested</span>
                </div>

                <div className="comparison-table-card rounded-4 border shadow-sm overflow-hidden mb-4">
                  <div className="table-responsive mb-0">
                    <table className="table-specs mb-0 align-middle">
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-patch-check-fill text-danger"></i>
                              <span>Grade &amp; Standard</span>
                            </div>
                          </th>
                          <td className="fw-bold text-danger fs-6">{product.gradeStandard}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-tree-fill text-secondary"></i>
                              <span>Core Timber Species</span>
                            </div>
                          </th>
                          <td className="text-dark fw-semibold">{product.coreSpecies}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-droplet-half text-secondary"></i>
                              <span>Bonding Resin Adhesive</span>
                            </div>
                          </th>
                          <td className="text-dark">{product.bondingResin}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-layers-fill text-secondary"></i>
                              <span>Available Thicknesses</span>
                            </div>
                          </th>
                          <td className="text-dark fw-semibold">{product.thicknesses}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-aspect-ratio text-secondary"></i>
                              <span>Standard Sheet Dimensions</span>
                            </div>
                          </th>
                          <td className="text-dark">{product.dimensions}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-water text-secondary"></i>
                              <span>Equilibrium Moisture Content</span>
                            </div>
                          </th>
                          <td className="text-dark">{product.moistureContent}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-slash-square text-secondary"></i>
                              <span>Surface Calibration</span>
                            </div>
                          </th>
                          <td className="text-dark">{product.faceFinish}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-pin-angle text-secondary"></i>
                              <span>Screw &amp; Fastener Holding</span>
                            </div>
                          </th>
                          <td className="text-dark">{product.screwHolding}</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="d-flex align-items-center gap-2">
                              <i className="bi bi-shield-fill-check text-success"></i>
                              <span>Boiling / Moisture Resistance</span>
                            </div>
                          </th>
                          <td className="fw-bold text-success">{product.boilingTolerance}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Recommended Applications */}
              <section className="mb-5">
                <h2 className="h4 fw-bold mb-3 text-dark">
                  <i className="bi bi-tools text-danger me-2"></i>Recommended Architectural Applications
                </h2>
                <div className="row g-3">
                  {product.applications.map((app, i) => (
                    <div key={i} className="col-md-6">
                      <div className="p-4 bg-white rounded border h-100 shadow-sm">
                        <div className="proof-icon mb-3">
                          <i className={`bi ${app.icon} text-danger fs-4`}></i>
                        </div>
                        <h3 className="h6 fw-bold mb-1 text-dark">{app.title}</h3>
                        <p className="small text-secondary mb-0">{app.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Handling and Storage */}
              <section className="mb-5">
                <div className="p-4 bg-white rounded border shadow-sm">
                  <h3 className="h5 fw-bold mb-3 text-dark">
                    <i className="bi bi-info-circle text-danger me-2"></i>Handling &amp; Storage Best Practices
                  </h3>
                  <ul className="small text-secondary mb-0 ps-3">
                    {product.guidelines.map((g, i) => (
                      <li key={i} className="mb-2">
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Embedded Quote Form */}
              <section id="product-quote">
                <QuoteForm initialProduct={product.name} />
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <div className="col-lg-4">
              <div className="contact-sidebar-card mb-4">
                <span className="text-warning text-uppercase fw-bold small">Direct Mill Supply</span>
                <h3 className="h4 text-white mb-2">Request {product.name} Rates</h3>
                <p className="small text-white-50 mb-4">
                  Speak directly with our technical sales head for wholesale pricing, container dispatch,
                  or project-specific delivery schedules.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  <a
                    href="https://wa.me/919526029853?text=Hello%20Mahin%2C%20I%20would%20like%20to%20enquire%20about%20rates%20for%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp w-100"
                  >
                    <i className="bi bi-whatsapp me-2"></i> WhatsApp Sales Head
                  </a>
                  <a href="tel:+919526029853" className="btn btn-outline-light w-100">
                    <i className="bi bi-telephone-fill me-2"></i> Call: +91 95260 29853
                  </a>
                  <a href="tel:+919745450618" className="btn btn-outline-light w-100">
                    <i className="bi bi-telephone-fill me-2"></i> Plant Desk: +91 97454 50618
                  </a>
                </div>

                <div className="border-top border-white border-opacity-10 pt-3 text-white-50 small">
                  <strong className="text-white d-block mb-1">Perumbavoor Dispatch:</strong>
                  Standard stock dispatched within 24 hours across Kerala &amp; South India.
                </div>
              </div>

              {/* Other Products Widget */}
              <div className="p-4 bg-white rounded border shadow-sm">
                <h4 className="h6 fw-bold mb-3 text-dark text-uppercase letter-spacing-1">
                  Other Plywood Grades
                </h4>
                <ul className="list-unstyled mb-0 small">
                  {otherProducts.map((op) => (
                    <li key={op.slug} className="mb-2 pb-2 border-bottom">
                      <Link
                        href={`/products/${op.slug}`}
                        className="text-decoration-none text-dark d-flex align-items-center justify-content-between hover-danger"
                      >
                        <span className="fw-semibold">{op.name}</span>
                        <i className="bi bi-arrow-right text-muted"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
