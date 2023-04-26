const { 
    getUserInfo, 
    deleteUser, 
    updateUserInfo 
} = require("../controllers/user_ctrler");
const router = require("express").Router();

router.get('/:id', getUserInfo)

router.delete('/:id', deleteUser)

router.put('/:id', updateUserInfo) 

module.exports=router;
