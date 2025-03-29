import React, { useContext, useState } from 'react'
import ItemCounter from './ItemCounter'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  NavLink
} from "@material-tailwind/react";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({event}) => {
  const {addToCart} = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);


  const onAdd = (quantity) => {
    addToCart(event, quantity);
    setPurchase(true);
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
              <Link to='/cart' className='text-xs w-32 font-bold text-black bg-amber-400 px-4 py-3 rounded-md hover:bg-amber-500
                                  flex items-center justify-center'>IR AL CARRITO</Link>
              :
              <ItemCounter stock={event.stock} addItemToCart={onAdd}/>
              }
        </CardBody>
    </Card>

    </div>
  )
}

export default ItemDetail