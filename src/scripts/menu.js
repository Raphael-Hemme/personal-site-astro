const menuBtn = document.querySelector('.open-menu-btn');
const overlay = document.getElementById('mobile-overlay');

function openMenu() {
  overlay?.classList.add('open');
  menuBtn?.setAttribute('aria-expanded', 'true');
  menuBtn?.setAttribute('aria-label', 'Close navigation menu');
  if (menuBtn) menuBtn.textContent = menuBtn.dataset.labelOpen ?? 'close';
  document.body.classList.add('menu-open');
  // Focus first link for keyboard accessibility
  const firstLink = overlay?.querySelector('a');
  firstLink?.focus();
}

function closeMenu() {
  overlay?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  menuBtn?.setAttribute('aria-label', 'Open navigation menu');
  if (menuBtn) menuBtn.textContent = menuBtn.dataset.labelClose ?? 'menu';
  document.body.classList.remove('menu-open');
  menuBtn?.focus();
}

// Toggle on button click
menuBtn?.addEventListener('click', () => {
  const isOpen = overlay?.classList.contains('open');
  isOpen ? closeMenu() : openMenu();
});

// Close when clicking a nav link (navigate and close)
overlay?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay?.classList.contains('open')) {
    closeMenu();
  }
});
