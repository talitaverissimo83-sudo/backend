// SELECIONANDO ELEMENTOS DOM

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

let caixas = document.getElementsByClassName("box");

console.log(titulo);
console.log(caixas);
console.log(imagem);

function alterar(){
    titulo.innerHTML = "Jarvis dominou tudo!" 
    subtitulo.innerHTML = "Só que não!"
    paragrafo.innerText = "O texto do parágrafo foi modificado pelo JavaScript"

    caixas [0].innerText = "Primeiro parágrafo alterado"
    caixas[1].InnerText = "Segundo parágrafo alterado" 

    imagem.src = "https://institucional.ifood.com.br/wp-content/uploads/2022/06/novas-tecnologias.jpg"
}
