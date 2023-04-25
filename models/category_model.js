const mongoose = require("mongoose");

const postSChema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        require: true
    },
}, { timestamps: true }
)

const Category = mongoose.model("Category", categorySChema);
module.exports = Category;