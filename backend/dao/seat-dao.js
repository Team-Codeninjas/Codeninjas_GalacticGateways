const mongoose = require("../configs/connect-db.js");

const seatSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    type: {
        type: String,
        required: true,
    },
    spaceship_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Seat", seatSchema);