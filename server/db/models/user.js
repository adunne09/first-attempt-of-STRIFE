const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  friends: {
    type: Sequelize.ARRAY,
    //array of friends keys
  },
  pastWagers: {
    type: Sequelize.ARRAY,
    //array of wager keys
  },
  openWagers: {
    type: Sequelize.ARRAY,
  },
  accountStatus: {
    type: Sequalize.ENUM("newb", "challenger", "beast", "god"),
  },
});

export default User;
