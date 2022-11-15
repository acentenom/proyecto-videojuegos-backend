const  axios  = require("axios")
const { API_KEY } = process.env;

const allGamesService = async (search) => {
  try {
    let url = '';
    let allGames = [];
    if(search) {
      url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${search}`;
      //console.log('url :>> ', url);
      allGames = await axios.get(url)
      return allGames.data.results;
    }
    const num = 25;
    url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=${num}`;
    for (let i = 0; i < 4; i++) {
      const result = await axios.get(url)
      allGames.push(result)
      url = result.data.next;
    }

    allGames = allGames.reduce((games, currentGame) => {
      return games.concat(currentGame.data.results);
    }, []);

    return allGames;
  } catch (error) {
    throw error;
  }
} 

const gameIdService = async (id) => {
  try {
    const urlId = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
    //console.log('urlId :>> ', urlId);
    const { data: gameId } = await axios.get(urlId)
    //console.log('gameId.data :>> ', gameId.data);
    return gameId;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  allGamesService,
  gameIdService,
}