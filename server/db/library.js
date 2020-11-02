// import Game from "./game";

const Sequelize = require("sequelize");
const db = require("./database");

const Library = db.define("Library", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // api: {
  //   type: Sequelize.api,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //   },
  // },
});

// GameLibrary.getCount = async function(id) {
//   const games = await this.findAll({
//     where: {

//     }
//   })
// }

module.exports = Library;
