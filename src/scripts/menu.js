const openMenuBtn = document.querySelector('.open-menu-btn');
const overlay = document.getElementById('mobile-overlay');
const closeMenuBtn = document.querySelector('.overlay-close');

function openOverlay() {
  overlay?.classList.add('open');
  openMenuBtn?.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
  // Focus first link for keyboard accessibility
  const firstLink = overlay?.querySelector('a');
  firstLink?.focus();
}

function closeOverlay() {
  overlay?.classList.remove('open');
  openMenuBtn?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  openMenuBtn?.focus();
}

// Open on trigger click
openMenuBtn?.addEventListener('click', openOverlay);

// Close on close button click
closeMenuBtn?.addEventListener('click', closeOverlay);

// Close when clicking a nav link (navigate and close)
overlay?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeOverlay);
});

// Close on backdrop tap (click outside the nav/close button)
overlay?.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closeOverlay();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay?.classList.contains('open')) {
    closeOverlay();
  }
});