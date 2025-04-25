/*Conversão de tipos ocorre quando explicitamente você transforma um valor de um tipo para o outro. Isso é feito de forma consciente, usando funções ou metodos especificos para realizar a conversão*/

let value = "9"
console.log(typeof value)
console.log(typeof Number(value))
//se eu quiser fazer esse texto virar number eu faço isso acima

//outro jeito é:

let age = 18
console.log(typeof age.toString)
console.log(typeof String(age))

let option = 1
console.log(Boolean(option))
console.log(typeof Boolean(option))

/*Coerção de tipos ocorre quando, o JavaScript tenta automaticamente converter um dos valores para um tipo compativel antes de realizar uma operação*/


//exemplo de coerção
console.log(10 + "5")