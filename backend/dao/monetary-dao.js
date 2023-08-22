const mongoose = require("../configs/connect-db.js");

const monetarySchema = new mongoose.Schema({
    //mongodb will automatically create a unique id for each user
    method_name: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },
    image_path: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Monetary", monetarySchema);