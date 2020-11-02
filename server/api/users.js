const router = require("express").Router();
const { User } = require("../db");

//get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

//get specific user by id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
});

//create new user
router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

//update user
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const updatedUser = await user.update(req.body);
    res.send(updatedUser);
  } catch (err) {
    next(err);
  }
});

//remove user
router.delete("/:id", async (req, res, next) => {
  try {
    await User.destroy({
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
