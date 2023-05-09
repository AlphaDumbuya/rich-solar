let data ={
    french: {
        title: "French",
        description: " RICH PV GROUP was foun in 2005, is one of the leading company in China, the products quality has been widely recognized in Nigeria, Sierra Leone, Morocco, Angola, Tanzania and other customers. Sierra Leone RICH PV GROUP is the most professional solar energy company at Sierra Leone, from factory to customers, from production to installation, providing customers with One-stop shop forhigh quality products and services."
    },
    arabic: {
        title: "Arabic",
        description: " RICH PV GROUP was foun in 2005, is one of the leading company in China, the products quality has been widely recognized in Nigeria, Sierra Leone, Morocco, Angola, Tanzania and other customers. Sierra Leone RICH PV GROUP is the most professional solar energy company at Sierra Leone, from factory to customers, from production to installation, providing customers with One-stop shop forhigh quality products and services."
    },
    english: {
        title: "English",
        description: " <p></p> RICH PV GROUP was foun in 2005, is one of the leading company in China, the products quality has been widely recognized in Nigeria, Sierra Leone, Morocco, Angola, Tanzania and other customers. Sierra Leone RICH PV GROUP is the most professional solar energy company at Sierra Leone, from factory to customers, from production to installation, providing customers with One-stop shop forhigh quality products and services.</p>"
    },
}

let langs = document.querySelector('langs'),
    link = document.querySelector('a'),
    title = document.querySelector('title'),
    descr = document.querySelector('description')

link.forEach(el =>{
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active"),
        el.classList.add("active");
        let attr = el.getAttribute("language");
        title.textContent = data[attr].title
        descr.textContent = data[attr].description

    })
})

    

