import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate= useNavigate()

  function clickHandler(){
    // Move to about page
    navigate("/about")
  }
  return (
    <div>
      <div>This is Labs page</div>

      <button onClick={clickHandler}>About page</button>
    </div>
  )
}

export default Labs