const mongoose = require("mongoose");

const postSChema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    des:{
        type: String
    },
    postPic:{
        type: String,
        default: ""
    },
    categories:{
        type: Array,
        require: false
    }
}, { timestamps: true }
)

const Post = mongoose.model("Post", postSChema);
module.exports = Post;