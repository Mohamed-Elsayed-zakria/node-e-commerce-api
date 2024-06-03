const CategoryModel = require("../models/category_model")
var slugify = require('slugify')
const ApiError = require('../utils/api_error')
const asyncHandler = require('express-async-handler')

exports.getCategories = asyncHandler(async (req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;
    const getCategory = await CategoryModel.find().skip(skip).limit(limit);
    res.status(200).json({
        countResults: getCategory.length,
        page: page,
        data: getCategory
    })
})

exports.createCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const createCategory = new CategoryModel({ name, slug: slugify(name) });
    await createCategory.save();
    res.status(201).json({
        message: "success",
        data: createCategory
    })
})

exports.getOneCategory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const getCategory = await CategoryModel.findById(id);
    if (!getCategory) {
        return next(new ApiError(`not found category with id : ${id}`, 404));
    }
    res.status(200).json({
        data: getCategory
    })
})
exports.updateCategory = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;

    const updateCategory = await CategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
    if (!updateCategory) {
        return next(new ApiError(`not found category with id : ${id}`, 404));
    }
    res.status(200).json({
        message: "success",
        data: updateCategory
    })

})

exports.deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deleteCategory = await CategoryModel.findByIdAndDelete(id);
    if (!deleteCategory) {
        return next(new ApiError(`not found category with id : ${id}`, 404));
    }
    res.status(200).json({
        message: "success",
    })

})