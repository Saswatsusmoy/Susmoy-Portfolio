/**
 * Reusable components for navbar and footer
 */

// Navbar component
class Navbar {
  constructor() {
    this.currentPath = window.location.pathname;
    this.init();
  }

  init() {
    this.createNavbar();
    this.setupThemeToggle();
    this.setupMobileMenu();
    this.highlightActiveLink();
  }

  createNavbar() {
    const header = document.querySelector('.header');
    if (!header) return;

    const headerContent = header.querySelector('.header-content');
    if (!headerContent) return;

    // Clear existing content
    headerContent.innerHTML = '';

    // Create logo
    const logo = document.createElement('a');
    logo.href = this.getBasePath() + '/';
    logo.className = 'logo';
    logo.innerHTML = `
      <span class="logo-symbol">$</span>
      <span class="logo-text">saswatsusmoy</span>
    `;

    // Create mobile menu toggle
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-toggle';
    mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
    mobileToggle.innerHTML = '☰';

    // Create navigation
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = `
      <a href="${this.getBasePath()}/" class="nav-link">home</a>
      <a href="${this.getBasePath()}/projects.html" class="nav-link">projects</a>
      <a href="${this.getBasePath()}/blogs.html" class="nav-link">journal</a>
    `;

    // Create theme toggle
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.innerHTML = '<span id="theme-icon">○</span>';

    // Create mobile menu container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
      <div class="mobile-menu-content">
        <a href="${this.getBasePath()}/" class="mobile-nav-link">home</a>
        <a href="${this.getBasePath()}/projects.html" class="mobile-nav-link">projects</a>
        <a href="${this.getBasePath()}/blogs.html" class="mobile-nav-link">journal</a>
      </div>
    `;

    // Assemble header
    headerContent.appendChild(logo);
    headerContent.appendChild(nav);
    headerContent.appendChild(themeToggle);
    headerContent.appendChild(mobileToggle);
    header.appendChild(mobileMenu);
  }

  getBasePath() {
    // Determine base path based on current location
    if (window.location.pathname.includes('/blogs/')) {
      return '..';
    }
    return '';
  }

  setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open', !isOpen);
        mobileToggle.classList.toggle('open', !isOpen);
        mobileToggle.innerHTML = isOpen ? '☰' : '×';
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.remove('open');
          mobileToggle.classList.remove('open');
          mobileToggle.innerHTML = '☰';
        }
      });

      // Close menu when clicking on a link
      const mobileLinks = document.querySelectorAll('.mobile-nav-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          mobileToggle.classList.remove('open');
          mobileToggle.innerHTML = '☰';
        });
      });
    }
  }

  highlightActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Don't add active class to home page
      if (href === this.getBasePath() + '/' && this.currentPath === '/') {
        link.classList.remove('active');
      } else if (href === this.currentPath || 
                 (href === this.getBasePath() + '/projects.html' && this.currentPath.includes('projects')) ||
                 (href === this.getBasePath() + '/blogs.html' && this.currentPath.includes('blogs'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        if (window.themeManager) {
          window.themeManager.toggleTheme();
        }
      });
    }
  }
}

// Footer component
class Footer {
  constructor() {
    this.init();
  }

  init() {
    this.createFooter();
  }

  createFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const container = footer.querySelector('.container');
    if (!container) return;

    // Clear existing content
    container.innerHTML = '';

    const footerContent = document.createElement('div');
    footerContent.className = 'footer-content';
    footerContent.innerHTML = `
      <div class="footer-links">
        <a href="https://github.com/Saswatsusmoy" target="_blank" rel="noopener noreferrer">github</a>
        <a href="https://www.linkedin.com/in/saswat-susmoy-sahoo/" target="_blank" rel="noopener noreferrer">linkedin</a>
        <a href="mailto:tech@saswatsusmoy.in">email</a>
        <a href="https://x.com/SusmoySaswat" target="_blank" rel="noopener noreferrer">x</a>
      </div>
      <div class="footer-info">
        <p>© 2025 Saswat Susmoy Sahoo</p>
      </div>
    `;

    container.appendChild(footerContent);
  }
}

// Export components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Navbar, Footer };
}
