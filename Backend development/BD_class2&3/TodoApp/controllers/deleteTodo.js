// import todo model
const Todo = require('../models/Todo')

exports.deleteTodo = async(req,res) => {
    try{
        const{id} =req.params

        await Todo.findByIdAndDelete(id)

        res.json({
            success:true,
            message:`Todo of ${Todo.title} successfully deleted`
        })
    }
    catch(err){
        console.error(err),
        res.status(200).json({
            success:false,
            err:err.message,
            message:"server error"
        })

    }
}