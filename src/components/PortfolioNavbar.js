class PortfolioNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupThemeToggle();
    this.setupActiveLinks();
  }

  render() {
    const isDark = document.body.classList.contains('dark-theme');
    
    this.innerHTML = `
      <header class="navbar-container animate-fade-in">
        <div class="navbar-left">
          <a href="#" class="brand-link">
            <div class="avatar-wrapper">
              <img src="/images/avatar.webp" alt="M. Zakaullah Avatar" class="navbar-avatar" />
            </div>
            <span class="brand-name">M.Zakaullah</span>
          </a>
        </div>
        
        <nav class="navbar-center">
          <ul class="nav-links">
            <li><a href="#about" class="nav-link hover-underline">About</a></li>
            <li><a href="#services" class="nav-link hover-underline">Services</a></li>
            <li><a href="#portfolio" class="nav-link hover-underline">Work</a></li>
            <li><a href="#process" class="nav-link hover-underline">Process</a></li>
            <li><a href="#faq" class="nav-link hover-underline">FAQ</a></li>
          </ul>
        </nav>
        
        <div class="navbar-right">
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle Theme">
            <svg class="sun-icon" style="display: ${isDark ? 'block' : 'none'};" viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
            <svg class="moon-icon" style="display: ${isDark ? 'none' : 'block'};" viewBox="0 0 24 24">
              <path d="M12.3 22c5.36 0 9.7-4.34 9.7-9.7 0-2.94-1.31-5.58-3.38-7.4-.33-.29-.81-.22-1.05.15-.84 1.29-2.31 2.15-3.97 2.15-2.65 0-4.8-2.15-4.8-4.8 0-1.66.86-3.13 2.15-3.98.37-.24.44-.72.15-1.05C9.58 1.3 6.94 2 4 4 1.66 6.3 1 9.58 1 12.3c0 5.36 4.34 9.7 9.7 9.7z"/>
            </svg>
            <span class="theme-text">${isDark ? 'Light' : 'Dark'}</span>
          </button>
          
          <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noopener noreferrer" class="book-call-link">
            <span>Start Project</span>
            <svg class="arrow-icon" viewBox="0 0 24 24">
              <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    `;
  }

  setupThemeToggle() {
    const btn = this.querySelector('#theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Update UI elements
      const sunIcon = this.querySelector('.sun-icon');
      const moonIcon = this.querySelector('.moon-icon');
      const themeText = this.querySelector('.theme-text');
      
      if (isDark) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        themeText.textContent = 'Light';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        themeText.textContent = 'Dark';
      }
    });
  }

  setupActiveLinks() {
    const links = this.querySelectorAll('.nav-link');
    const mobileBtn = this.querySelector('.mobile-menu-toggle');
    const nav = this.querySelector('.navbar-center');
    
    // Toggle active link
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu on click
        if (nav.classList.contains('mobile-active')) {
          nav.classList.remove('mobile-active');
          mobileBtn.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Mobile menu toggle click listener
    if (mobileBtn && nav) {
      mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        nav.classList.toggle('mobile-active');
        const isActive = nav.classList.contains('mobile-active');
        document.body.style.overflow = isActive ? 'hidden' : '';
      });
    }
  }
}

customElements.define('portfolio-navbar', PortfolioNavbar);
export default PortfolioNavbar;
