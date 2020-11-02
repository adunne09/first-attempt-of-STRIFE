const Game = require("./game");
const User = require("./user");
const Library = require("./library");
const db = require("./database");

// Channel.hasMany(Game, {
//   onDelete: "cascade",
//   hooks: true,
// });

User.hasMany(Game); //user has many games
Game.belongsTo(User); // game belongs to participating users
// Game.belongsTo(GameLibrary); // game belongs to game library?

module.exports = {
  db,
  Game,
  User,
  Library,
};
