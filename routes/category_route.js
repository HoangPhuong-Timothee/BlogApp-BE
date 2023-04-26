const router = require("express").Router();
const {
    getCategory,
    addNewCategory,
    getAllCategories
} = require('../controllers/category_ctrler');

router.get('/:id', getCategory)

router.get('/', getAllCategories)

router.post('/', addNewCategory)

module.exports=router;
