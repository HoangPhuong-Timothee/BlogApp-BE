const { 
    getAllPosts, 
    createPost,
    getSinglePost,
    updatePost,
    deletePost
} = require("../controllers/post_ctrler");
const router = require("express").Router();

router.get('/', getAllPosts)

router.post('/', createPost)

router.get('/:id', getSinglePost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

module.exports=router;
