const Section = require('../models/Section')
const SubSection = require('../models/SubSection')
const { uploadImageToCloudinary } = require('../utils/imageUploader')
require('dotenv').config()

//create Subsection
exports.createSubsection = async (req,res) =>{
    try{
        //fetch data
        const {sectionId,title,timeDuration, Description}=req.body
        //extract file/video
        const video= req.files.videoFile

        //validate
        if(!sectionId || !title || !timeDuration || !Description || !video){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //upload video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME)

        //create a subsection
        const subsectionDetails = await SubSection.create({
                                                        title,
                                                        timeDuration,
                                                        Description,
                                                        videoUrl:uploadDetails.secure_url
                                                        })
                                                        
        //update section with this subsection objectId
        const UpdatedSection = await Section.findByIdAndUpdate(
                                        sectionId,
                                        {
                                            $push:{
                                                subsection:subsectionDetails._id
                                            }
                                        },
                                        {new:true})
                                        .populate("subsection")
        // HW: log updated section here after adding populate query

        //return response 
        return res.status(200).json({
            success:true,
            message:"Subsection created successfully",
            UpdatedSection
        })
    }
    catch (error) {
        console.log("error in createSubsection controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to create Subsection"
        })
    }
}

//HW
// update subsection
exports.updateSubsection = async(req,res)=>{
    try{
        //fetch data
        const{SubsectionId, title,timeDuration,Description}=req.body
        //extract file/video
        const video= req.files.videoFile

        //validate
        if(!SubsectionId || !title || !timeDuration || !Description || !video){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //upload video to cloudinary
        const uploadDetails = await uploadImageToCloudinary(video, process.env.FOLDER_NAME)

        //update subsection
        const updatedSubsection = await SubSection.findByIdAndUpdate(SubsectionId,
                                                                    {
                                                                        title,
                                                                        timeDuration,
                                                                        Description,
                                                                        videoUrl:uploadDetails.secure_url
                                                                    },
                                                                    {new:true})

        //return response
        return res.status(200).json({
            success:true,
            message:"Subsection updated successfully"
        })
    }
    catch (error) {
        console.log("error in updateSubsection controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to upadte Subsection"
        })
    }
}

//delete subsection
exports.deleteSubsection = async (req,res)=>{
    try{
        //get Id :- assuming that we are sending Id in params
        const{SubsectionId}=req.params

        //findByIdAndDelete
        await SubSection.findByIdAndDelete(SubsectionId)

        //return response
        return res.status(200).json({
            success:true,
            message:"Subsection updated successfully"
        })
    }
    catch (error) {
        console.log("error in deleteSubsection controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to delete Subsection"
        })
    }
}