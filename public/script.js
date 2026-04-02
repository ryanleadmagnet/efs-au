function initPage() {

    // --- Sticky Header Logic ---
    let prevScrollPos = window.pageYOffset;
    const stickyHeader = document.getElementById('sticky-header');

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        
        // Show sticky header after scrolling past 300px
        if (currentScrollPos > 300) {
            stickyHeader.classList.add('visible');
        } else {
            stickyHeader.classList.remove('visible');
        }
        
        prevScrollPos = currentScrollPos;
    };

    // --- Mobile Menu Logic ---
    const mobileMenuToggles = document.querySelectorAll('.mobile-menu-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    
    // Create an overlay for clicking outside mobile menu
    const menuOverlay = document.createElement('div');
    menuOverlay.classList.add('menu-overlay');
    menuOverlay.style.position = 'fixed';
    menuOverlay.style.top = '0';
    menuOverlay.style.left = '0';
    menuOverlay.style.width = '100%';
    menuOverlay.style.height = '100%';
    menuOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    menuOverlay.style.zIndex = '199';
    menuOverlay.style.display = 'none';
    menuOverlay.style.opacity = '0';
    menuOverlay.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(menuOverlay);

    function toggleMobileMenu() {
        mobileNavMenu.classList.toggle('active');
        if (mobileNavMenu.classList.contains('active')) {
            menuOverlay.style.display = 'block';
            setTimeout(() => menuOverlay.style.opacity = '1', 10);
            document.body.style.overflow = 'hidden';
        } else {
            menuOverlay.style.opacity = '0';
            setTimeout(() => menuOverlay.style.display = 'none', 300);
            document.body.style.overflow = '';
        }
    }

    mobileMenuToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleMobileMenu);
    });

    menuOverlay.addEventListener('click', toggleMobileMenu);

    // Mobile Dropdown toggles
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle > a');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle('open');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if(dropdown.classList.contains('open')) {
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            } else {
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            }
        });
    });

    // --- Quote Modal Logic ---
    const quoteModal = document.getElementById('quote-modal');
    const quoteTriggers = document.querySelectorAll('.quote-trigger');
    const closeModalBtn = document.getElementById('close-modal');

    quoteTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            quoteModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Here you would set the iframe src to the actual quote form URL
            // quoteModal.querySelector('iframe').src = "URL";
        });
    });

    closeModalBtn.addEventListener('click', () => {
        quoteModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    quoteModal.addEventListener('click', (e) => {
        if (e.target === quoteModal) {
            quoteModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Parallax Effect (peace section circles) ---
    const parallaxElements = document.querySelectorAll('.parallax-circle');
    
    // Parallax for the shared bg-wrapper circle overlay
    const sectionsCircle = document.getElementById('sections-circle');

    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            // Existing parallax circles
            parallaxElements.forEach(el => {
                const rect = el.parentElement.getBoundingClientRect();
                const centerOffset = (rect.top + rect.height/2) - window.innerHeight/2;
                el.style.transform = `translateY(${centerOffset * 0.5}px)`;
            });

            // Circle overlay on shared bg sections
            if (sectionsCircle) {
                const wrapper = sectionsCircle.parentElement;
                const rect = wrapper.getBoundingClientRect();
                const centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
                sectionsCircle.style.transform = `translateY(${centerOffset * 0.45}px)`;
            }
        });
    });

}

// Run immediately if DOM is already loaded, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}

