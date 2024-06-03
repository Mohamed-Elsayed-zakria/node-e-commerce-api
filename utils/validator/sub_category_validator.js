const { check } = require('express-validator');
const validator = require("../../middleware/validator_middleware");


exports.createSubCategoryValidator = [
    check("name").notEmpty().withMessage("name is required")
        .isLength({ min: 3 }).withMessage("too short name")
        .isLength({ max: 32 }).withMessage("too long name"),
    check("category").notEmpty().withMessage("category is required")
        .isMongoId().withMessage("required category id"),
    validator
]

