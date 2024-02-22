const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/userToken");

router.use("/user", require("./users"));
router.use("/transaction", userMiddleware, require("./transactions"));
router.use("/auth", require("./auth"));

module.exports = router;
    