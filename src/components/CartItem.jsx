import React from 'react'
import { useCart } from '../hooks/useCart'
import { Typography, Tooltip } from "@material-tailwind/react";
import { CiTrash } from "react-icons/ci";
import { IconButton } from "@material-tailwind/react";

const CartItem = ({evento}) => {
    const {removeItem} = useCart();

  return (
    <div className="flex items-center justify-between flex-col lg:flex-row 
            pb-3 pt-3 last:pb-0 bg-red-400">
            <div className="flex items-center gap-x-3 flex-col lg:flex-row w-full">
                <div className="w-full h-fit sm:h-96 lg:w-80 lg:h-48 xl:w-96 xl:h-52 overflow-hidden rounded-lg">
                    <img src={evento.image} alt={evento.name} className="w-full h-full object-cover" />
                </div>

                <div className='bg-green-300 w-full lg:w-64 pt-3'>
                    <Typography color="blue-gray" variant="h4"
                        className="pt-1">
                        {evento.name}
                    </Typography>
                    <Typography color="blue-gray" variant="h6"
                        className="pt-1">
                        {evento.description}
                    </Typography>
                    <Typography variant="small" color="gray"
                        className="pt-1">
                        Cantidad: {evento.quantity}
                    </Typography>
                </div>
            </div>

            <div className='flex flex-col items-end w-full bg-blue-gray-200'> 
                <Tooltip content="Quitar del carrito"
                    className="bg-opacity-50">
                    <IconButton variant="outlined" size="md" 
                        className='hover:bg-gray-200'
                        onClick={() => removeItem(evento.id)}>
                            <CiTrash className='text-lg'/>
                    </IconButton>
                </Tooltip>
                
                <Typography color="blue-gray" variant="h6"
                    className="pt-1">
                    ${evento.price}
                </Typography>

                <Typography color="blue-gray" variant="h6"
                    className="pt-1">
                    Precio final: ${evento.price * evento.quantity},00
                </Typography>
            </div>
        </div>
  )
}

export default CartItem