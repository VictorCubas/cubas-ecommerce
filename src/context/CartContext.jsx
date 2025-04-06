import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [accedienteACheckoutVacio, setAccedienteACheckoutVacio] = useState(false);


    const toggleCheckoutVacio = () => {
        setAccedienteACheckoutVacio(prevAccedienteACheckoutVacio => {
            return !prevAccedienteACheckoutVacio;
        });
    }
    
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


    /**
     * Calcula el monto total del carrito
     * @returns total
     */
    const cartTotal = () => {
        return cart.reduce((acc, item) => (acc += item.price * item.quantity), 0);
    }


    /**
     * Calcula la cantidad de items en el carrito
     * @returns total cantidad
     */
    const cartQuantity = () => {
        return cart.reduce((acc, item) => (acc += item.quantity), 0);
    }


    
    const contextValue = {cart, setCart, addToCart, clearCart, removeItem, cartTotal, cartQuantity, accedienteACheckoutVacio, toggleCheckoutVacio}

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}