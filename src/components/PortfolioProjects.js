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
              <h3 class="project-card-title">Jewlr - Custom WooCommerce Store</h3>
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
                <a href="https://jewlr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-action-link">
                  <span>View Details</span>
                  <svg class="project-arrow-diag" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <!-- Project 4: AI Knowledge Assistant -->
          <div class="project-card">
            <div class="project-image-container">
              <img src="/images/project_llm.png" alt="AI Knowledge Assistant" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>

            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">04</span>
                <span class="project-client">AI SaaS</span>
              </div>

              <h3 class="project-card-title">
                AI Knowledge Assistant (LLM + RAG)
              </h3>

              <p class="project-card-desc">
                Developed an intelligent AI assistant capable of answering business-specific questions using Retrieval-Augmented Generation (RAG). Integrated custom knowledge bases, semantic search, and modern LLMs for highly accurate responses with contextual memory.
              </p>

              <div class="project-tech-pills">
                <span class="project-pill">LLMs</span>
                <span class="project-pill">RAG</span>
                <span class="project-pill">Vector Database</span>
                <span class="project-pill">OpenAI</span>
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

          <!-- Project 5: n8n Automation Platform -->
          <div class="project-card">
            <div class="project-image-container">
              <img src="/images/project_n8n.png" alt="Business Automation Platform" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>

            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">05</span>
                <span class="project-client">Business Automation</span>
              </div>

              <h3 class="project-card-title">
                AI Workflow Automation with n8n
              </h3>

              <p class="project-card-desc">
                Designed end-to-end workflow automations connecting websites, CRMs, Gmail, Slack, Google Sheets, APIs, and AI models. Automated lead qualification, email follow-ups, notifications, document processing, and customer support to reduce manual work.
              </p>

              <div class="project-tech-pills">
                <span class="project-pill">n8n</span>
                <span class="project-pill">AI Agents</span>
                <span class="project-pill">REST APIs</span>
                <span class="project-pill">Automation</span>
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
