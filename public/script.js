function initPage() {

    // --- Mobile Menu Logic ---
    const mobileMenuToggles = document.querySelectorAll('.mobile-menu-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    if (mobileNavMenu) {
        // Mobile Dropdown toggles
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle > a');
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                dropdown.classList.toggle('open');

                // Toggle icon
                const icon = this.querySelector('i');
                if (dropdown.classList.contains('open')) {
                    icon.classList.remove('fa-caret-down');
                    icon.classList.add('fa-caret-up');
                } else {
                    icon.classList.remove('fa-caret-up');
                    icon.classList.add('fa-caret-down');
                }
            });
        });
    }

}

// Run immediately if DOM is already loaded, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}

