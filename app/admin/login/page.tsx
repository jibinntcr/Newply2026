'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Authentication failed. Please verify credentials.');
        setLoading(false);
        return;
      }

      // Successful login
      router.push('/admin/dashboard');
      router.refresh();
    } catch (err) {
      console.error(err);
      setError('A connection error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-5"
      style={{
        background: 'linear-gradient(135deg, #2b1f1d 0%, #1a1413 100%)',
      }}
    >
      <div className="container px-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="card-header bg-dark text-white p-4 text-center border-0">
                <div className="d-inline-flex align-items-center justify-content-center bg-danger rounded-circle p-3 mb-3 shadow">
                  <i className="bi bi-shield-lock-fill fs-2 text-white"></i>
                </div>
                <h1 className="h4 fw-bold mb-1 text-white">Newtech Admin Portal</h1>
                <p className="text-white-50 small mb-0">
                  Lead Management &amp; Customer Inquiries
                </p>
              </div>

              <div className="card-body p-4 p-md-5 bg-white">
                {error && (
                  <div className="alert alert-danger py-2 mb-4 d-flex align-items-center gap-2 small">
                    <i className="bi bi-exclamation-octagon-fill flex-shrink-0"></i>
                    <div>{error}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold text-dark">
                      Username / Admin ID
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-muted">
                        <i className="bi bi-person-fill"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter admin username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label small fw-semibold text-dark">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-muted">
                        <i className="bi bi-key-fill"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-3 fw-semibold shadow-sm"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i> Sign In to Portal
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-4 p-3 bg-light rounded border text-muted small">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <i className="bi bi-info-circle-fill text-primary"></i>
                    <strong>Default Credentials:</strong>
                  </div>
                  <div>
                    Username: <code className="text-dark">admin</code>
                    <br />
                    Password: <code className="text-dark">newtech2026!</code>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Link href="/" className="text-decoration-none small text-muted hover-danger">
                    <i className="bi bi-arrow-left me-1"></i> Back to Public Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
