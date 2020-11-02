const router = require("express").Router();
const { Library } = require("../db");

//get all available games
router.get("/", async (req, res, next) => {
  try {
    const games = await Library.findAll();
    res.send(games);
  } catch (err) {
    next(err);
  }
});
//get specific game
router.get("/:id", async (req, res, next) => {
  try {
    const game = await Library.findByPk(req.params.id);
    res.send(game);
  } catch (err) {
    next(err);
  }
});

//add new game to library
router.post("/", async (req, res, next) => {
  try {
    const newGame = await Library.create(req.body);
    res.send(newGame);
  } catch (err) {
    next(err);
  }
});

//update game in library (update count too?)
router.put("/:id", async (req, res, next) => {
  try {
    const game = await Library.findByPk(req.params.id);
    const updatedLibrary = await game.update(req.body);
    res.send(updatedLibrary);
  } catch (err) {
    next(err);
  }
});

//remove game from library
router.delete("/:id", async (req, res, next) => {
  try {
    await Library.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
