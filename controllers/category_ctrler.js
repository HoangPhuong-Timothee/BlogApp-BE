const express = require('express');
const Category = require('../models/category_model');

const getAllCategories = async (req, res)=>{
    try{
        const allCategories = await Category.find();
        res.status(200).json(allCategories); 
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

const getCategory = async (req, res)=>{
    try{
        const getCategory = await Category.findById(req.params.id);
        res.status(200).json(getCategory); 
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

const addNewCategory = async (req, res)=>{
    try{
        const cate = await new Category(req.body).save();
        res.status(200).json(cate);   
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    addNewCategory
}