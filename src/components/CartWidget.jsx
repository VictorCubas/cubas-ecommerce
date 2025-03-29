import { MdOutlineShoppingCart } from "react-icons/md"
import {
    Button,
  } from "@material-tailwind/react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useCart } from "../hooks/useCart";

const CartWidget = () => {
    const {cart, setCart} = useCart()

    return(
        <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block text-xl">
            <div className="relative inline-flex">
                
                <div className="rounded-md bg-slate-800 py-1 px-2 border border-transparent text-center text-xl text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    <MdOutlineShoppingCart />
                </div>
                <span className="absolute top-1 right-0 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white">
                 {cart.length}
                </span>
            </div>
        </Button>
    );
}

export default CartWidget;