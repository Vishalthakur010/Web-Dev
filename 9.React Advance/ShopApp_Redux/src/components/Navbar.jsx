import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div>
            <nav className="flex flex-row justify-between  items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className="ml-5">
                        <img src="../logo.png" width={100} />
                    </div>
                </NavLink>

                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                        <div className="relative">
                            <FaCartPlus className="text-2xl"/>
                            {
                                cart.length > 0 &&
                                <span
                                    className="absolute -top-1 -right-2 h-5 w-5 bg-green-500 rounded-full text-xs animate-bounce flex justify-center items-center text-white"
                                >{cart.length}</span>
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar