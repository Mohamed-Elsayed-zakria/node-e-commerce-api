const express = require("express");
const { getCategories, createCategory } = require("../services/category_services");
const router = express.Router();

router.post("/gategory", createCategory);
router.get("/gategory", getCategories);



module.exports = router;