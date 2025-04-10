// Navigation menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const navigationMenu = document.getElementById('navigationMenu');
  
  // Open menu when clicking the hamburger button
  menuButton.addEventListener('click', function() {
    navigationMenu.classList.remove('hidden');
    navigationMenu.classList.add('flex');
  });
  
  // Close menu when clicking the close button inside the menu
  closeMenuButton.addEventListener('click', function() {
    navigationMenu.classList.add('hidden');
    navigationMenu.classList.remove('flex');
  });
  
  // Close menu when clicking a link (for mobile)
  const menuLinks = document.querySelectorAll('#navigationMenu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      navigationMenu.classList.add('hidden');
      navigationMenu.classList.remove('flex');
    });
  });

  // Handle smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip if it's just '#'
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
