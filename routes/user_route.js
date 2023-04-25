const { 
    getSingleUser, 
    deleteUser, 
    updateUserInfo 
} = require("../controllers/user_ctrler");
const router = require("express").Router();

router.get('/:id', getSingleUser)

router.delete('/:id', deleteUser)

router.put('/:id', updateUserInfo) 

module.exports=router;
