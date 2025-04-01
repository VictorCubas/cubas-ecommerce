import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { CiTrash } from "react-icons/ci";
import { IconButton } from "@material-tailwind/react";
import CartItem from './CartItem';



const CartView = () => {
    const {cart, removeItem, clear} = useContext(CartContext);

  return (
    // <div className='mt-5 pt-5 font-bold uppercase text-white text-center w-full text-xl'>
    //     <h2>Tu carrito</h2>

    //     <div>
    //         {cart.map((compra) => <div key={compra.id}>
    //             <p>{compra.name}</p>
    //             <p>{compra.quantity}</p>
    //             <p>{compra.price}</p>
    //             <button onClick={() => removeItem(compra.id)}>X</button>
    //         </div>)}
    //     </div>

    //     <button onClick={clear}>Borrar todo el carrito</button>
    //     <button>Seguir comprando</button>
    //     <button>Terminar compra</button>
    // </div>
    <div className='flex justify-center'>
      <Card className="w-3/5">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Tu carrito
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="blue"
            className="font-bold"
          >
            View all
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {cart.map((evento) => (

            <CartItem key={evento.id} evento={evento}/>
          ))}
        </div>
      </CardBody>
      </Card>
    </div>
  )
}

export default CartView