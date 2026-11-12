import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | Newtech Ply & Boards - Factory & Sales Desk',
  description:
    'Contact Newtech Ply & Boards in Perumbavoor, Kerala. Direct factory phone, WhatsApp desk, mill address, and quote inquiry forms.',
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { product?: string };
}) {
  const initialProduct = searchParams?.product || '';

  return (
    <>
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="text-warning text-uppercase fw-bold small">Direct Mill Communication</span>
              <h1 className="display-5 fw-bold text-white mb-3">Contact Newtech Ply &amp; Boards</h1>
              <p className="lead text-white-50 mb-0">
                Connect directly with our mill management, technical specification desk, and logistics
                dispatch team at our Perumbavoor, Kerala headquarters.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <a
                href="https://wa.me/919526029853?text=Hello%20Newtech%20Team%2C%20I%20would%20like%20to%20inquire%20about%20plywood%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <i className="bi bi-whatsapp me-2"></i> WhatsApp Sales Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm">
        <div className="container-xxl px-4">
          <div className="row g-5">
            {/* Contact Cards & Mill Details */}
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-4">
                {/* Mill Headquarters */}
                <div className="p-4 bg-white rounded border shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="proof-icon flex-shrink-0">
                      <i className="bi bi-geo-alt-fill text-danger fs-3"></i>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold text-dark mb-1">Factory &amp; Mill Dispatch</h3>
                      <p className="small text-secondary mb-2">
                        <strong>Newtech Ply &amp; Boards</strong>
                        <br />
                        Industrial Zone, Perumbavoor
                        <br />
                        Ernakulam District, Kerala - 683542, India
                      </p>
                      <span className="badge bg-light text-dark border">
                        <i className="bi bi-clock me-1"></i> Mon - Sat: 8:30 AM - 7:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Phone Lines */}
                <div className="p-4 bg-white rounded border shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="proof-icon flex-shrink-0">
                      <i className="bi bi-telephone-fill text-danger fs-3"></i>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold text-dark mb-2">Direct Phone &amp; WhatsApp Lines</h3>
                      <div className="d-flex flex-column gap-2 small">
                        <div>
                          <strong className="d-block text-dark">Mahin K.H (Head of Sales &amp; Business Dev)</strong>
                          <a href="tel:+919526029853" className="text-danger text-decoration-none fw-semibold">
                            +91 95260 29853
                          </a>
                          <span className="text-muted ms-2">(Wholesale &amp; Dealer Inquiries)</span>
                        </div>
                        <div className="pt-2 border-top">
                          <strong className="d-block text-dark">Muneer K H (Managing Partner)</strong>
                          <a href="tel:+919745450618" className="text-danger text-decoration-none fw-semibold">
                            +91 97454 50618
                          </a>
                          <span className="text-muted ms-2">(Mill Operations &amp; Bulk Orders)</span>
                        </div>
                        <div className="pt-2 border-top">
                          <strong className="d-block text-dark">Muhsin (Customer Relations &amp; Dispatch)</strong>
                          <a href="tel:+919745450618" className="text-danger text-decoration-none fw-semibold">
                            +91 97454 50618
                          </a>
                          <span className="text-muted ms-2">(Transport &amp; Tracking)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Desk */}
                <div className="p-4 bg-white rounded border shadow-sm">
                  <div className="d-flex align-items-start gap-3">
                    <div className="proof-icon flex-shrink-0">
                      <i className="bi bi-envelope-at-fill text-danger fs-3"></i>
                    </div>
                    <div>
                      <h3 className="h6 fw-bold text-dark mb-1">Official Mill Email</h3>
                      <p className="small text-secondary mb-2">
                        For tenders, purchase orders, dealer applications, and technical specifications:
                      </p>
                      <a
                        href="mailto:newtechply@gmail.com"
                        className="fw-bold text-danger text-decoration-none"
                      >
                        newtechply@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Quote Form Tabs */}
            <div className="col-lg-7">
              <div className="d-flex flex-column gap-5">
                <QuoteForm initialProduct={initialProduct} />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white border-top py-5">
        <div className="container-xxl px-4 text-center">
          <span className="section-eyebrow">Strategic Location</span>
          <h2 className="display-6 mb-3">Located in Kerala’s Premier Timber Industrial Zone</h2>
          <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Our Perumbavoor facility offers fast transit connectivity via NH 544 and MC Road, facilitating
            daily truckload dispatches across Kerala, Tamil Nadu, and Karnataka.
          </p>

          <div className="rounded border overflow-hidden shadow-sm ratio ratio-21x9" style={{ minHeight: '340px' }}>
            <iframe
              title="Newtech Ply & Boards Perumbavoor Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62835.48560126938!2d76.44474712015093!3d10.122176378456247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e2a9b343cb4d%3A0xe5a3630f5ec8fa08!2sPerumbavoor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
