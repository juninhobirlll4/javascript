//CALLBACK FUNCTION: é uma função passada para outra função como um argumento.

function execute(taskname, callback){
    console.log("Executando a tarefa: ", taskname)
   callback()
}

function callback(){
    console.log("CallBack executado.")
}

//Passando para a função
execute("Download do arquivo...", callback)

//Criando a função com Arrow Function
execute("Upload do arquivo...", () =>{
    console.log("Arquivo uploudado!")
})

//Função de t allback com função anônima
execute("Excluindo arquivo...", function(){
    console.log("Arquivo excluido") //A função está representando o CallBack, ou seja, na função execute está o taskname e o callback separados por virgular, então ele separa por virgula  tanto pela função Arrow quanto pela anonima, assim fazendo o tallback de uma função dentro da outra executando qualquer comando
})