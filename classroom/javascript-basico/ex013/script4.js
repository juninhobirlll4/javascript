const guests = document.querySelector("ul")

const newGuest = document.createElement("li")
const GuestName = document.createElement("span")
GuestName.textContent = "JuninhoCaçador"

const SecondName = document.createElement("span")
SecondName.textContent = " Juriti"

newGuest.append(GuestName, SecondName) //Estou adicionando a const GuestName dentro da newGuest

console.log(newGuest)