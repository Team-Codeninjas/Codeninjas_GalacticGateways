const mongoose = require("../configs/connect-db.js");

const userSchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    image_path: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);