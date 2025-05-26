const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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
        break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
    try{
        //Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`


        //Exibe o resultado total
        let total = String(amount * price).replace(".", ",")
        result.textContent = `${total} Reais`

        // Adiciona a classse result ao aperta submit no formulario
        footer.classList.add("show-result")
    } catch (error){
        console.log(error)

    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}