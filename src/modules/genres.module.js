const  genresService  = require('../services/genres.service')
const addGenresHandler = require('../handlers/genres.handler')

const genresGameModule = async () => {
	try {
		//obtener todos los generos de la API
		const genres = await genresService();
		const allGenres = genres.map(g => {
			return {
				id: g.id,
				name: g.name
			}
		})
		const addGenres = await addGenresHandler(allGenres);
		return addGenres;


		//Guardas los generos en la base de datos
	} catch (error) {
		throw error;
	}
}


module.exports = genresGameModule;