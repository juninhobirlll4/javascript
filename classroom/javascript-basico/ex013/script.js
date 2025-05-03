// Visualizar o conteudo do document.
//console.log(document)

// Obter o tittle da pagina
console.log(document.title)

// Acessando pelo ID.
const guest = document.getElementById("guest-2")
console.log(guest)

// Vendo as propriedades do objeto.
console.dir(guest)

// Acessar elemento com class
const guestByclass = document.getElementsByClassName(guest)
console.log(guestByclass)   

//Exibir o primeiro elemento da classe
console.log(guestByclass.item(0))

//Selecionar lista de elementos pela TAG, ou seja ul li h1...
const guestBytag = document.getElementsByTagName("li")
console.log(guestBytag)