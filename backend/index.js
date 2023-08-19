const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./configs/connect-db.js");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan("dev"));
app.use(cors());


const userRoutes = require("./routes/user-routes.js");

app.use("/users", userRoutes);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});