import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    
    const addToCart = (itemToAdd, quantity) => {
        setCart(prevCart => {
            console.log('prevCart: ', prevCart);
            if(isInCart(itemToAdd.id)){
                const cartUpdated = prevCart.map(item => {
                    if(item.id === itemToAdd.id){
                        return {...item, quantity:item.quantity + quantity}
                    }
                    else{
                        return item
                    }
                })

                return cartUpdated;
            }
            
            return [...prevCart, {...itemToAdd, quantity}];

        })
    }


    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        setCart(prevCart => {
            const newCart = prevCart.filter(item => item.id !== id);

            return newCart;
        })
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
    
    const contextValue = {cart, setCart, addToCart, clearCart, removeItem}

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}