class PortfolioAbout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="about" class="about-section-container">
        <!-- Section Title -->
        <div class="section-header animate-fade-in-up">
          <h2 class="section-title-large">Building More Than Websites</h2>
        </div>

        <!-- 2-Column Content Layout -->
        <div class="about-grid">
          
          <!-- Column 1: Biography -->
          <div class="about-col-intro animate-fade-in-up delay-1">
            <p class="about-lead-text">
              Instead of simply writing code, I create intelligent digital experiences that help businesses grow.
            </p>
            <p class="about-bio-text">
              With over 15 years in technology and years of professional web development experience, I combine AI-powered workflows with modern development practices to build websites that are fast, scalable, secure, and designed to convert visitors into customers.
            </p>
            <p class="about-bio-text">
              Whether it's WordPress, WooCommerce, custom frontend development, or AI-powered automation, every project is built with performance, usability, and long-term growth in mind.
            </p>
          </div>

          <!-- Column 2: Fiverr Rating Card -->
          <div class="about-col-card animate-fade-in-up delay-2">
            <div class="fiverr-stat-card">
              <div class="card-header-icon">
                <svg class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div class="card-percentage">99%</div>
              <p class="card-desc">
                Consistent 5-star delivery and top rating on Fiverr platform for over 5+ years.
              </p>
              <div class="card-image-wrapper">
                <img src="/images/about_avatar.png" alt="M. Zakaullah Smiling Avatar" class="card-avatar-img" />
              </div>
            </div>
          </div>
        </div>

        <!-- What Makes Me Different Grid -->
        <div class="diff-section-container animate-fade-in-up delay-3">
          <h3 class="diff-section-title">What Makes Me Different</h3>
          
          <div class="diff-grid">
            <!-- Item 1: AI-Assisted -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                  <path d="M9 22V12h6v10M2 9h20M2 15h20"></path>
                </svg>
              </div>
              <h4 class="diff-card-title">AI-Assisted Development</h4>
              <p class="diff-card-desc">I use cutting-edge AI tools to accelerate development while maintaining full human oversight, ensuring faster delivery without compromising quality.</p>
            </div>

            <!-- Item 2: Modern Frontend -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 class="diff-card-title">Modern Frontend</h4>
              <p class="diff-card-desc">Responsive, accessible, and lightning-fast interfaces built with today's leading technologies (Next.js, Astro, Tailwind CSS).</p>
            </div>

            <!-- Item 3: WordPress -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h4 class="diff-card-title">WordPress Expertise</h4>
              <p class="diff-card-desc">Custom WordPress solutions built for flexibility, performance, and easy management using Elementor, Divi, Kadence, and Gutenberg blocks.</p>
            </div>

            <!-- Item 4: Automation -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h4 class="diff-card-title">Smart Automation</h4>
              <p class="diff-card-desc">Reduce manual work by integrating AI, APIs, CRM platforms, and business automation workflows directly into your website.</p>
            </div>

            <!-- Item 5: Performance -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 class="diff-card-title">Performance Optimization</h4>
              <p class="diff-card-desc">Speed, SEO, Core Web Vitals, and user experience are optimized from day one to ensure Google ranking success.</p>
            </div>

            <!-- Item 6: Business Focus -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h4 class="diff-card-title">Business Focus</h4>
              <p class="diff-card-desc">Every feature is designed to improve customer experience, increase conversions, and support long-term business growth.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-about', PortfolioAbout);
export default PortfolioAbout;
