const router = require("express").Router();
const monetaryFunc = require("../controllers/monetary-controller.js");

router.get("/",  monetaryFunc.getMonetaryByUserId);
router.post("/", monetaryFunc.createMonetary);

module.exports = router;