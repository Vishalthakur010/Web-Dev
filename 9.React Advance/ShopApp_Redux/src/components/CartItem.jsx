import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(remove(item.id))
    }
    return (
        <div className="space-y-5">

            <div className=" flex flex-row gap-10 mt-5 items-center ">

                <div className="">
                    <img src={item.image} className="h-[200px] w-[160px]" />
                </div>

                <div className="max-w-[35%] flex flex-col gap-3">
                    <h1 className="text-gray-700 font-bold text-lg text-left">{item.title}</h1>
                    <h1 className="text-gray-500 font-semibold text-[15px] text-left">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
                    <div className="flex justify-between">
                        <p className="text-green-600 font-semibold">${item.price}</p>
                        <div
                            className="cursor-pointer h-9 w-9 text-sm bg-red-300 flex items-center justify-center rounded-full"
                            onClick={removeFromCart}>
                            <RiDeleteBin6Fill />
                        </div>

                    </div>

                </div>

            </div>
            <div className="h-[2px] w-[58%] bg-gray-500"></div>
        </div>
    )
}

export default CartItem