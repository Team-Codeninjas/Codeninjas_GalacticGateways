const mongoose = require("../configs/connect-db.js");

const spaceportSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    name: {
        type: String,
        required: true,
    },
    origin_planet_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    service_charge: {
        type: Number,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Spaceport", spaceportSchema);