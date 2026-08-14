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
            <h2 class="services-title">Pillars of<br/>Expertise</h2>
          </div>
          
          <div class="services-header-right">
            <p class="services-header-desc">
              I deliver high-performance web systems combining senior frontend engineering, custom WordPress layouts, and custom AI integrations. Everything is engineered to automate manual tasks and turn traffic into sales.
            </p>
          </div>
        </div>

        <!-- Services Grid (6 Cards) -->
        <div class="services-grid animate-fade-in-up delay-1">
          
          <!-- Service 1: AI & Modern Web Development -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">01</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">AI & Modern Web Dev</h3>
            <p class="service-card-desc">
              Develop intelligent websites and applications leveraging cutting-edge LLMs and custom vector knowledge bases (RAG) to automate customer support and content flow.
            </p>
            <ul class="service-points-list">
              <li>OpenAI, Claude & Gemini API Integrations</li>
              <li>RAG (Retrieval-Augmented Generation) setups</li>
              <li>Astro & Next.js custom frameworks</li>
              <li>AI-powered user features & chatbots</li>
            </ul>
            <div class="service-cta-wrapper">
              <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20an%20AI%20and%20Modern%20Web%20Development%20project." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="service-card-cta">
                <span>Discuss AI Web Dev</span>
                <svg class="service-arrow" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Service 2: WordPress Development -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">02</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">WordPress Solutions</h3>
            <p class="service-card-desc">
              High-converting custom themes and Gutenberg integrations utilizing popular visual frameworks like Elementor, Divi, Kadence, and WooCommerce storefronts.
            </p>
            <ul class="service-points-list">
              <li>Custom Elementor, Divi & Kadence theme setups</li>
              <li>WooCommerce store designs & extensions</li>
              <li>Membership and LMS platform portals</li>
              <li>Clean, lightweight, secure code architecture</li>
            </ul>
            <div class="service-cta-wrapper">
              <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20WordPress%20development%20project." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="service-card-cta">
                <span>Discuss WordPress</span>
                <svg class="service-arrow" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Service 3: Full-Stack Development -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">03</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">Full-Stack Development</h3>
            <p class="service-card-desc">
              Robust and scalable full-stack web applications constructed using standard frameworks like Next.js, React, Node.js, and type-safe database architectures.
            </p>
            <ul class="service-points-list">
              <li>Next.js, React & TypeScript architectures</li>
              <li>RESTful API & Database Engineering (MySQL, Supabase)</li>
              <li>User Authentication & Secure Webhooks</li>
              <li>Serverless Deployment pipelines (Vercel, Vps)</li>
            </ul>
            <div class="service-cta-wrapper">
              <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20Full-Stack%20application%20project." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="service-card-cta">
                <span>Discuss Full-Stack</span>
                <svg class="service-arrow" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Service 4: Website Redesign -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">04</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">Website Redesign</h3>
            <p class="service-card-desc">
              Transform slow, outdated web pages into stunning, high-converting, and modern interfaces that load instantly across all devices.
            </p>
            <ul class="service-points-list">
              <li>Figma/AdobeXD design conversions to code</li>
              <li>UX/UI layout & visual hierarchy updates</li>
              <li>Mobile-first responsive adaptations</li>
              <li>Clean layout migrations with zero SEO drop</li>
            </ul>
            <div class="service-cta-wrapper">
              <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20Website%20Redesign%20project." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="service-card-cta">
                <span>Discuss Redesign</span>
                <svg class="service-arrow" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Service 5: Bug Fixes & Improvements -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">05</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">Bug Fixes & Improvements</h3>
            <p class="service-card-desc">
              Troubleshoot and fix broken layouts, unresponsive margins, plugin conflicts, database blockages, and payment portal errors.
            </p>
            <ul class="service-points-list">
              <li>Fast diagnosis and root-cause fixes</li>
              <li>Responsive styling repair & CSS overrides</li>
              <li>WordPress plugin & WooCommerce conflict checks</li>
              <li>Third-party API integration patches</li>
            </ul>
            <div class="service-cta-wrapper">
              <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I%20need%20help%20with%20Bug%20Fixes%20and%20Website%20Improvements." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="service-card-cta">
                <span>Request a Fix</span>
                <svg class="service-arrow" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Service 6: Performance Optimization -->
          <div class="service-card">
            <div class="service-card-decor">
              <span class="service-num">06</span>
              <div class="service-decor-line"></div>
            </div>
            <h3 class="service-card-title">Performance Optimization</h3>
            <p class="service-card-desc">
              Speed up load times and optimize Core Web Vitals (LCP, CLS, INP) to boost search engine placement and user retention.
            </p>
            <ul class="service-points-list">
              <li>Google Lighthouse 95+ score targeting</li>
              <li>Asset optimization & code-splitting checks</li>
              <li>Database caching & CDN configuration</li>
              <li>Render-blocking script elimination</li>
            </ul>
            <div class="service-cta-wrapper">
              <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I%20want%20to%20optimize%20my%20website's%20speed%20and%20performance." 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="service-card-cta">
                <span>Discuss Optimization</span>
                <svg class="service-arrow" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-services', PortfolioServices);
export default PortfolioServices;
