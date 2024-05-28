const CategoryModel = require("../models/category_model")
var slugify = require('slugify')
const ApiError = require('../utils/api_error')

exports.getCategories = async (req, res, next) => {
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
        next(new ApiError(error.message, 400))
    }
}
exports.createCategory = async (req, res, next) => {
    const { name } = req.body;
    const createCategory = new CategoryModel({ name, slug: slugify(name) });
    try {
        await createCategory.save();
        res.status(201).json({
            message: "success",
            data: createCategory
        })
    } catch (error) {
        next(new ApiError(error.message, 400))
    }
}

exports.getOneCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const getCategory = await CategoryModel.findById(id);
        if (!getCategory) {
            return next(new ApiError(`not found category with id : ${id}`, 404));
        }
        res.status(200).json({
            data: getCategory
        })
    } catch (error) {
        next(new ApiError(error.message, 400))
    }
}
exports.updateCategory = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const updateCategory = await CategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
        if (!updateCategory) {
            return next(new ApiError(`not found category with id : ${id}`, 404));
        }
        res.status(200).json({
            message: "success",
            data: updateCategory
        })
    } catch (error) {
        next(new ApiError(error.message, 400))
    }
}

exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteCategory = await CategoryModel.findByIdAndDelete(id);
        if (!deleteCategory) {
            return next(new ApiError(`not found category with id : ${id}`, 404));
        }
        res.status(200).json({
            message: "success",
        })
    } catch (error) {
        next(new ApiError(error.message, 400))
    }
}