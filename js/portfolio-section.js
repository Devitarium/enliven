document.addEventListener('DOMContentLoaded', function() {
  // Add click event to portfolio items for better mobile UX
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Don't trigger if clicking on the view button
      if (!e.target.closest('.view-btn')) {
        const link = this.querySelector('.view-btn');
        if (link) {
          window.location.href = link.href;
        }
      }
    });
  });
  
  // Add keyboard navigation
  portfolioItems.forEach(item => {
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const link = this.querySelector('.view-btn');
        if (link) {
          window.location.href = link.href;
        }
      }
    });
  });
});