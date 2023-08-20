const router = require("express").Router();
const userFunc = require("../controllers/user-controller.js");

router.get("/", userFunc.getUserByID);
router.post("/", userFunc.createUser);

module.exports = router;