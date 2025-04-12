import { Button, Card, CardBody } from '@material-tailwind/react';
import React from 'react'
import { FaRegCheckCircle, FaRegCopy  } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Purchase = ({pagoDetail}) => {

  return (
    <div className="max-w-3xl mx-auto mt-5 pb-10 mb-10">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900 mb-4">
              <FaRegCheckCircle className="h-8 w-8 text-green-400" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">¡Compra realizada con éxito!</h1>
            <p className="text-gray-300">Gracias por tu compra. Hemos enviado los detalles a tu correo electrónico.</p>
          </div>

          <div className="bg-[#252547] rounded-lg p-4 mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-1">Código de compra:</p>
              <p className="font-mono font-medium text-white">{pagoDetail?.id}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-200 w-fit flex justify-center hover:bg-[#333355] hover:text-white"
            >
              <FaRegCopy className="h-4 w-4 mr-2" />
              <span>Copiar</span>
            </Button>
          </div>



          <Card className="bg-[#252547] border-0 shadow-lg">
                <CardBody className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-white">Detalles del pago</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="text-gray-400">Método de pago:</p>
                      <div className="flex items-center">
                        <div className="w-8 h-5 bg-blue-600 rounded mr-2"></div>
                        <p className="font-medium text-white">Visa terminada en 4242</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-gray-400">Fecha de pago:</p>
                      <p className="font-medium text-white">{pagoDetail?.date}</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-gray-400">Estado:</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-600 bg-green-900/30 text-green-400 hover:bg-green-900/50 rounded-full"
                      >
                        Completado
                      </Button>
                    </div>

                    <hr className="my-2 border-blue-gray-50" />

                    <div className="mt-5 space-y-2">

                      <div className="flex justify-between">
                        <p className="text-gray-400">IVA (10%):</p>
                        <p className="font-medium text-white">Incluido</p>
                      </div>

                      <div className="flex justify-between font-bold">
                        <p className="text-white">Total:</p>
                        <p className="text-white">${pagoDetail?.total}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
          </Card>

          <Card className="bg-[#252547] border-0 shadow-lg mt-5">
            <CardBody className="p-6">
              <h3 className="font-bold text-lg mb-4 text-white">Datos de facturación</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-gray-400">Nombre:</p>
                  <p className="font-medium text-white">{pagoDetail?.comprador?.nombre} {pagoDetail?.comprador?.apellido}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">Email:</p>
                  <p className="font-medium text-white">{pagoDetail?.comprador?.email}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">Teléfono:</p>
                  <p className="font-medium text-white">{pagoDetail?.comprador?.telefono}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">DNI:</p>
                  <p className="font-medium text-white">{pagoDetail?.comprador?.nroDocumento}</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-gray-400">Dirección:</p>
                  <p className="font-medium text-white">{pagoDetail?.comprador?.direccion}</p>
                </div>
              </div>
            </CardBody>
          </Card>

          <div className='flex justify-end gap-3 mt-3 w-full'>
            <Link to='/'>
              <Button color='green' size="lg"
                  variant="filled" className='text-white hover:bg-green-600 text-md font-normal hover:shadow-none py-3'>
                      Volver al inicio
              </Button>
            </Link>
          </div>
    </div>
  )
}

export default Purchase