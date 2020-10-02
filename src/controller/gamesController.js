const games = require("../model/games.json");

const listaGamesContrato = games.map(item => {
    const novoGame = {
        id: item.id,
        nome: item.name,
        genero: item.genre,
        plataformas: item.platforms,
        capa: item.cover
    }

    return novoGame;
})


 const getGamesTotal = (request, response) => {
     console.log(request.url);
     response.status(200).send(listaGamesContrato);
 }

const listaGamesPorId = games.map(item => {
    const gameId = {
        data_lancamento: item.first_release_date,
        slug: item.slug,
        resumo: item.summary,
        empresa: item.company  
    }

    return gameId;
})











module.exports = {
getGamesTotal
}