// import todo model
const Todo = require('../models/Todo')

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )
        res.status(200).json(
            {
                success: true,
                data: todo,
                message: "updated successfully"
            }
        )
    }
    catch (err) {
        console.error(err)
        res.status(500).json(
            {
               success:false,
                err:err.message,
                message:"server error"
            }
        )
    }
}
// http://localhost:3000/api/v1/updateTodo/673585d36f9bc604002300c6