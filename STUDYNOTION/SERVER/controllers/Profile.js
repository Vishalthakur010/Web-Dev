const Profile = require('../models/Profile')
const User = require('../models/User')

//update profile
exports.updateProfile = async (req, res) => {
    try {
        //fetch data
        const { dateOfBirth = "", about = "", gender, contactNo } = req.body
        //get user Id
        const id = req.user.id

        //validation
        if(!gender || !contactNo || !id){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        //find profile
        const userDetails= await User.findById(id)
        const profileId = userDetails.additionalDetails

        //upadte profile
        const updatedProfile = await Profile.findByIdAndUpdate(profileId,
                                                                {
                                                                    dob:dateOfBirth,
                                                                    gender,
                                                                    about:about,
                                                                    contactNo
                                                                },
                                                                {new:true}
        )

        //return response
        return res.status(200).json({
            success:true,
            message:"Profile updated successfully",
            updatedProfile
        })
    }
    catch (error) {
        console.log("error in updateProfile controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to update profile"
        })
    }
}

//delete Account 
// HW: how can we schedule the deletion request
exports.deleteAccount=async (req,res) =>{
    try{
        //get id
        const id= req.user.id

        //validation
        const userDetails=await User.findById(id)
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:"user not find"
            })
        }

        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails})

        // HW: unenroll user from all enrolled courses

        //delete user
        await User.findByIdAndDelete(id)

        //return response
        return res.status(200).json({
            success:true,
            message:"Account deleted successfully"
        })
    }
    catch (error) {
        console.log("error in deleteAccount controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to delete account"
        })
    }
}

//get user details
exports.getAllUserDetails= async (req,res)=>{
    try{
        //get id
        const id=req.user.id

        //validation and get user details
        const userDetails=await User.findById(id).populate("additionalDetails").exec()

        //return response
        return res.status(200).json({
            success:true,
            message:"User data fetched successfully"
        })
    }
    catch (error) {
        console.log("error in deleteAccount controller: ", error)
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to fetched user details"
        })
    }
}