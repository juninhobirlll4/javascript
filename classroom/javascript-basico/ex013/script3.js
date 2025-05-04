//const guest = document.querySelector("#guest-1")
//console.log(guest.textContent) //PERMITE VISUALIZAR O CONTEUDO EM TEXTO

//guest.textContent = "João da Silva" //FICAR ATENTO ELE SUBSTITUI TUDO QUE ESTÁ DENTRO COMO TEXTO

//console.log(guest.textContent) // MOSTRA O CONTEUDO VISIVEL E OCULTO
//console.log(guest.innerText) // ESSE MOSTRA O TEXTO DA CLASSE, ID E ETC.
//console.log(guest.innerHTML) // ESSE MOSTRA O HTML COMO TEXTO

const input = document.querySelector("#name")
//input.classList.add("input-error") //PROPRIEDADE QUE ACESSA CLASSES DO ELEMENTO E ADICIONA A CLASSE

//COMO REMOVER CLASSE
//input.classList.remove("input-error")

//TOGGLE SE EXISTI REMOVE, SE NÃO EXISTI ADICIONA
//input.classList.toggle("input-error")

const button = document.querySelector("button")
button.style.backgroundColor = "red" // DA DE MUDAR O ESTILO TAMBÉM, AS PROPRIEDADES CSS