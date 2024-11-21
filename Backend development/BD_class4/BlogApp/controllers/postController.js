const Post = require('../models/Post')

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body
        const post = await Post.create({ title, body })

        res.status(200).json({
            Post: post,
            message: "post created successfully"
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            message: "error while creating post"
        })
    }
}

exports.getPost = async (req, res) => {
    try {
        const post = await Post.find().populate("likes").populate("comments").exec()

        res.status(200).json({
            Post: post,
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            message: "error while fetching post"
        })
    }
}