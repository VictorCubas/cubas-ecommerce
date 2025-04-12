import React, { useState } from 'react';
import { 
  Card, 
  CardBody, 
  Typography, 
  Button, 
} from "@material-tailwind/react";



import CartItem from './CartItem';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import ModalDeleteConfirmation from './ModalDeleteConfirmation';

const CartView = () => {
  const {cart, cartTotal} = useCart();
  const [showModalConfirmation, setShowModalConfirmation] = useState(false);
  
  /**
   * Controla que el modal de confirmacion se muestre o no
   * @param {*} show 
   */
  const handleShowModal = (show) => {
    setShowModalConfirmation(show);
  }

  console.log('cart: ', cart);

  return ( 
    <>
      {!showModalConfirmation ? 
        <div className='flex justify-center'>
          <Card className="w-5/6">
          <CardBody className='px-1 sm:px-4'>
            <div className="mb-4 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Tu carrito
              </Typography>
              <Button
                variant="outlined"
                color='red'
                size='sm'
                className="font-bold text-red-400"
                onClick={() => handleShowModal(true)}
              >
                Limpiar carrito
              </Button>

            </div>
            <div className="divide-y-4 divide-gray-200">
              {cart.map((evento) => (

                <CartItem key={evento.id} evento={evento}/>
              ))}
            </div>

              <div className='pt-5 mt-5 flex justify-end w-ful'>
                <Typography color="blue-gray" variant="h4">
                      Total: ${cartTotal()},00
                </Typography>
              </div>


              <div className='flex gap-3 mt-3 btn-cart items-center justify-center md:justify-start'>
                <Link to='/'>
                  <Button color='amber' size="lg"
                      variant="outlined" className='btn text-gray-800 hover:text-amber-500 p-2 sm:p-3'>
                          Seguir comprando 
                  </Button>
                </Link>

                <Link to='/checkout'>
                  <Button color='amber' size="lg"
                      variant="filled" className='btn text-white hover:bg-amber-300 text-md font-normal
                                     hover:text-orange-800 hover:shadow-none p-1 sm:p-3'>
                          Terminar Compra
                  </Button>
                </Link>
              </div>
          </CardBody>
          </Card>
        </div> : 
      <>   
          <ModalDeleteConfirmation handleShowModal={handleShowModal}/>
      </>}
    </>
  )
}

export default CartView