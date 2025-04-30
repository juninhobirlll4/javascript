showMessage("Ola")

function showMessage(message){
    console.log(message)
    linhaFinal()

    function linhaFinal(){
        console.log("-------")
    }
}

showMessage("Se loko")

// Se eu tentar executar a linhaFinal(), não vai dar certo pois não está dentro do escopo que é onde se tem as chaves para fechar e abrir a função.