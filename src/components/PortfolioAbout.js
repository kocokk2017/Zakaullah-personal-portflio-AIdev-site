class PortfolioAbout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupGlowEffect();
  }

  setupGlowEffect() {
    const cells = this.querySelectorAll('.bento-cell');
    cells.forEach(cell => {
      cell.addEventListener('mousemove', e => {
        const rect = cell.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cell.style.setProperty('--x', `${x}px`);
        cell.style.setProperty('--y', `${y}px`);
      });
    });
  }

  render() {
    this.innerHTML = `
      <section id="about" class="about-section-container">
        <!-- Section Header -->
        <div class="section-header animate-fade-in-up">
          <div class="header-indicator">
            <span class="pink-dot"></span>
            <span class="indicator-label">About Me</span>
          </div>
          <h2 class="section-title-large">Engineered for Business Conversion</h2>
        </div>

        <!-- Bento Grid Layout -->
        <div class="bento-grid animate-fade-in-up delay-1">
          
          <!-- Cell 1: Biography (Large) -->
          <div class="bento-cell cell-bio col-span-3 row-span-2">
            <div class="bento-cell-content">
              <h3 class="bento-cell-title">The Strategy</h3>
              <p class="about-lead-text">
                I translate complex technical requirements into fast, intuitive, and conversion-optimized websites.
              </p>
              <p class="about-bio-text">
                With over 15 years in technology and 8+ years of dedicated professional web development experience, I combine modern frameworks with advanced AI workflows. I help businesses scale by engineering fast WordPress themes, high-converting WooCommerce systems, Next.js web applications, and automated API integrations.
              </p>
              <p class="about-bio-text">
                My workflow is built for outcomes: writing clean, human-verified code that search crawlers love, ensuring mobile responsiveness down to 320px, and optimizing assets to load in under a second.
              </p>
            </div>
          </div>

          <!-- Cell 2: Fiverr Trust Badge (Medium) -->
          <div class="bento-cell cell-fiverr col-span-2">
            <div class="bento-cell-content">
              <div class="fiverr-header-row">
                <span class="fiverr-badge">Fiverr Top Rated</span>
                <span class="fiverr-stars">★ 5.0</span>
              </div>
              <div class="fiverr-metric-value">99%</div>
              <p class="fiverr-metric-desc">
                Successful on-time delivery rate over 5+ years of remote freelance work for clients worldwide.
              </p>
              <div class="bento-avatar-row">
                <div class="avatar-capsule">
                  <img src="/images/about_avatar.webp" alt="Zakaullah Smiling Avatar" class="bento-avatar-img" loading="lazy" />
                </div>
                <span class="avatar-row-caption">Trusted by 100+ businesses</span>
              </div>
            </div>
          </div>

          <!-- Cell 3: Metrics That Matter (Medium) -->
          <div class="bento-cell cell-stats col-span-2">
            <div class="bento-cell-content">
              <h3 class="bento-cell-title">Proven Numbers</h3>
              <div class="bento-stats-container">
                <div class="bento-stat-item">
                  <span class="bento-stat-num">250+</span>
                  <span class="bento-stat-lbl">Projects Completed</span>
                </div>
                <div class="bento-stat-item">
                  <span class="bento-stat-num">8+</span>
                  <span class="bento-stat-lbl">Years Web Experience</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Cell 4: AI Stack & Workflows (Medium) -->
          <div class="bento-cell cell-ai col-span-3">
            <div class="bento-cell-content">
              <h3 class="bento-cell-title">AI & Workflows</h3>
              <p class="bento-cell-desc">
                I leverage advanced AI engines (Cursor, Claude, OpenAI APIs) to accelerate layout generation, run code analysis, and build custom automation databases.
              </p>
              <div class="bento-tech-pills">
                <span class="bento-pill">n8n Portals</span>
                <span class="bento-pill">RAG Embeddings</span>
                <span class="bento-pill">OpenAI APIs</span>
                <span class="bento-pill">Cursor Flows</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-about', PortfolioAbout);
export default PortfolioAbout;
