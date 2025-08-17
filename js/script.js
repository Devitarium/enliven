// script.js
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
  // Get current page URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // Remove active class from all links first
    link.classList.remove('active');
    
    // Check if link href matches current page
    const linkPage = link.getAttribute('href').split('/').pop();
    if (currentPage === linkPage) {
      link.classList.add('active');
    }
    
    // Special case for homepage (index.html)
    if (currentPage === '' && link.getAttribute('href') === 'index.html') {
      link.classList.add('active');
    }
  });
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        // Optional: Add form validation here
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Formspree will handle the actual submission
    });


