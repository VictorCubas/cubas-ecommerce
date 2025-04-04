import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";
import CartItem from './CartItem';
import { useCart } from '../hooks/useCart';



const CartView = () => {
    const {cart, clearCart, cartTotal} = useCart();

  return (
    <div className='flex justify-center'>
      <Card className="w-5/6">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Tu carrito
          </Typography>
          <Typography
            variant="small"
            color="blue"
            className="font-bold"
            role='button'
            onClick={clearCart}
          >
            Limpiar carrito
          </Typography>
        </div>
        <div className="divide-y divide-gray-200 ">
          {cart.map((evento) => (

            <CartItem key={evento.id} evento={evento}/>
          ))}
        </div>

          <div className='pt-5 mt-5 flex justify-end w-ful'>
            <Typography color="blue-gray" variant="h4">
                  Total: ${cartTotal()},00
            </Typography>
          </div>
      </CardBody>
      </Card>
    </div>
  )
}

export default CartView