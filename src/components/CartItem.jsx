import React from 'react'
import { useCart } from '../hooks/useCart'
import { Typography, Tooltip } from "@material-tailwind/react";
import { CiTrash } from "react-icons/ci";
import { IconButton } from "@material-tailwind/react";

const CartItem = ({evento}) => {
    const {removeItem} = useCart();

    const shortenText = (text, maxLength = 100) => {
        if (!text) return '';
        return text.length > maxLength
          ? text.slice(0, maxLength).trim() + '...'
          : text;
      }

  return (
    <div className="flex items-center justify-between flex-col lg:flex-row 
            pb-3 pt-3 last:pb-0 bg-rfed-400 bg-[#252547] text-white px-2 rounded-lg mt-2">
            <div className="flex items-center gap-x-3 flex-col lg:flex-row w-full lg:w-fit">
                <div className="w-full h-fit sm:h-96 lg:w-80 lg:h-48 xl:w-96 xl:h-52 overflow-hidden rounded-lg">
                    <img src={evento.image} alt={evento.name} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className='bg-bluge-300 w-full flex flex-col lg:flex-row lg:pl-4'>
                <div className='bg-grfeen-400 w-full pt-3'>
                        <Typography variant="h4"
                            className="pt-1">
                            {evento.name}
                        </Typography>
                        <Typography variant="h6"
                            className="pt-1 text-gray-400">
                        {shortenText(evento.description)} 
                        </Typography>
                        <Typography variant="small"
                            className="pt-1">
                            Cantidad: {evento.quantity}
                        </Typography>
                    </div>

                <div className='flex flex-col items-end w-full lg:w-4/6 xl:w-3/6 bg-bluee-gray-200'> 
                    <Tooltip content="Quitar del carrito"
                        className="bg-opacity-50">
                        <IconButton variant="outlined" size="md" 
                            className='text-gray-400 border-red-200 hover:bg-red-50 hover:text-red-400'
                            onClick={() => removeItem(evento.id)}>
                                <CiTrash className='text-lg'/>
                        </IconButton>
                    </Tooltip>
                    
                    <Typography variant="h6"
                        className="pt-1 text-gray-400">
                        ${evento.price}
                    </Typography>

                    <Typography variant="h6"
                        className="pt-1">
                        Precio final: ${evento.price * evento.quantity},00
                    </Typography>
                </div>
            </div>
        </div>
  )
}

export default CartItem