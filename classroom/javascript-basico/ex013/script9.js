const input = document.querySelector("input")

// keydown - quando uma tecla é pressionada


/*
input.addEventListener("keydown", (event) =>{
    console.log(event)
})*/

input.addEventListener("keypress", (event) =>{
    console.log(event.key)
})

input.onchange = () => 
    {
        inputChange()
}

function inputChange(){
    console.log("O INPUT MUDOU")
}