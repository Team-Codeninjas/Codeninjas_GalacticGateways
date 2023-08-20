const router = require('express').Router();
const travelClassFunc = require('../controllers/travelClass-controller.js');

router.post('/', travelClassFunc.createTravelClass);
router.get('/', travelClassFunc.getTravelClassById);


module.exports = router;