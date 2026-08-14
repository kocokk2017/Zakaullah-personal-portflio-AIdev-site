class PortfolioExperience extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="experience" class="experience-section-container">
        <!-- Section Header -->
        <div class="experience-header animate-fade-in-up">
          <div class="experience-header-left">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">Experience</span>
            </div>
            <h2 class="experience-title">Explore my<br/>Journey</h2>
          </div>
          
          <div class="experience-header-right">
            <p class="experience-header-desc">
              As an experienced custom web developer and AI specialist on Fiverr, I have designed and engineered custom solutions, optimized page load times, and solved complex architectural challenges for clients worldwide.
            </p>
            <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20consultation." target="_blank" rel="noopener noreferrer" class="experience-book-call">
              <span>Start Your Project</span>
              <svg class="arrow-icon" viewBox="0 0 24 24">
                <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Experience Content Block -->
        <div class="experience-timeline animate-fade-in-up delay-1">
          <div class="experience-card">
            <!-- Left Info Panel -->
            <div class="exp-left-panel">
              <h3 class="exp-company">Fiverr - freelance</h3>
              <span class="exp-date">July 2021 - Present</span>
              
              <!-- Mini Text Badges Row -->
              <div class="exp-tech-pills">
                <span class="exp-pill">next.js</span>
                <span class="exp-pill">astro</span>
                <span class="exp-pill">tailwind</span>
                <span class="exp-pill">wordpress</span>
                <span class="exp-pill">html/css</span>
                <span class="exp-pill">javascript</span>
                <span class="exp-pill">php</span>
                <span class="exp-pill">ai web</span>
              </div>
            </div>
            
            <!-- Right Details Panel -->
            <div class="exp-right-panel">
              
              <!-- Colored Graphical Tech Logo Grid -->
              <div class="tech-badge-grid">
                <!-- HTML5 -->
                <div class="tech-badge-box html-box" title="HTML5">
                  <svg viewBox="0 0 24 24" class="tech-icon" fill="currentColor">
                    <path d="M12 2L2 5l1.8 14.5L12 22l8.2-2.5L22 5L12 2zm6.5 15.5l-6.5 2-6.5-2L4 6.5h16l-1.5 11zM7 8h10l-.4 4.5H11v1.5h4.2l-.3 3-2.9.8-2.9-.8-.2-2.2H7.2l.4 4 4.4 1.2 4.4-1.2.6-6.6H9.2l-.2-2H17l.2-2H7l-.2 2.2z"/>
                  </svg>
                </div>
                <!-- CSS3 -->
                <div class="tech-badge-box css-box" title="CSS3">
                  <svg viewBox="0 0 24 24" class="tech-icon" fill="currentColor">
                    <path d="M12 2L2 5l1.8 14.5L12 22l8.2-2.5L22 5L12 2zm6.5 15.5l-6.5 2-6.5-2L4 6.5h16l-1.5 11zm-2.2-8.8H9.3l.2 2.2h7l-.5 5.5-4 3.2-4-3.2-.2-2.5h2.2l.1 1.1 1.7 1.4 1.7-1.4.2-2.2H8.2l-.6-6.6H17l-.7 2.5z"/>
                  </svg>
                </div>
                <!-- JS -->
                <div class="tech-badge-box js-box" title="JavaScript">
                  <span class="badge-text-js">JS</span>
                </div>
                <!-- React -->
                <div class="tech-badge-box react-box" title="React">
                  <svg viewBox="0 0 24 24" class="tech-icon-react" fill="none" stroke="currentColor" stroke-width="2">
                    <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(0 12 12)"/>
                    <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(60 12 12)"/>
                    <ellipse rx="10" ry="3.8" cx="12" cy="12" transform="rotate(120 12 12)"/>
                    <circle r="1.5" cx="12" cy="12" fill="currentColor"/>
                  </svg>
                </div>
                <!-- TS -->
                <div class="tech-badge-box ts-box" title="TypeScript">
                  <span class="badge-text-ts">TS</span>
                </div>
                <!-- Next.js -->
                <div class="tech-badge-box next-box" title="Next.js">
                  <svg viewBox="0 0 24 24" class="tech-icon-next" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 16V8l5.5 8H14.5V8" />
                  </svg>
                </div>
                <!-- Figma -->
                <div class="tech-badge-box figma-box" title="Figma">
                  <svg viewBox="0 0 24 24" class="tech-icon-figma" fill="currentColor">
                    <path d="M8 2h4v4H8V2zm4 4h4v4h-4V6zm-4 4h4v4H8v-4zm0 4a2 2 0 0 0 2 2v2a2 2 0 0 0-2-2v-2zm4 0h4v4h-4v-4z" />
                  </svg>
                </div>
              </div>
              
              <!-- Bullets Description Panel -->
              <div class="exp-details-content">
                <h4 class="exp-role-title">Expert Web Developer & AI Solutions Engineer | Fiverr Top-Rated Seller</h4>
                <ul class="exp-bullets-list">
                  <li>Ranked as a top-performing developer on Fiverr, completing 250+ successful projects in custom development, WordPress, Next.js, and Astro.</li>
                  <li>Engineered premium custom themes, templates, and plugins using WordPress page-builders (Divi, Elementor, Kadence, and Gutenberg blocks).</li>
                  <li>Pioneered AI-assisted web engineering workflows to generate layouts, write error-free logic, and optimize images, delivering a 10x multiplier in output speed.</li>
                  <li>Maintained a 99% client satisfaction rate, with a heavy focus on speed, performance optimization, and custom e-commerce functionality.</li>
                </ul>
              </div>
              
              <!-- Bottom Right Link Arrow Circular Decor -->
              <div class="exp-link-decor">
                <svg class="exp-arrow-diag" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>

            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('portfolio-experience', PortfolioExperience);
export default PortfolioExperience;
