import { MdOutlineShoppingCart } from "react-icons/md"

const CartWidget = () => {
    return(
        <div className="flex items-center">
            <MdOutlineShoppingCart />
            <span>5</span>
        </div>
    );
}

export default CartWidget;