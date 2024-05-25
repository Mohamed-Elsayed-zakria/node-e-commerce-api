const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "config.env" });
const dbConnection = require("./config/db_connection");
const gategoryRoutes = require("./routes/category_routes")
const app = express();
const port = process.env.PORT;

// db connection
dbConnection();

// middleware
app.use(express.json())
app.use(gategoryRoutes);


if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`mode ==> ${process.env.NODE_ENV}`);
}

app.get("/", (req, res) => {
    res.send("E commerce app v1.0.0");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});