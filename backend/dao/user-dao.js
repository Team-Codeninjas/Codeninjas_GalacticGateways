const mongoose = require("../configs/connect-db.js");

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    starcomm_addr: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const UserDao = mongoose.model("UserDao", userSchema);

module.exports = UserDao;