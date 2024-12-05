const User = require('../models/User')
const { mailSender } = require('../utils/mailSender')
const bcrypt= require('bcrypt')

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
    try {
        //fetch email from req.body
        const email = req.body

        //check user for this email, email validation
        const user = await User.findOne({ email })
        if (!email) {
            return res.status(401).json({
                success: false,
                message: "Your email is not registered with us"
            })
        }

        //generate token
        const token = crypto.randomUUID()

        //update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate({ email },
                                            {
                                                token: token,
                                                resetPasswordExpires: Date.now() + 5 * 60 * 1000
                                            },
                                            { new: true })

        //create url
        const url = `https://localhost:3000/update-password/${token}`

        //send email containing the url
        mailSender(email,
            "Password Reset Link",
            `Password Reset Link : ${url}`)


        // return response
        return res.status(200).json({
            success:true,
            message:"Email sent successfully, please check email and try again"
        })
    }
    catch (error) {
        console.log("error in resetPasswordToken middleware: ", error)
        res.status(500).json({
            success: false,
            message: "something went wrong while sending the reset password url"
        })
    }
}

//resetPassword
exports.resetPassword = async (req,res) => {
    try{
        //data fetch
        const{password, confirmPassword, token} = req.body

        //validation
        if(password != confirmPassword){
            return res.status(401).json({
                success:false,
                message:"Password is not matching"
            })
        }

        //get user details from db using token
        const user = await User.findOne({token:token})

        //if no entry -> invalid token
        if(!user){
            return res.status(401).json({
                success:false,
                message:"token is invalid"
            })
        }

        //check token time
        if(user.resetPasswordExpires < Date.now()){
            return res.status(401).json({
                success:false,
                message:"token is expired, please regenerate your token"
            })
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        //update password
        await User.findOneAndUpdate(
                    {token:token},
                    {password:hashedPassword},
                    {new:true})
        // return response
        return res.status(200).json({
            success:true,
            message:"Password reset successfull"
        })
    }
    catch (error) {
        console.log("error in resetPassword middleware: ", error)
        res.status(500).json({
            success: false,
            message: "something went wrong while reseting password"
        })
    }
}