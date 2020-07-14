// pegar o container do texto
const postWrap = document.querySelector(".post-wrap")

// criar a barra
let bar = document.createElement("div")

//estilo da barra
bar.style.height = "4px"
bar.style.width = "0"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.2s"

//adiciona no corpo da página
document.body.append(bar)

// atualizar a barra
function updatedBar() {
    // tamanho da caixa que contem o texto
    const alturaTexto = postWrap.offsetHeight
    // verificar em que posição da página o usuario esta 
    const PosicaoYpagina = window.pageYOffset

    // regra de 3
    const updatedBar = PosicaoYpagina * 100 / alturaTexto

    bar.style.width = updatedBar + "%"
}


window.addEventListener("load", () => {

    //verifica o movimento do scroll
    document.addEventListener("scroll", updatedBar)
})