
const { allGamesService, gameIdService } = require("../services/games.service");
const { addGameHandler, allGamesDb, dbSearch } = require("../handlers/games.handlers")

//hacer el llamado al servicio o base de dato y lógica.
const imageNotFound = "https://pbs.twimg.com/media/FcnxVw3aAAcNCUd.jpg"

const allGamesModule = async (name) => {

	try {
		if (!name) {
			const allGames = await allGamesService();
			const videogamesDb = await allGamesDb();
			//console.log('videogamesDb :>> ', videogamesDb);
			const videogamesTotal = allGames.concat(videogamesDb)
			// TODO: hacer un cooncat con las dos constantes anteriores
			const gamesList = videogamesTotal.map(g => {
				return {
					id: g.id,
					name: g.name,
					image: g.background_image || imageNotFound,
					genres: g.genres?.map(i=> i.name) || g.Genres?.map(i=> i.name),
					platforms: g.platforms.map(p => {
						return {
							id: p.platform.id,
							name: p.platform.name
						}
					})
				}
			})
			return gamesList;
		}
		let allGames = await allGamesService(name);
		let gamesFromDb = await dbSearch(name);
		console.log('gamesFromDb :>> ', gamesFromDb);
		let videogamesTotal = gamesFromDb.concat(allGames)
		if (videogamesTotal.length > 15) videogamesTotal = videogamesTotal.slice(0, 15);
		const gameList = videogamesTotal.map(g => {
			let videogame = {
				id: g.id,
				name: g.name,
				image: g.background_image || imageNotFound,
				genres: g.genres?.map(genre => genre.name) || g.Genres?.map(genre => genre.name),
				platforms: g.platforms.map(p => {
					return {
						id: p.platform.id,
						name: p.platform.name
					}
				})
			}
			console.log('videogame************* :>> ', videogame);
			return videogame;
		})
		return gameList;

	} catch (error) {
		throw error;
	}
}

const gameIdModule = async (id) => {
	try {
		const gameId = await gameIdService(id)

		const gameById = {
			id: gameId.id,
			name: gameId.name,
			image: gameId.background_image,
			description: gameId.description,
			genres: gameId.genres.map(g => g.name),
			released: gameId.released,
			rating: gameId.rating,
			platforms: gameId.platforms.map(p => {
				return {
					id: p.platform.id,
					name: p.platform.name
				}
			})
		}
		//console.log('gameById :>> ', gameById);
		return gameById;
	} catch (error) {
		throw error;
	}
}

const addGamesModule = async (body) => {
	//console.log('body :>> ', body);
	try {
		if (!body.name || !body.description || !body.platforms) throw new Error("Falta datos obligatorios.");
		const addGame = await addGameHandler(body);
		//console.log('body ////////////////////:>> ', body);
		//console.log('aqui********* :>> ');
		return addGame;

	} catch (error) {
		throw error;
	}
}

// const genresGameModule = async () => {
// 	try {
// 		//obtener todos los generos de la API
// 		const genres = await genresService();
// 		const allGenres = genres.map(g => {
// 			return {
// 				id: g.id,
// 				name: g.name
// 			}
// 		})
// 		const addGenres = await addGenresHandler(allGenres);
// 		return addGenres;


// 		//Guardas los generos en la base de datos
// 	} catch (error) {
// 		throw error;
// 	}
// }


module.exports = {
	allGamesModule,
	gameIdModule,
	addGamesModule,
}