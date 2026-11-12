'use client';

import { useState, useEffect } from 'react';

interface CaptchaData {
  token: string;
  question: string;
}

export default function QuoteForm({ initialProduct = '' }: { initialProduct?: string }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: initialProduct || 'Commercial MR Plywood (IS:303)',
    quantity: '',
    message: '',
    website_url_hp: '', // Honeypot
  });

  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [waLink, setWaLink] = useState('');

  const fetchCaptcha = async () => {
    setIsLoadingCaptcha(true);
    try {
      const res = await fetch('/api/captcha');
      const data = await res.json();
      if (data.token && data.question) {
        setCaptcha({ token: data.token, question: data.question });
        setCaptchaAnswer('');
      }
    } catch (err) {
      console.error('Failed to load CAPTCHA:', err);
    } finally {
      setIsLoadingCaptcha(false);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setStatusMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setStatus('error');
      setStatusMessage('Please enter a valid phone number for quote follow-up.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please describe your requirement or project location.');
      return;
    }
    if (!captchaAnswer.trim()) {
      setStatus('error');
      setStatusMessage('Please solve the verification math challenge.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          captchaToken: captcha?.token,
          captchaAnswer: captchaAnswer.trim(),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus('error');
        setStatusMessage(result.error || 'Failed to submit quote inquiry.');
        // Refresh CAPTCHA
        fetchCaptcha();
        return;
      }

      // Generate WhatsApp shortcut link
      const waText = encodeURIComponent(
        `*New Website Quote Request*\n` +
          `• Name: ${formData.name}\n` +
          `• Phone: ${formData.phone}\n` +
          `• Product: ${formData.product}\n` +
          (formData.quantity ? `• Quantity: ${formData.quantity}\n` : '') +
          `• Details: ${formData.message}`
      );
      setWaLink(`https://wa.me/919526029853?text=${waText}`);

      setStatus('success');
      setStatusMessage(result.message || 'Quote enquiry submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        product: initialProduct || 'Commercial MR Plywood (IS:303)',
        quantity: '',
        message: '',
        website_url_hp: '',
      });
      setCaptchaAnswer('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage('Network error occurred. Please try again or reach us via WhatsApp directly.');
    }
  };

  return (
    <div className="quote-form-card bg-white p-4 p-md-5 rounded shadow-sm border" id="quote-form">
      <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
        <div>
          <h3 className="h4 fw-bold mb-1 text-dark">
            <i className="bi bi-file-earmark-text text-danger me-2"></i>Request Mill-Direct Quote
          </h3>
          <p className="text-secondary small mb-0">
            Factory wholesale pricing directly from Perumbavoor, Kerala
          </p>
        </div>
        <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2">
          <i className="bi bi-clock-history me-1"></i> Quick 2-Hr Turnaround
        </span>
      </div>

      {status === 'success' ? (
        <div className="alert alert-success border-success py-4">
          <div className="d-flex align-items-start gap-3">
            <i className="bi bi-check-circle-fill text-success fs-1"></i>
            <div>
              <h5 className="alert-heading fw-bold mb-1">Quote Enquiry Received Successfully!</h5>
              <p className="mb-3 text-secondary">
                Thank you! Your quotation request has been securely recorded in our system. Our technical sales
                head will review your sheet specifications and get back to you shortly.
              </p>
              <div className="d-flex flex-wrap gap-2">
                {waLink && (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-inline-flex align-items-center"
                  >
                    <i className="bi bi-whatsapp me-2"></i> Fast-Track on WhatsApp
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    fetchCaptcha();
                  }}
                  className="btn btn-outline-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot field (hidden from genuine users) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="website_url_hp">Leave this empty</label>
            <input
              type="text"
              id="website_url_hp"
              name="website_url_hp"
              value={formData.website_url_hp}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === 'error' && (
            <div className="alert alert-danger py-2 mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-exclamation-triangle-fill flex-shrink-0"></i>
              <div>{statusMessage}</div>
            </div>
          )}

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="quoteName" className="form-label fw-semibold small">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="quoteName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar / Skyline Interiors"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="quotePhone" className="form-label fw-semibold small">
                Phone / WhatsApp Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="quotePhone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="quoteEmail" className="form-label fw-semibold small">
                Email Address <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="quoteEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rajesh@example.com"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="quoteProduct" className="form-label fw-semibold small">
                Plywood Grade <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                id="quoteProduct"
                name="product"
                value={formData.product}
                onChange={handleChange}
              >
                <option value="Commercial MR Plywood (IS:303)">Commercial MR Plywood (IS:303 Moisture Resistant)</option>
                <option value="100% Calibrated Hardwood Plywood">100% Calibrated Hardwood Plywood (Zero Core Void)</option>
                <option value="BWP Marine Grade Plywood (IS:710)">BWP Marine Grade Plywood (IS:710 72-Hr Boiling Proof)</option>
                <option value="BWR Exterior Grade Plywood (IS:303)">BWR Exterior Grade Plywood (IS:303 Weather Resistant)</option>
                <option value="Film-Faced Shuttering Plywood (IS:4990)">Film-Faced Shuttering Plywood (IS:4990 30+ Repetitions)</option>
                <option value="Alternate Hardwood Core Plywood">Alternate Hardwood Core Plywood (Engineered Balance)</option>
                <option value="Custom Bulk / Institutional Spec">Custom Bulk Order / Multi-Grade Truckload</option>
              </select>
            </div>

            <div className="col-md-12">
              <label htmlFor="quoteQuantity" className="form-label fw-semibold small">
                Estimated Sheets or Sq. Ft <span className="text-muted">(e.g. 50 sheets 18mm, 20 sheets 12mm)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="quoteQuantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 100 sheets of 18mm 8x4, 40 sheets of 12mm 8x4"
              />
            </div>

            <div className="col-12">
              <label htmlFor="quoteMessage" className="form-label fw-semibold small">
                Project Details / Delivery Location <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="quoteMessage"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention delivery site (e.g. Kochi, Bangalore, Chennai), intended application (modular kitchen, concrete formwork, wardrobe), or any custom thickness requirements."
                required
              ></textarea>
            </div>

            {/* Math CAPTCHA Challenge */}
            <div className="col-12">
              <div className="p-3 bg-light rounded border d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="badge bg-secondary p-2">
                    <i className="bi bi-shield-lock-fill"></i>
                  </div>
                  <div>
                    <span className="fw-semibold small d-block">Security Verification (Anti-Spam)</span>
                    <span className="small text-muted">
                      Solve:{' '}
                      <strong className="text-danger fs-6">
                        {isLoadingCaptcha ? 'Loading...' : captcha?.question || '2 + 5 = ?'}
                      </strong>
                    </span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <input
                    type="number"
                    className="form-control form-control-sm text-center"
                    style={{ width: '90px' }}
                    placeholder="Result"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={fetchCaptcha}
                    className="btn btn-sm btn-outline-secondary"
                    title="Refresh challenge"
                    disabled={isLoadingCaptcha}
                  >
                    <i className={`bi bi-arrow-clockwise ${isLoadingCaptcha ? 'spin' : ''}`}></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-4 py-3"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Submitting Quote...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-send-fill me-2"></i> Send Quote Request
                    </>
                  )}
                </button>

                <div className="d-flex align-items-center gap-2 text-muted small">
                  <i className="bi bi-lock-fill text-success"></i>
                  <span>Encrypted backend storage &amp; spam protected</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
