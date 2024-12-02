const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close")
const navMenu = document.querySelector(".nav__list");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
    navToggle.classList.add("hide")
    navClose.classList.add("show")
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navToggle.classList.remove("hide")
    navClose.classList.remove("show")
})