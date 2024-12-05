const Section = require('../models/Section')
const Course = require('../models/Course')

//create Section
exports.createSection = async (req, res) => {
    try {
        //fetch data
        const { sectionName, courseId } = req.body

        //validate
        if (!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        //create section
        const newSection = await Section.create({ sectionName })

        //update course with section objectId
        const updatedCourseDetails = await Course.findByIdAndUpdate(
                                            courseId,
                                            {
                                                $push: {
                                                    courseContent: newSection._id
                                                }
                                            },
                                            { new: true }
                                        )
                                        .populate({
                                            path:"courseContent",
                                            populate: {
                                                path: "SubSection",
                                            },
                                        })
                                        .exec()
        //HW: use populate to replace section/sub-section both in the updatedcourse

        //return response
        return res.status(200).json({
            success:true,
            message:"section created successfully",
            updatedCourseDetails
        })
    }
    catch (error) {
        console.log("error in createSection controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to create section"
        })
    }
}


// update Section
exports.updateSection = async (req,res) =>{
    try{
        //fetch data
        const {sectionName, sectionId} = req.res

        //validate
        if (!sectionName || !sectionId) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        //update section
        const updatedSection = await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true})

        //return response
        return res.status(200).json({
            success:true,
            message:"section updated successfully",
            updatedCourseDetails
        })
    }
    catch (error) {
        console.log("error in updateSection controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to update section"
        })
    }
}


// delete Section
exports.deleteSection = async (req,res)=>{
    try{
        //get Id :- assuming that we are sending Id in params
        const {sectionId}=req.params

        // findByIdandDelete
        await Section.findByIdAndDelete(sectionId)
        //Todo:- do we need to delete the entry from the course schema

        //return response
        return res.status(200).json({
            success:true,
            message:"section deleted successfully",
            updatedCourseDetails
        })
    }
    catch (error) {
        console.log("error in deleteSection controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to delete section"
        })
    }
}