document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-menu-btn");
    const closeBtn = document.getElementById("close-menu-btn");
    const menu = document.getElementById("slide-menu");
    const overlay = document.getElementById("menu-overlay");
    const menuLinks = document.querySelectorAll(".menu-link");

    // Menu animation duration
    const duration = 0.5;
    const ease = "power3.inOut";

    // Open Menu
    const openMenu = () => {
        gsap.to(menu, { x: 0, duration: duration, ease: ease });
        gsap.to(overlay, { opacity: 1, pointerEvents: "auto", duration: duration });
    };

    // Close Menu
    const closeMenu = () => {
        gsap.to(menu, { x: "100%", duration: duration, ease: ease });
        gsap.to(overlay, { opacity: 0, pointerEvents: "none", duration: duration });
    };

    // Event Listeners
    if (openBtn) openBtn.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (overlay) overlay.addEventListener("click", closeMenu);

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});
