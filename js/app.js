const navMenu = document.querySelector(".header__nav--links");
const hamburgerBtn = document.querySelector(".header__hamburger");
const bodyEl = document.body;

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("display-nav");
  hamburgerBtn.classList.toggle("active");
  bodyEl.classList.toggle("overlay");
});
