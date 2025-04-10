import React, { useEffect, useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useCart } from '../hooks/useCart';

import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../service/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CheckoutFom = () => {
  const {cart, cartTotal, clearCart, toggleCheckoutVacio} = useCart();
  const [orderId, setOrderId] = useState('');
  const {register, handleSubmit, formState: {errors}, getValues} = useForm();

  console.log('errors: ', errors);

  const navigate = useNavigate();

  useEffect(() => {
    const total = cartTotal();
    if(!total){
      toggleCheckoutVacio();
        navigate('/');
    }
  }, []);


  const finalizarCompra = async (dataForm) => {
    delete dataForm.emailRepetido;
    console.log(dataForm);

    try {
      let order = {
        comprador: {...dataForm},
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
                <Link to='/'>
                  <Button color='amber' size='md' className='mt-4'>
                        Volver al home
                  </Button>
                </Link>
              </div>;
  }
  else{
    content =  <div className='flex justify-center items-center sm:w-5/6'>
                <Card color="white" shadow={false}
                  className='flex justify-center items-center sm:w-5/6 pt-5'>
                  <Typography variant="h4" color="blue-gray">
                    Completa tus datos
                  </Typography>

                  <form onSubmit={handleSubmit(finalizarCompra)}
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
                        {...register('nombre', {required: true, minLength: 3})}
                      />
                      {errors?.nombre?.type === 'required' && <span className='text-red-400'>Por favor complete el campo</span>}
                      {errors?.nombre?.type === 'minLength' && <span className='text-red-400'>Por favor el nombre debe tener minimo 3 caracteres</span>}
                      
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
                        {...register('apellido', {required: true, minLength: 3})}
                      />
                       {errors?.apellido?.type === 'required' && <span className='text-red-400'>Por favor complete el campo</span>}
                       {errors?.apellido?.type === 'minLength' && <span className='text-red-400'>Por favor el apellido debe tener minimo 3 caracteres</span>}

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
                        {...register('direccion', {required: true, minLength: 10, maxLength:45})}
                      />
                        {errors?.direccion?.type === 'required' && <span className='text-red-400'>Por favor complete el campo</span>}
                        {errors?.direccion?.type === 'minLength' && <span className='text-red-400'>Por favor el dirección debe tener mínimo 10 caracteres</span>}
                        {errors?.direccion?.type === 'maxLength' && <span className='text-red-400'>Por favor el dirección debe tener máximo 10 caracteres</span>}

                      {/* EMAIL */}
                      <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Email
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        type='email'
                        name="email"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        {...register('email',
                                {required: true,  pattern: {
                                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                  message: 'Ingrese un email válido',
                                }}
                          )}
                      />
                      {errors?.email?.type === 'required' && <span className='text-red-400'>Por favor complete el campo</span>}
                      {errors?.email?.type === 'pattern' && <span className='text-red-400'>{errors.email.message}</span>}

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
                        {...register('emailRepetido', {
                            required: true, validate: { equalsMails: mail2 => mail2 === getValues().email},
                            pattern: {
                              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: 'Ingrese un email válido',
                            }
                          })}
                      />
                      {errors?.emailRepetido?.type === 'required' && <span className='text-red-400'>Por favor complete el campo.</span>}
                      {errors?.emailRepetido?.type === 'pattern' && <span className='text-red-400'>{errors.emailRepetido.message}</span>}
                      {errors?.emailRepetido?.type === 'equalsMails' && <span className='text-red-400'>Los mails deben ser iguales.</span>}
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

export default CheckoutFom