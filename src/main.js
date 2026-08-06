import './style.css';
import './components/PortfolioNavbar.js';
import './components/PortfolioHero.js';
import './components/PortfolioAbout.js';
import './components/PortfolioExperience.js';
import './components/PortfolioProjects.js';
import './components/PortfolioServices.js';
import './components/PortfolioTech.js';
import './components/PortfolioTestimonials.js';
import './components/PortfolioContact.js';
import { inject } from '@vercel/analytics';

// Apply saved theme or system preference before rendering fully
const applyInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
};

applyInitialTheme();

// Listen to system changes if no override is set
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    if (e.matches) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
});

// Initialize Vercel Web Analytics
inject();
