(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupThemeToggle(),this.setupActiveLinks()}render(){let e=document.body.classList.contains(`dark-theme`);this.innerHTML=`
      <header class="navbar-container animate-fade-in">
        <div class="navbar-left">
          <a href="#" class="brand-link">
            <div class="avatar-wrapper">
              <img src="/images/avatar.png" alt="M. Zakaullah Avatar" class="navbar-avatar" />
            </div>
            <span class="brand-name">M.Zakaullah</span>
          </a>
        </div>
        
        <nav class="navbar-center">
          <ul class="nav-links">
            <li><a href="#about" class="nav-link hover-underline">About Me</a></li>
            <li><a href="#portfolio" class="nav-link hover-underline">Portfolio</a></li>
            <li><a href="#experience" class="nav-link hover-underline">Experience</a></li>
            <li><a href="#services" class="nav-link hover-underline">Services</a></li>
            <li><a href="#testimonials" class="nav-link hover-underline">Testimonials</a></li>
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
          
          <a href="#contact" class="book-call-link">
            <span>Book a call</span>
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
          <span class="vertical-text">AI Powered Workflow</span>
          <div class="vertical-line"></div>
          <span class="vertical-year">Worldwide Remote</span>
        </div>

        <!-- Middle Column: Stats + Info -->
        <div class="hero-main-content">
          <!-- AI Badge -->
          <div class="hero-badge animate-fade-in-up">
            <span class="badge-rocket">🚀</span>
            <span class="badge-text-tag">AI-Powered Website Development • WordPress • Next.js • Automation</span>
          </div>

          <!-- Big Headline -->
          <div class="hero-title-wrapper animate-fade-in-up delay-1">
            <h1 class="hero-title">Building Intelligent Websites</h1>
          </div>

          <!-- Description Block -->
          <div class="hero-text-block animate-fade-in-up delay-2">
            <h2 class="hero-subtitle">Senior Web Developer delivering faster, smarter solutions with AI-powered workflows</h2>
            <p class="hero-description">
              I help businesses, startups, and entrepreneurs transform ideas into high-performing websites using the latest AI tools, WordPress, React, Next.js, and modern frontend technologies. By combining human expertise with AI-assisted development, I deliver faster turnaround times, cleaner code, and exceptional user experiences.
            </p>
          </div>

          <!-- Explore CTA Buttons -->
          <div class="hero-cta animate-fade-in-up delay-3">
            <a href="#contact" class="explore-work-link btn-primary-cta">
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
              <span class="stat-label">Projects Delivered</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Developer Portrait -->
        <div class="hero-image-container animate-scale-in delay-2">
          <div class="hero-image-wrapper">
            <img src="/images/developer.png" alt="M. Zakaullah Portrait" class="developer-img" />
            <div class="design-dot"></div>
          </div>
        </div>
      </section>
    `}};customElements.define(`portfolio-hero`,t);var n=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
      <section id="about" class="about-section-container">
        <!-- Section Title -->
        <div class="section-header animate-fade-in-up">
          <h2 class="section-title-large">Building More Than Websites</h2>
        </div>

        <!-- 2-Column Content Layout -->
        <div class="about-grid">
          
          <!-- Column 1: Biography -->
          <div class="about-col-intro animate-fade-in-up delay-1">
            <p class="about-lead-text">
              Instead of simply writing code, I create intelligent digital experiences that help businesses grow.
            </p>
            <p class="about-bio-text">
              With over 15 years in technology and years of professional web development experience, I combine AI-powered workflows with modern development practices to build websites that are fast, scalable, secure, and designed to convert visitors into customers.
            </p>
            <p class="about-bio-text">
              Whether it's WordPress, WooCommerce, custom frontend development, or AI-powered automation, every project is built with performance, usability, and long-term growth in mind.
            </p>
          </div>

          <!-- Column 2: Fiverr Rating Card -->
          <div class="about-col-card animate-fade-in-up delay-2">
            <div class="fiverr-stat-card">
              <div class="card-header-icon">
                <svg class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div class="card-percentage">99%</div>
              <p class="card-desc">
                Consistent 5-star delivery and top rating on Fiverr platform for over 5+ years.
              </p>
              <div class="card-image-wrapper">
                <img src="/images/about_avatar.png" alt="M. Zakaullah Smiling Avatar" class="card-avatar-img" />
              </div>
            </div>
          </div>
        </div>

        <!-- What Makes Me Different Grid -->
        <div class="diff-section-container animate-fade-in-up delay-3">
          <h3 class="diff-section-title">What Makes Me Different</h3>
          
          <div class="diff-grid">
            <!-- Item 1: AI-Assisted -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                  <path d="M9 22V12h6v10M2 9h20M2 15h20"></path>
                </svg>
              </div>
              <h4 class="diff-card-title">AI-Assisted Development</h4>
              <p class="diff-card-desc">I use cutting-edge AI tools to accelerate development while maintaining full human oversight, ensuring faster delivery without compromising quality.</p>
            </div>

            <!-- Item 2: Modern Frontend -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 class="diff-card-title">Modern Frontend</h4>
              <p class="diff-card-desc">Responsive, accessible, and lightning-fast interfaces built with today's leading technologies (Next.js, Astro, Tailwind CSS).</p>
            </div>

            <!-- Item 3: WordPress -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h4 class="diff-card-title">WordPress Expertise</h4>
              <p class="diff-card-desc">Custom WordPress solutions built for flexibility, performance, and easy management using Elementor, Divi, Kadence, and Gutenberg blocks.</p>
            </div>

            <!-- Item 4: Automation -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h4 class="diff-card-title">Smart Automation</h4>
              <p class="diff-card-desc">Reduce manual work by integrating AI, APIs, CRM platforms, and business automation workflows directly into your website.</p>
            </div>

            <!-- Item 5: Performance -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 class="diff-card-title">Performance Optimization</h4>
              <p class="diff-card-desc">Speed, SEO, Core Web Vitals, and user experience are optimized from day one to ensure Google ranking success.</p>
            </div>

            <!-- Item 6: Business Focus -->
            <div class="diff-card">
              <div class="diff-icon-wrapper">
                <svg class="diff-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h4 class="diff-card-title">Business Focus</h4>
              <p class="diff-card-desc">Every feature is designed to improve customer experience, increase conversions, and support long-term business growth.</p>
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
            <a href="#contact" class="experience-book-call">
              <span>Book a call</span>
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
                  <li>Ranked as a top-performing developer on Fiverr, completing 800+ successful projects in custom development, WordPress, Next.js, and Astro.</li>
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
    `}};customElements.define(`portfolio-projects`,i);var a=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){this.innerHTML=`
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
    `}};customElements.define(`portfolio-services`,a);var o=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupTabs()}render(){this.innerHTML=`
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
    `}setupTabs(){let e=this.querySelectorAll(`.tech-tab-btn`),t=this.querySelectorAll(`.tech-tab-content`);e.forEach(n=>{n.addEventListener(`click`,()=>{let r=n.getAttribute(`data-tab`);e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t.forEach(e=>{e.classList.remove(`active`),e.id===`tab-${r}`&&e.classList.add(`active`)})})})}};customElements.define(`portfolio-tech`,o);var s=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupCarousel()}render(){this.innerHTML=`
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
    `}setupCarousel(){let e=this.querySelector(`.testimonials-scroller`),t=this.querySelectorAll(`.testimonial-card`),n=this.querySelector(`.prev-btn`),r=this.querySelector(`.next-btn`);if(!e||t.length===0)return;let i=()=>{let n=window.getComputedStyle(t[0]),r=t[0].offsetWidth,i=parseInt(n.marginLeft)+parseInt(n.marginRight)||0;return r+(parseInt(window.getComputedStyle(e).gap)||0)+i};if(n.addEventListener(`click`,()=>{e.scrollBy({left:-i(),behavior:`smooth`})}),r.addEventListener(`click`,()=>{e.scrollBy({left:i(),behavior:`smooth`})}),!CSS.supports(`(animation-timeline: view()) and (animation-range: entry)`)){let n=()=>{let n=e.getBoundingClientRect(),r=n.left+n.width/2;t.forEach(e=>{let t=e.getBoundingClientRect(),i=t.left+t.width/2,a=n.width/1.5,o=1-Math.abs(r-i)/a;o=Math.max(0,Math.min(1,o));let s=o*o*(3-2*o),c=.9+.1*s,l=.5+.5*s;e.style.transform=`scale(${c})`,e.style.opacity=`${l}`})};e.addEventListener(`scroll`,n),window.addEventListener(`resize`,n),requestAnimationFrame(n)}}};customElements.define(`portfolio-testimonials`,s);var c=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render(),this.setupContactForm(),this.setupCopyToClipboard()}render(){this.innerHTML=`
      <section id="contact" class="contact-section-container">
        <div class="contact-grid">
          <!-- Left Panel: Copy & Info -->
          <div class="contact-left animate-fade-in-up">
            <div class="header-indicator">
              <span class="pink-dot"></span>
              <span class="indicator-label">Get in Touch</span>
            </div>
            <h2 class="contact-title">Ready to Build<br/>Something Exceptional?</h2>
            <p class="contact-desc">
              Whether you need a custom website, a powerful WordPress solution, or an AI-enhanced web application, let's turn your vision into a fast, modern, and scalable digital experience.
            </p>
            
            <div class="contact-methods">
              <div class="email-copy-box">
                <span class="email-label">Drop an email:</span>
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
              <span class="social-label">Follow / Connect:</span>
              <div class="social-links">
                <a href="https://github.com/kocokk2017/explore-pakistan-spark" target="_blank" rel="noopener noreferrer" class="social-link-item">GitHub</a>
                <a href="https://www.linkedin.com/in/muhammad-zakaullah-545ab450/" target="_blank" rel="noopener noreferrer" class="social-link-item">LinkedIn</a>
                <a href="https://figma.com" target="_blank" rel="noopener noreferrer" class="social-link-item">Figma</a>
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
                  <option value="nextjs">Next.js Development</option>
                  <option value="uiux">UI/UX & Figma Design</option>
                  <option value="performance">Speed / SEO Optimization</option>
                  <option value="full-project">Full Product Design & Code</option>
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
          <div class="footer-left">
            <span class="footer-copyright">© 2026 M. Zakaullah. All rights reserved.</span>
          </div>
          <div class="footer-right">
            <a href="#" class="scroll-to-top-btn" aria-label="Scroll to top">
              <span>Back to Top</span>
              <svg class="top-arrow-icon" viewBox="0 0 24 24">
                <path d="M12 19V5M12 5l-6 6M12 5l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </footer>
      </section>
    `}setupContactForm(){let e=this.querySelector(`#portfolio-contact-form`),t=this.querySelector(`#contact-success-panel`),n=this.querySelector(`#reset-form-btn`);e&&(e.addEventListener(`submit`,n=>{n.preventDefault();let r=!0;if(e.querySelectorAll(`input[required], textarea[required], select[required]`).forEach(e=>{let t=!0;t=e.tagName===`SELECT`?e.value!==``:e.type===`email`?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value):e.value.trim()!==``;let n=e.closest(`.form-group`);t?n.classList.remove(`has-error`):(n.classList.add(`has-error`),r=!1),e.addEventListener(`blur`,function(){let t=!0;t=e.tagName===`SELECT`?e.value!==``:e.type===`email`?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value):e.value.trim()!==``,t?n.classList.remove(`has-error`):n.classList.add(`has-error`)})}),r){let n=e.querySelector(`.submit-form-btn`),r=n.querySelector(`span`);r.textContent=`Sending...`,n.disabled=!0,setTimeout(()=>{e.style.display=`none`,t.style.display=`flex`,r.textContent=`Send Message`,n.disabled=!1,e.reset()},1200)}}),n&&n.addEventListener(`click`,()=>{t.style.display=`none`,e.style.display=`flex`}))}setupCopyToClipboard(){let e=this.querySelector(`#copy-email-btn`),t=this.querySelector(`#email-address`);!e||!t||e.addEventListener(`click`,()=>{navigator.clipboard.writeText(t.textContent).then(()=>{e.classList.add(`copied`),setTimeout(()=>{e.classList.remove(`copied`)},2e3)}).catch(e=>{console.error(`Failed to copy text: `,e)})})}};customElements.define(`portfolio-contact`,c),(()=>{let e=localStorage.getItem(`theme`),t=window.matchMedia(`(prefers-color-scheme: dark)`).matches;e===`dark`||!e&&t?document.body.classList.add(`dark-theme`):document.body.classList.remove(`dark-theme`)})(),window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener(`change`,e=>{localStorage.getItem(`theme`)||(e.matches?document.body.classList.add(`dark-theme`):document.body.classList.remove(`dark-theme`))});