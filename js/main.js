// =========================================
// PRAGYA CLASSES BMR — Main JS
// =========================================
import { NAV_ITEMS, getWhatsAppLink, CONTACT } from './data.js';

// ---- Navbar Component ----
export function renderNavbar(activePage = '') {
  const currentPath = window.location.pathname;
  return `
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <a href="/" class="nav-logo">
          <div class="nav-logo-icon">PC</div>
          <div class="nav-logo-text">
            <span>प्रज्ञा क्लासेज</span>
            <span>BARMER</span>
          </div>
        </a>

        <div class="nav-links" id="navLinks">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}" class="nav-link ${currentPath === item.href || currentPath.endsWith(item.href) ? 'active' : ''}">${item.label}</a>
          `).join('')}
          <a href="/login.html" class="nav-cta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            लॉगिन
          </a>
        </div>

        <div class="nav-hamburger" id="navHamburger" onclick="toggleMobileNav()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <div class="nav-overlay" id="navOverlay" onclick="toggleMobileNav()"></div>
  `;
}

// ---- Footer Component ----
export function renderFooter() {
  return `
    <footer class="footer" id="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="/" class="nav-logo" style="color: white;">
              <div class="nav-logo-icon">PC</div>
              <div class="nav-logo-text">
                <span style="color: white;">प्रज्ञा क्लासेज</span>
                <span style="color: rgba(255,255,255,0.5);">BARMER</span>
              </div>
            </a>
            <p>हिंदी भाषा-व्याकरण, काव्यशास्त्र, साहित्येतिहास की सर्वश्रेष्ठ कोचिंग। 2014 से हज़ारों विद्यार्थियों का भरोसा।</p>
            <div class="footer-social">
              <a href="${CONTACT.youtube}" target="_blank" rel="noopener" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="${CONTACT.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="${getWhatsAppLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer-title">त्वरित लिंक</h4>
            <div class="footer-links">
              <a href="/" class="footer-link">होम</a>
              <a href="/courses.html" class="footer-link">कोर्स</a>
              <a href="/free-resources.html" class="footer-link">फ्री रिसोर्सेज</a>
              <a href="/test-series.html" class="footer-link">टेस्ट सीरीज़</a>
              <a href="/about.html" class="footer-link">हमारे बारे में</a>
            </div>
          </div>

          <div>
            <h4 class="footer-title">परीक्षाएँ</h4>
            <div class="footer-links">
              <a href="/courses.html" class="footer-link">स्कूल व्याख्याता</a>
              <a href="/courses.html" class="footer-link">वरिष्ठ शिक्षक</a>
              <a href="/courses.html" class="footer-link">NET/JRF</a>
              <a href="/courses.html" class="footer-link">REET</a>
              <a href="/courses.html" class="footer-link">कॉलेज सहायक आचार्य</a>
            </div>
          </div>

          <div>
            <h4 class="footer-title">संपर्क करें</h4>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>${CONTACT.phone1}<br>${CONTACT.phone2}</span>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>${CONTACT.email}</span>
            </div>
            <div class="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${CONTACT.address}</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2014-${new Date().getFullYear()} प्रज्ञा क्लासेज बाड़मेर। सर्वाधिकार सुरक्षित।</p>
          <p>Made with ❤️ for Hindi Medium Students</p>
        </div>
      </div>
    </footer>
  `;
}

// ---- WhatsApp FAB ----
export function renderWhatsAppFab() {
  return `
    <a href="${getWhatsAppLink()}" target="_blank" rel="noopener" class="whatsapp-fab" id="whatsappFab" aria-label="WhatsApp Chat">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
    </a>
  `;
}

// ---- Initialize global features ----
export function initApp() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  // Counter animation
  const counters = document.querySelectorAll('[data-count], [data-dynamic-counter]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // Load YouTube Videos
  loadYouTubeVideos();

  // Testimonials Slider Setup
  const track = document.querySelector('.testimonials-track');
  if (track) {
    // Duplicate inner HTML to create seamless loop
    const originalContent = track.innerHTML;
    track.innerHTML = originalContent + originalContent;
  }
}

async function loadYouTubeVideos() {
  const container = document.querySelector('.youtube-grid');
  if (!container) return;
  try {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCb04gbDehbDP69hrvsZ9NVQ');
    const data = await res.json();
    if (data.items && data.items.length > 0) {
      container.innerHTML = data.items.slice(0, 3).map((video, i) => `
        <div class="youtube-card-enhanced reveal revealed reveal-delay-${i + 1}" onclick="window.open('${video.link}','_blank')">
          <div style="position:relative;">
            <img src="${video.thumbnail}" alt="${video.title}" class="youtube-thumb" loading="lazy">
            <div class="youtube-play-overlay">
              <div class="youtube-play-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="9.545 15.568 15.818 12 9.545 8.432"/></svg>
              </div>
            </div>
          </div>
          <div style="padding:16px 18px;display:flex;align-items:flex-start;gap:12px;">
            <div style="width:36px;height:36px;background:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:white;font-size:0.75rem;font-weight:700;">PC</div>
            <div>
              <p style="font-weight:600;font-size:0.9rem;color:white;line-height:1.4;font-family:var(--font-hindi);margin-bottom:6px;">${video.title}</p>
              <p style="font-size:0.78rem;color:rgba(255,255,255,0.5);">Pragya Classes BMR</p>
            </div>
          </div>
        </div>
      `).join('');
    }
  } catch (e) {
    console.error('Failed to auto load youtube videos', e);
  }
}

function animateCounter(el) {
  let target = 0;
  if (el.hasAttribute('data-dynamic-counter')) {
    const base = parseInt(el.getAttribute('data-base') || '0');
    const startD = new Date('2026-04-01').getTime();
    const now = new Date().getTime();
    const daysElapsed = Math.floor((now - startD) / (1000 * 3600 * 24));
    target = base + Math.floor(daysElapsed * 1.5); // Increment roughly 1-2 per day naturally
  } else {
    target = parseInt(el.getAttribute('data-count'));
  }

  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * eased);

    el.textContent = current.toLocaleString('en-IN') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ---- Mobile Nav Toggle ----
window.toggleMobileNav = function () {
  const links = document.getElementById('navLinks');
  const hamburger = document.getElementById('navHamburger');
  const overlay = document.getElementById('navOverlay');

  links.classList.toggle('open');
  hamburger.classList.toggle('open');
  overlay.classList.toggle('open');

  document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
};

// ---- Toast Notification ----
export function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : '⚠️'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ---- Countdown Timer ----
export function startCountdown(targetDate, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  function update() {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance < 0) {
      container.innerHTML = '<p style="color: var(--danger);">ऑफर समाप्त!</p>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    container.innerHTML = `
      <div class="countdown-item"><div class="countdown-number">${days}</div><div class="countdown-label">दिन</div></div>
      <div class="countdown-item"><div class="countdown-number">${hours}</div><div class="countdown-label">घंटे</div></div>
      <div class="countdown-item"><div class="countdown-number">${minutes}</div><div class="countdown-label">मिनट</div></div>
      <div class="countdown-item"><div class="countdown-number">${seconds}</div><div class="countdown-label">सेकंड</div></div>
    `;

    requestAnimationFrame(() => setTimeout(update, 1000));
  }

  update();
}

// ---- Format Price ----
export function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}
