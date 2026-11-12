import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Security | Newtech Ply & Boards',
  description:
    'Privacy Policy for Newtech Ply & Boards (newply.org). Learn how we protect customer data and quotation information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-wood text-white py-5">
        <div className="container-xxl px-4 py-3">
          <span className="text-warning text-uppercase fw-bold small">Legal &amp; Compliance</span>
          <h1 className="display-5 fw-bold text-white mb-2">Privacy Policy &amp; Data Protection</h1>
          <p className="lead text-white-50 mb-0">
            Last Updated: November 2026 | Newtech Ply &amp; Boards (newply.org)
          </p>
        </div>
      </section>

      <main className="section-padding bg-warm">
        <div className="container-xxl px-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="bg-white p-4 p-md-5 rounded border shadow-sm">
                <h2 className="h4 fw-bold text-dark mb-3">1. Overview &amp; Commitment</h2>
                <p className="text-secondary mb-4">
                  Newtech Ply &amp; Boards (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website{' '}
                  <a href="https://www.newply.org" className="text-danger">
                    www.newply.org
                  </a>
                  . We are committed to safeguarding the privacy and confidentiality of individuals, dealers,
                  architects, and contractors who visit our website and submit quotation requests.
                </p>

                <h2 className="h4 fw-bold text-dark mb-3">2. Information We Collect</h2>
                <p className="text-secondary mb-3">
                  When you submit a quotation request or contact inquiry through our platform, we collect:
                </p>
                <ul className="text-secondary mb-4 small">
                  <li>Full Name and Company / Firm Name</li>
                  <li>Direct Phone Number and WhatsApp Contact Information</li>
                  <li>Email Address (where supplied)</li>
                  <li>Plywood product grade, estimated quantity, and delivery site requirements</li>
                  <li>Technical connection details (IP address and timestamp for bot protection)</li>
                </ul>

                <h2 className="h4 fw-bold text-dark mb-3">3. Purpose of Processing</h2>
                <p className="text-secondary mb-3">We use the submitted information solely to:</p>
                <ul className="text-secondary mb-4 small">
                  <li>Compute and deliver mill-direct wholesale quotations based on your specific requirements.</li>
                  <li>Follow up on delivery logistics, product inquiries, and distribution partnerships.</li>
                  <li>Prevent automated spam and abuse using mathematical verification challenges.</li>
                </ul>

                <h2 className="h4 fw-bold text-dark mb-3">4. Non-Disclosure &amp; Data Security</h2>
                <p className="text-secondary mb-4">
                  We <strong>never sell, rent, trade, or distribute</strong> customer or business contact
                  information to third-party marketing companies or brokers. All leads are stored on secure
                  encrypted databases with administrative password protection and strict role-based access.
                </p>

                <h2 className="h4 fw-bold text-dark mb-3">5. Contact Regarding Your Data</h2>
                <p className="text-secondary mb-4">
                  If you wish to review, update, or permanently delete your contact details from our sales
                  database, please contact our administration office at:
                  <br />
                  <strong>Email:</strong>{' '}
                  <a href="mailto:newtechply@gmail.com" className="text-danger">
                    newtechply@gmail.com
                  </a>
                  <br />
                  <strong>Phone:</strong> +91 95260 29853
                  <br />
                  <strong>Address:</strong> Newtech Ply &amp; Boards, Perumbavoor, Ernakulam District, Kerala
                  - 683542.
                </p>

                <div className="pt-4 border-top">
                  <Link href="/" className="btn btn-outline-wood">
                    <i className="bi bi-arrow-left me-2"></i> Return to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
