import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { AppContext } from "./context/AppContext"
import { useContext, useEffect } from "react"

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext)

  useEffect( () => {
    fetchBlogPosts()
  },[])

  return (
    <div className="w-full h-full flex flex-col gap-y-3">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}