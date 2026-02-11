const menuButton = document.querySelector('.menu-button');

menuButton?.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
	menuButton.setAttribute('aria-expanded', `${!isExpanded}`);
});
