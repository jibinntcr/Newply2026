'use client';

import React from 'react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Muneer K H',
      role: 'Managing Partner',
      dept: 'Operations',
      status: 'Plant Active',
      statusTitle: 'Active on site at Perumbavoor Plant',
      photo: '/img/team-1.jpg',
      bio: 'Directs mill operations, timber procurement, raw material quality control, and production scheduling at our Perumbavoor manufacturing facility.',
      tags: ['Timber Sourcing', 'Hot-Press Ops', 'IS:710 Compliance'],
      phone: '+91 97454 50618',
      telLink: 'tel:+919745450618',
      waLink:
        'https://wa.me/919745450618?text=Hello%20Muneer%2C%20I%20would%20like%20to%20discuss%20plywood%20manufacturing%20specifications.',
      email: 'newtechply@gmail.com',
    },
    {
      name: 'Mahin K.H',
      role: 'Head of Sales & Business Dev',
      dept: 'Commercial',
      status: 'Sales Desk',
      statusTitle: 'Active Commercial Sales Desk',
      photo: '/img/team-3.jpg',
      bio: 'Leads institutional sales, contractor relationships, architectural specifications, dealer distribution, and commercial wholesale quotations.',
      tags: ['Institutional Tenders', 'Architectural Specs', 'Wholesale Quotes'],
      phone: '+91 95260 29853',
      telLink: 'tel:+919526029853',
      waLink:
        'https://wa.me/919526029853?text=Hello%20Mahin%2C%20I%20would%20like%20to%20request%20a%20commercial%20plywood%20quotation.',
      email: 'newtechply@gmail.com',
    },
    {
      name: 'Muhsin',
      role: 'Customer Relations & Dispatch',
      dept: 'Logistics',
      status: 'Dispatch Active',
      statusTitle: 'Active Order & Logistics Desk',
      photo: '/img/team-2.jpg',
      bio: 'Coordinates dispatch schedules, transport fleets, live order tracking, and client after-sales support to ensure punctual on-site delivery.',
      tags: ['Fleet Logistics', 'Site Delivery', 'Client Support'],
      phone: '+91 97454 50618',
      telLink: 'tel:+919745450618',
      waLink:
        'https://wa.me/919745450618?text=Hello%20Muhsin%2C%20I%20would%20like%20to%20check%20an%20order%20dispatch%20status.',
      email: 'newtechply@gmail.com',
    },
  ];

  return (
    <section id="leadership-team" className="section-padding bg-warm">
      <div className="container-xxl px-4">
        <div className="section-title text-center">
          <span className="section-eyebrow">Factory Leadership</span>
          <h2 className="display-6">Meet the Mill Leadership &amp; Sales Desk</h2>
          <p className="section-subtitle">
            Direct, personal point-of-contact for technical specifications, quotations, and wholesale distribution partnerships.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="team-exec-card">
                {/* Image Wrap with Gradient & Badges */}
                <div className="team-exec-img-wrap">
                  <img
                    src={member.photo}
                    alt={`${member.name} - ${member.role}`}
                    className="team-exec-img"
                    width={400}
                    height={310}
                    loading="lazy"
                  />
                  <div className="team-exec-gradient"></div>

                  <div className="team-exec-badges">
                    <div className="team-exec-status" title={member.statusTitle}>
                      <span className="status-dot"></span> {member.status}
                    </div>
                    <div className="team-exec-dept">{member.dept}</div>
                  </div>

                  {/* Dribbble-style Floating Quick Action Buttons */}
                  <div className="team-quick-float">
                    <a href={member.telLink} className="team-quick-icon" title={`Call ${member.name}`}>
                      <i className="bi bi-telephone-fill"></i>
                    </a>
                    <a
                      href={member.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-quick-icon wa"
                      title={`WhatsApp ${member.name}`}
                    >
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="team-quick-icon mail"
                      title={`Email ${member.name}`}
                    >
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="team-exec-body">
                  <h3 className="team-exec-name">{member.name}</h3>
                  <div>
                    <span className="team-exec-role">{member.role}</span>
                  </div>
                  <p className="team-exec-bio">{member.bio}</p>

                  <div className="team-exec-chips">
                    {member.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="team-exec-chip">
                        <i className="bi bi-check2-circle me-1 text-danger"></i>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action Bar */}
                <div className="team-exec-footer">
                  <div className="team-exec-btn-grid">
                    <a href={member.telLink} className="team-exec-btn-call">
                      <i className="bi bi-telephone-fill text-danger me-1"></i> Call
                    </a>
                    <a
                      href={member.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-exec-btn-wa"
                    >
                      <i className="bi bi-whatsapp me-1"></i> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
