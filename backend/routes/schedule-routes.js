const router = require('express').Router();
const scheduleFunc = require('../controllers/schedule-controller.js');

router.post('/', scheduleFunc.createSchedule);
router.get('/between', scheduleFunc.getSchedulesBetween);


module.exports = router;