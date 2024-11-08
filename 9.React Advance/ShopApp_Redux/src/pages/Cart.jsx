import { useSelector } from "react-redux"
import CartItem from "../components/cartItem"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    const [totalAmount, settotalAmount] = useState(0)

    useEffect(() => {
        settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    return (
        <div>
            {
                cart.length > 0 ?
                    (
                        <div className="flex max-w-6xl mx-auto justify-evenly">
                            <div className="">
                                {
                                    cart.map((item, index) => (
                                        <CartItem key={item.id} item={item} itemIndex={index} />
                                    ))
                                }
                            </div>

                            <div className="flex flex-col justify-between max-w-[60%]">

                                <div className="flex flex-col mt-5 ">
                                    <div className="text-green-700 text-xl uppercase font-bold">
                                        Your cart
                                    </div>
                                    <div className="text-green-600 text-4xl uppercase font-bold mb-4">
                                        Summary
                                    </div>
                                    <p className="text-gray-700 text-xl font-bold">
                                        <span>Total items: {cart.length}</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500 font-bold text-lg text-left ">
                                        Total Amount: <span className="text-gray-800">${totalAmount}</span>
                                    </p>
                                    <button className="bg-green-500 w-full mb-5 py-2 px-4 rounded-full text-white font-bold mt-5 hover:scale-110 transition duration-300 ">
                                        CheckOut Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    ) :
                    (
                        <div className="flex flex-col items-center justify-center
                        h-screen gap-2">
                            <h1 className="font-bold text-2xl">Your cart is empty</h1>
                            <Link to={"/"}>
                                <button
                                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] py-1 px-3 uppercase 
                                hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                                    Shop Now
                                </button>
                            </Link>
                        </div >
                    )
            }
        </div >
    )
}

export default Cart