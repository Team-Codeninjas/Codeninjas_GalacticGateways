const router = require("express").Router();
const monetaryFunc = require("../controllers/monetary-controller.js");

router.get("/", (req, res) => {
    monetaryFunc.getMonetaryByUserId(req, res);
});

router.post("/", (req, res) => {
    monetaryFunc.createMonetary(req, res);
});

module.exports = router;