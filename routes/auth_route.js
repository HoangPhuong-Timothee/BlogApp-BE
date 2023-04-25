const { 
    registerUser, 
    loginUser 
} = require("../controllers/auth_ctrler");
const router = require("express").Router();

router.post('/register', registerUser)

router.post('/login', loginUser)

module.exports=router;