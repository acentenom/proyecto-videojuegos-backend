const { Videogame, Genre } = require('../db')

const addGenresHandler = (body) => {
    try {
     body.forEach( e => {
        Genre.findOrCreate({
            where: {
                id: e.id,
                name: e.name
            }
        })
    });
 
      return body //"Generos guardados exitosamente!"
    } catch (error) {
      throw error;
    }
  }

  module.exports = addGenresHandler;