const mongoose = require("../configs/connect-db.js");

const bookingDetailSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    schedule_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("BookingDetail", bookingDetailSchema);