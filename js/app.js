
const navMenu = document.querySelector("._nav_menu");
const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close_menu")

// Pop up functionality
openMenu.addEventListener('click', _ => {
    navMenu.style.display = 'flex';
})

// close functionality
closeMenu.addEventListener('click', _ => {
    navMenu.style.display = 'none'
})

// nav menu body functionality
navMenu.addEventListener('click', _ => {
    navMenu.style.display = 'none'  // when a user clicks on any party of the nav it closes
})
