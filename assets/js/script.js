const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");
const toggleMenu = document.getElementById("toggle-menu");
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// JavaScript for active links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Initialize ScrollReveal
// ScrollReveal().reveal('.your-element-class', {
//   delay: 200, // Delay before the animation starts (in milliseconds)
//   distance: '50px', // Distance the element moves during animation
//   origin: 'bottom', // Direction from which the element appears
//   duration: 800, // Duration of the animation
//   easing: 'ease-in-out', // Easing function
// });

// Apply it to your elements
ScrollReveal().reveal(".hero-title", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  duration: 800,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".hero-image-container", {
  delay: 400,
  distance: "50px",
  origin: "bottom",
  duration: 800,
  easing: "ease-in-out",
});

// Apply similar settings to other elements
