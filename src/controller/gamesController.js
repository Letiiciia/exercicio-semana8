const { response } = require("express");
const games = require("../model/games.json");

const listaGamesContrato = games.map(item => {
    const novoGame = {
        id: item.id,
        nome: item.name,
        genero: item.genre,
        plataformas: item.platforms,
        capa: item.cover,
        data_lancamento: games.first_release_date,
         slug: item.slug,
         resumo: item.summary,
         empresa: item.company
    }

    return novoGame;
})


 const getGamesTotal = (request, response) => {
     console.log(request.url);
     response.status(200).send(listaGamesContrato);
 }
//tentei adicionar essa lista na primeira lista que criei.
//  const listaGamesPorId = games.map(item => {
//      const gameId = {
//          data_lancamento: games.first_release_date,
//          slug: item.slug,
//          resumo: item.summary,
//          empresa: item.company,
//      }
//      return gameId;
//  }) 


const getGamesPorId = (request, response) => {

    const id = request.params.id
    const buscaId = listaGamesContrato.find(item => item.id == id)
    
   
        response.status(200).send(buscaId)
    
   
}





module.exports = {
getGamesTotal,
getGamesPorId

}