const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");
const toggleMenu = document.getElementById("toggle-menu");
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
console.log("1");
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
console.log("2");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const cardsContainer = document.querySelector(".testimonial-cards");
const cards = document.querySelectorAll(".testimonial-card");
const cardWidth = cards[0].offsetWidth + 20; // Assuming all cards have the same width
const cardsPerPage = 3;

let currentPage = 0;
let totalPages = Math.ceil(cards.length / cardsPerPage);

function updateVisibility() {
  const startIndex = currentPage * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, cards.length);

  cards.forEach((card, index) => {
    card.style.display =
      index >= startIndex && index < endIndex ? "block" : "none";
  });

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === totalPages - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    const moveDistance = -cardWidth * currentPage * cardsPerPage;
    cardsContainer.style.transform = `translateX(${moveDistance}px)`;
    updateVisibility();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    const moveDistance = -cardWidth * currentPage * cardsPerPage;
    cardsContainer.style.transform = `translateX(${moveDistance}px)`;
    updateVisibility();
  }
});

updateVisibility();

console.log("3");
// Initialize ScrollReveal
// ScrollReveal().reveal(".your-element-class", {
//   delay: 200, // Delay before the animation starts (in milliseconds)
//   distance: "50px", // Distance the element moves during animation
//   origin: "bottom", // Direction from which the element appears
//   duration: 800, // Duration of the animation
//   easing: "ease-in-out", // Easing function
// });

// Apply it to your elements
// ScrollReveal().reveal(".hero-title", {
//   delay: 200,
//   distance: "50px",
//   origin: "bottom",
//   duration: 800,
//   easing: "ease-in-out",
// });

// ScrollReveal().reveal(".hero-image-container", {
//   delay: 400,
//   distance: "50px",
//   origin: "bottom",
//   duration: 800,
//   easing: "ease-in-out",
// });

// Apply similar settings to other elements
