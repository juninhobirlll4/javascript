/*try{
    // TENTA EXECUTAR ALGO
    console.log(result)
}catch(error){
    // CAPTURA O ERRO PARA TRATAR
    console.log("Não é possivel executar isso, tente novamente mais tarde.")
}finally{
    console.log("Fim")
}*/

let result = 0

try{
    if(result === 0){
        throw new Error("O valor é igual a zero, não é possivel continuar.")
    }
}catch(error){
    console.log(error)
}finally{
    console.log("Fim")
}