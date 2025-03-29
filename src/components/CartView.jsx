import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";


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
          {cart.map(({ id, name, quantity, price, image, description }) => (
            <div
              key={id}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                {/* <Avatar size="xl" src={image} alt={name} /> */}
                <div className="w-44 h-28 overflow-hidden rounded-lg">
                  <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {name}
                  </Typography>
                  <Typography color="blue-gray" variant="h6">
                    {description}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {quantity}
                  </Typography>
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                ${price}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
      </Card>
    </div>
  )
}

export default CartView