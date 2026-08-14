class PortfolioContact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupContactForm();
    this.setupCopyToClipboard();
  }

  render() {
    this.innerHTML = `
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
    `;
  }

  setupContactForm() {
    const form = this.querySelector('#portfolio-contact-form');
    const successPanel = this.querySelector('#contact-success-panel');
    const resetBtn = this.querySelector('#reset-form-btn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isFormValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

      inputs.forEach(input => {
        let isInputValid = true;

        if (input.tagName === 'SELECT') {
          isInputValid = input.value !== '';
        } else if (input.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          isInputValid = emailRegex.test(input.value);
        } else {
          isInputValid = input.value.trim() !== '';
        }

        const group = input.closest('.form-group');
        if (!isInputValid) {
          group.classList.add('has-error');
          isFormValid = false;
        } else {
          group.classList.remove('has-error');
        }

        // Add blur listener for real-time validation feedback
        input.addEventListener('blur', function validateOnBlur() {
          let isValid = true;
          if (input.tagName === 'SELECT') {
            isValid = input.value !== '';
          } else if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(input.value);
          } else {
            isValid = input.value.trim() !== '';
          }

          if (isValid) {
            group.classList.remove('has-error');
          } else {
            group.classList.add('has-error');
          }
        });
      });

      if (isFormValid) {
        // Mock API call loader state
        const submitBtn = form.querySelector('.submit-form-btn');
        const submitText = submitBtn.querySelector('span');
        submitText.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          form.style.display = 'none';
          successPanel.style.display = 'flex';
          submitText.textContent = 'Send Message';
          submitBtn.disabled = false;
          form.reset();
        }, 1200);
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        successPanel.style.display = 'none';
        form.style.display = 'flex';
      });
    }
  }

  setupCopyToClipboard() {
    const copyBtn = this.querySelector('#copy-email-btn');
    const emailText = this.querySelector('#email-address');

    if (!copyBtn || !emailText) return;

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText.textContent)
        .then(() => {
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.classList.remove('copied');
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    });
  }
}

customElements.define('portfolio-contact', PortfolioContact);
export default PortfolioContact;
