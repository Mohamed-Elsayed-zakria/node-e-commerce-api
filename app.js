const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const ApiError = require("./utils/api_error");
const errorHandler = require("./utils/error_handler");
dotenv.config({ path: "config.env" });
const dbConnection = require("./config/db_connection");
const gategoryRoutes = require("./routes/category_routes")
const app = express();
const port = process.env.PORT;

// db connection
dbConnection();

// middleware
app.use(express.json())
app.use("/api/v1/categories", gategoryRoutes);

app.all("*", (req, res, next) => {
    next(new ApiError(`can't find ${req.originalUrl} on this server`, 400));
});

app.use(errorHandler);


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

process.on("unhandledRejection", (err) => {
    console.log(`unhandledRejection Error : ${err.name} | ${err.message}`);
})