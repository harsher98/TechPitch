const mobile_nav = document.querySelector(".mobile_nav");
const nav_header = document.querySelector(".header");

function toggleNavbar() {
    // alert("Plz Subscribe ");
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar());