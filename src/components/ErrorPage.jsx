import React from 'react'
import { Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import { FaFlag } from "react-icons/fa6";


export const ErrorPage = () => {

  return (

    <>
       <div className="screen-height mx-auto grid place-items-center text-center px-8">
        <div>
          <FaFlag className="w-20 h-20 mx-auto text-amber-300" />
          <Typography
            variant="h1"
            color="amber"
            className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          >
            Error 404 <br /> Parece que algo salió mal.
          </Typography>
          <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
            No te preocupes nuestro equipo lo esta verificando. Por favor refresca la pagina o verifica la url
          </Typography>
          <div className='w-full flex justify-center'>
              <Link to='/' className='text-xs w-32 font-semibold bg-amber-400 px-4 py-3 rounded-md hover:bg-amber-500
                    flex items-center justify-center'>IR AL HOME</Link>
          </div>
        </div>
      </div>
    </>
  )
}
