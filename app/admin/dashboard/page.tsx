'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface QuoteLead {
  _id?: string;
  id?: string;
  name: string;
  phone: string;
  email?: string;
  product: string;
  quantity?: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: string;
  ip?: string;
}

interface ContactInquiry {
  _id?: string;
  id?: string;
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [quotes, setQuotes] = useState<QuoteLead[]>([]);
  const [contacts, setContacts] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'quotes' | 'contacts'>('quotes');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted' | 'closed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/quotes');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      if (!res.ok) {
        throw new Error('Failed to retrieve dashboard records.');
      }
      const data = await res.json();
      setQuotes(data.quotes || []);
      setContacts(data.contacts || []);
    } catch (err: any) {
      setError(err.message || 'Error loading dashboard records.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id: string, newStatus: 'new' | 'contacted' | 'closed') => {
    setUpdatingId(id);
    try {
      const res = await fetch('/api/admin/quotes', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setQuotes((prev) =>
          prev.map((q) => ((q.id === id || q._id === id) ? { ...q, status: newStatus } : q))
        );
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Stats calculation
  const totalQuotes = quotes.length;
  const newQuotes = quotes.filter((q) => q.status === 'new').length;
  const contactedQuotes = quotes.filter((q) => q.status === 'contacted').length;
  const closedQuotes = quotes.filter((q) => q.status === 'closed').length;

  // Filtered quotes
  const filteredQuotes = quotes.filter((q) => {
    const matchesStatus = statusFilter === 'all' || q.status === statusFilter;
    const qSearch = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      q.name?.toLowerCase().includes(qSearch) ||
      q.phone?.includes(qSearch) ||
      q.product?.toLowerCase().includes(qSearch) ||
      q.message?.toLowerCase().includes(qSearch);
    return matchesStatus && matchesSearch;
  });

  const filteredContacts = contacts.filter((c) => {
    const qSearch = searchQuery.toLowerCase();
    return (
      !searchQuery ||
      c.name?.toLowerCase().includes(qSearch) ||
      c.phone?.includes(qSearch) ||
      c.message?.toLowerCase().includes(qSearch)
    );
  });

  return (
    <div className="min-vh-100 bg-light">
      {/* Top Navbar */}
      <header className="bg-dark text-white border-bottom border-secondary">
        <div className="container-fluid px-4 py-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="d-inline-flex align-items-center justify-content-center bg-danger rounded p-2">
                <i className="bi bi-shield-check text-white fs-5"></i>
              </div>
              <div>
                <h1 className="h5 fw-bold mb-0 text-white">Newtech Admin Portal</h1>
                <small className="text-white-50">Lead &amp; Inquiry CRM Management</small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="btn btn-sm btn-outline-light d-inline-flex align-items-center"
              >
                <i className="bi bi-box-arrow-up-right me-1"></i> View Live Site
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-sm btn-danger d-inline-flex align-items-center"
              >
                <i className="bi bi-box-arrow-right me-1"></i> Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container-fluid px-4 py-4">
        {/* KPI Stats Strip */}
        <div className="row g-3 mb-4">
          <div className="col-sm-6 col-xl-3">
            <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <small className="text-muted fw-semibold text-uppercase">Total Leads</small>
                  <h2 className="display-6 fw-bold mb-0 text-dark">{totalQuotes}</h2>
                </div>
                <div className="p-3 bg-primary-subtle text-primary rounded-circle">
                  <i className="bi bi-inbox-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card border-0 shadow-sm rounded-3 p-3 bg-white border-start border-4 border-danger">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <small className="text-muted fw-semibold text-uppercase">New / Uncontacted</small>
                  <h2 className="display-6 fw-bold mb-0 text-danger">{newQuotes}</h2>
                </div>
                <div className="p-3 bg-danger-subtle text-danger rounded-circle">
                  <i className="bi bi-bell-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <small className="text-muted fw-semibold text-uppercase">In Negotiation</small>
                  <h2 className="display-6 fw-bold mb-0 text-warning">{contactedQuotes}</h2>
                </div>
                <div className="p-3 bg-warning-subtle text-warning rounded-circle">
                  <i className="bi bi-chat-dots-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card border-0 shadow-sm rounded-3 p-3 bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <small className="text-muted fw-semibold text-uppercase">Closed / Dispatched</small>
                  <h2 className="display-6 fw-bold mb-0 text-success">{closedQuotes}</h2>
                </div>
                <div className="p-3 bg-success-subtle text-success rounded-circle">
                  <i className="bi bi-check-circle-fill fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Controls */}
        <div className="card border-0 shadow-sm rounded-3 mb-4">
          <div className="card-header bg-white border-bottom p-3 d-flex flex-wrap align-items-center justify-content-between gap-3">
            <ul className="nav nav-pills gap-2">
              <li className="nav-item">
                <button
                  type="button"
                  onClick={() => setActiveTab('quotes')}
                  className={`nav-link ${activeTab === 'quotes' ? 'active bg-danger' : 'text-dark'}`}
                >
                  <i className="bi bi-file-earmark-text me-1"></i> Quote Requests ({quotes.length})
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  onClick={() => setActiveTab('contacts')}
                  className={`nav-link ${activeTab === 'contacts' ? 'active bg-danger' : 'text-dark'}`}
                >
                  <i className="bi bi-envelope me-1"></i> General Inquiries ({contacts.length})
                </button>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                onClick={fetchData}
                className="btn btn-outline-secondary btn-sm"
                title="Refresh leads"
                disabled={loading}
              >
                <i className={`bi bi-arrow-clockwise ${loading ? 'spin' : ''}`}></i> Refresh
              </button>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="p-3 bg-light border-bottom d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex flex-wrap align-items-center gap-2">
              <input
                type="search"
                className="form-control form-control-sm"
                style={{ width: '280px' }}
                placeholder="Search by name, phone, product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {activeTab === 'quotes' && (
                <div className="btn-group btn-group-sm" role="group">
                  <button
                    type="button"
                    className={`btn ${statusFilter === 'all' ? 'btn-dark' : 'btn-outline-secondary'}`}
                    onClick={() => setStatusFilter('all')}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    className={`btn ${statusFilter === 'new' ? 'btn-danger' : 'btn-outline-secondary'}`}
                    onClick={() => setStatusFilter('new')}
                  >
                    New
                  </button>
                  <button
                    type="button"
                    className={`btn ${statusFilter === 'contacted' ? 'btn-warning' : 'btn-outline-secondary'}`}
                    onClick={() => setStatusFilter('contacted')}
                  >
                    Contacted
                  </button>
                  <button
                    type="button"
                    className={`btn ${statusFilter === 'closed' ? 'btn-success' : 'btn-outline-secondary'}`}
                    onClick={() => setStatusFilter('closed')}
                  >
                    Closed
                  </button>
                </div>
              )}
            </div>

            <div className="small text-muted">
              Showing {activeTab === 'quotes' ? filteredQuotes.length : filteredContacts.length} record(s)
            </div>
          </div>

          {/* Table Content */}
          <div className="card-body p-0">
            {loading ? (
              <div className="p-5 text-center text-muted">
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Loading leads from database...
              </div>
            ) : error ? (
              <div className="p-4 text-center text-danger">
                <i className="bi bi-exclamation-triangle me-2"></i> {error}
              </div>
            ) : activeTab === 'quotes' ? (
              filteredQuotes.length === 0 ? (
                <div className="p-5 text-center text-muted">
                  <i className="bi bi-inbox fs-1 d-block mb-2 text-secondary"></i>
                  No quote inquiries match the selected criteria.
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover mb-0 align-middle">
                    <thead className="table-light small">
                      <tr>
                        <th scope="col" style={{ width: '13%' }}>Timestamp</th>
                        <th scope="col" style={{ width: '22%' }}>Customer</th>
                        <th scope="col" style={{ width: '20%' }}>Product &amp; Qty</th>
                        <th scope="col" style={{ width: '27%' }}>Requirement / Location</th>
                        <th scope="col" style={{ width: '10%' }}>Status</th>
                        <th scope="col" style={{ width: '8%' }} className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="small">
                      {filteredQuotes.map((q) => {
                        const targetId = q.id || q._id || '';
                        const cleanPhone = q.phone.replace(/[^0-9]/g, '');
                        const waChat = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=Hello%20${encodeURIComponent(q.name)}%2C%20thank%20you%20for%20your%20quote%20inquiry%20with%20Newtech%20Ply.`;

                        return (
                          <tr key={targetId}>
                            <td>
                              <div className="fw-semibold text-dark">
                                {new Date(q.createdAt).toLocaleDateString('en-IN', {
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </div>
                              <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                {new Date(q.createdAt).toLocaleTimeString('en-IN', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </div>
                            </td>

                            <td>
                              <div className="fw-bold text-dark">{q.name}</div>
                              <div className="d-flex align-items-center gap-2 mt-1">
                                <a
                                  href={`tel:${q.phone}`}
                                  className="text-decoration-none text-dark hover-danger fw-semibold"
                                >
                                  <i className="bi bi-telephone-fill text-danger me-1"></i>
                                  {q.phone}
                                </a>
                                <a
                                  href={waChat}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="badge bg-success-subtle text-success border border-success-subtle text-decoration-none"
                                  title="Chat on WhatsApp"
                                >
                                  <i className="bi bi-whatsapp"></i> Chat
                                </a>
                              </div>
                              {q.email && (
                                <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                                  <i className="bi bi-envelope me-1"></i> {q.email}
                                </div>
                              )}
                            </td>

                            <td>
                              <span className="badge bg-light text-dark border mb-1">
                                {q.product}
                              </span>
                              {q.quantity && (
                                <div className="small text-secondary">
                                  <strong>Qty:</strong> {q.quantity}
                                </div>
                              )}
                            </td>

                            <td>
                              <p className="mb-0 text-secondary" style={{ maxWidth: '340px' }}>
                                {q.message}
                              </p>
                            </td>

                            <td>
                              <span
                                className={`badge ${
                                  q.status === 'new'
                                    ? 'bg-danger'
                                    : q.status === 'contacted'
                                    ? 'bg-warning text-dark'
                                    : 'bg-success'
                                } px-2 py-1 text-uppercase`}
                              >
                                {q.status}
                              </span>
                            </td>

                            <td className="text-end">
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  disabled={updatingId === targetId}
                                  onClick={() => {
                                    // Cycle through statuses
                                    const next =
                                      q.status === 'new'
                                        ? 'contacted'
                                        : q.status === 'contacted'
                                        ? 'closed'
                                        : 'new';
                                    updateStatus(targetId, next);
                                  }}
                                  title="Click to cycle status: New → Contacted → Closed"
                                >
                                  {updatingId === targetId ? '...' : 'Toggle'}
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )
            ) : filteredContacts.length === 0 ? (
              <div className="p-5 text-center text-muted">
                <i className="bi bi-envelope-open fs-1 d-block mb-2 text-secondary"></i>
                No contact inquiries found.
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover mb-0 align-middle">
                  <thead className="table-light small">
                    <tr>
                      <th scope="col" style={{ width: '15%' }}>Date</th>
                      <th scope="col" style={{ width: '25%' }}>Contact</th>
                      <th scope="col" style={{ width: '25%' }}>Subject</th>
                      <th scope="col" style={{ width: '35%' }}>Message</th>
                    </tr>
                  </thead>
                  <tbody className="small">
                    {filteredContacts.map((c) => {
                      const cleanPhone = c.phone.replace(/[^0-9]/g, '');
                      const waChat = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}`;
                      return (
                        <tr key={c.id || c._id}>
                          <td>
                            <div className="fw-semibold text-dark">
                              {new Date(c.createdAt).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </div>
                          </td>
                          <td>
                            <div className="fw-bold text-dark">{c.name}</div>
                            <a href={`tel:${c.phone}`} className="text-decoration-none text-danger small">
                              {c.phone}
                            </a>
                            <a
                              href={waChat}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ms-2 badge bg-success-subtle text-success text-decoration-none"
                            >
                              WhatsApp
                            </a>
                            {c.email && <div className="text-muted small">{c.email}</div>}
                          </td>
                          <td>
                            <span className="badge bg-light text-dark border">
                              {c.subject || 'General Inquiry'}
                            </span>
                          </td>
                          <td>
                            <p className="mb-0 text-secondary">{c.message}</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
