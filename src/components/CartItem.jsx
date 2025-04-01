import React from 'react'
import { useCart } from '../hooks/useCart'
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { CiTrash } from "react-icons/ci";
import { IconButton } from "@material-tailwind/react";

const CartItem = ({evento}) => {
    const {removeItem} = useCart();

  return (
    <div
            className="flex items-center justify-between pb-3 pt-3 last:pb-0"
        >
            <div className="flex items-center gap-x-3">
            {/* <Avatar size="xl" src={image} alt={name} /> */}
            <div className="w-44 h-28 overflow-hidden rounded-lg">
                <img src={evento.image} alt={evento.name} className="w-full h-full object-cover" />
            </div>
            <div>
                <Typography color="blue-gray" variant="h6">
                {evento.name}
                </Typography>
                <Typography color="blue-gray" variant="h6">
                {evento.description}
                </Typography>
                <Typography variant="small" color="gray">
                {evento.quantity}
                </Typography>
            </div>
            </div>

            <div className='flex flex-col justify-end'>
            
            
            <IconButton variant="outlined" size="md" onClick={() => removeItem(evento.id)}>
                <CiTrash className='text-lg'/>
            </IconButton>
            
            <Typography color="blue-gray" variant="h6">
                ${evento.price}
            </Typography>
            </div>
        </div>
  )
}

export default CartItem