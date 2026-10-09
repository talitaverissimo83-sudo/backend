// FRONT END - consome nossa API local 

// Este arquivo roda no navegador, ele faz requisições para nossa API Node.js e mostrea os dados na tela 

// ELEMENTOS DO HTML 
const dogImage = document.getElementById("dogImage");
// nome raça
const breedName = document.getElementByIdv("breedName");
// cachoorro aleatório
const randomBtn = document.getElementById("randomBtn");
// botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn");
// campo de texto onde o usuário digita a raça
const breedInput = document.getElementById(breedInput);
// area onde fica a imagem do cachorro
// usamos querySelector porque é uma classe(.dog-area)
const dogArea = document.querySelector(".dog-area"); 

// URL DA API

const API = "http://localhost:3000/api/cachorros";

// FUNÇÃO PRINCIPAL

async function buscaCachorro(url){
    // adiciona a classe "loading"
    //normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading");

    try {
        // faz requisição HTTP para a API
        const response = await fetch(url);
        // converte a resposta para JSON 
        const data = await response.json();
        // mostra no console a resposta da API
        console.log("Resposta do API:", data)

        // Vamos verificar se a API retornou erro
        if (data.status === "error "){
            // mostra a mensagem de erro na tela
            breedName.textContent = data.message
            // breedName - Elemento HTML 
            // .textContent - Propriedade que define o texto so elemento 
            // data - Objeto com os dados recebidos da API 
            // .message - Propriedade que contém mensagem ou URL 
            breedName.textContent = data.message;
            // removwe a imagem 
            dogImage.src = "";
            // execução da função 
            return;
        }

        // coloca a imagem do cachorro na tela 
        // o src define qual imagem sera exibida 
        dogImage.src = data.message;
          // extrai o nome da raça da URL da imagem
    // exemplo da URL:
    // http://localhost:3000/fotos/husky/1.jpg

    // separa a URL em partes usando "/"
    const partes = data.message.split("/")

    // pega a posição 5 do array
    // que corresponde ao nome da raça
    const raca = partes[5]

    // coloca a primeira letra maiúsula 
    // ex: husky --> Husky
    breedName.textContent =
    // raca.charAt(0) - pega a primeira letra
    // .toUpperCase() - Transforma em maiúscula 
    // raca.slice(1) - pega o texto a partir da segunda letra
        raca.charAt(0).toUpperCase() + raca.slice(1);

    } catch (erro){
        // caso o servidor esteja desligado 
        // ou aconteça algum erro na requisição

        console.error(erro);

        // mostra mensagem na tela 
        breedName.textContent =
        "📴 servidor offline - rode: node server.js"

        // remove mensagem na tela 
        dogImage.src = "";
    } finally {
        // remove a classe de carregamento
        // independentemente de erro ou sucesso.
        dogArea.classList.remove("loading")
    }
 
}

// ==============================
// AÇÕES
// ==============================

    
