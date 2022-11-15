const  genresGameModule  = require('../modules/genres.module')




const genresVideogamesController = async (req, res) => {
    try {
      const genresGame = await genresGameModule()
      res.status(200).send(genresGame)
    } catch (error) {
      res.status(500).send({'error': error.message})
    }
  }


  module.exports = genresVideogamesController;