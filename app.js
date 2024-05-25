const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("E commerce app v1.0.0");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});