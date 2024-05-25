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

exports.getOneCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const getCategory = await CategoryModel.findById(id);
        if (!getCategory) {
            res.status(404).json({
                message: `not found category with id : ${id}`
            })
            return;
        }
        res.status(200).json({
            data: getCategory
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
exports.updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updateCategory = await CategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
        if (!updateCategory) {
            res.status(404).json({
                message: `not found category with id : ${id}`
            })
            return;
        }
        res.status(200).json({
            message: "success",
            data: updateCategory
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCategory = await CategoryModel.findByIdAndDelete(id);
        if (!deleteCategory) {
            res.status(404).json({
                message: `not found category with id : ${id}`
            })
            return;
        }
        res.status(200).json({
            message: "success",
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}