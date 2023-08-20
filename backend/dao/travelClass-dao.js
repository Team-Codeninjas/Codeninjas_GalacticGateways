const mongoose = require("../configs/connect-db.js");

const travelClassSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    name: {
        type: String,
        required: true,
    },
    distance_rate: {
        type: Number,
    },
    tax_rate: {
        type: Number,
    },
    meal_rate: {
        type: Number,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("TravelClass", travelClassSchema);