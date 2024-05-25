const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "config.env" });

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
    console.log(`mode : ${process.env.NODE_ENV}`);
}

app.get("/", (req, res) => {
    res.send("E commerce app v1.0.0");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});