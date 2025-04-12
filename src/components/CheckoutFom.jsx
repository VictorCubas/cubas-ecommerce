import React, { useEffect, useState } from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner 
} from "@material-tailwind/react";
import { useCart } from '../hooks/useCart';

import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../service/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Purchase from './Purchase';
import { fetchPurchaseById, getPurchaseByIdFirebase } from '../mock/asynData';

const CheckoutFom = () => {
  const {cart, cartTotal, clearCart, toggleCheckoutVacio} = useCart();
  const [orderId, setOrderId] = useState('');
  const [pagosDetail, setPagosDetail] = useState(null);
  const [onSubmition, setOnSubmition] = useState(false);

  
  const {register, handleSubmit, formState: {errors}, getValues, watch} = useForm();
  const watchers = watch();

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
    console.log('dataForm: ', dataForm);

    // return;
    try {
      setOnSubmition(true);

      let order = {
        comprador: {...dataForm},
        compras: cart,
        total: cartTotal(),
        date: serverTimestamp()
      }

      const ventas = collection(db, 'orders');
      const resPago = await addDoc(ventas, order);

      const purchaseDetail = await fetchPurchaseById(getPurchaseByIdFirebase, resPago.id);

      setPagosDetail(purchaseDetail);
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
    finally{
      setOnSubmition(false);
    }
  }


  let content = '';
  if(orderId){
    content = <Purchase pagoDetail={pagosDetail}/>
  }
  else{
    content = <div className='w-full flex justify-center py-8'>
                  <div className='flex justify-center items-center sm:w-full lg:w-4/6'>
                      <Card color="white" shadow={false}
                        className='flex justify-center items-center sm:w-5/6 pt-5'>
                        <Typography variant="h4" color="blue-gray">
                          Completa tus datos
                        </Typography>

                        <form onSubmit={handleSubmit(finalizarCompra)}
                          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                          <div className="mb-1 flex flex-col gap-5 px-2">
                            {/* NOMBRE */}
                            <div>
                              <div className='flex flex-col gap-5'>
                                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Nombre {!watchers.nombre && <span className='text-red-400'>*</span>}
                                  </Typography>
                                  <Input
                                    size="md"
                                    placeholder="Pedro"
                                    name="nombre"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 m-0 p-0 -mb-3"
                                    labelProps={{
                                      className: "before:content-none after:content-none",
                                    }}
                                    {...register('nombre', {required: true, minLength: 3})}
                                  />
                              </div>
                              <div>
                                {errors?.nombre?.type === 'required' && <span className='text-red-400 text-sm'>Por favor complete el campo</span>}
                                {errors?.nombre?.type === 'minLength' && <span className='text-red-400 text-sm'>Por favor el nombre debe tener minimo 3 caracteres</span>}
                              </div>
                            </div>
                            
                            <div>
                              <div  className='flex flex-col gap-5'>
                                {/* APELLIDO */}
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                  Apellido {!watchers.apellido && <span className='text-red-400'>*</span>}
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
                                
                              </div>
                              <div>
                                {errors?.apellido?.type === 'required' && <span className='text-red-400 text-sm'>Por favor complete el campo</span>}
                                {errors?.apellido?.type === 'minLength' && <span className='text-red-400 text-sm'>Por favor el apellido debe tener minimo 3 caracteres</span>}
                              </div>
                            </div>


                            <div>
                              <div  className='flex flex-col gap-5'>
                                  {/* NUMERO DE DOCUMENTO */}
                                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                                  N° De documento {!watchers.nroDocumento && <span className='text-red-400'>*</span>}
                                </Typography>
                                <Input
                                  size="lg"
                                  placeholder="123456"
                                  name="nroDocumento"
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                  labelProps={{
                                    className: "before:content-none after:content-none",
                                  }}
                                  {...register('nroDocumento', {required: true})}
                                />                 
                              </div>
                              <div>
                                {errors?.nroDocumento?.type === 'required' && <span className='text-red-400 text-sm'>Por favor complete el campo</span>}
                              </div>
                            </div>

                            {/* DIRECCION */}
                            <div>
                              <div  className='flex flex-col gap-5'>
                                
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                  Dirección {!watchers.direccion && <span className='text-red-400'>*</span>}
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
                              </div>
                              <div>
                                {errors?.direccion?.type === 'required' && <span className='text-red-400 text-sm'>Por favor complete el campo</span>}
                                {errors?.direccion?.type === 'minLength' && <span className='text-red-400 text-sm'>Por favor el dirección debe tener mínimo 10 caracteres</span>}
                                {errors?.direccion?.type === 'maxLength' && <span className='text-red-400 text-sm'>Por favor el dirección debe tener máximo 10 caracteres</span>}
                              </div>
                            </div>

                              {/* TELEFONO */}
                            <div>
                              <div  className='flex flex-col gap-5'>
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                  Teléfono {!watchers.telefono && <span className='text-red-400'>*</span>}
                                </Typography>
                                <Input
                                  size="lg"
                                  placeholder="+54 9 11 12345678"
                                  name="telefono"
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                  labelProps={{
                                    className: "before:content-none after:content-none",
                                  }}
                                  {...register('telefono', {required: true})}
                                />       
                              </div>
                              <div>
                                {errors?.direccion?.type === 'required' && <span className='text-red-400 text-sm'>Por favor complete el campo</span>}
                              </div>
                            </div>

                            {/* EMAIL */}
                            <div>
                              <div  className='flex flex-col gap-5'>
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                  Email {!watchers.email && <span className='text-red-400'>*</span>}
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
                                
                              </div>
                              <div>
                                {errors?.email?.type === 'required' && <span className='text-red-400 text-sm'>Por favor complete el campo</span>}
                                {errors?.email?.type === 'pattern' && <span className='text-red-400 text-sm'>{errors.email.message}</span>}
                              </div>
                            </div>

                            {/* REPETIR EMAIL */}
                            <div>
                              <div  className='flex flex-col gap-5'>    
                              <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Repetir Email {!watchers.emailRepetido && <span className='text-red-400'>*</span>}
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
                              </div>
                              <div>
                                {errors?.emailRepetido?.type === 'required' && <span className='text-red-400 text-sm'>Por favor complete el campo.</span>}
                                {errors?.emailRepetido?.type === 'pattern' && <span className='text-red-400 text-sm'>{errors.emailRepetido.message}</span>}
                                {errors?.emailRepetido?.type === 'equalsMails' && <span className='text-red-400 text-sm'>Los mails deben ser iguales.</span>}
                              </div>
                            </div>
                          </div>
                        

                          <Button type='submit' color='amber' className="mt-6" fullWidth>
                            {onSubmition ? <Spinner className="h-5 w-full text-center" /> : <>Enviar</>}

                          </Button>
                        </form>
                      </Card>
                    </div>
              </div>;
  }

  return (
    <>
      {content}
    </>
  )
}

export default CheckoutFom