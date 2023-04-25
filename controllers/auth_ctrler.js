const express = require("express");
const bcrypt = require('bcrypt');
const User = require("../models/user_model");

//register
const registerUser = async (req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPwd
        })
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

//login
const loginUser = async (req, res)=>{
    try{
        const findUserByUsername = await User.findOne({ username: req.body.username });
        if(!findUserByUsername){
            return res.status(401).json("Wrong username or passsword!")
        };
        const checkPwd = await bcrypt.compare(req.body.password, findUserByUsername.password);
        if(!checkPwd){
            return res.status(401).json("Wrong username or passsword!")
        };
        const { password, ...rest } = findUserByUsername._doc;
        res.status(200).json(rest);
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    registerUser,
    loginUser
}