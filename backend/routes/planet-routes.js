const router = require('express').Router();
const planetFunc = require('../controllers/planet-controller.js');

router.post('/', (req, res) => {
    planetFunc.createPlanet(req, res);
});

module.exports = router;
