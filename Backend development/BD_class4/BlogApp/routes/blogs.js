const express = require('express')
const router= express.Router()

//extract controllers
const {createPost,getPost}= require('../controllers/postController')
const {likePost,unlikePost}= require('../controllers/likecontroller')
const {createComment,getComment}= require('../controllers/commentController')

//define API
//create and retrieve post
router.post('/posts/create',createPost)
router.get('/posts',getPost)

//like and unlike post
router.post('/posts/like',likePost)
router.post('/posts/unlike',unlikePost)

// create and retrieve comments
router.post('/comment/create', createComment)
// router.get('/posts/:id/comment', getComment)

module.exports= router