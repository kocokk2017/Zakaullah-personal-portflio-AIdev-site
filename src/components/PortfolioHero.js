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
          <span class="vertical-text">AI & Web Engineering</span>
          <div class="vertical-line"></div>
          <span class="vertical-year">Remote Worldwide</span>
        </div>

        <!-- Middle Column: Stats + Info -->
        <div class="hero-main-content">
          <!-- AI Badge -->
          <div class="hero-badge animate-fade-in-up">
            <span class="badge-rocket">⚡</span>
            <span class="badge-text-tag">WordPress • Next.js • AI Integrations • Full-Stack Development</span>
          </div>

          <!-- Big Headline -->
          <div class="hero-title-wrapper animate-fade-in-up delay-1">
            <h1 class="hero-title">Building Websites That Drive Real Business Growth</h1>
          </div>

          <!-- Description Block -->
          <div class="hero-text-block animate-fade-in-up delay-2">
            <h2 class="hero-subtitle">Senior Developer delivering fast, secure, and conversion-optimized web applications.</h2>
            <p class="hero-description">
              I help businesses, agencies, and startups transform ideas into high-performing digital platforms. By combining expert custom development in WordPress and Next.js with advanced AI-accelerated workflows, I deliver clean, production-ready code with faster turnaround times, optimized Core Web Vitals, and premium user experiences.
            </p>
          </div>

          <!-- Explore CTA Buttons -->
          <div class="hero-cta animate-fade-in-up delay-3">
            <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20website%20project%20with%20you." 
               target="_blank" 
               rel="noopener noreferrer" 
               class="explore-work-link btn-primary-cta">
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
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">99%</span>
              <span class="stat-label">Fiverr Top Rating</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Developer Portrait -->
        <div class="hero-image-container animate-scale-in delay-2">
          <div class="hero-image-wrapper">
            <img src="/images/developer.webp" alt="M. Zakaullah Portrait" class="developer-img" fetchpriority="high" />
            <div class="design-dot"></div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-hero', PortfolioHero);
export default PortfolioHero;
