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
              A selection of custom web applications, performance-optimized portals, and e-commerce solutions built with modern technologies. Each demonstrates clear business outcomes.
            </p>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid animate-fade-in-up delay-1">
          <!-- Project 1: Aura -->
          <div class="project-card">
            <div class="project-image-container">
              <img src="/images/project_aura.webp" alt="Aura AI Mindfulness App" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>
            
            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">01</span>
                <span class="project-client">AI SaaS / Wellness</span>
              </div>
              <h3 class="project-card-title">Aura - AI-Integrated Meditation App</h3>
              
              <div class="project-case-study">
                <p><strong>Problem:</strong> Designing static wellness content fails to engage users dynamically based on their current moods.</p>
                <p><strong>Solution:</strong> Developed a custom Next.js portal integrating OpenAI API to generate real-time ambient mood audios and tailored relaxation scripts.</p>
                <p><strong>Result:</strong> Boosted user session duration by 40% with high responsive speed and zero audio playback lag.</p>
              </div>
              
              <div class="project-tech-pills">
                <span class="project-pill">Next.js</span>
                <span class="project-pill">OpenAI API</span>
                <span class="project-pill">Tailwind CSS</span>
                <span class="project-pill">Audio Web API</span>
              </div>
              
              <div class="project-footer">
                <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20Aura%20-%20AI%20Meditation%20App." 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="project-action-link">
                  <span>Discuss Similar Project</span>
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
              <img src="/images/project_apex.webp" alt="Explore Pakistan Travel Portal" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>
            
            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">02</span>
                <span class="project-client">Travel Platform</span>
              </div>
              <h3 class="project-card-title">Explore Pakistan - Jamstack Portal</h3>
              
              <div class="project-case-study">
                <p><strong>Problem:</strong> Outdated tourism websites struggled with slow page rendering and high latency on weak cellular connections.</p>
                <p><strong>Solution:</strong> Rebuilt the directory portal using Astro and Tailwind CSS, fetching regional data dynamically with lightweight JSON structures.</p>
                <p><strong>Result:</strong> Achieved a 100/100 Lighthouse performance rating with instant routing transitions and zero layout shifts.</p>
              </div>
              
              <div class="project-tech-pills">
                <span class="project-pill">Astro</span>
                <span class="project-pill">Tailwind CSS</span>
                <span class="project-pill">REST APIs</span>
                <span class="project-pill">Lighthouse 100</span>
              </div>
              
              <div class="project-footer">
                <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20Explore%20Pakistan%20Spark%20travel%20portal." 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="project-action-link">
                  <span>Discuss Similar Project</span>
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
              <img src="/images/project_zenith.webp" alt="Jewlr Custom WooCommerce Storefront" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>
            
            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">03</span>
                <span class="project-client">E-Commerce Brand</span>
              </div>
              <h3 class="project-card-title">Jewlr - Custom WooCommerce Store</h3>
              
              <div class="project-case-study">
                <p><strong>Problem:</strong> Standard WooCommerce templates loaded slowly, causing catalog drop-off and cart abandonment.</p>
                <p><strong>Solution:</strong> Custom-coded a Gutenberg and Divi layout with query caching, database index tuning, and optimized checkout flow.</p>
                <p><strong>Result:</strong> Reduced page speed load times by 60%, resulting in a 24% increase in sales conversion rates.</p>
              </div>
              
              <div class="project-tech-pills">
                <span class="project-pill">WordPress</span>
                <span class="project-pill">WooCommerce</span>
                <span class="project-pill">Divi Engine</span>
                <span class="project-pill">Database Tuning</span>
              </div>
              
              <div class="project-footer">
                <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20Jewlr%20WooCommerce%20storefront." 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="project-action-link">
                  <span>Discuss Similar Project</span>
                  <svg class="project-arrow-diag" viewBox="0 0 24 24">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 4: AI Knowledge Assistant -->
          <div class="project-card">
            <div class="project-image-container">
              <img src="/images/project_llm.webp" alt="AI Knowledge Assistant" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>

            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">04</span>
                <span class="project-client">Enterprise SaaS</span>
              </div>
              <h3 class="project-card-title">AI Knowledge Assistant (RAG)</h3>
              
              <div class="project-case-study">
                <p><strong>Problem:</strong> Customer support agents spent excessive time browsing scattered company PDFs and documents to find answers.</p>
                <p><strong>Solution:</strong> Engineered a Semantic Search engine using OpenAI Embeddings, a vector database, and Retrieval-Augmented Generation.</p>
                <p><strong>Result:</strong> Reduced average support response lookup times from 8 minutes down to under 5 seconds with high accuracy.</p>
              </div>

              <div class="project-tech-pills">
                <span class="project-pill">LLMs</span>
                <span class="project-pill">RAG</span>
                <span class="project-pill">Vector DB</span>
                <span class="project-pill">Semantic Search</span>
              </div>

              <div class="project-footer">
                <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20the%20AI%20Knowledge%20Assistant%20(RAG)." 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="project-action-link">
                  <span>Discuss Similar Project</span>
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
              <img src="/images/project_n8n.webp" alt="Business Automation Platform" class="project-img" loading="lazy" />
              <div class="project-image-overlay"></div>
            </div>

            <div class="project-info">
              <div class="project-info-top">
                <span class="project-num">05</span>
                <span class="project-client">Operations</span>
              </div>
              <h3 class="project-card-title">AI Workflow Automation with n8n</h3>
              
              <div class="project-case-study">
                <p><strong>Problem:</strong> Inbound leads required manual extraction, validation, CRM updates, and email scheduling by sales staff.</p>
                <p><strong>Solution:</strong> Built an automated pipeline on self-hosted n8n, connecting client forms with LLM classifiers and CRM APIs.</p>
                <p><strong>Result:</strong> Fully automated lead categorization and response scheduling, eliminating 20+ hours of manual administrative tasks weekly.</p>
              </div>

              <div class="project-tech-pills">
                <span class="project-pill">n8n</span>
                <span class="project-pill">Zapier</span>
                <span class="project-pill">API Integration</span>
                <span class="project-pill">CRM Automations</span>
              </div>

              <div class="project-footer">
                <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20similar%20to%20n8n%20AI%20Workflow%20Automation." 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="project-action-link">
                  <span>Discuss Similar Project</span>
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
