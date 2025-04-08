import React, { useContext, useState } from 'react'
import ItemCounter from './ItemCounter'
import { FaCircleCheck } from "react-icons/fa6";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const ItemDetail = ({event}) => {
  const {addToCart} = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  /**
   * Agrega al carrito y muestra un toast exitoso
   * @param {*} quantity 
   */
  const onAdd = (quantity) => {
    addToCart(event, quantity);
    setPurchase(true);

    //toast personalizado
    mostrarToastExitoso(event.name, quantity);
  }

  const mostrarToastExitoso = (eventName, quantity) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="h-12 w-10 flex items-center justify-center text-2xl">
              <FaCircleCheck className='text-green-500 font-semibold text-2xl'/>
            </div>
            <div className="ml-3">
              {`Se agregó ${quantity} ticket${quantity > 1 ? 's': ''} para el evento `}
              <span className='text-gray-900 font-semibold'>{eventName}</span>
               {` al carrito`}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className='flex justify-center'>
      <Card className="w-full max-w-[80rem] flex-col md:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full md:w-3/5 shrink-0 rounded-r-none"
        >
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {event.name}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            ${event.price}
          </Typography>
          <Typography color="gray" className="mb-5 font-normal">
            {event.description}
          </Typography>
          <Typography color="gray" className="mb-5 font-normal">
            {event.place}
          </Typography>
          <Typography color="gray" className="mb-5 font-normal">
            {event.date}
          </Typography>

          {/* <Link to='carrito'>Ir al carrito</Link>  */}
          {purchase ? 
                <>
                  <div className='flex gap-x-2 pt-4'>
                    <Link to='/' className='text-xs w-fit font-bold text-black bg-amber-400 px-4 py-3 rounded-md hover:bg-amber-500
                                    flex items-center justify-center'>SEGUIR COMPRANDO</Link>

                    <Link to='/cart' className='text-xs w-32 font-bold text-black bg-amber-400 px-4 py-3 rounded-md hover:bg-amber-500
                                  flex items-center justify-center'>IR AL CARRITO</Link>
                  </div>

                  <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                    />
                </>
              :
              <ItemCounter stock={event.stock} addItemToCart={onAdd}/>
              }
        </CardBody>
    </Card>

    </div>
  )
}

export default ItemDetail