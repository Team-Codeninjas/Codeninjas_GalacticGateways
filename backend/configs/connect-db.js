const {mongoose} = require("mongoose");

mongoose.connect('mongodb://0.0.0.0:27017/galactic-gateways', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Failed to connect to MongoDB", err);
});

module.exports = mongoose;