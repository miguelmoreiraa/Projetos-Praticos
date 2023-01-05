
// pegando o ID
// const element = document.getElementById("blog-title")

// pegando class
// const element = document.getElementsByClassName("one")

// pegando tag
// const element = document.getElementsByTagName("meta")

// pegando selector
// const element = document.querySelector("[src]")

// pegando selector all (todos)
// com ele consigo fazer um forEach caso queria. (NodeList)
// const element = document.querySelectorAll(".one")

// const element = document.querySelector("input")

// element.textContent += " Olá Devs!"
// element.innerText = "Olá Devs!"
// element.innerHTML = "Olá Devs! <h3>oi</h3>"
// element.value = "Olá Dev"

// const header = document.querySelector("header")
// header.setAttribute("id", "header")
// const headerID = document.querySelector("#header")
// console.log(headerID.getAttribute("id"))
// header.removeAttribute("id")

// const element = document.querySelector("body")

// element.style.backgroundColor = "#f9f3d2"

// Eventos
const element = document.querySelector("h1")

element.addEventListener("click", print);

function print() {
    console.log('print')
}
