let navBarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

navBarEmail.addEventListener("click", toggledesktopMenu);

function toggledesktopMenu(){
    desktopMenu.classList.toggle("inactive");
};