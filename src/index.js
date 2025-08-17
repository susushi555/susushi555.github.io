import gsap from "gsap";

//window.alert("Loaded");
// NAV toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// GSAP
window.addEventListener("load", () => {
  gsap.from(".logo", { duration: 1, y: -50, opacity: 0, ease: "bounce.out" });
  gsap.from(".nav-links li", {
    duration: 0.8,
    x: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
  });
  gsap.from(".megane-text h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3,
  });
  gsap.from(".megane-text p", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });
  gsap.from(".megane-image", {
    duration: 1.2,
    scale: 0,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    delay: 0.6,
  });
  gsap.from(".grid-item", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.8,
  });
  gsap.from(".footer-text", {
    duration: 1.5,
    opacity: 0,
    ease: "power1.out",
    delay: 1.2,
  });
  gsap.from(".contact-title", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "bounce.out",
  });
  gsap.from(".about-title", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "bounce.out",
  });
  gsap.from(".about-subtitle", { duration: 1, y: 30, opacity: 0, delay: 0.3 });
  gsap.from(".about-image", {
    duration: 1.2,
    scale: 0,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    delay: 0.5,
  });
  gsap.from(".profile-text", { duration: 1, x: -50, opacity: 0, delay: 0.7 });
  gsap.from(".skills-list", { duration: 1, x: 50, opacity: 0, delay: 0.9 });
});

