'use client';

import { useState } from 'react';

interface LayerInfo {
  id: string;
  name: string;
  grain: string;
  grainIcon: string;
  type: 'face' | 'crossband' | 'center';
  role: string;
  details: string;
}

const LAYERS: LayerInfo[] = [
  {
    id: 'face-top',
    name: 'Layer 1: Top Face Veneer (A-Grade Hardwood)',
    grain: '0° Longitudinal',
    grainIcon: 'bi-arrow-left-right',
    type: 'face',
    role: 'Aesthetic & Wear Face',
    details:
      'Smooth, knot-free selected face veneer providing a flawless calibrated surface for decorative laminates, natural veneers, polishing, or direct painting. Grain runs longitudinally along sheet length.',
  },
  {
    id: 'cross-1',
    name: 'Layer 2: Crossband Core Ply',
    grain: '90° Perpendicular',
    grainIcon: 'bi-arrow-down-up',
    type: 'crossband',
    role: 'Transverse Rigidity',
    details:
      'Rotary-peeled hardwood veneer running perpendicular (90°) to the face. Locks cross-grain dimensional movement, drastically multiplying impact strength and preventing warping.',
  },
  {
    id: 'center-core',
    name: 'Layer 3: Center Core Veneer',
    grain: '0° Longitudinal',
    grainIcon: 'bi-arrow-left-right',
    type: 'center',
    role: 'Neutral Axis Neutralizer',
    details:
      'The central balancing veneer lying precisely along the panel’s neutral bending axis. Absorbs shearing stresses between upper and lower crossbands when subjected to structural loads.',
  },
  {
    id: 'cross-2',
    name: 'Layer 4: Crossband Core Ply',
    grain: '90° Perpendicular',
    grainIcon: 'bi-arrow-down-up',
    type: 'crossband',
    role: 'Symmetric Counter-Force',
    details:
      'Second perpendicular veneer balancing internal drying and moisture tensions symmetrically across the board thickness, ensuring board stays flat under fluctuating Kerala humidity.',
  },
  {
    id: 'face-back',
    name: 'Layer 5: Back Balancing Veneer',
    grain: '0° Longitudinal',
    grainIcon: 'bi-arrow-left-right',
    type: 'face',
    role: 'Structural Balance',
    details:
      'Equal-species balancing face veneer running longitudinally to prevent asymmetric cupping and bowing under environmental humidity changes, delivering uniform two-sided stability.',
  },
];

export default function CrossLamination() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLayerId, setSelectedLayerId] = useState<string>('face-top');

  const selectedLayer = LAYERS.find((l) => l.id === selectedLayerId) || LAYERS[0];

  return (
    <section className="section-padding cross-lam-section" aria-labelledby="laminationHeading">
      <div className="container-xxl px-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="section-eyebrow">Material Anatomy</span>
            <h2 id="laminationHeading" className="display-6 mb-3">
              The Science of Cross-Lamination
            </h2>
            <p className="text-secondary mb-4">
              Solid wood naturally expands and contracts across its grain with changes in humidity.
              Plywood neutralizes this movement by gluing consecutive veneer layers with their grain
              orientation rotated at 90 degrees.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              <div className="d-flex gap-3 align-items-start">
                <div className="proof-icon flex-shrink-0">
                  <i className="bi bi-arrows-fullscreen"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Two-Way Tensile Distribution</h4>
                  <p className="small text-muted mb-0">
                    Forces applied anywhere on the sheet are shared along both axes, multiplying impact
                    resistance.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <div className="proof-icon flex-shrink-0">
                  <i className="bi bi-shield-slash"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Zero Longitudinal Splitting</h4>
                  <p className="small text-muted mb-0">
                    Fasteners, screws, and nails can be driven close to board edges without the splitting
                    common in solid timber.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-start">
                <div className="proof-icon flex-shrink-0">
                  <i className="bi bi-water"></i>
                </div>
                <div>
                  <h4 className="h6 fw-bold mb-1">Hydraulic Hot Press Bonding</h4>
                  <p className="small text-muted mb-0">
                    Phenolic resins polymerize under extreme thermal pressure (140°C - 150°C) to form
                    permanent, waterproof molecular bonds.
                  </p>
                </div>
              </div>
            </div>

            <div className="alert alert-secondary border-0 small text-muted">
              <i className="bi bi-info-circle me-1"></i>{' '}
              <em>
                Note: Diagram is an illustrative 5-ply construction model. Actual veneer layer counts vary
                by sheet thickness (e.g. 3-ply, 5-ply, 7-ply, 11-ply, 13-ply).
              </em>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="lamination-stage">
              <div className="lamination-controls d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                <div>
                  <h3 className="h5 fw-bold mb-0">Interactive 5-Ply Cross-Section</h3>
                  <small className="text-muted">Click any layer to inspect grain orientation and role</small>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="btn btn-sm btn-outline-wood"
                  aria-expanded={isExpanded}
                >
                  <i className={`bi ${isExpanded ? 'bi-arrows-collapse' : 'bi-arrows-expand'} me-1`}></i>{' '}
                  {isExpanded ? 'Collapse Plywood Stack' : 'Separate Layers (Cross-Lamination View)'}
                </button>
              </div>

              {/* Layer Stack */}
              <div className={`layer-stack ${isExpanded ? 'expanded' : ''}`}>
                {LAYERS.map((layer, idx) => {
                  const isSelected = layer.id === selectedLayerId;
                  return (
                    <div key={layer.id}>
                      <div
                        className={`ply-layer ${layer.type} ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedLayerId(layer.id)}
                        tabIndex={0}
                        role="button"
                        aria-label={layer.name}
                        style={{
                          borderWidth: isSelected ? '2px' : '1px',
                          borderColor: isSelected ? 'var(--primary)' : undefined,
                          boxShadow: isSelected ? '0 0 0 3px rgba(184, 51, 42, 0.15)' : undefined,
                          cursor: 'pointer',
                        }}
                      >
                        <span className="layer-title">
                          <i
                            className={`bi bi-layers-fill ${
                              layer.type === 'face'
                                ? 'text-danger'
                                : layer.type === 'crossband'
                                ? 'text-dark'
                                : 'text-secondary'
                            } me-2`}
                          ></i>
                          {layer.name}
                        </span>
                        <span className="layer-grain">
                          <i className={`bi ${layer.grainIcon} me-1`}></i>
                          Grain: {layer.grain}
                        </span>
                      </div>
                      {idx < LAYERS.length - 1 && (
                        <div className="bonding-indicator">
                          <i className="bi bi-shield-check me-1 text-danger"></i> Phenolic Resin Adhesive Bond (Thermoset Hot-Pressed)
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Interactive Detail Box */}
              <div className="mt-3 p-3 bg-white rounded border shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="badge bg-danger text-white px-2 py-1">
                    <i className="bi bi-info-circle me-1"></i> {selectedLayer.role}
                  </span>
                  <span className="badge bg-light text-dark border">
                    <i className={`bi ${selectedLayer.grainIcon} me-1`}></i> {selectedLayer.grain}
                  </span>
                </div>
                <h5 className="h6 fw-bold mb-1 text-dark">{selectedLayer.name}</h5>
                <p className="small text-secondary mb-0">{selectedLayer.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
