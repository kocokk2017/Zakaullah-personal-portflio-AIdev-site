class PortfolioFaq extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupAccordion();
  }

  render() {
    this.innerHTML = `
      <section id="faq" class="faq-section-container">
        <!-- Section Header -->
        <div class="faq-header animate-fade-in-up">
          <div class="faq-header-left">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">FAQ</span>
            </div>
            <h2 class="faq-title">Frequently Asked<br/>Questions</h2>
          </div>
          
          <div class="faq-header-right">
            <p class="faq-header-desc">
              Answers to common objections and details about my dev stack, client workflow, WordPress setups, and support contracts.
            </p>
          </div>
        </div>

        <!-- FAQ List Accordion -->
        <div class="faq-list animate-fade-in-up delay-1">
          <!-- FAQ Item 1 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>What types of websites do you build?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                I design and develop custom WordPress sites (using Divi, Elementor, Kadence, and block builders), conversion-focused WooCommerce shops, performant static web pages (Next.js, Astro, React), and custom AI applications integrated with external LLMs and databases.
              </p>
            </div>
          </div>

          <!-- FAQ Item 2 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>Do you work with international clients?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Yes, the majority of my clients are located globally in the United States, United Kingdom, Europe, Canada, and Australia. I operate remote workflows with structured communications, regular progress updates, and Vercel/staging test links.
              </p>
            </div>
          </div>

          <!-- FAQ Item 3 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>Can you redesign an existing website?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Yes. I can convert outdated websites into modern, search-optimized, responsive interfaces. I focus on preserving your existing search keywords and URL paths to ensure zero drop in Google ranking.
              </p>
            </div>
          </div>

          <!-- FAQ Item 4 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>Can you fix an existing WordPress website?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Yes. I troubleshoot core WordPress layout failures, responsive breakages, plugin conflicts, PHP errors, and WooCommerce checkout bugs quickly.
              </p>
            </div>
          </div>

          <!-- FAQ Item 5 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>Can you build AI-powered websites?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Yes. I build sites integrated with OpenAI, Anthropic, Gemini, and custom vector databases (RAG setups). This allows you to deploy custom recommendation features, smart search databases, and automated chat pipelines.
              </p>
            </div>
          </div>

          <!-- FAQ Item 6 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>Do you work with Next.js?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Yes. Next.js is my main library for complex web applications where custom databases, user logins, serverless integrations, or fast speed are required.
              </p>
            </div>
          </div>

          <!-- FAQ Item 7 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>Can you improve website speed?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Yes. I optimize asset sizes, layout shifts, caching models, script load priorities, and server response speeds to improve Core Web Vitals and secure a 95+ score in Lighthouse.
              </p>
            </div>
          </div>

          <!-- FAQ Item 8 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>How do we start a project?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Click any of the 'Start Project' or 'Start a Conversation' buttons to chat directly on WhatsApp, or fill out the contact form. We'll set up a brief consultation to define details, scopes, and flat rates.
              </p>
            </div>
          </div>

          <!-- FAQ Item 9 -->
          <div class="faq-item">
            <button class="faq-question-btn" aria-expanded="false">
              <span>Do you provide ongoing support?</span>
              <span class="faq-toggle-icon"></span>
            </button>
            <div class="faq-answer-panel" aria-hidden="true">
              <p class="faq-answer-text">
                Yes, I offer monthly retainer agreements covering security audits, plugin updates, content management, backups, and regular speed tests to keep your site optimized.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  setupAccordion() {
    const buttons = this.querySelectorAll('.faq-question-btn');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const panel = btn.nextElementSibling;
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        
        // Close all other items (accordion behavior)
        this.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            const otherBtn = otherItem.querySelector('.faq-question-btn');
            const otherPanel = otherItem.querySelector('.faq-answer-panel');
            otherItem.classList.remove('active');
            otherBtn.setAttribute('aria-expanded', 'false');
            otherPanel.setAttribute('aria-hidden', 'true');
            otherPanel.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isExpanded) {
          item.classList.remove('active');
          btn.setAttribute('aria-expanded', 'false');
          panel.setAttribute('aria-hidden', 'true');
          panel.style.maxHeight = null;
        } else {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          panel.setAttribute('aria-hidden', 'false');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  }
}

customElements.define('portfolio-faq', PortfolioFaq);
export default PortfolioFaq;
