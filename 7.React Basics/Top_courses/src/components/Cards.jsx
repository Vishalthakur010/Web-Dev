import { useState } from "react"
import Card from "./Card"

// we use curly braces for dynamic, we can eith use props and then store it in a variable
const Cards = (props) => {  
    const courses= props.courses
    const category =props.category
    const [LikedCourses, setLikedCourses] = useState([])

    // returns a list of all courses received from the api response
    const getCourses = () =>{
        // console.log(courses)
        if(category === "All"){
            let allCourses=[]
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course)
            })
        })
        return allCourses
        }
        else{
            // I'll pass only specific category data
            return courses[category]
        }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                 <Card key={course.id} course={course}
                 LikedCourses={LikedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    )
}

export default Cards