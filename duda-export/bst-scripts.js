/* ========================================
   BEALE STREET THEATER - DUDA SCRIPTS
   Vanilla JavaScript for Interactive Elements
   ======================================== */

// ─── Mobile Navigation Toggle ─────────────────────
function initBSTNavigation() {
  const mobileToggle = document.querySelector('.bst-mobile-toggle');
  const mobileMenu = document.querySelector('.bst-mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Toggle icon (if using SVG or icon fonts)
      const icon = this.querySelector('svg') || this.querySelector('i');
      if (icon) {
        icon.classList.toggle('open');
      }
    });
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('.bst-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  }
}

// ─── Active Navigation Link Highlighting ──────────
function initActiveNavLinks() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.bst-nav-link');
  
  navLinks.forEach(link => {
    // Remove 'active' class from all links
    link.classList.remove('active');
    
    // Add 'active' class to current page link
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── Smooth Scroll for Anchor Links ───────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (targetId === '#') {
        e.preventDefault();
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const navbarHeight = document.querySelector('.bst-navbar')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ─── Card Hover Effects (Enhanced) ────────────────
function initCardHoverEffects() {
  const cards = document.querySelectorAll('.bst-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(4px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
}

// ─── Lazy Load Images ─────────────────────────────
function initLazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ─── Show Card Click Handler ──────────────────────
function initShowCardClicks() {
  const showCards = document.querySelectorAll('.bst-show-card');
  
  showCards.forEach(card => {
    card.addEventListener('click', function() {
      const ticketUrl = this.dataset.ticketUrl;
      if (ticketUrl) {
        window.open(ticketUrl, '_blank');
      }
    });
    
    // Add pointer cursor
    if (card.dataset.ticketUrl) {
      card.style.cursor = 'pointer';
    }
  });
}

// ─── Newsletter Form Handler ──────────────────────
function initNewsletterForm() {
  const form = document.querySelector('.bst-newsletter-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const submitBtn = this.querySelector('button[type="submit"]');
      const email = emailInput?.value;
      
      if (!email) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Show loading state
      if (submitBtn) {
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
      }
      
      // Here you would integrate with your email service
      // For Duda, you might use their form submission API
      console.log('Newsletter signup:', email);
      
      // Simulate success
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.textContent = 'Subscribed!';
          submitBtn.style.backgroundColor = '#14b8a6';
        }
        if (emailInput) {
          emailInput.value = '';
        }
        
        // Reset after 2 seconds
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.textContent = 'Subscribe';
            submitBtn.disabled = false;
          }
        }, 2000);
      }, 1000);
    });
  }
}

// ─── Event Calendar Filter ────────────────────────
function initEventCalendarFilter() {
  const filterButtons = document.querySelectorAll('.bst-calendar-filter-btn');
  const eventCards = document.querySelectorAll('.bst-event-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterCategory = this.dataset.category;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter events
      eventCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ─── Scroll Reveal Animation ──────────────────────
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.bst-reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
}

// ─── Sticky Navbar on Scroll ──────────────────────
function initStickyNavbar() {
  const navbar = document.querySelector('.bst-navbar');
  let lastScrollTop = 0;
  
  if (!navbar) return;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  });
}

// ─── Initialize All Functions ─────────────────────
function initBST() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      runInitializers();
    });
  } else {
    runInitializers();
  }
}

function runInitializers() {
  initBSTNavigation();
  initActiveNavLinks();
  initSmoothScroll();
  initCardHoverEffects();
  initLazyLoadImages();
  initShowCardClicks();
  initNewsletterForm();
  initEventCalendarFilter();
  initScrollReveal();
  initStickyNavbar();
  
  console.log('BST Theme initialized successfully! 🎭');
}

// ─── Auto-Initialize ──────────────────────────────
initBST();

// ─── Export for Manual Initialization ─────────────
window.BST = {
  init: initBST,
  navigation: initBSTNavigation,
  activeLinks: initActiveNavLinks,
  smoothScroll: initSmoothScroll,
  cardHovers: initCardHoverEffects,
  lazyLoad: initLazyLoadImages,
  showCards: initShowCardClicks,
  newsletter: initNewsletterForm,
  calendarFilter: initEventCalendarFilter,
  scrollReveal: initScrollReveal,
  stickyNav: initStickyNavbar
};
