//import model
const Comment = require('../models/Comment')
const Post = require('../models/Post')

// logic
exports.createComment = async (req,res) =>{
    try{
        // fetch data from req body
        const{post,user,body} = req.body

        // create a comment object
        const comment= new Comment({
            post,user,body
        })

        //save the new comment object into database
        const savedComment= await comment.save()

        // find the post by id, and add the new comment int it's comment array
        const updatedPost = await Post.findByIdAndUpdate(post, 
                            {$push: {comments:savedComment._id}}, 
                            {new:true})
                            .populate("comments") // populate the comments array with comment document
                            .exec()

        res.status(200).json({
            post:updatedPost
        })
        
    }
    catch(err){
        console.error(err)
        res.status(500).json({
            message:"error while creating comment"
        })
    }
}