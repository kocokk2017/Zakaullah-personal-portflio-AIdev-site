class PortfolioProcess extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="process" class="process-section-container">
        <!-- Section Header -->
        <div class="process-header animate-fade-in-up">
          <div class="process-header-left">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">My Process</span>
            </div>
            <h2 class="process-title">How We<br/>Collaborate</h2>
          </div>
          
          <div class="process-header-right">
            <p class="process-header-desc">
              A structured, step-by-step methodology built to ensure high-quality software, fast deliveries, and transparent collaboration from initial discussion to launch.
            </p>
          </div>
        </div>

        <!-- Process Grid -->
        <div class="process-grid animate-fade-in-up delay-1">
          <!-- Step 1 -->
          <div class="process-step-card">
            <div class="step-num-badge">01</div>
            <h3 class="step-card-title">Discover</h3>
            <p class="step-card-desc">
              Understand your business model, target audience, core technical requirements, and key conversion metrics.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="process-step-card">
            <div class="step-num-badge">02</div>
            <h3 class="step-card-title">Plan</h3>
            <p class="step-card-desc">
              Define the visual structure, layout blueprints, chosen technologies (WordPress vs Next.js), and SEO mapping.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="process-step-card">
            <div class="step-num-badge">03</div>
            <h3 class="step-card-title">Design & Build</h3>
            <p class="step-card-desc">
              Create the high-fidelity UI and engineer clean, modular logic optimized for search crawlers and load speeds.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="process-step-card">
            <div class="step-num-badge">04</div>
            <h3 class="step-card-title">Test & Optimize</h3>
            <p class="step-card-desc">
              Conduct device tests, check accessibility landmarks, and optimize caching, code bundles, and layout shifts.
            </p>
          </div>

          <!-- Step 5 -->
          <div class="process-step-card">
            <div class="step-num-badge">05</div>
            <h3 class="step-card-title">Launch & Support</h3>
            <p class="step-card-desc">
              Deploy to secure production servers (Vercel, Cloudflare, VPS), transfer site ownership, and offer maintenance support.
            </p>
          </div>
        </div>

        <!-- Process CTA Row -->
        <div class="process-cta-banner animate-fade-in-up delay-2">
          <p class="process-cta-text">Have a project timeline in mind? Let's discuss it today.</p>
          <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20timeline%20and%20consultation." 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn-primary-cta">
            <span>Get a Free Consultation</span>
            <svg class="cta-arrow-icon" viewBox="0 0 24 24">
              <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-process', PortfolioProcess);
export default PortfolioProcess;
