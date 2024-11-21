const Like = require('../models/Like')
const Post = require('../models/Post')

//like a post
exports.likePost = async (req, res) => {
    try {
        // fetch data from req body
        const { post, user } = req.body

        //creating like object
        const like = await Like.create({ post, user })

        const updatedlike = await Post.findByIdAndUpdate(post,
            { $push: { likes: like._id } },
            { new: true })
            .populate("likes").exec()

        res.status(200).json({
            like: updatedlike
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            message: "error while liking post"
        })
    }
}

// unlike a post
exports.unlikePost = async (req,res) =>{
    try{
        const{post,like} = req.body
        // find and delete, like from Like collection
        const deletedlike = await Like.findByIdAndDelete({post:post, _id:like})

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,
                            {$pull :{likes:deletedlike._id}},
                            {new:true})

        res.status(200).json({
            unlike:updatedPost
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            message: "error while unliking post"
        })
    }
}