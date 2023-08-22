const router = require('express').Router();
const planetFunc = require('../controllers/planet-controller.js');

router.post('/', planetFunc.createPlanet);


module.exports = router;
