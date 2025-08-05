
let lastScroll = window.scrollY;
let nav = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = "0"; // show navbar
  } else {
    nav.style.top = "-80px"; // hide navbar
  }
  lastScroll = window.scrollY;
});