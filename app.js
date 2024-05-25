const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "config.env" });

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`mode ==> ${process.env.NODE_ENV}`);
}

app.get("/", (req, res) => {
    res.send("E commerce app v1.0.0");
});

mongoose.connect(process.env.db_url).then((result) => {
    console.log(`database connected : ${result.connection.host}`);
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(err);
});