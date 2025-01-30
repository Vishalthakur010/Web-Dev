import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HighlightText } from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button'
import banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/codeBlocks';
import Logo from '../assets/Logo/Logo-Full-Light.png'
import { CiFacebook } from "react-icons/ci";
import { ImGoogle3 } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";


const Home = () => {
        return (
                <div>
                        {/* section : 1 */}
                        <div className='relative mx-auto flex flex-col w-[75%] max-w-maxContent items-center justify-between text-white'>

                                {/* Become an Instructor */}
                                <Link to={"/signup"}>
                                        <div className='mt-14 p-1 mx-auto bg-richblack-800 rounded-full font-semibold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit hover:shadow-2xl group shadow shadow-richblack-500'>
                                                <div className='flex  items-center px-10 py-[5px] gap-2 rounded-full group-hover:bg-richblack-900'>
                                                        <p>Become an Instructor</p>
                                                        <FaArrowRight />
                                                </div>
                                        </div>
                                </Link>

                                {/* Heading  */}
                                <div className='text-center text-4xl font-semibold mt-7'>
                                        Empower Your Future With
                                        <HighlightText text={"Coding Skills"} />
                                </div>

                                {/* Sub-Heading  */}
                                <div className='text-richblack-300 text-center w-[80%] mt-4'>
                                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                                </div>

                                {/* CTA Buttons  */}
                                <div className='flex gap-7 mt-7'>
                                        <CTAButton active={true} linkto={"/signup"}>
                                                Learn More
                                        </CTAButton>
                                        <CTAButton active={false} linkto={"/login"}>
                                                Book a Demo
                                        </CTAButton>
                                </div>

                                {/* video */}
                                <div className='shadow-[-6px_-9px_22px_-1px_rgba(96,115,175,0.5)] mt-12 '>
                                        <video
                                                className='shadow-[18px_14px_2px_2px_rgba(255,255,255,1)]'
                                                muted
                                                loop
                                                autoPlay
                                                width={900}
                                        >
                                                <source src={banner} type='video/mp4' />
                                        </video>
                                </div>

                                {/* Code Section 1 */}
                                <div >
                                        <CodeBlocks
                                                position={"lg:flex-row"}
                                                heading={
                                                        <div className='text-4xl font-semibold'>
                                                                Unlock your
                                                                <HighlightText text={"coding potential "} />
                                                                with our online cources
                                                        </div>
                                                }
                                                subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you"}
                                                ctabtn1={
                                                        {
                                                                btntext: "Try it yourself",
                                                                active: true,
                                                                linkto: "/signup"
                                                        }
                                                }
                                                ctabtn2={
                                                        {
                                                                btntext: "Learn More",
                                                                active: false,
                                                                linkto: "//login"
                                                        }
                                                }
                                                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                                                codeColor={"text-yellow-25"}
                                                backgroundGradient={<div className='codeblock1 absolute'></div>}
                                        />
                                </div>

                                {/* Code Section 2 */}
                                <div >
                                        <CodeBlocks
                                                position={"lg:flex-row-reverse"}
                                                heading={
                                                        <div className='text-4xl font-semibold w-[45%]'>
                                                                Start
                                                                <HighlightText text={"coding in seconds"} />
                                                        </div>
                                                }
                                                subheading={"Go ahead, give it a try. Our hands-on learning enviroment means you'll be writting real code from very first lesson."}
                                                ctabtn1={
                                                        {
                                                                btntext: "Continue Lesson",
                                                                active: true,
                                                                linkto: "/signup"
                                                        }
                                                }
                                                ctabtn2={
                                                        {
                                                                btntext: "Learn More",
                                                                active: false,
                                                                linkto: "//login"
                                                        }
                                                }
                                                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                                                codeColor={"text-yellow-25"}
                                                backgroundGradient={<div className='codeblock2 absolute'></div>}
                                        />
                                </div>

                        </div>

                        {/* section : 2 */}
                        {/* section : 3 */}


                        {/* Footer */}
                        <footer className='w-full relative bg-richblack-800'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto mt-10 pt-10 pb-10 border-b-[1px] border-richblack-600'>

                                        {/* left part */}
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-r-[1px] border-richblack-600'>

                                                {/* column 1 */}
                                                <div>
                                                        {/* first */}
                                                        <img src={Logo} className='w-[80%] text-richblack-400 pb-3 opacity-80' />

                                                        {/* second */}
                                                        <div>
                                                                <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                        Company
                                                                </p>
                                                                <ul className='flex flex-col gap-2'>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                About
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Carrers
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Affiliates
                                                                        </li>
                                                                </ul>
                                                        </div>

                                                        {/* third */}
                                                        <div className='flex gap-3 mt-4'>
                                                                <CiFacebook className='bg-richblack-300 rounded-full text-[20px]' />
                                                                <ImGoogle3 className='bg-richblack-300 rounded-full text-[20px]' />
                                                                <CiTwitter className='text-richblack-50 text-[20px]' />
                                                                <CiYoutube className='text-richblack-50 text-[20px]' />
                                                        </div>
                                                </div>

                                                {/* column 2 */}
                                                <div className='flex flex-col gap-5'>
                                                        {/* first */}
                                                        <div>
                                                                <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                        Resources
                                                                </p>
                                                                <ul className='flex flex-col gap-1'>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Articles
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Blog
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Chart Sheet
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Code Challenges
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Docs
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Projects
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Videos
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Workspaces
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                        {/* second */}
                                                        <div>
                                                                <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                        Support
                                                                </p>
                                                                <ul className='flex flex-col gap-1'>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Help Center
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                {/* column 3 */}
                                                <div className='flex flex-col gap-5'>
                                                        {/* first */}
                                                        <div>
                                                                <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                        Plans
                                                                </p>
                                                                <ul className='flex flex-col gap-1'>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Paid memberships
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                For Students
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Buisness Solutions
                                                                        </li>
                                                                </ul>
                                                        </div>

                                                        {/* second */}
                                                        <div>
                                                                <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                        Community
                                                                </p>
                                                                <ul className='flex flex-col gap-1'>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Forums
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Chapters
                                                                        </li>
                                                                        <li className='text-richblack-400 text-[14px]'>
                                                                                Events
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* right part */}
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-6'>
                                                {/* column 1 */}
                                                <div>
                                                        <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                Subjects
                                                        </p>
                                                        <ul className='flex flex-col gap-1'>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        AI
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Cloud Computing
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Code Foundations
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Computer Science
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Cybersecurity
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Data Analytics
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Data Science
                                                                </li>
                                                                <li className='text-richblack-400 text-[12px]'>
                                                                        Data Visualization
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Developer Tools
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        DevOps
                                                                </li>
                                                                <li className='text-richblack-400 text-[12px]'>
                                                                        GameDevelopment
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        IT
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Machine Learning
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Math
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Mobile Development
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Web Design
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Web Developmnet
                                                                </li>
                                                        </ul>
                                                </div>

                                                {/* column 2 */}
                                                <div>
                                                        <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                Languages
                                                        </p>
                                                        <ul className='flex flex-col gap-1'>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Bash
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        C
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        C++
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        C#
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Go
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        HTML & CSS
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Java
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        JavaScript
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Kotlin
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        PHP
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Python
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        R
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Ruby
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        SQL
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Swift
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Web Design
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Web Developmnet
                                                                </li>
                                                        </ul>
                                                </div>
                                                {/* column 3 */}
                                                <div>
                                                        <p className='text-richblack-100 font-semibold text-[18px] pb-2'>
                                                                Carrer building
                                                        </p>
                                                        <ul className='flex flex-col gap-1'>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Carrer Paths
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Carrer services
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Interview prep
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Professional certification
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        --
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Full Catelog
                                                                </li>
                                                                <li className='text-richblack-400 text-[14px]'>
                                                                        Beta Content
                                                                </li>
                                                        </ul>
                                                </div>

                                        </div>
                                </div>

                                <div className='flex flex-row w-[90%] mx-auto mt-8 pb-12 justify-between'>
                                        <div className='flex flex-row items-center gap-6'>
                                                <p className='text-richblack-300 text-[16px]'>
                                                        Privacy policy
                                                </p>
                                                <p className='text-richblack-300 text-[16px]'>
                                                        cookie policy
                                                </p>
                                                <p className='text-richblack-300 text-[16px]'>
                                                        Terms
                                                </p>
                                        </div>
                                        <div>
                                                <p className='text-richblack-300 text-[16px]'>
                                                        Made With VishalTech  ©2025 StudyNotion
                                                </p>
                                        </div>
                                </div>
                        </footer>
                </div>
        )
}

export default Home