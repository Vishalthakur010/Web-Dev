import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [showPassword, setshowPassword] = useState(false)
  const [confirmPassword, setconfirmPassword] = useState(false)
  const [accountType, setAccountType] = useState("student")

  function changeHandler(event) {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault()
    if (formData.password != formData.confirmPassword) {
      toast.error("Password does not match")
      return
    }
    setIsLoggedIn(true)
    toast.success("Account Created")
    const accountData = {
      ...formData
    }
    const finalData={
      ...accountData,
      accountType
    }
    console.log("printing final account data")
    console.log(finalData)
    navigate("/dashboard")

  }
  return (
    <div>
      {/* Student and instructor tab */}
      <div className='flex gap-1 bg-richblack-800 my-6 p-1 max-w-max rounded-full '>
        <button 
        className={`${accountType === "student" ? 
          "bg-richblack-900 text-richblack-5 " : 
          "bg-transparent text-richblack-200"} py-2 px-6 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("student")}>
          Student
        </button>

        <button
        className={`${accountType === "instructor" ? 
          "bg-richblack-900 text-richblack-5 " : 
          "bg-transparent text-richblack-200"} py-2 px-6 rounded-full transition-all duration-200`}
        onClick={()=>setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>

        {/* First name and last name */}
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375] mb-1'>
              First Name
              <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name='firstName'
              placeholder='Enter first name'
              value={formData.firstName}
              onChange={changeHandler}
              className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] shadow-sm shadow-richblack-100'
            />
          </label>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375] mb-1'>
              Last Name
              <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name='lastName'
              placeholder='Enter last name'
              value={formData.lastName}
              onChange={changeHandler}
              className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] shadow-sm shadow-richblack-100'
            />
          </label>
        </div>

        {/* Email Address */}
        <div className='mt-[20px]'>
          <label className='mt-[10px]' >
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375] mb-1'>
              Email Address
              <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="email"
              name='email'
              placeholder='Enter email address'
              value={formData.email}
              onChange={changeHandler}
              className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] shadow-sm shadow-richblack-100'
            />
          </label>
        </div>

        {/* Create password and confirm password */}
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375] mb-1'>
              Create Password
              <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              name='password'
              placeholder='Enter Password'
              value={formData.password}
              onChange={changeHandler}
              className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] shadow-sm shadow-richblack-100'
            />
            <span
              className='absolute right-3 top-10 cursor-pointer'
              onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB@BF' />) :
                (<AiOutlineEye fontSize={24} fill='#AFB@BF' />)}
            </span>
          </label>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 leading-[1.375] mb-1'>
              Confirm Password
              <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type={confirmPassword ? ("text") : ("password")}
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={changeHandler}
              className='w-full bg-richblack-800 text-richblack-5 p-[12px] rounded-[0.5rem] shadow-sm shadow-richblack-100'
            />
            <span
              className='absolute right-3 top-10 cursor-pointer'
              onClick={() => setconfirmPassword((prev) => !prev)}>
              {confirmPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB@BF' />) :
                (<AiOutlineEye fontSize={24} fill='#AFB@BF' />)}
            </span>
          </label>
        </div>

        <button
          className='w-full bg-yellow-50 text-richblack-800 rounded-[8px] font-medium px-[12px] py-[8px] mt-6'>
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm