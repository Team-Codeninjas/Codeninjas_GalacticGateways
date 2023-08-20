const BookingDetail = require("../dao/bookingDetail-dao.js");

const bookingDetailFunc = {};

bookingDetailFunc.createBookingDetail = async (req, res) => {
    const bookingDetail = {
        user_id: req.body.user_id,
        schedule_id: req.body.schedule_id,
        seat_ids: req.body.seat_ids,
        monetary_id: req.body.monetary_id,
        total_charge: req.body.total_charge
    };

    await BookingDetail.create(bookingDetail)
        .then((bookingDetail) => {
            res.status(200).json(bookingDetail);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}


module.exports = bookingDetailFunc;