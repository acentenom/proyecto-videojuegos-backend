
const { Videogame, Genre } = require('../db')
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;


const addGameHandler = async (body) => {
  //console.log('body :>> ', body);
  try {
  const newGame = await Videogame.create({...body})
  console.log('newGame :>> ', newGame);
  const searchGenres = await Genre.findAll({
    where: {
        id: body.genres
    }
})
//console.log('searchGenres :>> ', searchGenres);
//console.log('newGame :>> ', newGame);
newGame.addGenre(searchGenres)
return newGame;
  } catch (error) {
   // console.log("error en addGameHandler:", error)
    throw error;
  }
}

const allGamesDb = async () => {
try {
  //console.log('aqui llegue :>> ');
    const games = await Videogame.findAll({
      include: [{
          model: Genre,
          attributes: ["name"],
          thrhoug:{
              attributes: []
          }
      }]
  })
   
  return games

} catch (error) {
  throw error;
}
}
//buscador en BD
const dbSearch = async (name) => {
 const games = await Videogame.findAll({
    where: {
      name:{
        [Op.iLike]: `%${name}%`
      }
    },
    include: [{
      model: Genre,
      attributes:["name"]
    }]
  })
  return games;
}
  


module.exports = {
    addGameHandler,
    allGamesDb,
    dbSearch
}