const router = require('express').Router();
const spaceportFunc = require('../controllers/spaceport-controller.js');

router.get('/', spaceportFunc.getSpaceports);
router.post('/', spaceportFunc.createSpaceport);
router.get('/withPlanet',spaceportFunc.getSpaceportsWithPlanet);

module.exports = router;
