const { allGamesModule, gameIdModule, addGamesModule } = require('../modules/games.module')

const allGamesController = async (req, res) => {
  try {
    const { name } = req.query;
    //console.log('namecontroller :>> ', name);
    const allGames = await allGamesModule(name);
    res.status(200).send(allGames)
  } catch (error) {
    res.status(500).send({ 'error': error.message })
  }
}

const gameIdController = async (req, res) => {
  try {
    const { id } = req.params;
    //console.log('id :>> ', id);
    const gameId = await gameIdModule(id);
    res.status(200).send(gameId)
  } catch (error) {
    res.status(500).send({ 'error': error.message })
  }
}

const addGamesController = async (req, res) => {
  try {
    const addGame = await addGamesModule(req.body)
    //console.log('req.body :>> ', req.body);
    res.status(200).send(addGame)
  } catch (error) {
    res.status(500).send({ 'error': error.message })
  }
}



module.exports = {
  allGamesController,
  gameIdController,
  addGamesController
}