const express = require("express");
const User = require('../models/user_model');
const bcrypt = require("bcrypt");

const getSingleUser = async (req, res)=>{

}

//Update user information
const updateUserInfo = async (req, res)=>{
    if(req.body.userId === req.params.id){//check id request id matches with params id
        if(req.body.password){ //case: user want to change his password
            const salt = await bcrypt.genSalt(10);
            const hasPwd = await bcrypt.hash(req.body.password, salt);
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
        try{
            
        }catch(err){
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = {
    getSingleUser,
    updateUserInfo,
    deleteUser
}