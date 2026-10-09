// NOSSA API DE CACHORROS 

// Agora as fotos NÃO são mais baixadas automaticamente! Elas DEVEM existir manualmente na pasta data/fotos

// ROTAS: 
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar framework Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios
const cors = require("cors");
// Importa o módulo de arquivo do NODE 
const fs = require("fs")
// Importa o módulo de caminho do NODE 
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");
// cria a aplicação Express
const app = express();
// definir a porta onde o servidor irá rodar
const PORT = 3000;
// Habilitar o uso do Cors na aplicação 
app.use(cors());

// SERVIR ARQUIVOS ESTÁTICOS

// Nós falamos para o express 
// "Tudo o que estiver na pasta data/fotos pode ser acessado pela URL /fotos"
// Exemplo: hhtps://localhost:3000//fotos/husky/1.jpg
app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data", "fotos") // caminho real 
    )
)

// FUNÇAÕ AUXILIAR 

// função que recebe um array e retorna um item aleatório dele
function sortear(aray) {
    // gera um número aleatório entre 0 e o tamanho do array 
    // array.length - conta quantos itens existe na lista
    // math.random - Sorteia um número decimal entre 0 e 1
    const i = Math.floor(Math.random() * array.length)
    // retorna o item sorteado 
    return array[i]; }

    // ROTAS DA API

    // ROTA 1: cachorro aleatório
    app.get("/api/cachorros/aleatórios", (req, res) => {
// req request(requisição) = é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro
// res - response(resposta) = é o que o servidor evia de volta, por exemplo, o endereço da foto do cachorro 

// pegar todas as fotos de todas as racas 
// object.values pega os valores do objeto
// flat transforma tudo em um único array
const todasAsFotos = Object.values(cachorros).flat();
    })

// sorteia uma foto aleatória
const item = sortear (todasAsFotos)

// responder para o cliente em formato JSON 
res.json({
    //status da resposta
    status: "success",
    // URL da imagem que foi sorteada
    message: `http://localhost:${PORT}/fotos/${item}` 
});

// ROTA 2 -  Cachorro por raça
// exemplo de acesso: 
//http:/localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {

    // pega o parametro da URL  (ex: husky)
    const raca = req.params.raca.toLocaleLowerCase();
    // params = contém os parâmetros definidos na URL da rota
    // .raca = acessa o parâmetro chamado raca 
    // .toLowerCase() = Transforma todas as letras em minúsculas
    if (!cachorros[raca]){
        // cachorros[raca]: procurar a raça dentro do objeto *cachorros*
        //!: significa não: Nesse caso, verifica se a raça não existe ou se seu valor é falso
        // se não existir, retorna erro 404
        res.status(404).json({
            status: "error",
            message: `Raça "${raca}" não encontrada`
        });

        // encerra a execução da rota
        return;
    }

    // sorteia a execução da rota
    const item  = sortear(cachorros[raca]);

    // retorna a resposta em JSON
    res.json({
        status: "succcess",
        messagem: `http://localhost:${PORT}/fotos/${item}`
    });


}); 