class PortfolioTech extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupTabs();
  }

  render() {
    this.innerHTML = `
      <section id="tech-stack" class="tech-section-container">
        <!-- Section Header -->
        <div class="tech-header animate-fade-in-up">
          <div class="tech-header-left">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">Stack & Tools</span>
            </div>
            <h2 class="tech-title">AI & Core Tech Stack</h2>
          </div>
          
          <div class="tech-header-right">
            <p class="tech-header-desc">
              I leverage top-tier development tools and AI models to engineer faster, smarter digital solutions. My tech stack spans custom frameworks, CMS platforms, database solutions, and modern deployment architectures.
            </p>
          </div>
        </div>

        <!-- Tech Tabs Container -->
        <div class="tech-tabs-container animate-fade-in-up delay-1">
          <div class="tech-tabs">
            <button class="tech-tab-btn active" data-tab="core">Core Technologies</button>
            <button class="tech-tab-btn" data-tab="ai">AI Stack & Tools</button>
            <button class="tech-tab-btn" data-tab="choose">Why Choose Me</button>
          </div>

          <!-- Tab Content: Core Technologies -->
          <div class="tech-tab-content active" id="tab-core">
            <div class="tech-tag-grid">
              <span class="tech-tag-badge">WordPress</span>
              <span class="tech-tag-badge">WooCommerce</span>
              <span class="tech-tag-badge">Next.js</span>
              <span class="tech-tag-badge">Astro</span>
              <span class="tech-tag-badge">React</span>
              <span class="tech-tag-badge">Tailwind CSS</span>
              <span class="tech-tag-badge">TypeScript</span>
              <span class="tech-tag-badge">JavaScript</span>
              <span class="tech-tag-badge">PHP</span>
              <span class="tech-tag-badge">MySQL</span>
              <span class="tech-tag-badge">Node.js</span>
              <span class="tech-tag-badge">GitHub</span>
              <span class="tech-tag-badge">Vercel</span>
              <span class="tech-tag-badge">Cloudflare</span>
              <span class="tech-tag-badge">OpenAI</span>
              <span class="tech-tag-badge">Supabase</span>
              <span class="tech-tag-badge">Figma</span>
              <span class="tech-tag-badge">Framer Motion</span>
              <span class="tech-tag-badge">Kadence</span>
              <span class="tech-tag-badge">Elementor</span>
              <span class="tech-tag-badge">Divi</span>
            </div>
          </div>

          <!-- Tab Content: AI Stack & Tools -->
          <div class="tech-tab-content" id="tab-ai">
            <div class="tech-tag-grid">
              <span class="tech-tag-badge ai-badge-color">Cursor AI</span>
              <span class="tech-tag-badge ai-badge-color">GitHub Copilot</span>
              <span class="tech-tag-badge ai-badge-color">ChatGPT</span>
              <span class="tech-tag-badge ai-badge-color">Claude</span>
              <span class="tech-tag-badge ai-badge-color">OpenAI APIs</span>
              <span class="tech-tag-badge ai-badge-color">Perplexity AI</span>
              <span class="tech-tag-badge ai-badge-color">Gemini</span>
              <span class="tech-tag-badge ai-badge-color">Figma AI</span>
              <span class="tech-tag-badge ai-badge-color">Vercel AI</span>
            </div>
            <p class="ai-stack-note">
              These tools help accelerate development, generate ideas, improve code quality, and streamline workflows—always guided by human expertise and careful review.
            </p>
          </div>

          <!-- Tab Content: Why Choose Me -->
          <div class="tech-tab-content" id="tab-choose">
            <div class="why-choose-grid">
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">AI-Accelerated Development</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Clean Maintainable Code</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Business-Oriented Solutions</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Mobile-First Design</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">SEO Friendly Architecture</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Fast Loading Websites</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Scalable Development</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Long-Term Support</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Transparent Communication</span>
              </div>
              <div class="why-item">
                <span class="why-check">✓</span>
                <span class="why-text">Modern Technology Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupTabs() {
    const buttons = this.querySelectorAll('.tech-tab-btn');
    const contents = this.querySelectorAll('.tech-tab-content');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');

        // Toggle active button
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Toggle active content
        contents.forEach(content => {
          content.classList.remove('active');
          if (content.id === `tab-${tabName}`) {
            content.classList.add('active');
          }
        });
      });
    });
  }
}

customElements.define('portfolio-tech', PortfolioTech);
export default PortfolioTech;
