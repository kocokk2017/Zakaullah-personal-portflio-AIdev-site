class PortfolioHero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero-container" aria-labelledby="hero-title">

        <!-- Editorial Side Label -->
        <aside class="hero-vertical-banner animate-fade-in" aria-hidden="true">
          <span class="vertical-text">WEB • AI • FULL-STACK</span>
          <div class="vertical-line"></div>
          <span class="vertical-year">REMOTE · WORLDWIDE</span>
        </aside>

        <!-- Main Content -->
        <div class="hero-main-content">

          <!-- Eyebrow -->
          <div class="hero-badge animate-fade-in-up">
            <span class="badge-text-tag">
              WORDPRESS · NEXT.JS · AI · FULL-STACK
            </span>
          </div>

          <!-- Main Headline -->
          <div class="hero-title-wrapper animate-fade-in-up delay-1">
            <h1 id="hero-title" class="hero-title">
              I Build High-Performance Websites & 
              <span class="hero-title-accent">AI-Powered Digital Experiences.</span>
            </h1>
          </div>

          <!-- Supporting Copy -->
          <div class="hero-text-block animate-fade-in-up delay-2">

            <h2 class="hero-subtitle">
              Modern development focused on performance, user experience and business growth.
            </h2>

            <p class="hero-description">
              I help businesses, startups and agencies turn ideas, outdated websites
              and complex requirements into fast, modern and conversion-focused
              digital experiences — from WordPress and WooCommerce to Next.js,
              full-stack applications and AI integrations.
            </p>

          </div>

          <!-- CTA -->
          <div class="hero-cta animate-fade-in-up delay-3">

            <a
              href="https://wa.me/923151800869?text=Hi%20ZakaUllah%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              class="explore-work-link btn-primary-cta"
              aria-label="Discuss your project on WhatsApp"
            >
              <span>Let's Discuss Your Project</span>

              <svg
                class="cta-arrow-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M5 19L19 5M19 5H9M19 5V15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a
              href="#portfolio"
              class="explore-work-link btn-secondary-cta hover-underline"
            >
              <span>View My Work</span>
            </a>

          </div>

          <!-- Micro Trust -->
          <div class="hero-trust-line animate-fade-in-up delay-3">
            <span>Available for freelance projects</span>
            <span class="trust-separator">•</span>
            <span>Remote worldwide</span>
            <span class="trust-separator">•</span>
            <a href="#contact">Let's build something great</a>
          </div>

          <!-- Stats -->
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
              <span class="stat-number">Top Rated</span>
              <span class="stat-label">Fiverr Seller</span>
            </div>

          </div>

        </div>

        <!-- Portrait -->
        <div class="hero-image-container animate-scale-in delay-2">

          <div class="hero-image-wrapper">

            <img
              src="/images/developer.webp"
              alt="M. Zakaullah — Web Developer and AI-focused Full-Stack Engineer"
              class="developer-img"
              width="700"
              height="850"
              fetchpriority="high"
              decoding="async"
            />

            <div class="design-dot" aria-hidden="true"></div>

            <div class="hero-availability">
              <span class="availability-dot"></span>
              <span>Available for projects</span>
            </div>

          </div>

        </div>

      </section>
    `;
  }
}

customElements.define('portfolio-hero', PortfolioHero);

export default PortfolioHero;