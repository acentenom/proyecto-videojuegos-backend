const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', 
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      validate: {
        min: 1,
        max: 5,
      },
    },
    image: {
      type: DataTypes.STRING,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      //(
        // "PC",
        // "PlayStation 5",
        // "PlayStation 4", 
        // "PlayStation 3",
        // "PlayStation 2",
        // "PlayStation",
        // "PSP",
        // "PSP Vita",
        // "Xbox One",
        // "Xbox Serie S/X",
        // "Xbox 360",
        // "Xbox",
        // "Nintendo Switch",
        // "Nintendo 3DS",
        // "Nintendo DS",
        // "Nintendo DSi",
        // "Nintendo 64",
        // "Wii U",
        // "Wii",
        // "GameCube",
        // "Game Boy Advance",
        // "Game Boy Color",
        // "Game Boy",
        // "SNES",
        // "NES",
        // "Classic Micintosh",
        // "Apple II",
        // "Commodore/Amiga",
        // "Atari 7800",
        // "Atari 5200",
        // "Atari 2600",
        // "Atari Flashback",
        // "Atari 8-BIT",
        // "Atari ST",
        // "Atari Lynx",
        // "Atari XEGS",
        // "Genesis",
        // "SEGA Saturn",
        // "SEGA CD",
        // "SEGA 32X",
        // "SEGA Master System",
        // "Dreamcast",
        // "3DO",
        // "Jaguar",
        // "Gamer Gear",
        // "Neo Geo",
        // "Web",
        // "iOS",
        // "Android",
        // "Linux",
        // "MacOS"),
    },
  }, {
    timestamps: false,

  });
};
