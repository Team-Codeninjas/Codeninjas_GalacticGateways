const Seat = require('../dao/seat-dao.js');

const seatFunc = {};

seatFunc.createSeat = async (req, res) => {
    const seat = {
        type: req.body.type,
        spaceship_id: req.body.spaceship_id
    };

    await Seat.create(seat)
        .then((seat) => {
            res.status(200).json(seat);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}


module.exports = seatFunc;