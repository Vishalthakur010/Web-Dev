// import todo model
const Todo = require('../models/Todo')

//define route handler
exports.createTodo= async(req,res) => {
    try{
        //extract title and description from request
        const{title,description}= req.body

        // create a new todo object and insert in db
        const response= await Todo.create({title,description})

        //send a json response with a success flag
        res.status(200).json(
            {
                sucess:true,
                data:response,
                message:'Entry created successfully'
            }
        )
    }
    catch(err){
        console.error(err)
        console.log(err)
        res.status(500)
        .json({
            sucess:false,
            data:"internal server error",
            message:err.message
        })
    }
}