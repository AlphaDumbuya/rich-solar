
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


  // Set the API key and endpoint
var apiKey = "AIzaSyAt4aqlcBJlKT27zkQUxGO7vCQUNNjanE0";
var endpoint = "https://translation.googleapis.com/language/translate/v2";

// Get the translation button and add an event listener
var translateButton = document.getElementById("translate-button");
translateButton.addEventListener("click", function() {
  // Get the text to translate
  var textToTranslate = document.body.innerText;

  // Send a translation request to the Google Translation API
  var xhr = new XMLHttpRequest();
  xhr.open("POST", endpoint);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Get the translation result and replace the text on the page
      var translationResult = JSON.parse(xhr.responseText);
      var translatedText = translationResult.data.translations[0].translatedText;
      document.body.innerHTML = document.body.innerHTML.replace(textToTranslate, translatedText);
    }
  };
  var requestBody = {
    "q": textToTranslate,
    "target": "fr" // Replace with your target language code
  };
  xhr.send(JSON.stringify(requestBody));
});
