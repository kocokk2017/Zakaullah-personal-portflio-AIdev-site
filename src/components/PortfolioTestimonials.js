class PortfolioTestimonials extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.setupCarousel();
  }

  render() {
    this.innerHTML = `
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
                ${'★'.repeat(5)}
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
                ${'★'.repeat(5)}
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
                ${'★'.repeat(5)}
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
    `;
  }

  setupCarousel() {
    const scroller = this.querySelector('.testimonials-scroller');
    const cards = this.querySelectorAll('.testimonial-card');
    const prevBtn = this.querySelector('.prev-btn');
    const nextBtn = this.querySelector('.next-btn');

    if (!scroller || cards.length === 0) return;

    // Scroll by card width
    const getCardScrollStep = () => {
      const cardStyle = window.getComputedStyle(cards[0]);
      const cardWidth = cards[0].offsetWidth;
      const margin = parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight) || 0;
      const gap = parseInt(window.getComputedStyle(scroller).gap) || 0;
      return cardWidth + gap + margin;
    };

    prevBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: -getCardScrollStep(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: getCardScrollStep(), behavior: 'smooth' });
    });

    // Fallback animation logic for browsers without scroll-driven animation support
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const tick = () => {
        const scrollerRect = scroller.getBoundingClientRect();
        const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;

        cards.forEach(card => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          
          const maxDistance = scrollerRect.width / 1.5;
          const distance = Math.abs(scrollerCenter - cardCenter);
          
          let progress = 1 - (distance / maxDistance);
          progress = Math.max(0, Math.min(1, progress));

          // Easing: cubic bezier approximate
          const easeProgress = progress * progress * (3 - 2 * progress);
          
          const scale = 0.9 + (0.1 * easeProgress);
          const opacity = 0.5 + (0.5 * easeProgress);

          card.style.transform = `scale(${scale})`;
          card.style.opacity = `${opacity}`;
        });
      };

      scroller.addEventListener('scroll', tick);
      window.addEventListener('resize', tick);
      // Run on next frame
      requestAnimationFrame(tick);
    }
  }
}

customElements.define('portfolio-testimonials', PortfolioTestimonials);
export default PortfolioTestimonials;
