const mongoos = require("mongoose")

const subCategorySchema = mongoos.Schema({
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
    category: {
        type: mongoos.Schema.ObjectId,
        ref: "Category",
        require: [true, "category is required"]
    },
    image: String,
}, { timestamps: true })

module.exports = mongoos.model("SubCategory", subCategorySchema)