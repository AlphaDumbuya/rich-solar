
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

// Slider
var currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none"
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}

// next and previous functionality
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
    init(currentSlide)
  }
  
  const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
    init(currentSlide)
  }
  
  document.querySelector(".next").addEventListener('click', next)
  document.querySelector(".prev").addEventListener('click', prev)

//   slide show functionality

setInterval(() => {
    next()
  }, 5000);
  
//   dots for navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      init(index)
      currentSlide = i
    })
  })