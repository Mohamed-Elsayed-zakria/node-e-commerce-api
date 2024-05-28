const express = require("express");
const {
    getOneCategoryValidator,
    updateCategoryValidator,
    deleteCategoryValidator,
    createCategoryValidator
} = require('../utils/validator/category_validator');

const { getCategories,
    createCategory,
    getOneCategory,
    updateCategory,
    deleteCategory

} = require("../services/category_services");
const router = express.Router();

router.post("/", createCategoryValidator, createCategory);
router.get("/", getCategories);

router.get("/:id", getOneCategoryValidator, getOneCategory);
router.put("/:id", updateCategoryValidator, updateCategory);
router.delete("/:id", deleteCategoryValidator, deleteCategory);


module.exports = router;