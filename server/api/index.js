const router = require("express").Router();

router.use("/library", require("./library"));
router.use("/users", require("./users"));
router.use("/games", require("./games"));

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
