import React, { useEffect, useRef } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import { useCart } from '../hooks/useCart';

const ToastCheckoutVacio = () => {
    const {accediendoACheckoutVacio, toggleCheckoutVacio} = useCart();
    const hasShown = useRef(false);

    //control en caso de que se haya accedido a checkout y cart este vacio
    useEffect(() => {
        if(accediendoACheckoutVacio){
            const duration = 3500;
            toast.error("Tu carrito aún está vacío", {duration: duration});
            hasShown.current = true;

            setTimeout(() => {
                toggleCheckoutVacio();
                hasShown.current = false; 
            }, duration);
        }
    }, [accediendoACheckoutVacio]);


  return (
    <>
        {accediendoACheckoutVacio && <Toaster
            position="bottom-center"
            reverseOrder={false}
            />}
    </>
  )
}

export default ToastCheckoutVacio