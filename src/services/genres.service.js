const  axios  = require("axios")
const { API_KEY } = process.env;


const genresService = async () => {
    try {
      const url = `https://api.rawg.io/api/genres?key=${API_KEY}`
      const allGenres = await axios.get(url)
      return allGenres.data.results;
    } catch (error) {
      throw error;
    }
  }

  module.exports = genresService;