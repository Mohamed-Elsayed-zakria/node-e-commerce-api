const express = require("express");
const { getCategories,
    createCategory,
    getOneCategory,
    updateCategory,
    deleteCategory

} = require("../services/category_services");
const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getOneCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);


module.exports = router;