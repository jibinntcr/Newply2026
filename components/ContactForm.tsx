'use client';

import { useState, useEffect } from 'react';

interface CaptchaData {
  token: string;
  question: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Factory Inquiry',
    message: '',
    website_url_hp: '',
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
      setStatusMessage('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setStatus('error');
      setStatusMessage('Please enter a phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please write your message or inquiry.');
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
      const res = await fetch('/api/contact', {
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
        setStatusMessage(result.error || 'Failed to submit contact message.');
        fetchCaptcha();
        return;
      }

      const waText = encodeURIComponent(
        `*New Website Contact Inquiry*\n` +
          `• Name: ${formData.name}\n` +
          `• Phone: ${formData.phone}\n` +
          `• Subject: ${formData.subject}\n` +
          `• Message: ${formData.message}`
      );
      setWaLink(`https://wa.me/919526029853?text=${waText}`);

      setStatus('success');
      setStatusMessage(result.message || 'Your inquiry has been sent successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Factory Inquiry',
        message: '',
        website_url_hp: '',
      });
      setCaptchaAnswer('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setStatusMessage('Network error occurred. Please try again or reach out on WhatsApp.');
    }
  };

  return (
    <div className="contact-form-card bg-white p-4 p-md-5 rounded shadow-sm border">
      <div className="mb-4 border-bottom pb-3">
        <h3 className="h4 fw-bold mb-1 text-dark">
          <i className="bi bi-chat-square-text text-danger me-2"></i>Send Us a Message
        </h3>
        <p className="text-secondary small mb-0">
          Reach our management and mill dispatch team directly.
        </p>
      </div>

      {status === 'success' ? (
        <div className="alert alert-success border-success py-4">
          <div className="d-flex align-items-start gap-3">
            <i className="bi bi-check-circle-fill text-success fs-1"></i>
            <div>
              <h5 className="alert-heading fw-bold mb-1">Inquiry Submitted Successfully!</h5>
              <p className="mb-3 text-secondary">
                Thank you! Your message has been routed to our Perumbavoor administration office. We will reply promptly.
              </p>
              <div className="d-flex flex-wrap gap-2">
                {waLink && (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-inline-flex align-items-center"
                  >
                    <i className="bi bi-whatsapp me-2"></i> Open WhatsApp Chat
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
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <input
              type="text"
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
              <label htmlFor="contactName" className="form-label fw-semibold small">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="contactName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="contactPhone" className="form-label fw-semibold small">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="contactPhone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="contactEmail" className="form-label fw-semibold small">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="contactEmail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="contactSubject" className="form-label fw-semibold small">
                Subject
              </label>
              <select
                className="form-select"
                id="contactSubject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="General Factory Inquiry">General Factory Inquiry</option>
                <option value="Dealership & Distribution">Dealership &amp; Distribution Inquiry</option>
                <option value="Architect / Builder Project Specification">Architect / Builder Project Specification</option>
                <option value="Raw Timber & Resin Vendor Offer">Raw Timber &amp; Resin Vendor Offer</option>
                <option value="Career / Job Application">Career / Job Inquiry</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="contactMessage" className="form-label fw-semibold small">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="contactMessage"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe how we can assist you..."
                required
              ></textarea>
            </div>

            {/* Math CAPTCHA */}
            <div className="col-12">
              <div className="p-3 bg-light rounded border d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="badge bg-secondary p-2">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div>
                    <span className="fw-semibold small d-block">Security Math Verification</span>
                    <span className="small text-muted">
                      Solve: <strong className="text-danger fs-6">{isLoadingCaptcha ? '...' : captcha?.question || '3 + 4 = ?'}</strong>
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
              <button
                type="submit"
                className="btn btn-primary btn-lg px-4 py-3"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="bi bi-envelope-paper-fill me-2"></i> Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
