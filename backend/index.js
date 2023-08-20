const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan("dev"));
app.use(cors());


app.use("/users", require("./routes/user-routes.js"));
app.use("/monetary", require("./routes/monetary-routes.js"));
app.use("/spaceports", require("./routes/spaceport-routes.js"));
app.use("/planets", require("./routes/planet-routes.js"));
app.use("/schedules", require("./routes/schedule-routes.js"));
app.use("/travel-classes", require("./routes/travelclass-routes.js"));
app.use("/spaceships", require("./routes/spaceship-routes.js"));


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});