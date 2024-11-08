import BlogDetails from './BlogDetails'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import { useContext } from 'react'

const Blogs = () => {

  // Step 3: Consuming
  const { loading, posts } = useContext(AppContext)

  // console.log("printing in Blogs component")
  // console.log(posts)

  return (
    <div className='w-[45%] mx-auto flex flex-col gap-y-5 mt-[70px] mb-[60px]'>
      {
        loading ?
          (<Spinner />) :
          (
            posts.length === 0 ?
              (
                <p>No Posts Found</p>
              ) :
              (posts.map((post) => (
                <BlogDetails key={post.id} post={post}/>
              )))
          )
      }
    </div>
  )
}

export default Blogs