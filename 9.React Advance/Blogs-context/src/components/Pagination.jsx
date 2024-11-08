import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const { page, handlePageChange, totalPages } = useContext(AppContext)

  return (
    <div className='border shadow-md py-1 w-full fixed bg-white bottom-0'>
      <div className='w-[45%] mx-auto flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-3'>
        {page > 1 &&
          (
            <button onClick={() => handlePageChange(page - 1)}
            className='border-2 rounded-md px-4 py-1'>
              Previous
            </button>
          )
        }
        {page < totalPages &&
          (
            <button onClick={() => handlePageChange(page + 1)}
            className='border-2 rounded-md px-4 py-1'>
              Next
            </button>
          )
        }
        </div>
        
        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
          </p>
      </div>
    </div>
  )
}

export default Pagination
