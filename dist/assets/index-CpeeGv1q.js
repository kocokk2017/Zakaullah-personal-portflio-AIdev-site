(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupThemeToggle(),this.setupActiveLinks()}render(){let e=document.body.classList.contains(`dark-theme`);this.innerHTML=`
      <header class="navbar-container animate-fade-in">
        <div class="navbar-left">
          <a href="#" class="brand-link">
            <div class="avatar-wrapper">
              <img src="/images/avatar.webp" alt="M. Zakaullah Avatar" class="navbar-avatar" />
            </div>
            <span class="brand-name">M.Zakaullah</span>
          </a>
        </div>
        
        <nav class="navbar-center">
          <ul class="nav-links">
            <li><a href="#about" class="nav-link hover-underline">About</a></li>
            <li><a href="#services" class="nav-link hover-underline">Services</a></li>
            <li><a href="#portfolio" class="nav-link hover-underline">Work</a></li>
            <li><a href="#process" class="nav-link hover-underline">Process</a></li>
            <li><a href="#faq" class="nav-link hover-underline">FAQ</a></li>
          </ul>
        </nav>
        
        <div class="navbar-right">
          <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle dark mode" title="Toggle Theme">
            <svg class="sun-icon" style="display: ${e?`block`:`none`};" viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
            <svg class="moon-icon" style="display: ${e?`none`:`block`};" viewBox="0 0 24 24">
              <path d="M12.3 22c5.36 0 9.7-4.34 9.7-9.7 0-2.94-1.31-5.58-3.38-7.4-.33-.29-.81-.22-1.05.15-.84 1.29-2.31 2.15-3.97 2.15-2.65 0-4.8-2.15-4.8-4.8 0-1.66.86-3.13 2.15-3.98.37-.24.44-.72.15-1.05C9.58 1.3 6.94 2 4 4 1.66 6.3 1 9.58 1 12.3c0 5.36 4.34 9.7 9.7 9.7z"/>
            </svg>
            <span class="theme-text">${e?`Light`:`Dark`}</span>
          </button>
          
          <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noopener noreferrer" class="book-call-link">
            <span>Start Project</span>
            <svg class="arrow-icon" viewBox="0 0 24 24">
              <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    `}setupThemeToggle(){let e=this.querySelector(`#theme-toggle`);e&&e.addEventListener(`click`,()=>{let e=document.body.classList.toggle(`dark-theme`);localStorage.setItem(`theme`,e?`dark`:`light`);let t=this.querySelector(`.sun-icon`),n=this.querySelector(`.moon-icon`),r=this.querySelector(`.theme-text`);e?(t.style.display=`block`,n.style.display=`none`,r.textContent=`Light`):(t.style.display=`none`,n.style.display=`block`,r.textContent=`Dark`)})}setupActiveLinks(){let e=this.querySelectorAll(`.nav-link`),t=this.querySelector(`.mobile-menu-toggle`),n=this.querySelector(`.navbar-center`);e.forEach(r=>{r.addEventListener(`click`,i=>{e.forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),n.classList.contains(`mobile-active`)&&(n.classList.remove(`mobile-active`),t.classList.remove(`active`),document.body.style.overflow=``)})}),t&&n&&t.addEventListener(`click`,()=>{t.classList.toggle(`active`),n.classList.toggle(`mobile-active`);let e=n.classList.contains(`mobile-active`);document.body.style.overflow=e?`hidden`:``})}};customElements.define(`portfolio-navbar`,e);var t=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
      <section class="hero-container">
        <!-- Left Side: Vertical Banner -->
        <div class="hero-vertical-banner animate-fade-in">
          <span class="vertical-text">AI & Web Engineering</span>
          <div class="vertical-line"></div>
          <span class="vertical-year">Remote Worldwide</span>
        </div>

        <!-- Middle Column: Stats + Info -->
        <div class="hero-main-content">
          <!-- AI Badge -->
          <div class="hero-badge animate-fade-in-up">
            <span class="badge-rocket">⚡</span>
            <span class="badge-text-tag">WordPress • Next.js • AI Integrations • Full-Stack Development</span>
          </div>

          <!-- Big Headline -->
          <div class="hero-title-wrapper animate-fade-in-up delay-1">
            <h1 class="hero-title">Building Websites That Drive Real Business Growth</h1>
          </div>

          <!-- Description Block -->
          <div class="hero-text-block animate-fade-in-up delay-2">
            <h2 class="hero-subtitle">Senior Developer delivering fast, secure, and conversion-optimized web applications.</h2>
            <p class="hero-description">
              I help businesses, agencies, and startups transform ideas into high-performing digital platforms. By combining expert custom development in WordPress and Next.js with advanced AI-accelerated workflows, I deliver clean, production-ready code with faster turnaround times, optimized Core Web Vitals, and premium user experiences.
            </p>
          </div>

          <!-- Explore CTA Buttons -->
          <div class="hero-cta animate-fade-in-up delay-3">
            <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20website%20project%20with%20you." 
               target="_blank" 
               rel="noopener noreferrer" 
               class="explore-work-link btn-primary-cta">
              <span>Start Your Project</span>
              <svg class="cta-arrow-icon" viewBox="0 0 24 24">
                <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#portfolio" class="explore-work-link btn-secondary-cta hover-underline">
              <span>View My Work</span>
            </a>
          </div>

          <!-- Stats Row -->
          <div class="hero-stats animate-fade-in-up delay-4">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Years in Technology</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">250+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">99%</span>
              <span class="stat-label">Fiverr Top Rating</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Developer Portrait -->
        <div class="hero-image-container animate-scale-in delay-2">
          <div class="hero-image-wrapper">
            <img src="/images/developer.webp" alt="M. Zakaullah Portrait" class="developer-img" fetchpriority="high" />
            <div class="design-dot"></div>
          </div>
        </div>
      </section>
    `}};customElements.define(`portfolio-hero`,t);var n=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupGlowEffect()}setupGlowEffect(){this.querySelectorAll(`.bento-cell`).forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left,i=t.clientY-n.top;e.style.setProperty(`--x`,`${r}px`),e.style.setProperty(`--y`,`${i}px`)})})}render(){this.innerHTML=`
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
    `}};customElements.define(`portfolio-about`,n);var r=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
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
    `}};customElements.define(`portfolio-experience`,r);var i=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
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
    `}};customElements.define(`portfolio-projects`,i);var a=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
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
    `}};customElements.define(`portfolio-services`,a);var o=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
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
    `}};customElements.define(`portfolio-process`,o);var s=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupTabs()}render(){this.innerHTML=`
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
    `}setupTabs(){let e=this.querySelectorAll(`.tech-tab-btn`),t=this.querySelectorAll(`.tech-tab-content`);e.forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-tab`);e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t.forEach(e=>{e.classList.remove(`active`),e.id===`tab-${r}`&&e.classList.add(`active`)})})})}};customElements.define(`portfolio-tech`,s);var c=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupCarousel()}render(){this.innerHTML=`
      <section id="testimonials" class="testimonials-section-container">
        <!-- Section Header -->
        <div class="testimonials-header animate-fade-in-up">
          <div class="testimonials-header-left">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">Testimonials</span>
            </div>
            <h2 class="testimonials-title">Client<br/>Feedback</h2>
          </div>
          
          <div class="testimonials-header-right">
            <p class="testimonials-header-desc">
              Over the last 5+ years, I have collaborated with startups and product teams around the globe. Here is what some of my clients have to say about my speed, AI integration, and WordPress customizations.
            </p>
          </div>
        </div>

        <!-- Testimonials Carousel -->
        <div class="testimonials-carousel-wrapper animate-fade-in-up delay-1">
          <div class="testimonials-scroller">
            
            <!-- Testimonial 1 -->
            <div class="testimonial-card scroll-item">
              <div class="testimonial-stars">
                ${`★`.repeat(5)}
              </div>
              <p class="testimonial-quote">
                "Zakaullah delivered our AI-integrated travel portal on schedule. His understanding of Astro and API integrations is stellar. Our team achieved a 10x improvement in deployment speed and clean code structure."
              </p>
              <div class="testimonial-author">
                <div class="author-avatar-decor">SJ</div>
                <div class="author-info">
                  <h4 class="author-name">Sarah Jenkins</h4>
                  <span class="author-role">Founder, TravelSpark</span>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="testimonial-card scroll-item">
              <div class="testimonial-stars">
                ${`★`.repeat(5)}
              </div>
              <p class="testimonial-quote">
                "Working with Zakaullah was fantastic. He combined Divi page-builder elements with custom PHP scripts to give us a highly flexible and unique e-commerce setup. His speed audits got us to a 99 Lighthouse score!"
              </p>
              <div class="testimonial-author">
                <div class="author-avatar-decor">MC</div>
                <div class="author-info">
                  <h4 class="author-name">Marcus Chen</h4>
                  <span class="author-role">CTO, Apex Retail</span>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="testimonial-card scroll-item">
              <div class="testimonial-stars">
                ${`★`.repeat(5)}
              </div>
              <p class="testimonial-quote">
                "A top-rated Pro developer on Fiverr. Zakaullah communicates clearly, adapts layouts using Elementor or custom CSS effortlessly, and handles post-launch maintenance reliably. Highly recommended!"
              </p>
              <div class="testimonial-author">
                <div class="author-avatar-decor">ER</div>
                <div class="author-info">
                  <h4 class="author-name">Elena Rostova</h4>
                  <span class="author-role">Product Lead, Zenith Agency</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Carousel Controls -->
          <div class="carousel-controls">
            <button class="carousel-btn prev-btn" aria-label="Previous Testimonial">
              <svg viewBox="0 0 24 24" class="carousel-arrow">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </button>
            <button class="carousel-btn next-btn" aria-label="Next Testimonial">
              <svg viewBox="0 0 24 24" class="carousel-arrow">
                <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    `}setupCarousel(){let e=this.querySelector(`.testimonials-scroller`),t=this.querySelectorAll(`.testimonial-card`),n=this.querySelector(`.prev-btn`),r=this.querySelector(`.next-btn`);if(!e||t.length===0)return;let i=()=>{let n=window.getComputedStyle(t[0]),r=t[0].offsetWidth,i=parseInt(n.marginLeft)+parseInt(n.marginRight)||0;return r+(parseInt(window.getComputedStyle(e).gap)||0)+i};if(n.addEventListener(`click`,()=>{e.scrollBy({left:-i(),behavior:`smooth`})}),r.addEventListener(`click`,()=>{e.scrollBy({left:i(),behavior:`smooth`})}),!CSS.supports(`(animation-timeline: view()) and (animation-range: entry)`)){let n=()=>{let n=e.getBoundingClientRect(),r=n.left+n.width/2;t.forEach(e=>{let t=e.getBoundingClientRect(),i=t.left+t.width/2,a=n.width/1.5,o=1-Math.abs(r-i)/a;o=Math.max(0,Math.min(1,o));let s=o*o*(3-2*o),c=.9+.1*s,l=.5+.5*s;e.style.transform=`scale(${c})`,e.style.opacity=`${l}`})};e.addEventListener(`scroll`,n),window.addEventListener(`resize`,n),requestAnimationFrame(n)}}};customElements.define(`portfolio-testimonials`,c);var l=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupAccordion()}render(){this.innerHTML=`
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
    `}setupAccordion(){this.querySelectorAll(`.faq-question-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.parentElement,n=e.nextElementSibling,r=e.getAttribute(`aria-expanded`)===`true`;this.querySelectorAll(`.faq-item`).forEach(e=>{if(e!==t){let t=e.querySelector(`.faq-question-btn`),n=e.querySelector(`.faq-answer-panel`);e.classList.remove(`active`),t.setAttribute(`aria-expanded`,`false`),n.setAttribute(`aria-hidden`,`true`),n.style.maxHeight=null}}),r?(t.classList.remove(`active`),e.setAttribute(`aria-expanded`,`false`),n.setAttribute(`aria-hidden`,`true`),n.style.maxHeight=null):(t.classList.add(`active`),e.setAttribute(`aria-expanded`,`true`),n.setAttribute(`aria-hidden`,`false`),n.style.maxHeight=n.scrollHeight+`px`)})})}};customElements.define(`portfolio-faq`,l);var u=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupContactForm(),this.setupCopyToClipboard()}render(){this.innerHTML=`
      <section id="contact" class="contact-section-container">
        <!-- Call to Action conversion box -->
        <div class="contact-cta-conversion animate-fade-in-up">
          <h2 class="contact-cta-tagline">Your next website shouldn't just look good.<br/>It should work for your business.</h2>
          <p class="contact-cta-desc">
            Whether you need a new high-speed website, a custom redesign, an AI-powered portal, a full-stack application, or immediate help fixing a broken site — let's start a conversation.
          </p>
          <div class="contact-cta-buttons">
            <a href="https://wa.me/923151800869?text=Hi%20ZakaUllah,%20I'd%20like%20to%20discuss%20a%20project%20with%20you%20right%20away." 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-primary-cta whatsapp-big-cta">
              <span>Start a Conversation on WhatsApp</span>
              <svg class="cta-arrow-icon" viewBox="0 0 24 24">
                <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="contact-grid">
          <!-- Left Panel: Copy & Info -->
          <div class="contact-left animate-fade-in-up">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">Send a Message</span>
            </div>
            <h2 class="contact-title">Prefer Email? <br/>Drop me a line</h2>
            <p class="contact-desc">
              Fill out the project details form, or copy my email address to contact me directly. I will get back to you within 24 hours.
            </p>
            
            <div class="contact-methods">
              <div class="email-copy-box">
                <span class="email-label">Copy email address:</span>
                <div class="email-input-group">
                  <span class="email-text" id="email-address">hello@zakaullah.dev</span>
                  <button id="copy-email-btn" class="copy-btn" aria-label="Copy email address" title="Copy Email">
                    <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span class="copy-success-tooltip">Copied!</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-links-container">
              <span class="social-label">Find me on:</span>
              <div class="social-links">
                <a href="https://github.com/kocokk2017" target="_blank" rel="noopener noreferrer" class="social-link-item">GitHub</a>
                <a href="https://www.linkedin.com/in/muhammad-zakaullah-545ab450/" target="_blank" rel="noopener noreferrer" class="social-link-item">LinkedIn</a>
                <a href="https://www.fiverr.com/s/kLdx1jk" target="_blank" rel="noopener noreferrer" class="social-link-item">Fiverr</a>
              </div>
            </div>
          </div>

          <!-- Right Panel: Contact Form -->
          <div class="contact-right animate-fade-in-up delay-1">
            <form id="portfolio-contact-form" class="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <input type="text" id="user-name" name="name" required placeholder=" " />
                  <label for="user-name">Your Name</label>
                  <span class="form-error-msg">Name is required</span>
                </div>
                <div class="form-group">
                  <input type="email" id="user-email" name="email" required placeholder=" " />
                  <label for="user-email">Email Address</label>
                  <span class="form-error-msg">Enter a valid email</span>
                </div>
              </div>

              <div class="form-group">
                <select id="project-type" name="projectType" required>
                  <option value="" disabled selected hidden></option>
                  <option value="wordpress">WordPress & WooCommerce</option>
                  <option value="nextjs">Next.js & AI Web App</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="optimization">Speed & Performance</option>
                  <option value="troubleshoot">Bug Fixes & Troubleshooting</option>
                </select>
                <label for="project-type" class="select-label">Project Type</label>
                <span class="form-error-msg">Please select an option</span>
              </div>

              <div class="form-group">
                <textarea id="project-details" name="details" required placeholder=" " rows="5"></textarea>
                <label for="project-details">Project Details</label>
                <span class="form-error-msg">Details are required</span>
              </div>

              <button type="submit" class="submit-form-btn">
                <span>Send Message</span>
                <svg class="submit-arrow" viewBox="0 0 24 24">
                  <path d="M5 19L19 5M19 5H9M19 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </form>

            <!-- Success Message Panel (Hidden by default) -->
            <div id="contact-success-panel" class="success-panel" style="display: none;">
              <div class="success-icon-wrapper">
                <svg class="success-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 class="success-title">Message Sent!</h3>
              <p class="success-desc">
                Thank you for reaching out. I have received your request and will get back to you within 24 hours to discuss the details.
              </p>
              <button id="reset-form-btn" class="reset-btn">Send another message</button>
            </div>
          </div>
        </div>

        <!-- Footer Area -->
        <footer class="footer-container">
          <div class="footer-top-grid">
            <div class="footer-brand-col">
              <span class="footer-brand-title">M. Zakaullah</span>
              <p class="footer-brand-text">
                Senior Web Developer & AI Solutions Engineer. Specialized in building premium Next.js applications, high-converting WooCommerce storefronts, and automated business workflows.
              </p>
            </div>
            
            <div class="footer-links-col">
              <span class="footer-col-title">Navigation</span>
              <ul class="footer-links-list">
                <li><a href="#about" class="footer-link">About</a></li>
                <li><a href="#services" class="footer-link">Services</a></li>
                <li><a href="#portfolio" class="footer-link">Work</a></li>
                <li><a href="#process" class="footer-link">Process</a></li>
                <li><a href="#faq" class="footer-link">FAQ</a></li>
              </ul>
            </div>

            <div class="footer-links-col">
              <span class="footer-col-title">Services</span>
              <ul class="footer-links-list">
                <li><a href="#services" class="footer-link">AI & Modern Web Dev</a></li>
                <li><a href="#services" class="footer-link">WordPress Solutions</a></li>
                <li><a href="#services" class="footer-link">Full-Stack Dev</a></li>
                <li><a href="#services" class="footer-link">Website Redesign</a></li>
                <li><a href="#services" class="footer-link">Bug Fixes</a></li>
                <li><a href="#services" class="footer-link">Performance Speed</a></li>
              </ul>
            </div>

            <div class="footer-links-col">
              <span class="footer-col-title">Contact</span>
              <ul class="footer-links-list">
                <li>Email: hello@zakaullah.dev</li>
                <li>WhatsApp: +92 315 1800869</li>
                <li><a href="https://www.fiverr.com/s/kLdx1jk" target="_blank" rel="noopener noreferrer" class="footer-link">Hire on Fiverr</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span class="footer-copyright">© 2026 M. Zakaullah. All rights reserved. All projects built remotely worldwide.</span>
            <a href="#" class="scroll-to-top-btn" aria-label="Scroll to top">
              <span>Back to Top</span>
              <svg class="top-arrow-icon" viewBox="0 0 24 24">
                <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </footer>
      </section>
    `}setupContactForm(){let e=this.querySelector(`#portfolio-contact-form`),t=this.querySelector(`#contact-success-panel`),n=this.querySelector(`#reset-form-btn`);e&&(e.addEventListener(`submit`,n=>{n.preventDefault();let r=!0;if(e.querySelectorAll(`input[required], textarea[required], select[required]`).forEach(e=>{let t=!0;t=e.tagName===`SELECT`?e.value!==``:e.type===`email`?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value):e.value.trim()!==``;let n=e.closest(`.form-group`);t?n.classList.remove(`has-error`):(n.classList.add(`has-error`),r=!1),e.addEventListener(`blur`,function(){let t=!0;t=e.tagName===`SELECT`?e.value!==``:e.type===`email`?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value):e.value.trim()!==``,t?n.classList.remove(`has-error`):n.classList.add(`has-error`)})}),r){let n=e.querySelector(`.submit-form-btn`),r=n.querySelector(`span`);r.textContent=`Sending...`,n.disabled=!0,setTimeout(()=>{e.style.display=`none`,t.style.display=`flex`,r.textContent=`Send Message`,n.disabled=!1,e.reset()},1200)}}),n&&n.addEventListener(`click`,()=>{t.style.display=`none`,e.style.display=`flex`}))}setupCopyToClipboard(){let e=this.querySelector(`#copy-email-btn`),t=this.querySelector(`#email-address`);!e||!t||e.addEventListener(`click`,()=>{navigator.clipboard.writeText(t.textContent).then(()=>{e.classList.add(`copied`),setTimeout(()=>{e.classList.remove(`copied`)},2e3)}).catch(e=>{console.error(`Failed to copy text: `,e)})})}};customElements.define(`portfolio-contact`,u),(()=>{let e=localStorage.getItem(`theme`),t=window.matchMedia(`(prefers-color-scheme: dark)`).matches;e===`dark`||!e&&t?document.body.classList.add(`dark-theme`):document.body.classList.remove(`dark-theme`)})(),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{localStorage.getItem(`theme`)||(e.matches?document.body.classList.add(`dark-theme`):document.body.classList.remove(`dark-theme`))});