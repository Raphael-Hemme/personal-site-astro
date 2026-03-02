const menuButton = document.querySelector('.menu-button');
const menuCloseButton = document.querySelector('.menu-close-button');
const menuPanel = document.querySelector('.menu-panel');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuPanel?.classList.remove('is-open');
}

function openMenu() {
  menuButton?.setAttribute('aria-expanded', 'true');
  menuPanel?.classList.add('is-open');
}

// Toggle menu on hamburger button click
menuButton?.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close menu on close button click
menuCloseButton?.addEventListener('click', closeMenu);

// Close menu when clicking a nav link (navigate and close)
menuPanel?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close menu when clicking the overlay background
menuPanel?.addEventListener('click', (event) => {
  if (event.target === menuPanel) {
    closeMenu();
  }
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});
