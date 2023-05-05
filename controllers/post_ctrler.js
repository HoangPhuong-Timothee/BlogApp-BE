const Post = require('../models/post_model');

const getAllPosts = async (req, res)=>{
    const username = await req.query.user;
    const category = await req.query.cate;
    try{
        let posts;
        // switch(postType){
        //     case username: posts = await Post.find({ username })
        //     break;
        //     case category: posts = await Post.find({ categories: { $in: [category] } })
        //     break;
        //     default: posts = await Post.find()
        // }
        if(username){
            posts = await Post.find({ username });
        }else if(category){
            posts = await Post.find({ categories: { $in: [category] } });
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);    
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

const getSinglePost = async (req, res)=>{
    try{
        const singlePost = await Post.findById(req.params.id);
        res.status(200).json(singlePost);
    }catch(err){
        res.status(500).json({ message: err.message })
        }
}


const createPost = async (req, res)=>{
    try{
        const newPost = new Post(req.body);
        const post = await newPost.save();
        res.status(200).json(post)
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

const updatePost = async (req, res)=>{
    const findPostById = await Post.findById(req.params.id);
    try{
        if(req.body.username === findPostById.username && req.body.postId === req.params.id){
            const updatedPost = await findPostById.updateOne({ $set: req.body }, { new: true });
            res.status(200).json(updatedPost);
        }else{
            res.status(401).json("Update fail, this is not your post!!!")
        }
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

const deletePost = async (req, res)=>{
    const findPostById = await Post.findById(req.params.id);
    try{
       if(req.body.username === findPostById.username && req.body.postId === req.params.id){
        await findPostById.deleteOne();
        res.status(200).json("Delete post successfully!!!");
       }else{
        res.status(401).json("Delete fail, this is not your post!!!")
       }
    }catch(err){
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
}