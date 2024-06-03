const express = require("express");
const { createSubCategory } = require("../controller/sub_category_controller");


const { createSubCategoryValidator } = require('../utils/validator/sub_category_validator');

const router = express.Router();

router.post("/", createSubCategoryValidator, createSubCategory);

module.exports = router