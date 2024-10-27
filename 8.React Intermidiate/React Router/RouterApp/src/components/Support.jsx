import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
  const navigate= useNavigate()

  function clickHandler(){
    // Move to labs page
    navigate("/labs")
  }
  function backHandler(){
    navigate(-1)
  }
  return (
    <div>
      <div>This is About page</div>

      <button onClick={clickHandler}>Labs page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support