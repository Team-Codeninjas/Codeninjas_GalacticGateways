const mongoose = require("../configs/connect-db.js");

const planetSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    name: {
        type: String,
        required: true,
    },
    origin_galaxy: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Planet", planetSchema);