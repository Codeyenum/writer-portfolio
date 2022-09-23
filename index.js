let menuButton = document.querySelector("#menu-button");
let closeButton = document.querySelector("#close-button");
let lightBox = document.querySelector(".mobile-nav-lightbox");
let mobileNav = document.querySelector(".mobile-nav");

menuButton.addEventListener ("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");
})

closeButton.addEventListener ("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");
})