const primaryNav = document.querySelector('.primary-navbar');
const navToggle  = document.querySelector('.mobile-nav-toggle');
const navLinks   = document.querySelectorAll('.primary-navbar li a');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    // SHOW MOBILE NAV
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        
    }
    // HIDE MOBILE NAV
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});

for (let link of navLinks) {

    link.addEventListener('click', () => {
    
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        
    })
}