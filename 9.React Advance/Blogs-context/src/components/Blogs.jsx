import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {

  // Step 3: Consuming
  const { loading, posts } = useContext(AppContext)

  console.log("printing in Blogs component")
  console.log(posts)

  return (
    <div className='w-[40%] mx-auto flex flex-col gap-y-5 mt-[70px]'>
      {
        loading ?
          (<Spinner />) :
          (
            posts.length === 0 ?
              (
                <p>No Posts Found</p>
              ) :
              (posts.map((post) => (
                <div key={post.id}>
                  <p className='font-bold text-sm'>{post.title}</p>

                  <p className='text-[12px] mt-[4px]'>
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                  </p>

                  <p className='text-[12px]'>
                    Posted On <span>{post.date}</span>
                  </p>

                  <p className='text-[16px] mt-4'>{post.content}</p>

                  <div className='flex felx-row gap-3 mt-[6px]'>
                    {post.tags.map((tag, index) => {
                      return <span key={index} className='text-blue-500 underline font-bold text-[12px] '>{` #${tag}`}</span>
                    })}
                  </div>
                </div>
              )))
          )
      }
    </div>
  )
}

export default Blogs