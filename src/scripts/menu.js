// Module-scoped so the Escape handler and astro:before-preparation
// can call it without duplicating the logic.
function closeMenu() {
  const overlay = document.getElementById('mobile-overlay');
  const menuBtn = document.querySelector('.open-menu-btn');
  overlay?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  menuBtn?.setAttribute('aria-label', 'Open navigation menu');
  if (menuBtn) menuBtn.textContent = menuBtn.dataset.labelClose ?? 'menu';
  document.body.classList.remove('menu-open');
}

// Called on initial load and after every client-side navigation,
// since the DOM nodes are swapped (not persisted) on each navigation.
function initMenu() {
  const menuBtn = document.querySelector('.open-menu-btn');
  const overlay = document.getElementById('mobile-overlay');

  function openMenu() {
    overlay?.classList.add('open');
    menuBtn?.setAttribute('aria-expanded', 'true');
    menuBtn?.setAttribute('aria-label', 'Close navigation menu');
    if (menuBtn) menuBtn.textContent = menuBtn.dataset.labelOpen ?? 'close';
    document.body.classList.add('menu-open');
    const firstLink = overlay?.querySelector('a');
    firstLink?.focus();
  }

  menuBtn?.addEventListener('click', () => {
    const isOpen = overlay?.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('mobile-overlay');
    if (overlay?.classList.contains('open')) closeMenu();
  }
});

document.addEventListener('astro:before-preparation', closeMenu);

document.addEventListener('astro:page-load', initMenu);
