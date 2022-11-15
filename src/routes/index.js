const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const videogame =  require('./videogame') para despues.
const { Videogame, Genre } = require('../db')
const { allGamesController, gameIdController, addGamesController } = require('../controllers/games.controllers')
const genresVideogamesController = require('../controllers/genres.handler')

const router = Router();
const urlBase = `https://api.rawg.io/api`;
const axios = require('axios');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', allGamesController)
router.get('/videogame/:id', gameIdController)
router.post('/videogames', addGamesController)
router.get('/genres', genresVideogamesController)




module.exports = router;
