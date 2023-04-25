const router = require("express").Router();

router.post('/register', (req, res)=>{
    res.send("Create new user");
})

router.post('/login', (req, res)=>{
    res.send("Login user");
})

module.exports=router;
