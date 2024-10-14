import React, { useState } from "react"
import "./ProductForm.css"


function ProductForm(props) {

    // // handling multiple states
    // const [fullProductInput, setfullProductInput] = useState({
    //     title: '',
    //     date: ''
    // })


    const[newtitle, setTitle] = useState("")
    const[newDate, setDate] = useState("")

    function titlechangeHandler(event) {
            setTitle(event.target.value)
            // console.log(event.target.value)

        // setfullProductInput((prevState) => {
        //     let obj = { ...prevState, title: event.target.value }
        //     console.log(obj)
        //     return obj
        // })
    }
    function datechangeHandler(event) {
            setDate(event.target.value)
            // console.log(event.target.value)

        // setfullProductInput((prevState) => {
        //     let obj = { ...prevState, date: event.target.value }
        //     console.log(obj)
        //     return obj
        // })
    }

    function submitHandler(event){
        event.preventDefault();

        const ProductData={
            title:newtitle,
            Date:newDate
        }
        // console.log(ProductDate)
        props.onsaveProduct(ProductData)

        setTitle('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>

            <div className="new-product_controls">
                <div className="new-product_control">
                    <label>Title</label>
                    <input type="text" value={newtitle} onChange={titlechangeHandler}></input>
                </div>
                <div className="new-product_control">
                    <label>Date</label>
                    <input type="date" value={newDate} min='2024-01-01' max='2024-12-12' onChange={datechangeHandler}></input>
                </div>
                <div className="new-product_button">
                    <button type="submit">Add Product</button>
                </div>
            </div>

        </form>
    )
}

export default ProductForm