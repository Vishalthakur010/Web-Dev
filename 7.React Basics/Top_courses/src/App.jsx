import { useEffect, useState } from 'react'
import { apiUrl, filterData } from './data'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { toast } from 'react-toastify'


function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setcategory] =useState(filterData[0].title)

  const fetchData = async () => {
    setLoading(true)
    try {
      const result = await fetch(apiUrl)
      const output = await result.json()
      setCourses(output.data)
    }
    catch (error) {
      toast.error("Something went wrong")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='h-screen flex  flex-col bg-bgDark2'>
      <Navbar />

      <div className='bg-bgDark2'>
        <Filter 
        filterData={filterData} 
        category={category}
        setcategory={setcategory}
        />

        {/* <Cards courses={courses}/> */}
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>

    </div>
  )
}

export default App
