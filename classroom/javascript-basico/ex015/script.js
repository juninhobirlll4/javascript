const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) =>{
    event.preventDefault()

    const value = input.value
    console.log(value)
    const isNumber = /\d+/g

    if(isNumber.test(value)){
        alert("O texto contém números. Digite com letras e não números")
    } else{
        alert("Enviado")
    }
}