

const leftSlide = document.querySelectorAll("[gsap-slide='x-100']");

gsap.fromTo(".navbar_component", {y: -100},{ y: 0, duration: 0.8});
gsap.fromTo(leftSlide, {x: -100},{ x: 0, delay: 0.9, duration: 0.8});
