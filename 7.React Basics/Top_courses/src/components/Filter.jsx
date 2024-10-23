import { data } from "autoprefixer"
import { filterData } from "../data"

const Filter = (props) => {
    let filterData= props.filterData
    let category= props.category
    let setcategory= props.setcategory

    function filterHandler(title){
        setcategory(title)
    }
    return(
        <div className="w-11/12 flex flex-wrap space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data) => (
                <button 
                onClick={()=>filterHandler(data.title)}
                className={`text-lg py-1 px-2 rounded-md font-medium bg-black text-white hover:bg-opacity-50 border-2 transition-all duration-300
                    ${category === data.title ?
                         "bg-opacity-60 border-white" : 
                         "bg-opacity-40 border-transparent"}
                    `}
                key={data.id}>
                    {data.title}
                </button>
            ))}
        </div>
    )
}

export default Filter