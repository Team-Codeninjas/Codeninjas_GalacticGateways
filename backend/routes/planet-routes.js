const router = require('express').Router();
const planetFunc = require('../controllers/planet-controller.js');

router.post('/create', planetFunc.createPlanet);


module.exports = router;
