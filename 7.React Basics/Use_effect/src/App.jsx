import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[text, setText]=useState("")

  // Variation 1 :- Every Render
  // useEffect(()=>{
  //   console.log("UI rendering done")
  // })

  // Variation 2 :- First Render
  // useEffect(()=>{
  //   console.log("UI rendering done")
  // }, [])

  //variation 3 :- On First Render + whenever dependency changes
  // useEffect(()=> {
  //   console.log("change ovserved")
  // }, [text])

  //variation 4 :- To handle unmounting of a component
  // useEffect(()=>{
  //   //event listener added
  //   console.log("listener added")

  //   return (()=>{
  //     console.log("listener removed")
  //   })
  // })
  
  function changeHandler(event){
    // console.log(text)              // printing asynchronymsly
    console.log(event.target.value)  // print the value directly
    setText(event.target.value)
  }


// Window size rendering
  const[size, setSize]=useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener("resize",handle_change) // add eventlistener

    return (()=>{
      window.removeEventListener("resize", handle_change) //cleanup on unmount
    })
  },[])

  function handle_change(){
    setSize(window.innerWidth)
  }


  return (
    <div>
          <input type="text" onChange={changeHandler} />
          <br />
      <label htmlFor="">Window Size</label>
      <input type="text" value={size} readOnly />
    </div>
  )
}

export default App
