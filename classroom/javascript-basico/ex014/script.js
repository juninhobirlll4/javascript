/*const input = document.querySelector("input")

input.addEventListener("input", () => {
    const value = input.value
    
    const regex = /\D+/g

    console.log(value.match(regex))
})*/

/*
form.addEventListener("submit", (event) => {
    event.preventDefault()
    */
    const regex = /\D+/g
    const value = input.value.replace(regex, "X")


    if(regex.test(value)){
        alert("PADRÃO ok")
    }

