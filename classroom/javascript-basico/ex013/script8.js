const form = document.querySelector("form")

form.onsubmit = (event) =>{
    event.preventDefault()
    console.log("Você fez, 'submit', no formulario#1")
}

//É A MESMA COISA DE USAR ISSO ABAIXO:
form.addEventListener("submit", (event) =>{
    console.log("Você fez, 'submit', no formulario#2")
})