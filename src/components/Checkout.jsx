import React, { useEffect, useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useCart } from '../hooks/useCart';

import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../service/firebase';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validateMail, setMaidateMail] = useState('');
  const {cart, cartTotal, clearCart, toggleCheckoutVacio} = useCart();
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const total = cartTotal();
    if(total === 0){
      toggleCheckoutVacio();
        navigate('/');
    }
  }, []);

  const buyerData = (e) => {
    setBuyer(prevValue => {
      return {
        ...prevValue,
        [e.target.name]: e.target.value
      }
    });
  };

  console.log(buyer, validateMail);

  const finalizarCompra = async (e) => {
    e.preventDefault();
    console.log(buyer);

    if(!buyer.nombre || !buyer.apellido || !buyer.direccion ||
      !buyer.email || !validateMail
    ){
      console.error('formulario invalido');
      return;
    }
    else if(buyer.email !== validateMail){
      console.error('email diferentes');
      return;
    }

    try {
      let order = {
        comprador: buyer,
        compras: cart,
        total: cartTotal(),
        date: serverTimestamp()
      }

      console.log('order: ', order);

      const ventas = collection(db, 'orders');
      const resPago = await addDoc(ventas, order);
      setOrderId(resPago.id);

      cart.forEach(item => {
        const docRef = doc(db, 'items', item.id);
        getDoc(docRef)
          .then(dbDoc => {
            updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity});
          }).catch(error => console.error(error));
      });
      
      clearCart();
    } catch (error) {
        //MANEJAR ERROR
        console.error('🔥 Error al guardar la orden:', error.message);
    }
  }


  let content = '';
  if(orderId){
    content = <div className='text-white'>
                <h2>Compra realizada</h2>
                <h4>Su id es: {orderId}</h4>
              </div>;
  }
  else{
    content =  <div className='flex justify-center items-center sm:w-5/6'>
                <Card color="white" shadow={false}
                  className='flex justify-center items-center sm:w-5/6 pt-5'>
                  <Typography variant="h4" color="blue-gray">
                    Completa tus datos
                  </Typography>

                  <form onSubmit={finalizarCompra}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                      {/* NOMBRE */}
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Nombre
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="Pedro"
                        name="nombre"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        onChange={buyerData}
                      />
                      
                      {/* APELLIDO */}
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Apellido
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="Lopez"
                        name="apellido"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        onChange={buyerData}
                      />

                      {/* DIRECCION */}
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Dirección
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="Calle Méxio"
                        name="direccion"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        onChange={buyerData}
                      />

                      {/* EMAIL */}
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Email
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        name="email"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        onChange={buyerData}
                      />

                      {/* REPETIR EMAIL */}
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Repetir Email
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        name="emailRepetido"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        onChange={(e) => setMaidateMail(e.target.value)}
                      />
                    </div>
                  

                    <Button type='submit' color='amber' className="mt-6" fullWidth>
                      Enviar
                    </Button>
                  </form>
                </Card>
              </div>;
  }

  return (
    <>
      {content}
    </>
  )
}

export default Checkout