const guests = document.querySelector("ul")

newGuest.classList.add(guest)
const newGuest = document.createElement("li")
const guestName = document.createElement("span")
const guestSurame = document.createElement("span")

guestName.textContent = "Diego"
guestSurame.textContent = "Junin"

// Adiciona ANTES DO ultimo filho
//newGuest.append(guestName) //pode adicionar apos a virgula guestSurame)

// Adiciona APOS DO ultimo filho
//newGuest.prepend(guestSurame)

// É mais simples que o append e é mais simples, aceitando apenas um argumento
newGuest.appendChild(guestName)

guests.append(newGuest)