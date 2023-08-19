const router = require("express").Router();
const userFunc = require("../controllers/user-controller.js");

router.get("/", (req, res) => {
    userFunc.getAllUsers(req, res);
});

router.post("/", (req, res) => {
    userFunc.createUser(req, res);
});

module.exports = router;