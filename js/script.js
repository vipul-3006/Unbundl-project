/* Mobile menu toggle */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  mobileMenu.setAttribute('aria-hidden', String(!open));
  hamburger.setAttribute('aria-expanded', String(open));
});

/* Testimonials simple carousel */
const testimonials = document.getElementById('testimonials');
const testBlocks = Array.from(document.querySelectorAll('.testimonial'));
let currentTest = 0;

function showTest(index){
  if(index < 0) index = testBlocks.length - 1;
  if(index >= testBlocks.length) index = 0;
  currentTest = index;
  testimonials.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('prevTest').addEventListener('click', () => {
  showTest(currentTest - 1);
});
document.getElementById('nextTest').addEventListener('click', () => {
  showTest(currentTest + 1);
});

/* auto-advance every 6s */
setInterval(() => showTest(currentTest + 1), 6000);

/* Insert current year in footer */
document.getElementById('year').textContent = new Date().getFullYear();
