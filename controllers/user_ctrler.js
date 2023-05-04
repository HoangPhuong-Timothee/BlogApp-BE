const User = require('../models/user_model');
const bcrypt = require("bcrypt");
const Post = require("../models/post_model");

const getUserInfo = async (req, res)=>{
    try{
        const findUserById = await User.findById(req.params.id);
        const { password, ...rest } = findUserById._doc;
        res.status(200).json(rest);
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

//Update user information
const updateUserInfo = async (req, res)=>{
    if(req.body.userId === req.params.id){//check id request id matches with params id
        if(req.body.password){ //case: user want to changes his password
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updateUser);
        }catch(err){
            res.status(500).json({ message: err.message })
        }
    }else{
        res.status(401).json("Update fail, this is not your account!")
    }
}

//Delete user 
const deleteUser = async (req, res)=>{
    if(req.body.userId === req.params.id){
        const findUserById = await User.findById(req.params.id);
        if(findUserById){
            try{
                await Post.deleteMany({ username: findUserById.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("Delete user successfully!!!")
            }catch(err){
                res.status(500).json({ message: err.message })
            }
        }else{
            res.status(404).json("User not found!!!")
        }
    }else{
        res.status(401).json("Delete fail, this is not your account")
    }
}

module.exports = {
    getUserInfo,
    updateUserInfo,
    deleteUser
}