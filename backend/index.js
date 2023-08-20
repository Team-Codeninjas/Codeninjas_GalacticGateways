const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(morgan("dev"));
app.use(cors());


const userRoutes = require("./routes/user-routes.js");
const monetaryRoutes = require("./routes/monetary-routes.js");

app.use("/users", userRoutes);
app.use("/monetary", monetaryRoutes);


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});