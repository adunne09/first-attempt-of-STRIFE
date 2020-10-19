import Game from "./game";

const Sequelize = require("sequelize");
const db = require("../db");

const GameLibrary = db.define("GameLibrary", {
  type: Sequelize.STRING,
});

export default GameLibrary;
