const mongoose = require("../configs/connect-db.js");

const scheduleSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    ship_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    destination_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    origin_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    departure_date: {
        type: Date,
        required: true,
    },
    arrival_date: {
        type: Date,
        required: true,
    },
    travel_mode: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Schedule", scheduleSchema);