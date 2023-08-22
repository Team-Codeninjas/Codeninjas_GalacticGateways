const Schedule = require('../dao/schedule-dao.js');
const TripDataDto = require('../dto/tripData-dto.js');

const scheduleFunc = {}

scheduleFunc.createSchedule = async (req, res) => {
    const schedule = {
        ...req.body
    };

    Schedule.create(schedule)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the schedule."
            });
        });
}

scheduleFunc.getSchedulesBetween = async (req, res) => {
    const tripData = TripDataDto.create(req.query.origin_id, req.query.destination_id, req.query.departure_date, req.query.arrival_date);
    Schedule.find({
        origin_id: tripData.originId,
        destination_id: tripData.destinationId,
        departure_date: {$lte: tripData.departureDate},
        arrival_date: {$gte: tripData.arrivalDate}
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving schedules."
        });
    });
}

module.exports = scheduleFunc;