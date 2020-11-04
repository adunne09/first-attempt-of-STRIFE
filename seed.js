const { green, red } = require("chalk");
const { db, Game, Library, User } = require("./server/db");

const games = [
  {
    gameTitle: "Fortnite",
    challenger: "adunne09",
    challengee: "ninja",
    player1Wager: "20",
    player2Wager: "20000",
    status: "open",
    scope: "public",
  },
  {
    gameTitle: "League of Legends",
    challenger: "loltyler1",
    challengee: "imaqtpie",
    player1Wager: "1",
    player2Wager: "60",
    status: "open",
    scope: "public",
  },
  {
    gameTitle: "Counterstrike",
    challenger: "kenny",
    challengee: "shroud",
    player1Wager: "15000",
    player2Wager: "20000",
    status: "open",
    scope: "public",
  },
  // {
  //   gameTitle: "Among Us",
  //   challenger: "king.slice54",
  //   challengee: "thelegend27",
  //   player1Wager: "20",
  //   player2Wager: "30",
  //   status: "open",
  //   scope: "public",
  // },
  // {
  //   gameTitle: "Warzone",
  //   challenger: "symfuhny",
  //   challengee: "drlupo",
  //   player1Wager: "1350",
  //   player2Wager: "3000",
  //   status: "open",
  //   scope: "public",
  // },
  // {
  //   gameTitle: "Valorant",
  //   challenger: "aimgod55",
  //   challengee: "Xx_ilikeshooters_xX",
  //   player1Wager: "50",
  //   player2Wager: "75",
  //   status: "open",
  //   scope: "public",
  // },
  // {
  //   gameTitle: "Overwatch",
  //   challenger: "samitoD",
  //   challengee: "hanzoMain",
  //   player1Wager: "200",
  //   player2Wager: "150",
  //   status: "open",
  //   scope: "public",
  // },
  // {
  //   gameTitle: "FIFA 21",
  //   challenger: "messi",
  //   challengee: "ronaldo",
  //   player1Wager: "200000",
  //   player2Wager: "100000",
  //   status: "open",
  //   scope: "public",
  // },
  // {
  //   gameTitle: "Apex Legends",
  //   challenger: "ilikeapex123",
  //   challengee: "legenderygamar",
  //   player1Wager: "$10",
  //   player2Wager: "7",
  //   status: "open",
  //   scope: "public",
  // },
];

const library = [
  {
    title: "Fortnite",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2018%2F12%2Ffortnite_logo.jpg&f=1&nofb=1",
  },
  {
    title: "League of Legends",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jBQceyf2E4k2Uzt7JDrmGwHaEK%26pid%3DApi&f=1",
  },
  {
    title: "Counterstrike",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-1sGLHMnAeNw%2FT1YQZOOHr9I%2FAAAAAAAARbA%2FBO_1sPXM1Lc%2Fs1600%2FCounter%2BStrike%2B1.jpg&f=1&nofb=1",
  },
];

const users = [
  {
    name: "adunne09",
    email: "alex12dunne@gmail.com",
    password: "urmother",
  },
  {
    name: "loltyler1",
    email: "loltyler1@gmail.com",
    password: "tyler",
  },
  {
    name: "ninja",
    email: "ninja@gmail.com",
    password: "ninja",
  },
  {
    name: "tfue",
    email: "tfue@gmail.com",
    password: "tfue",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      games.map((game) => {
        return Game.create(game);
      })
    );

    await Promise.all(
      library.map((entry) => {
        return Library.create(entry);
      })
    );

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
