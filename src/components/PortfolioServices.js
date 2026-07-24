class PortfolioServices extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="services" class="services-section-container">
        <!-- Section Header -->
        <div class="services-header animate-fade-in-up">
          <div class="services-header-left">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">Services</span>
            </div>
            <h2 class="services-title">Specialized<br/>Services</h2>
          </div>
          
          <div class="services-header-right">
            <p class="services-header-desc">
              I deliver high-performance web solutions combining top-tier frameworks with AI automation, custom theme systems, and database engineering. Everything is optimized to be up to 10x more efficient.
            </p>
          </div>
        </div>

        <!-- Services Grid (6 Cards) -->
        <div class="services-grid animate-fade-in-up delay-1">
          
          <!-- Service 1: AI-Powered Website Development -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">01</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">AI-Powered Web Dev</h3>
            <p class="service-card-desc">
              Create beautiful, responsive websites using AI-assisted workflows that accelerate development without sacrificing quality.
            </p>
            <ul class="service-points-list">
              <li>10x development velocity</li>
              <li>Clean, human-verified code</li>
              <li>Intelligent content integration</li>
              <li>Astro & Next.js custom frameworks</li>
            </ul>
          </div>

          <!-- Service 2: WordPress Development -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">02</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">WordPress Solutions</h3>
            <p class="service-card-desc">
              Custom themes, WooCommerce stores, landing pages, membership sites, LMS platforms, multilingual sites, and ongoing maintenance.
            </p>
            <ul class="service-points-list">
              <li>Custom Gutenberg block theme building</li>
              <li>Divi, Elementor, Kadence theme designs</li>
              <li>WooCommerce store extensions</li>
              <li>Security patches & maintenance support</li>
            </ul>
          </div>

          <!-- Service 3: Frontend Development -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">03</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">Frontend Engineering</h3>
            <p class="service-card-desc">
              Modern, responsive, and highly interactive user interfaces engineered with leading frontend technologies.
            </p>
            <ul class="service-points-list">
              <li>React & Next.js SPA/SSR setups</li>
              <li>Tailwind CSS & custom CSS systems</li>
              <li>TypeScript type safety integration</li>
              <li>Framer Motion micro-animations</li>
            </ul>
          </div>

          <!-- Service 4: Website Redesign -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">04</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">Website Redesign</h3>
            <p class="service-card-desc">
              Transform outdated websites into modern, high-converting digital experiences that load instantly on all screen sizes.
            </p>
            <ul class="service-points-list">
              <li>Figma to responsive frontend conversion</li>
              <li>Conversion rate optimization layout</li>
              <li>Legacy theme migration support</li>
              <li>Mobile-first responsive adaptations</li>
            </ul>
          </div>

          <!-- Service 5: AI Integration -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">05</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">AI Integration</h3>
            <p class="service-card-desc">
              Integrate ChatGPT, OpenAI APIs, AI Chatbots, content generation pipelines, and automated business workflows.
            </p>
            <ul class="service-points-list">
              <li>ChatGPT API & custom model setups</li>
              <li>Automated customer service chatbots</li>
              <li>CRM & Zapier business automation</li>
              <li>AI-powered content management tools</li>
            </ul>
          </div>

          <!-- Service 6: Website Optimization -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">06</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">Website Optimization</h3>
            <p class="service-card-desc">
              Audits and adjustments for speed, search optimization, screen reader accessibility, and security compliance.
            </p>
            <ul class="service-points-list">
              <li>LCP, INP, and CLS score optimization</li>
              <li>SEO keyword layout & schema markup</li>
              <li>WCAG accessibility auditing</li>
              <li>Caching strategy & security lockdowns</li>
            </ul>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-services', PortfolioServices);
export default PortfolioServices;
