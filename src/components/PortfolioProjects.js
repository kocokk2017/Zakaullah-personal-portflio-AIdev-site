class PortfolioProjects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="portfolio" class="projects-section-container">
        <!-- Section Header -->
        <div class="projects-header animate-fade-in-up">
          <div class="projects-header-left">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">Portfolio</span>
            </div>
            <h2 class="projects-title">Selected<br/>Projects</h2>
          </div>
          
          <div class="projects-header-right">
            <p class="projects-header-desc">
              A selection of custom web systems, high-performance portals, and optimized e-commerce applications designed and coded using modern web technologies and accelerated by AI development tools.
            </p>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid animate-fade-in-up delay-1">
          <!-- Project 1: Aura -->
          <div class="project-card">
            <div class="project-image-container">
              <img src="/images/project_aura.png" alt="Aura AI Mindfulness App" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>
            
            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">01</span>
                <span class="project-client">Fiverr Client</span>
              </div>
              <h3 class="project-card-title">Aura - AI-Integrated Meditation App</h3>
              <p class="project-card-desc">
                A premium wellness application incorporating AI-generated meditation scripts and ambient background audio styling. Built with Next.js, OpenAI API, and fluid layouts.
              </p>
              
              <div class="project-tech-pills">
                <span class="project-pill">Next.js</span>
                <span class="project-pill">OpenAI API</span>
                <span class="project-pill">Tailwind CSS</span>
                <span class="project-pill">Custom UX</span>
              </div>
              
              <div class="project-footer">
                <a href="#contact" class="project-action-link">
                  <span>View Details</span>
                  <svg class="project-arrow-diag" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2: Explore Pakistan -->
          <div class="project-card">
            <div class="project-image-container">
              <img src="/images/project_apex.png" alt="Explore Pakistan Spark Travel Portal" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>
            
            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">02</span>
                <span class="project-client">GitHub Project</span>
              </div>
              <h3 class="project-card-title">Explore Pakistan - Travel Portal</h3>
              <p class="project-card-desc">
                A high-speed, dynamic travel search and exploration dashboard engineered using Astro and the Spark API. Built for maximal Lighthouse SEO scores and instant page transitions.
              </p>
              
              <div class="project-tech-pills">
                <span class="project-pill">Astro</span>
                <span class="project-pill">Tailwind CSS</span>
                <span class="project-pill">Spark API</span>
                <span class="project-pill">Lighthouse SEO</span>
              </div>
              
              <div class="project-footer">
                <a href="https://github.com/kocokk2017/explore-pakistan-spark" target="_blank" class="project-action-link">
                  <span>View Repository</span>
                  <svg class="project-arrow-diag" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3: Zenith -->
          <div class="project-card">
            <div class="project-image-container">
              <img src="/images/project_zenith.png" alt="Zenith Custom WooCommerce Storefront" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>
            
            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">03</span>
                <span class="project-client">Luxury Brand</span>
              </div>
              <h3 class="project-card-title">Zenith - Custom WooCommerce Store</h3>
              <p class="project-card-desc">
                A gorgeous, conversion-focused WooCommerce storefront featuring custom Gutenberg elements, Divi builder personalization, and speed-optimized product indexing.
              </p>
              
              <div class="project-tech-pills">
                <span class="project-pill">WordPress</span>
                <span class="project-pill">Divi Builder</span>
                <span class="project-pill">WooCommerce</span>
                <span class="project-pill">Speed Audit</span>
              </div>
              
              <div class="project-footer">
                <a href="#contact" class="project-action-link">
                  <span>View Details</span>
                  <svg class="project-arrow-diag" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-projects', PortfolioProjects);
export default PortfolioProjects;
