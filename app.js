// Computer Applications Website JavaScript - Fixed Version

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initStatCounters();
    initSearchFunctionality();
    initContactForm();
    initScrollAnimations();
    initBootstrapComponents();
    
    // Fix navigation issues
    fixNavigationLinks();
});

// Fix navigation links that weren't working
function fixNavigationLinks() {
    // Fix all anchor links to scroll properly
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Ensure semester cards work
    document.querySelectorAll('.semester-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Fix semester navigation buttons
    document.querySelectorAll('.semester-navigation a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Navigation functionality
function initNavigation() {
    // Update active nav item on scroll
    window.addEventListener('scroll', updateActiveNavItem);
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 253, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--color-surface)';
            navbar.style.backdropFilter = 'none';
        }
    });
}

function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Animated statistics counters
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const start = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            element.textContent = current;
            element.classList.add('counting');
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target;
            }
        };
        
        requestAnimationFrame(animate);
    };

    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                animateCounter(entry.target);
                entry.target.setAttribute('data-animated', 'true');
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Search functionality - Fixed version
function initSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (!searchInput || !searchBtn) return;

    // Search courses and content
    const performSearch = () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length < 2) {
            clearSearchHighlights();
            showSearchMessage('Please enter at least 2 characters to search.');
            return;
        }

        clearSearchHighlights();
        const matchCount = highlightSearchResults(query);
        
        if (matchCount > 0) {
            // Find first match and scroll to it
            const firstMatch = document.querySelector('.search-highlight');
            if (firstMatch) {
                const section = firstMatch.closest('section');
                if (section) {
                    // Expand collapsed content if needed
                    const collapseParent = firstMatch.closest('.collapse');
                    if (collapseParent && !collapseParent.classList.contains('show')) {
                        const toggle = document.querySelector(`[data-bs-target="#${collapseParent.id}"]`);
                        if (toggle) {
                            toggle.click();
                        }
                    }
                    
                    // Expand accordion if needed
                    const accordionParent = firstMatch.closest('.accordion-collapse');
                    if (accordionParent && !accordionParent.classList.contains('show')) {
                        const toggle = document.querySelector(`[data-bs-target="#${accordionParent.id}"]`);
                        if (toggle) {
                            toggle.click();
                        }
                    }

                    // Wait a moment for animations, then scroll
                    setTimeout(() => {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }
            showSearchMessage(`Found ${matchCount} matches for: "${query}"`);
        } else {
            showSearchMessage('No results found for: "' + query + '"');
        }
    };

    const highlightSearchResults = (query) => {
        const searchableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, .course-title h5, .semester-title');
        let matchCount = 0;

        searchableElements.forEach(element => {
            const text = element.textContent;
            if (text.toLowerCase().includes(query)) {
                const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
                element.innerHTML = text.replace(regex, '<span class="search-highlight">$1</span>');
                matchCount++;
            }
        });

        return matchCount;
    };

    const clearSearchHighlights = () => {
        const highlights = document.querySelectorAll('.search-highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize();
        });
        hideSearchMessage();
    };

    const showSearchMessage = (message) => {
        let messageEl = document.getElementById('searchMessage');
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.id = 'searchMessage';
            messageEl.className = 'alert alert-info position-fixed';
            messageEl.style.cssText = 'top: 80px; right: 20px; z-index: 1050; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
            document.body.appendChild(messageEl);
        }
        messageEl.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${message}</span>
                <button type="button" class="btn-close btn-close-white" onclick="this.parentElement.parentElement.style.display='none'"></button>
            </div>
        `;
        messageEl.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            hideSearchMessage();
        }, 5000);
    };

    const hideSearchMessage = () => {
        const messageEl = document.getElementById('searchMessage');
        if (messageEl) {
            messageEl.style.display = 'none';
        }
    };

    const escapeRegex = (string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    // Event listeners
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
    
    // Clear highlights when input is cleared
    searchInput.addEventListener('input', (e) => {
        if (e.target.value.length === 0) {
            clearSearchHighlights();
        }
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        if (formData.message.length < 10) {
            showFormMessage('Message must be at least 10 characters long.', 'error');
            return;
        }

        // Simulate form submission
        simulateFormSubmission(formData);
    });

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const simulateFormSubmission = (data) => {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showFormMessage('Thank you for your message! We will get back to you within 24 hours.', 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    };

    const showFormMessage = (message, type) => {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageEl = document.createElement('div');
        messageEl.className = `alert alert-${type === 'error' ? 'danger' : 'success'} form-message`;
        messageEl.innerHTML = `<i class="bi bi-${type === 'error' ? 'exclamation-triangle' : 'check-circle'}"></i> ${message}`;
        
        // Insert before form
        contactForm.parentNode.insertBefore(messageEl, contactForm);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
        
        // Scroll to message
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate course cards on scroll
    const animatedElements = document.querySelectorAll('.course-card, .feature-card, .career-card, .semester-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Bootstrap components initialization
function initBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Course details collapse handlers
    const courseDetailButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    courseDetailButtons.forEach(button => {
        const targetId = button.getAttribute('data-bs-target');
        const target = document.querySelector(targetId);
        if (target) {
            target.addEventListener('show.bs.collapse', function () {
                const icon = button.querySelector('i');
                if (icon && icon.classList.contains('bi-chevron-down')) {
                    icon.classList.remove('bi-chevron-down');
                    icon.classList.add('bi-chevron-up');
                }
                button.innerHTML = button.innerHTML.replace('View Details', 'Hide Details');
            });

            target.addEventListener('hide.bs.collapse', function () {
                const icon = button.querySelector('i');
                if (icon && icon.classList.contains('bi-chevron-up')) {
                    icon.classList.remove('bi-chevron-up');
                    icon.classList.add('bi-chevron-down');
                }
                button.innerHTML = button.innerHTML.replace('Hide Details', 'View Details');
            });
        }
    });
}

// Utility functions
function downloadSyllabus(semester) {
    showNotification(`Preparing Semester ${semester} syllabus for download...`, 'info');
    
    // Simulate download preparation
    setTimeout(() => {
        showNotification('Download functionality will be available soon. Please contact the department for syllabus copies.', 'warning');
    }, 1000);
}

function shareSemester(semester) {
    // Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: `Semester ${semester} - Computer Applications - GDC Beerwah`,
            text: `Check out the Computer Applications Semester ${semester} syllabus at Government Degree College Beerwah`,
            url: window.location.href + '#semester' + semester
        });
    } else {
        // Fallback - copy to clipboard
        const url = window.location.href + '#semester' + semester;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Semester link copied to clipboard!', 'success');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = url;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Semester link copied to clipboard!', 'success');
        }
    }
}

function printSemester(semester) {
    // Create a new window with just the semester content for printing
    const semesterSection = document.querySelector(`#semester${semester}`);
    if (semesterSection) {
        const printWindow = window.open('', '_blank');
        const content = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Semester ${semester} - Computer Applications - GDC Beerwah</title>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                    h1, h2, h3, h4, h5, h6 { color: #333; margin-bottom: 10px; }
                    .course-card { border: 2px solid #ddd; margin: 20px 0; padding: 15px; page-break-inside: avoid; }
                    .card-header { background: #f5f5f5; padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd; margin-bottom: 10px; }
                    .badge { background: #007bff; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.8em; }
                    .collapse { display: block !important; height: auto !important; }
                    .btn { display: none !important; }
                    ul { margin: 10px 0; padding-left: 20px; }
                    .accordion-item { border: 1px solid #ddd; margin: 5px 0; }
                    .accordion-header { background: #f8f9fa; padding: 10px; font-weight: bold; }
                    .accordion-body { padding: 10px; }
                    @media print { 
                        body { margin: 15px; } 
                        .course-card { page-break-inside: avoid; }
                    }
                </style>
            </head>
            <body>
                <h1>Government Degree College Beerwah</h1>
                <h2>Department of Computer Applications</h2>
                <h3>Bachelor of Computer Applications (BCA) Program</h3>
                <hr>
                ${semesterSection.innerHTML}
                <hr>
                <p><small>Generated on: ${new Date().toLocaleDateString()}</small></p>
            </body>
            </html>
        `;
        printWindow.document.write(content);
        printWindow.document.close();
        
        // Wait for content to load, then print
        printWindow.onload = function() {
            printWindow.print();
        };
        
        showNotification(`Semester ${semester} opened in new window for printing`, 'success');
    } else {
        showNotification('Semester content not found', 'error');
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 1060; min-width: 300px; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
    notification.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <span><i class="bi bi-${type === 'error' ? 'exclamation-triangle' : type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i> ${message}</span>
            <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto-remove after 4 seconds
    const timer = setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);

    // Manual close
    notification.querySelector('.btn-close').addEventListener('click', () => {
        clearTimeout(timer);
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    });
}

// Keyboard navigation enhancements
document.addEventListener('keydown', function(e) {
    // ESC to close search highlights
    if (e.key === 'Escape') {
        const highlights = document.querySelectorAll('.search-highlight');
        if (highlights.length > 0) {
            clearSearchHighlights();
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
});

// Clear search highlights function (for external use)
function clearSearchHighlights() {
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
        const parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
    
    const messageEl = document.getElementById('searchMessage');
    if (messageEl) {
        messageEl.style.display = 'none';
    }
}

// Export functions for global access
window.downloadSyllabus = downloadSyllabus;
window.shareSemester = shareSemester;
window.printSemester = printSemester;
window.clearSearchHighlights = clearSearchHighlights;
