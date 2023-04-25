const router = require("express").Router();

router.put('/:id', (req, res)=>{
    res.send("Update user info");
})

router.delete('/:id', (req, res)=>{
    res.send("Delete user info");
})

router.get('/:id', (req, res)=>{
    res.send("Get user with id")
})

router.get('/', (req, res)=>{
    res.send("Get all users")
})

module.exports=router;
