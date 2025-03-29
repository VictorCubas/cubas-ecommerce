import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='"mt-5 pt-5 font-bold uppercase text-white text-center w-full text-xl'>
        <h1>Tu carrito esta vacio 😱</h1>
        <h3>Te invitamos a volver al home para ver más eventos</h3>
        
        <div className='w-full flex justify-center mt-5'>
            <Link to='/' className='text-black text-xs w-32 font-semibold bg-amber-400 px-4 py-3 rounded-md hover:bg-amber-500
                flex items-center justify-center'>IR AL HOME</Link>
        </div>
    </div>
  )
}

export default EmptyCart