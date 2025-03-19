import React from 'react'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className='w-full flex justify-center pt-10'>
      <div className='flex flex-col items-center'>
        <h1 className='text-lg font-bold uppercase text-white'>ERROR PAGE</h1>

        <div className="flex w-max gap-4 pt-4">
          {/* <Button variant="filled" color="amber" as={Link} to="/">IR AL HOME</Button> */}
          <Link to='/' className='text-xs font-semibold bg-amber-400 px-4 py-3 rounded-md hover:bg-amber-500
                    flex items-center'>IR AL HOME</Link>
        </div>
      </div>
    </div>
  )
}
