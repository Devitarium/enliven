        //carousel
 document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;
    const slideInterval = 5000; // 5 seconds
    
    // Initialize the carousel
    function initCarousel() {
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        startSlideShow();
    }
    
    // Show slide by index
    function showSlide(index) {

        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        
        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentIndex + 1);
        resetInterval();
    }
    

    function prevSlide() {
        showSlide(currentIndex - 1);
        resetInterval();
    }
    
    // Start automatic slideshow
    function startSlideShow() {
        intervalId = setInterval(nextSlide, slideInterval);
    }
    
    // Reset the interval timer
    function resetInterval() {
        clearInterval(intervalId);
        startSlideShow();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
            resetInterval();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Initialize the carousel
    initCarousel();
});