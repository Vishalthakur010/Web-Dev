const User= require('../models/User')

const express = require('express')
const router = express.Router()

const{login,signup}=require('../controllers/Auth')
const { auth,isStudent, isAdmin } = require('../middlewares/auth')

router.post('/login',login)
router.post('/signup',signup)

// testing protected routes for single middleware
router.get('/test',auth, (req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for Test"
    })
})

//protected route
router.get('/student', auth, isStudent, (req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for Students"
    })
})
router.get('/admin', auth,isAdmin, (req,res) =>{
    res.json({
        success:true,
        message:"welcome to the protected route for Admin"
    })
})

// router.get('/getEmail', auth, async (req,res)=>{
//     try{
//         const id= req.user.id
//         console.log("ID: ", id)
//         const user= await User.findById(id)

//         res.status(200).json({
//             sucess:true,
//             user:user,
//             message:"welcome to the email route"
//         })
//     }
//     catch(err){
//         res.status(500).json({
//             sucess:false,
//             message:"error in fetching user through id"
//         })
//     }
// })
// module.exports = router