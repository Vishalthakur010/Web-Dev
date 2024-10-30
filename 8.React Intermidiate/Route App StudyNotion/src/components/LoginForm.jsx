import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate()
    const [showPassword, setshowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged in")
        navigate("/dashboard")
        console.log("priting form data")
        console.log(formData)
    }
    return (
        <form onSubmit={submitHandler}
        className='flex flex-col mt-6 gap-y-4 w-full'>
            <label>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375] mb-1'>
                    Email Address <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    name='email'
                    value={formData.email}
                    placeholder='Enter email address'
                    onChange={changeHandler}
                    className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] shadow-sm shadow-richblack-100'
                />
            </label>
            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 leading-[1.375] mb-1'>
                    Password <sup className='text-pink-200'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    value={formData.password}
                    placeholder='Enter Password'
                    onChange={changeHandler}
                    className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] shadow-sm shadow-richblack-100'
                />
                <span 
                className='absolute right-3 top-10 cursor-pointer'
                onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB@BF'/>) : 
                    (<AiOutlineEye fontSize={24} fill='#AFB@BF'/>)}
                </span>
                <Link to="#">
                    <p className='text-blue-100 text-xs mt-1 max-w-max ml-auto'>Forgot Password</p>
                </Link>
            </label>
            <button 
            className='w-full bg-yellow-50 text-richblack-800 rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
                Sign in
            </button>
        </form>
    )
}

export default LoginForm