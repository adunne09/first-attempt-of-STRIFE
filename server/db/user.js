const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  // friends: {
  //   type: Sequelize.ARRAY,
  //   //array of friends keys
  // },
  // pastWagers: {
  //   type: Sequelize.ARRAY,
  //   //array of wager keys
  // },
  // openWagers: {
  //   type: Sequelize.ARRAY,
  // },
});

module.exports = User;
