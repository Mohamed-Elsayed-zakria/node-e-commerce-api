const { check } = require('express-validator');
const validator = require("../../middleware/validator_middleware");


exports.createCategoryValidator = [
    check("name").notEmpty().withMessage("name is required")
    .isLength({ min: 3 }).withMessage("too short name")
    .isLength({ max: 32 }).withMessage("too long name"),
    validator
]

exports.getOneCategoryValidator = [
    check('id').isMongoId().withMessage("invalid category id format"),
    validator
]

exports.updateCategoryValidator = [
    check('id').isMongoId().withMessage("invalid category id format"),
    validator
]

exports.deleteCategoryValidator = [
    check('id').isMongoId().withMessage("invalid category id format"),
    validator
]