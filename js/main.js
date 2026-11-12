/**
 * Newtech Ply & Boards - Modern Frontend Script
 * Quality, Accessibility & Mobile Optimization
 */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // 1. Sticky Navigation
    const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 40) {
                navbar.classList.add('sticky-active');
            } else {
                navbar.classList.remove('sticky-active');
            }
        }, { passive: true });
    }

    // 2. Mobile Nav auto-close on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && typeof bootstrap !== 'undefined') {
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // 3. Interactive Plywood Cross-Lamination Diagram
    const toggleLayersBtn = document.getElementById('toggleLayersBtn');
    const layerStack = document.getElementById('layerStack');
    const layerInfoBox = document.getElementById('layerInfoBox');

    const layerDetails = {
        'face-top': {
            title: 'Top Face Veneer (A-Grade Hardwood)',
            desc: 'Smooth, knot-free selected face veneer providing a flawless surface for decorative laminates, veneers, polishing, or direct painting. Grain runs longitudinally.'
        },
        'cross-1': {
            title: 'Crossband Core Layer 1 (90° Orientation)',
            desc: 'Veneer grain runs perpendicularly (90°) to the face veneer. This cross-orientation counteracts longitudinal wood movement, distributing bending stresses and eliminating warping.'
        },
        'center-core': {
            title: 'Center Core Veneer (Longitudinal Core)',
            desc: 'Dense hardwood center ply running parallel to the face. Absorbs core impact and acts as the structural neutral axis of the board.'
        },
        'cross-2': {
            title: 'Crossband Core Layer 2 (90° Orientation)',
            desc: 'Second perpendicular veneer balancing internal drying and moisture tensions symmetrically across the board thickness.'
        },
        'face-back': {
            title: 'Bottom Back Veneer (Balancing Face)',
            desc: 'Equal-species balancing face veneer running longitudinally to prevent asymmetric cupping and bowing under environmental humidity changes.'
        }
    };

    if (toggleLayersBtn && layerStack) {
        toggleLayersBtn.addEventListener('click', function () {
            const isExpanded = layerStack.classList.toggle('expanded');
            toggleLayersBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            toggleLayersBtn.innerHTML = isExpanded 
                ? '<i class="bi bi-arrows-collapse me-2"></i>Collapse Plywood Stack' 
                : '<i class="bi bi-arrows-expand me-2"></i>Separate Layers (Cross-Lamination View)';
        });

        // Layer click/interaction
        const layers = layerStack.querySelectorAll('.ply-layer');
        layers.forEach(function (layer) {
            layer.addEventListener('click', function () {
                layers.forEach(l => l.style.borderColor = '');
                this.style.borderColor = 'var(--primary)';
                const key = this.getAttribute('data-layer');
                if (key && layerDetails[key] && layerInfoBox) {
                    layerInfoBox.innerHTML = `
                        <div class="alert alert-light border border-danger p-3 rounded mb-0">
                            <h6 class="text-danger fw-bold mb-1"><i class="bi bi-info-circle me-2"></i>${layerDetails[key].title}</h6>
                            <p class="small text-muted mb-0">${layerDetails[key].desc}</p>
                        </div>
                    `;
                }
            });
        });
    }

    // 4. Product Pre-Selection & Quote Jump
    function checkUrlProductParam() {
        const params = new URLSearchParams(window.location.search);
        const productParam = params.get('product');
        const select = document.getElementById('quoteProduct');
        if (productParam && select) {
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value.toLowerCase().includes(productParam.toLowerCase()) || 
                    select.options[i].text.toLowerCase().includes(productParam.toLowerCase())) {
                    select.selectedIndex = i;
                    break;
                }
            }
        }
    }
    checkUrlProductParam();

    // Event delegation for "Request Quote" / "Enquire" buttons with data-product
    document.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-select-product]');
        if (btn) {
            const prodName = btn.getAttribute('data-select-product');
            const select = document.getElementById('quoteProduct');
            if (select && prodName) {
                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].value.toLowerCase() === prodName.toLowerCase() ||
                        select.options[i].text.toLowerCase().includes(prodName.toLowerCase())) {
                        select.selectedIndex = i;
                        break;
                    }
                }
                const quoteSec = document.getElementById('quote') || document.getElementById('contact-form');
                if (quoteSec) {
                    quoteSec.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });

    // 5. Working Enquiry Form Validation & Submission
    const quoteForm = document.getElementById('enquiryForm');
    const formFeedback = document.getElementById('formFeedback');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('quoteName');
            const phoneInput = document.getElementById('quotePhone');
            const emailInput = document.getElementById('quoteEmail');
            const productSelect = document.getElementById('quoteProduct');
            const messageInput = document.getElementById('quoteMessage');
            const quantityInput = document.getElementById('quoteQuantity');
            const submitBtn = quoteForm.querySelector('button[type="submit"]');

            // Simple validation
            let isValid = true;
            let errorMsg = '';

            if (!nameInput.value.trim()) {
                isValid = false;
                errorMsg = 'Please enter your name.';
                nameInput.focus();
            } else if (!phoneInput.value.trim() && !emailInput.value.trim()) {
                isValid = false;
                errorMsg = 'Please provide either a phone number or email address.';
                phoneInput.focus();
            } else if (phoneInput.value.trim() && !/^[0-9+\s\-()]{7,16}$/.test(phoneInput.value.trim())) {
                isValid = false;
                errorMsg = 'Please enter a valid phone number with 7-15 digits.';
                phoneInput.focus();
            } else if (!messageInput.value.trim()) {
                isValid = false;
                errorMsg = 'Please enter your project requirements or question.';
                messageInput.focus();
            }

            if (!isValid) {
                if (formFeedback) {
                    formFeedback.className = 'form-feedback error';
                    formFeedback.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i>${errorMsg}`;
                    formFeedback.style.display = 'block';
                }
                return;
            }

            // Show loading state
            const origText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing...';

            const payload = {
                name: nameInput.value.trim(),
                phone: phoneInput.value.trim(),
                email: emailInput ? emailInput.value.trim() : '',
                product: productSelect ? productSelect.value : 'General Enquiry',
                quantity: quantityInput ? quantityInput.value.trim() : '',
                message: messageInput.value.trim(),
                submittedAt: new Date().toISOString()
            };

            // Store in localStorage so quote details are never lost
            try {
                const existing = JSON.parse(localStorage.getItem('newply_quotes') || '[]');
                existing.push(payload);
                localStorage.setItem('newply_quotes', JSON.stringify(existing));
            } catch (err) {
                console.warn('LocalStorage unavailable', err);
            }

            // Build prefilled WhatsApp fallback link
            const waText = encodeURIComponent(
                `Hello Newtech Ply & Boards,\n\nI submitted an enquiry:\n` +
                `• Name: ${payload.name}\n` +
                `• Phone: ${payload.phone}\n` +
                `• Product: ${payload.product}\n` +
                (payload.quantity ? `• Quantity: ${payload.quantity}\n` : '') +
                `• Requirement: ${payload.message}`
            );
            const waUrl = `https://wa.me/919526029853?text=${waText}`;

            setTimeout(function () {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origText;
                quoteForm.reset();

                if (formFeedback) {
                    formFeedback.className = 'form-feedback success';
                    formFeedback.innerHTML = `
                        <div class="d-flex align-items-start gap-2">
                            <i class="bi bi-check-circle-fill text-success fs-4"></i>
                            <div>
                                <h6 class="fw-bold mb-1 text-success">Enquiry Received Successfully!</h6>
                                <p class="mb-2">Thank you, ${payload.name}. Our technical sales team will review your specifications and contact you shortly.</p>
                                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp mt-1">
                                    <i class="bi bi-whatsapp me-1"></i> Send Copy via WhatsApp for Faster Quote
                                </a>
                            </div>
                        </div>
                    `;
                    formFeedback.style.display = 'block';
                }
            }, 600);
        });
    }

    // 6. Smooth Scroll for internal hash links with offset
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 7. Interactive Plywood Comparison Table Filter
    const filterBtns = document.querySelectorAll('.table-filter-btn');
    const tableRows = document.querySelectorAll('.comparison-table tbody tr[data-category]');

    if (filterBtns.length && tableRows.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                tableRows.forEach(row => {
                    const category = row.getAttribute('data-category') || '';
                    if (filter === 'all' || category.includes(filter)) {
                        row.style.display = '';
                        row.style.opacity = '0';
                        setTimeout(() => {
                            row.style.transition = 'opacity 0.25s ease';
                            row.style.opacity = '1';
                        }, 10);
                    } else {
                        row.style.display = 'none';
                    }
                });
            });
        });
    }

});
