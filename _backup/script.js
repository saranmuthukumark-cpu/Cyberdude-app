// ── PRELOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    const pre = document.getElementById('preloader');
    if (pre) pre.classList.add('hidden');
  }, 1200);
});

// ── NAVBAR ──
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    if (backToTop) backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    if (backToTop) backToTop.classList.remove('visible');
  }
  highlightNav();
  revealOnScroll();
  counterTrigger();
});

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-link, .btn-quote').forEach(el => {
  el.addEventListener('click', () => navLinksEl.classList.remove('open'));
});

// ── ACTIVE NAV ──
function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 130;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const h = sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + h) link.classList.add('active');
      else link.classList.remove('active');
    }
  });
}

// ── BACK TO TOP ──
if (backToTop) {
  backToTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── SCROLL REVEAL ──
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

// ── SKILL BARS ──
function animateSkills() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    if (bar.dataset.done) return;
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      bar.dataset.done = 'true';
      bar.style.width = bar.dataset.width + '%';
    }
  });
}

// Add to scroll
const _origReveal = revealOnScroll;
window.addEventListener('scroll', animateSkills);
animateSkills();

// Mark reveal elements
document.querySelectorAll(
  '.svc-card, .port-card, .port-card-3d, .price-card, .testi-card, .train-card, .blog-card, .sb-item, .cd-item, .career-card, .social-big-btn'
).forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
});
revealOnScroll();

// ── COUNTERS ──
function animateCounter(el) {
  if (el.dataset.done) return;
  el.dataset.done = 'true';
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

function counterTrigger() {
  document.querySelectorAll('.counter').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) animateCounter(el);
  });
}
counterTrigger();

// ── PORTFOLIO FILTER ──
document.querySelectorAll('.pf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.port-card, .port-card-3d').forEach(card => {
      const cats = card.dataset.cat || '';
      const show = filter === 'all' || cats.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});

// ── TESTIMONIALS SLIDER ──
let testiCurrent = 0;
const testiSlides = document.querySelectorAll('.testi-slide');

function showTesti(idx) {
  testiSlides.forEach(s => s.classList.remove('active'));
  testiCurrent = (idx + testiSlides.length) % testiSlides.length;
  testiSlides[testiCurrent].classList.add('active');
}

const testiNext = document.getElementById('testiNext');
const testiPrev = document.getElementById('testiPrev');
if (testiNext) testiNext.addEventListener('click', () => showTesti(testiCurrent + 1));
if (testiPrev) testiPrev.addEventListener('click', () => showTesti(testiCurrent - 1));

// Auto-advance testimonials
setInterval(() => showTesti(testiCurrent + 1), 5000);

// ── CONTACT FORM ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('formSubmit');
    const original = btn.innerHTML;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      const success = document.getElementById('formSuccess');
      success.style.display = 'block';
      contactForm.reset();
      setTimeout(() => { success.style.display = 'none'; }, 5000);
    }, 1500);
  });
}

// ── SERVICE CARD HOVER TILT ──
document.querySelectorAll('.svc-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ── SMOOTH ANCHOR SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar ? navbar.offsetHeight + 10 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── 3D TILT FOR PORTFOLIO CARDS ──
document.querySelectorAll('.port-card-3d').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-10px)`;
    card.style.boxShadow = `${-x * 20}px ${20 + y * 10}px 60px rgba(0,0,0,.12), 0 0 0 1px rgba(228,121,17,.15)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});
