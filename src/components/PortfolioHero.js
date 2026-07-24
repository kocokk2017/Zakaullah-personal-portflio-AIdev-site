class PortfolioHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero-container">
        <!-- Left Side: Vertical Banner -->
        <div class="hero-vertical-banner animate-fade-in">
          <span class="vertical-text">AI Powered Workflow</span>
          <div class="vertical-line"></div>
          <span class="vertical-year">Worldwide Remote</span>
        </div>

        <!-- Middle Column: Stats + Info -->
        <div class="hero-main-content">
          <!-- AI Badge -->
          <div class="hero-badge animate-fade-in-up">
            <span class="badge-rocket">🚀</span>
            <span class="badge-text-tag">AI-Powered Website Development • WordPress • Next.js • Automation</span>
          </div>

          <!-- Big Headline -->
          <div class="hero-title-wrapper animate-fade-in-up delay-1">
            <h1 class="hero-title">Building Intelligent Websites</h1>
          </div>

          <!-- Description Block -->
          <div class="hero-text-block animate-fade-in-up delay-2">
            <h2 class="hero-subtitle">Senior Web Developer delivering faster, smarter solutions with AI-powered workflows</h2>
            <p class="hero-description">
              I help businesses, startups, and entrepreneurs transform ideas into high-performing websites using the latest AI tools, WordPress, React, Next.js, and modern frontend technologies. By combining human expertise with AI-assisted development, I deliver faster turnaround times, cleaner code, and exceptional user experiences.
            </p>
          </div>

          <!-- Explore CTA Buttons -->
          <div class="hero-cta animate-fade-in-up delay-3">
            <a href="#contact" class="explore-work-link btn-primary-cta">
              <span>Start Your Project</span>
              <svg class="cta-arrow-icon" viewBox="0 0 24 24">
                <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#portfolio" class="explore-work-link btn-secondary-cta hover-underline">
              <span>View My Work</span>
            </a>
          </div>

          <!-- Stats Row -->
          <div class="hero-stats animate-fade-in-up delay-4">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Years in Technology</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">250+</span>
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Developer Portrait -->
        <div class="hero-image-container animate-scale-in delay-2">
          <div class="hero-image-wrapper">
            <img src="/images/developer.png" alt="M. Zakaullah Portrait" class="developer-img" />
            <div class="design-dot"></div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-hero', PortfolioHero);
export default PortfolioHero;
