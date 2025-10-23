/**
 * Enhanced JavaScript functionality for the portfolio website
 * Includes theme toggle, mobile menu, animations, and performance optimizations
 */

// Theme management with enhanced features
class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || this.getSystemTheme();
    this.init();
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector('#theme-icon');
    if (themeIcon) {
      themeIcon.textContent = this.theme === 'dark' ? '○' : '●';
    }
  }

  init() {
    this.setTheme(this.theme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// Enhanced navigation management
class NavigationManager {
  constructor() {
    this.currentPath = window.location.pathname;
    this.init();
  }

  init() {
    this.highlightActiveLink();
    this.setupMobileMenu();
    this.setupSmoothScrolling();
  }

  highlightActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Don't add active class to home page
      if (href === '/' && this.currentPath === '/') {
        link.classList.remove('active');
      } else if (href === this.currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-content');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open', !isOpen);
        menuToggle.textContent = isOpen ? '☰' : '×';
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('open');
          menuToggle.textContent = '☰';
        }
      });
    }
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Enhanced animation manager
class AnimationManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupHoverEffects();
    this.setupPageTransitions();
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements that should animate
    document.querySelectorAll('.project-card, .blog-post, .section').forEach(el => {
      observer.observe(el);
    });
  }

  setupHoverEffects() {
    // Enhanced hover effects for interactive elements
    document.querySelectorAll('.project-card, .blog-post-link, .nav-link').forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-2px)';
        el.style.transition = 'transform 0.2s ease';
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0)';
      });
    });
  }

  setupPageTransitions() {
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Fade in effect for main content
    const mainContent = document.querySelector('.main');
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
      }, 100);
    }
  }
}

// Performance optimization
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    this.lazyLoadImages();
    this.optimizeScrollEvents();
    this.preloadCriticalResources();
  }

  lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  optimizeScrollEvents() {
    let ticking = false;

    const updateScrollPosition = () => {
      // Add any scroll-based functionality here
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  preloadCriticalResources() {
    // Preload critical CSS and fonts
    const criticalResources = [
      'css/styles.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'style';
      document.head.appendChild(link);
    });
  }
}

// Utility functions
class Utils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  static formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

// Error handling
class ErrorHandler {
  static init() {
    window.addEventListener('error', (event) => {
      console.error('JavaScript error:', event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize core functionality
  window.themeManager = new ThemeManager();
  const navigationManager = new NavigationManager();
  const animationManager = new AnimationManager();
  const performanceOptimizer = new PerformanceOptimizer();
  
  // Initialize components
  const navbar = new Navbar();
  const footer = new Footer();
  
  // Initialize error handling
  ErrorHandler.init();

  // Add loading states for better UX
  document.body.classList.add('loaded');
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ThemeManager,
    NavigationManager,
    Utils,
    AnimationManager,
    PerformanceOptimizer,
    ErrorHandler
  };
}
