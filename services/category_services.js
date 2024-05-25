const CategoryModel = require("../models/category_model")
var slugify = require('slugify')

exports.getCategories = async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;
    try {
        const getCategory = await CategoryModel.find().skip(skip).limit(limit);
        res.status(200).json({
            results: getCategory.length,
            page: page,
            data: getCategory
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
exports.createCategory = async (req, res) => {
    const { name } = req.body;
    const createCategory = new CategoryModel({ name, slug: slugify(name) });
    try {
        await createCategory.save();
        res.status(201).json({
            message: "success",
            data: createCategory
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}

