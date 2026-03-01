const menuButton = document.querySelector('.menu-button');
const menuCloseButton = document.querySelector('.menu-close-button');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
}

function openMenu() {
  menuButton?.setAttribute('aria-expanded', 'true');
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
navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});
