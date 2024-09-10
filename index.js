document.addEventListener("DOMContentLoaded", function() {
    // Check if the animation has already played by checking a flag in localStorage
    if (!localStorage.getItem('animationPlayed')) {
        setTimeout(function() {
            document.body.classList.add('loaded'); // Trigger the transition
            // Set a flag in localStorage to prevent the animation from replaying
            localStorage.setItem('animationPlayed', 'true');
        }, 1000); // Match this timing with the duration of the fadeIn animation
    } else {
        // Immediately add the 'loaded' class if the animation has already played
        document.body.classList.add('loaded');
    }
});


    const sidebar = document.querySelector('.sidebar');
    const heroBanner = document.querySelector('.hero-banner');

    window.showsidebar = function() {
        sidebar.classList.add('active'); // Show sidebar
        heroBanner.classList.add('darkened'); // Darken background
    }

    window.hidesidebar = function() {
        sidebar.classList.remove('active'); // Hide sidebar
        heroBanner.classList.remove('darkened'); // Restore original background
    }
    document.getElementById('scrollToSection').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        document.getElementById('section-1').scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        var section1 = document.getElementById('section-1');
        var headerBrand = document.querySelector('.header-brand');
        
        var section1Top = section1.offsetTop;
        
        if (window.scrollY >= section1Top) {
            header.classList.add('header-scrolled');
            headerBrand.style.display = 'flex'; // Make the header-brand visible
        } else {
            header.classList.remove('header-scrolled');
            headerBrand.style.display = 'none'; // Hide the header-brand
        }
    });
    