const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//signup route handler
exports.signup = async (req, res) => {
    try {
        //get all data
        const { name, email, password, role } = req.body
        
        //check if user already exist
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "user already exists"
            })
        }
        //secure password
        let hashedPassword
        try {
            hashedPassword = await bcrypt.hash(password, 10)
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hasing password"
            })
        }
        // create entry for user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        })

        return res.status(200).json({
            success: true,
            message: "user created succesfuly"
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            success:false,
            message:"user cannot be registered, please try again"
        })
    }
}

// login handler
exports.login = async (req,res) => {
    try{
        //fetch data
        const {email,password} = req.body

        //validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"please fill all the details carefully"
            })
        }

        // check for registered user
        let user = await User.findOne({email})
        //if not a registered user
        if(!user){
            return res.status(400).json({
                success:false,
                message:"user is not registered"
            })
        }

        const payload={
            email:user.email,
            id:user._id,
            role:user.role
        }
        //verify password and generate JWT token
        if(await bcrypt.compare(password,user.password)){
            //password matched
            let token = jwt.sign(payload,
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"2h"
                                }
                            )
            user=user.toObject()
            user.token=token
            user.password = undefined
            const options ={
                expires: new Date(Date.now()+ 3 * 24 * 60 * 60 * 1000),
                // expires: new Date(Date.now()+ 30000),
                httponly:true
            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"user logged in successfully"
            })
            
            // res.status(200).json({
            //     success:true,
            //     token,
            //     user,
            //     message:"user logged in successfully"
            // })
            // res.clearCookie("token");
        }
        else{
            //password does not matched
            return res.status(401).json({
                success:false,
                message:"Incorrect password"
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(200).json({
            success:false,
            message:"Login failure"
        })
    }
}