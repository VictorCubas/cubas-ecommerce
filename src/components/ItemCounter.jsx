import { Button } from '@material-tailwind/react';
import React, { useState } from 'react'

const ItemCounter = ({stock, addItemToCart}) => {
    const [count, setCount] = useState(1);
    
    const add = () => {
        if(count < stock){
            setCount(prevCount => prevCount + 1);
        }
    }

    const substract = () => {
        if(count > 0){
            setCount(prevCount => prevCount - 1);
        }
    }

  return (
    <>
        <div>
            <button className='px-2 py-1 w-12 rounded-md bg-blue-gray-400' onClick={substract}>-</button>
            <span className='px-2 py-1 w-12'>{count}</span>
            <button className='px-2 py-1 w-12 rounded-md bg-blue-gray-400' onClick={add}>+</button>
        </div>

        <Button color='amber' className='mt-4' disabled={count === 0 || stock === 0}
            onClick={() => addItemToCart(count)}>
                Agregar al carrito
        </Button>
          
        
    </>
  )
}

export default ItemCounter