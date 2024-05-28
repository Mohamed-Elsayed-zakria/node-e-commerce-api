const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose.connect(process.env.db_url).then((result) => {
        console.log(`database connected : ${result.connection.host}`);
    })
}

module.exports = dbConnection;