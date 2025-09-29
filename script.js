// Mobile nav toggle
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.getElementById("mnav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

// Reveal animations
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

// Product slider functionality
const sliders = document.querySelectorAll(".slider-wrapper");
sliders.forEach(sliderWrapper => {
  const slider = sliderWrapper.querySelector(".product-slider");
  const prevBtn = sliderWrapper.querySelector(".slider-btn.prev");
  const nextBtn = sliderWrapper.querySelector(".slider-btn.next");

  const scrollAmount = 300; // pixels per click

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
