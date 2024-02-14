const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
  const dropdownTrigger = dropdown.querySelector('.dropdown-trigger');
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');

  dropdownTrigger.addEventListener('mouseenter', () => {
    dropdownMenu.classList.add('visible');
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('visible');
  });
});