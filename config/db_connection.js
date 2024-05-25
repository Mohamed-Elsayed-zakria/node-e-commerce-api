const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const dbConnection = () => {
    mongoose.connect(process.env.db_url).then((result) => {
        console.log(`database connected : ${result.connection.host}`);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = dbConnection;