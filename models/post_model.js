const mongoose = require("mongoose");

const postSChema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    des:{
        type: String,
        required: false
    },
    postPic:{
        type: String,
        default: ""
    },
    categories:{
        type: Array,
        required: false
    }
}, { timestamps: true }
)

const Post = mongoose.model("Post", postSChema);
module.exports = Post;