var slugify = require('slugify')
const ApiError = require('../utils/api_error')
const asyncHandler = require('express-async-handler')
const SubCategoryModel = require("../models/sub_category_model")

exports.createSubCategory = asyncHandler(async (req, res) => {
    const { name, category } = req.body;
    const subCategory = new SubCategoryModel({ name, slug: slugify(name), category });
    await subCategory.save();
    res.status(201).json({ message: "success" , data: subCategory})
})