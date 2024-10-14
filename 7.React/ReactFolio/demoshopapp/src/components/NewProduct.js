import "./NewProduct.css"
import ProductForm from "./ProductForm"


function NewProduct(props){

    function saveProduct(product){
        console.log("i am inside newProduct")
        console.log(product)

        // calling parent function
        props.productData(product)
    }

    return(
        <div className="new-product">
            <ProductForm onsaveProduct={saveProduct}/>
        </div>
    )
}

export default NewProduct