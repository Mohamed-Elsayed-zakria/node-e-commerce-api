const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "gategory require"],
        unique: [true, "gategory must be unique"],
        minlength: [3, "too short category name"],
        maxlength: [32, "too long category name"]
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: String,
},
    { timestamps: true }
);
module.exports = mongoose.model("Category", categorySchema);