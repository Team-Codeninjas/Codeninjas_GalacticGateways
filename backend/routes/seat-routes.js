const router = require('express').Router();
const SeatFunc = require('../controllers/seat-controller.js');

router.post('/', SeatFunc.createSeat);


module.exports = router;