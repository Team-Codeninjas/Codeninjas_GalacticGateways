const router = require('express').Router();

const bookingDetailFunc = require('../controllers/bookingDetail-controller.js');

router.post('/', bookingDetailFunc.createBookingDetail);


module.exports = router;