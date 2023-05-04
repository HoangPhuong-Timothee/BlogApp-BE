const router = require("express").Router();
const {
    addNewCategory,
    getAllCategories
} = require('../controllers/category_ctrler');

router.get('/', getAllCategories)

router.post('/', addNewCategory)

module.exports=router;
