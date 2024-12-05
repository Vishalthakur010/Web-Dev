const Category = require('../models/category')


//handler function for create category
exports.createCategory = async (req, res) => {
    try {
        //fetch data from req.body
        const { name, description } = req.body

        //validate
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        //create entry in DB
        const categoryDetails = await Category.create(
            {
                name: name,
                description: description
            }
        )
        console.log(categoryDetails)

        return res.status(200).json({
            success:true,
            message:"Category created successfully"
        })
    }
    catch (error) {
        console.log("error in Category controller: ", error)
        res.status(500).json({
            success: false,
            message: "something went wrong while creating category"
        })
    }
}


//handler function for Get All category

exports.showAllCategory = async (req,res) => {
    try{
        const allCategory = await Category.find({},{name:true,description:true})

        return res.status(200).json({
            success:true,
            allCategory,
            message:"All Category returned successfully"
        })
    }
    catch (error) {
        console.log("error in Category controller: ", error)
        res.status(500).json({
            success: false,
            message: "something went wrong while fetching all category"
        })
    }
}