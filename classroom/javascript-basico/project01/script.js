const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

const USD = 5.65
const EUR = 6.42
const GPB = 7.64

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () =>{
    
    const hashCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hashCharactersRegex, "") //Ele faz a substituição do amount value pelo hashCharactersRegex, onde a formula que coloquei no regex faz com que as letras sejam substituidas por nada ("")
})

form.onsubmit = (event) =>{
    event.preventDefault()

    switch(currency.value){ //AQUI PASSA QUAL A MOEDA SELECIONADA
        case "USD": convertCurrency(amount.value, USD, "USD$")
        break
        case "EUR": convertCurrency(amount.value, EUR, "€")
        break 
        case "GPB": convertCurrency(amount.value, GPB, "£")
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try{
        // Adiciona a classse result ao aperta submit no formulario
        footer.classList.add("show-result")
    } catch (error){
        console.log(error)

        //Remove a classe RESULT
        footer.classList.remove("show-result")
        alert("Ops... Algo deu errado, tente novamente!")
    }
}