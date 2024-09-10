    
 
    
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
    