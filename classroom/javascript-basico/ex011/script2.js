/*
 - Parametros: é a variavel (escopo da função) que irá receber um valor em uma função
 - Argumentos: é o valor que é passado para a função
*/

//Passando o parametro
function message(username){
    console.log("Ola", username)
}

//Passando argumentos
message("Rodrigo")
message("Alfredo")

function sum(a, b){
    console.log(a + b)
}

sum(10, 20)

function jointext(text1, text2 = "", text3 = ""){ //A aspas no text2 e text3 significa que estou dando um valor padrão para eles, sem ter que ser preocupar de ter o problema de undefined
    console.log(text1, text2, text3)
}

jointext("Jose", "Luiz", "Souza")

// LEMBRANDO A ORDEM IMPORTA