window.addEventListener("load", () => {
    console.log("A pagina foi carregada.")
})

addEventListener("click", (eventClick) => {
    eventClick.preventDefault(eventClick)
    
    // Retorna todas informações do evento
    //console.log(eventClick)

    // Retorna o elemento clicado.
    console.log(eventClick.target)

    // Retorna o textcontent do elemento clicado
    console.log(eventClick.target.textContent)
})