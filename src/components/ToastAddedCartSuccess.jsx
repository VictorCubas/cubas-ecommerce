import React, { useEffect, useRef } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import { useCart } from '../hooks/useCart';
import { FaCircleCheck } from "react-icons/fa6";

const ToastAddedCartSuccess = () => {
    const {showToastAddedCartSuccess, turnOffToastAddedCartSuccess} = useCart();
    const hasShown = useRef(false);

    //control en caso de que se haya accedido a checkout y cart este vacio
    useEffect(() => {
        if (showToastAddedCartSuccess) {
          const { eventName, quantity } = showToastAddedCartSuccess;
          const duration = 3500;
          const toastId = 'added-to-cart-toast';
      
          //elimina el toast anterior si es que existiera
          toast.dismiss(toastId);
      
          toast.custom(
            (t) => (
              <div
                className={`${
                  t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    <div className="h-12 w-10 flex items-center justify-center text-2xl">
                      <FaCircleCheck className="text-green-500 font-semibold text-2xl" />
                    </div>
                    <div className="ml-3">
                      {`Se agregó ${quantity} ticket${quantity > 1 ? 's' : ''} para el evento `}
                      <span className="text-gray-900 font-semibold">{eventName}</span>
                      {` al carrito`}
                    </div>
                  </div>
                </div>
              </div>
            ),
            { id: toastId, duration }
          );
      
          setTimeout(() => {
            turnOffToastAddedCartSuccess();
          }, duration);
        }
      }, [showToastAddedCartSuccess]);


  return (
    <>
        {showToastAddedCartSuccess && <Toaster
            position="bottom-center"
            reverseOrder={false}
            />}
    </>
  )
}

export default ToastAddedCartSuccess