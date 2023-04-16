 /*  const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("active", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n = n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})) 
*/

const navMenu = document.querySelector(".nav-menu");
const openMenu = document.querySelector(".hamburger");
console.log(openMenu);

openMenu.addEventListener('click', _ => {
    navMenu.style.display = 'flex';
})
