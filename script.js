const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");
const menuLinks = mobileMenu.querySelectorAll("a");
menuBtn.addEventListener("click",() => {
  mobileMenu.style.display = "block";
  overlay.style.display = "block";
});

closeMenu.addEventListener("click",() => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
});

menuLinks.forEach((link) => {
  link.addEventListener("click",() => {
    mobileMenu.style.display= "none";
    overlay.style.display = "none";
  });
});

overlay.addEventListener("click",() => {
  mobileMenu.style.display= "none";
  overlay.style.display = "none";
});