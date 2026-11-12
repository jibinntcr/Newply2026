import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plywood Applications & Use-Cases | Modular Kitchens, Wardrobes, Shuttering',
  description:
    'Application guide for Newtech Plywood grades. Discover the right plywood for modular kitchens, wardrobes, concrete shuttering, and architectural paneling.',
};

const APPLICATIONS = [
  {
    id: 'kitchens',
    title: 'Modular Kitchens & Wet-Area Vanities',
    recommendedGrade: 'Newtech Marine Plywood (IS:710 BWP)',
    badge: 'Waterproof IS:710',
    desc: 'High steam exposure, plumbing leaks, and daily water splashing require unextended Phenol Formaldehyde bonding that will never delaminate.',
    image: '/img/carousel-3.jpg',
    whyItMatters: [
      '72-hour boiling water immersion proof prevents swelling under wet sinks',
      'Dual-head calibrated surface prevents unsightly bubbling beneath acrylic or laminate surfaces',
      'Anti-microbial and borer treatment stops fungi in damp kitchen corners',
    ],
    slug: 'marine-plywood',
  },
  {
    id: 'wardrobes',
    title: 'Bedroom Wardrobes, Closets & Shelving',
    recommendedGrade: 'Commercial MR Plywood (IS:303) / Alternate Hardwood',
    badge: 'Dimensionally Stable',
    desc: 'Tall 8-foot wardrobe shutters require sheets with symmetrical cross-lamination that resist bowing and maintain perfect hinge alignment over years.',
    image: '/img/carousel-1.jpg',
    whyItMatters: [
      'Balanced odd-ply construction keeps full-height 8x4 sliding shutters flat',
      'High screw-holding power prevents heavy soft-close hinges from loosening',
      'Lightweight alternate core reduces load on floor runners and ceiling tracks',
    ],
    slug: 'commercial-plywood',
  },
  {
    id: 'formwork',
    title: 'High-Rise Concrete Shuttering & Formwork',
    recommendedGrade: 'Film-Faced Shuttering Plywood (IS:4990)',
    badge: '30+ Repetitions',
    desc: 'Heavy concrete casting demands panels that withstand hydrostatic slurry pressure, rough handling, and multiple stripping cycles.',
    image: '/img/carousel-2.jpg',
    whyItMatters: [
      '120+ GSM phenolic mirror film yields ultra-smooth concrete that eliminates plastering',
      'All 4 edges coated with industrial acrylic sealant to prevent moisture absorption from wet cement',
      'High reusability drastically reduces per-square-foot casting costs on mega projects',
    ],
    slug: 'film-faced-plywood',
  },
  {
    id: 'cnc',
    title: 'Architectural CNC Carving & Detailed Joinery',
    recommendedGrade: '100% Calibrated Hardwood Plywood',
    badge: 'Zero Core Voids',
    desc: 'Intricate fretwork, jaali screens, and fluted acoustic wall panels require dense, void-free cores so bits never strike hidden air cavities.',
    image: '/img/carousel-2.jpg',
    whyItMatters: [
      'Zero internal hollow pockets guarantees sharp, chip-free routed edges',
      'High density southern timber core provides superior mechanical rigidity',
      'Uniform screw and anchor holding throughout the entire panel cross-section',
    ],
    slug: 'hardwood-plywood',
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="text-warning text-uppercase fw-bold small">Engineering Guide</span>
              <h1 className="display-5 fw-bold text-white mb-3">Architectural Plywood Applications</h1>
              <p className="lead text-white-50 mb-0">
                Plywood failures occur when the wrong grade is specified for an environment. Here is how
                Newtech Ply formulations match specific interior, exterior, and structural demands.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link href="/contact#quote-form" className="btn btn-primary btn-lg">
                <i className="bi bi-file-earmark-text me-2"></i> Get Project Recommendation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm">
        <div className="container-xxl px-4">
          <div className="d-flex flex-column gap-5">
            {APPLICATIONS.map((app, idx) => (
              <div
                key={app.id}
                className="bg-white rounded border shadow-sm overflow-hidden p-4 p-md-5"
              >
                <div className={`row g-5 align-items-center ${idx % 2 === 1 ? 'flex-lg-row-reverse' : ''}`}>
                  <div className="col-lg-6">
                    <div className="position-relative rounded overflow-hidden border">
                      <Image
                        src={app.image}
                        alt={app.title}
                        width={600}
                        height={350}
                        className="w-100 object-fit-cover"
                        style={{ height: '320px' }}
                      />
                      <span className="position-absolute top-0 end-0 m-3 badge bg-danger px-3 py-2">
                        {app.badge}
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <span className="section-eyebrow text-danger">{app.recommendedGrade}</span>
                    <h2 className="h3 fw-bold mb-3 text-dark">{app.title}</h2>
                    <p className="text-secondary mb-4">{app.desc}</p>

                    <h3 className="h6 fw-bold text-dark mb-2">Why This Grade is Specified:</h3>
                    <ul className="list-unstyled small text-secondary mb-4">
                      {app.whyItMatters.map((point, i) => (
                        <li key={i} className="d-flex align-items-start gap-2 mb-2">
                          <i className="bi bi-check-circle-fill text-success flex-shrink-0 mt-1"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="d-flex flex-wrap gap-2">
                      <Link href={`/products/${app.slug}`} className="btn btn-outline-wood">
                        View Technical Specs <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                      <Link
                        href={`/contact?product=${encodeURIComponent(app.recommendedGrade)}#quote-form`}
                        className="btn btn-primary"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Selection Guide */}
      <section className="section-padding bg-white border-top">
        <div className="container-xxl px-4 text-center">
          <span className="section-eyebrow">Quick Decision Guide</span>
          <h2 className="display-6 mb-4">Unsure Which Grade Your Project Requires?</h2>
          <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '680px' }}>
            Our technical team in Perumbavoor reviews architectural blueprints, BOQs, and contractor
            specifications to recommend the most cost-effective and structurally durable grade mix.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary btn-lg px-4">
              <i className="bi bi-chat-dots-fill me-2"></i> Speak with Technical Sales Head
            </Link>
            <a
              href="https://wa.me/919526029853?text=Hello%20Mahin%2C%20I%20have%20an%20architectural%20plan%20and%20need%20a%20plywood%20specification%20recommendation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg px-4"
            >
              <i className="bi bi-whatsapp me-2"></i> WhatsApp Architectural Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
