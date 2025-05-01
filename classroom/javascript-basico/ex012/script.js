//Função anônima (função que não possui nome)

const showMessage = function(){
    console.log("Olá, Júnior")
}

console.log(showMessage())

const showMessage2 = function(name, idade, message){
    console.log("Olá, " + name + idade + message)
}

console.log(showMessage2("Juriti ", "33 anos,", "da cabeça quadrada."))