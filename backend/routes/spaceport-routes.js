const router = require('express').Router();
const spaceportFunc = require('../controllers/spaceport-controller.js');

router.get('/', (req, res) => {
    spaceportFunc.getSpaceports(req, res);
});

router.post('/', (req, res) => {
    spaceportFunc.createSpaceport(req, res);
});

router.get('/withPlanet', (req, res) => {
    spaceportFunc.getSpaceportsWithPlanet(req, res);
});

module.exports = router;
