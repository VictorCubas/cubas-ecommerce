import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductByIdFirebase  } from '../mock/asynData';
import CustomSpinner from './CustomSpinner';
import ItemDetail from './ItemDetail';
import { useFetchById } from '../hooks/useFetchById';


const ItemDetailContainer = () => {
    const {categoryId, eventId} = useParams();

    //custom hook
    const {loading, 
            fetchedData: event, 
            setFetchedData: setEvent,
            error,
            invalid} = useFetchById(getProductByIdFirebase, categoryId, eventId, []);

    return (
        <>
            {loading &&  <CustomSpinner/>}
            {!loading && error &&  <div className="mt-5 pt-5 font-bold uppercase text-white text-center w-full text-2xl">
                    <p>No hay datos por mostrar</p>
                    <p>{error.message}</p>
                </div>
                }

            {!loading && invalid && <div className="mt-5 pt-5 font-bold uppercase text-white text-center w-full text-2xl">
                    <p>No hay datos por mostrar</p>
                    <p>El producto no existe o no se encuentra disponible</p>
                </div>}
            {!loading && !error && !invalid && <ItemDetail event={event} />}
        </>
    )
}

export default ItemDetailContainer