import Home from "./pages/Home"
import BlogPage from "./pages/Blogpage"
import TagPage from "./pages/TagPage"
import CategoryPage from "./pages/CategoryPage"
import { AppContext } from "./context/AppContext"
import { useContext, useEffect } from "react"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    // Retrieve query parameters using useSearchParams
    const page = searchParams.get("page") ?? 1

    if (location.pathname.includes("tags")) {
      // we'll show the tag page
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ")
      fetchBlogPosts(Number(page), tag)
    }
    else if (location.pathname.includes("categories")) {
      // we'll show the tag page
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ")
      fetchBlogPosts(Number(page), null, category)
    }
    else{
      fetchBlogPosts(Number(page))
    }

  }, [location.pathname, location.search])

  return (
    <div className="w-full h-full flex flex-col gap-y-3">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}