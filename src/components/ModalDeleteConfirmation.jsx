import React, { useState } from 'react'
import { 
    Button, 
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
  } from "@material-tailwind/react";

  import { RiAlertLine } from "react-icons/ri";
  import { useCart } from '../hooks/useCart';

const ModalDeleteConfirmation = ({handleShowModal}) => {
  const {clearCart} = useCart();
    const [size, setSize] = useState('xs');


    const handleShowModalInner = () => {
        handleShowModal(false);
        setSize(null);
    }

    const handleClearCart = () => {
      clearCart();
      setSize(null);
    }

    const handleOpen = (value) => setSize(value);

  return (
    <Dialog
            open={
              size === "xs" ||
              size === "sm" ||
              size === "md"
            }
            size={size || "md"}
            handler={handleOpen}
            onClose={() => handleShowModal(false)}
          >
            <div className='flex w-full justify-center pt-5 text-3xl text-red-400'>
              <RiAlertLine/>
            </div>
            <DialogHeader className='mt-2 pb-2 w-full flex justify-center text-center'>Confirmación de operación</DialogHeader>
            <DialogBody className='text-center'>
              <p className='text-lg'>Estás seguro que deseas limpiar todos los items del carrito?</p>

              <h5 className='mt-2 text-sm'>Esta acción no se puede deshacer.</h5>
            </DialogBody>
            <DialogFooter className='flex justify-center gap-1'>
              <Button
                variant="outlined"
                onClick={handleShowModalInner}
                className="mr-1 cancel-btn"
              >
                <span>Cancelar</span>
              </Button>
              <Button
                variant="gradient"
                color="red"
                onClick={handleClearCart}
              >
                <span>Eliminar</span>
              </Button>
            </DialogFooter>
          </Dialog>
  )
}

export default ModalDeleteConfirmation