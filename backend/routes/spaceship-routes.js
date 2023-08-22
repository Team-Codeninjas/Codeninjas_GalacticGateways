const router = require('express').Router();
const spaceshipFunc = require('../controllers/spaceship-controller.js');

router.post('/', spaceshipFunc.createSpaceship);
router.get('/', spaceshipFunc.getSpaceshipById);


module.exports = router;