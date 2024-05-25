const express = require("express");
const { getCategories,
    createCategory,
    getOneCategory
} = require("../services/category_services");
const router = express.Router();

router.post("/gategory", createCategory);
router.get("/gategory", getCategories);
router.get("/gategory/:id", getOneCategory);


module.exports = router;