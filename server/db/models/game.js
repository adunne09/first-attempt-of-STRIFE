const Sequelize = require("sequelize");
const db = require("../db");
import gameLibrary from ("./gameLibrary")

const Game = db.define("game", {
  gameType: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
    challenger: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  challengee: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  player1Wager: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  player2Wager: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  length: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
  },
  scope: {
    type: Sequelize.ENUM("private", "public"),
  },
  isPublic: {
    type: Sequelize.ENUM("yes", "no"),
  }
});

Game.beforeValidate((game) => {
  if (!game.slug) {
    game.slug = game.title
      .replace(/\s/g, "_")
      .replace(/\W/g, "")
      .toLowerCase();
  }

  //create slug to make past/open games searchable

  const availableGame = gameLibrary.find((existingGame) => existingGame === game.gameType)
  if (!availableGame) throw Error('Game is not available')

  //check if game is an available game type (import API from as many games as you can find, thats gonna be really tricky)

  //check if the payment info of both parties is legitimate and can be charged for proposed wager amounts

  //challenger field should be automatically filled in with the person who is creating the wager

  //scope
    // private => only able to challenge people on friends list

  //status 
    // closed => only able to be seen as game that has finished
    // open => shows in each player's 'open' games section

  //isPublic
    // yes => shows in "past wagers" section of home page
    // no => shows in "friends wager" section, only available for you and your friends to see
});

export default Game