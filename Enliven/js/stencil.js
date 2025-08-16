document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.stencil-gallery');
  if (!gallery) return;

  const scroller = gallery.querySelector('.gallery-scroller');
  const prevBtn = gallery.querySelector('.prev-btn');
  const nextBtn = gallery.querySelector('.next-btn');
  const items = gallery.querySelectorAll('.gallery-item');
  
  // Only enable buttons if needed
  function updateButtons() {
    const canScrollPrev = scroller.scrollLeft > 0;
    const canScrollNext = scroller.scrollLeft < scroller.scrollWidth - scroller.clientWidth;
    
    prevBtn.style.display = canScrollPrev ? 'flex' : 'none';
    nextBtn.style.display = canScrollNext ? 'flex' : 'none';
  }

  // Scroll to position
  function scrollTo(position) {
    scroller.scrollTo({
      left: position,
      behavior: 'smooth'
    });
  }

  // Button event listeners
  prevBtn.addEventListener('click', () => {
    scrollTo(scroller.scrollLeft - 300);
  });

  nextBtn.addEventListener('click', () => {
    scrollTo(scroller.scrollLeft + 300);
  });

  // Update buttons on scroll/resize
  scroller.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);

  // Initial check
  updateButtons();
});