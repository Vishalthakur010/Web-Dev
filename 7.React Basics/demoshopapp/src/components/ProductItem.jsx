import React, {useState} from "react";

import ProductDate from "./ProductDate";
import './ProductItem.css'
import Card from "./Card";


const ProductItem =(props) =>{
    // const title= props.title;

    const [title, setTitle]=useState(props.title)

    function clickhandler(){
        // title="popcorn";
        setTitle("popcorn")
        console.log("button clicked")
    }
    return (
        <Card className='product-item'>
            <ProductDate date={props.date}/>
            <div className="product-item__description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickhandler}>Add to cart</button>
            
        </Card>
        
    )
}

export default ProductItem; 