const mongoose = require("../configs/connect-db.js");

const spaceshipSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    name: {
        type: String,
        required: true,
    },
    travelClass_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Spaceship", spaceshipSchema);