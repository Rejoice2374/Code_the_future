// show/hide nav menu
const menu = document.querySelector(".nav__links");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

const openNav = () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
};

menuBtn.addEventListener("click", openNav);

const closeNav = () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};

closeBtn.addEventListener("click", closeNav);
