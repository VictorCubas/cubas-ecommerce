import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/asynData';
import CustomSpinner from './CustomSpinner';
import ItemDetail from './ItemDetail';
import { useFetchById } from '../hooks/useFetchById';


const ItemDetailContainer = () => {
    const {categoryId, eventId} = useParams();

    console.log('url param eventId: ', eventId);
    console.log('url param categoryId: ', categoryId);

    //custom hook
    const {loading, 
            fetchedData: event, 
            setFetchedData: setEvent,
            error} = useFetchById(getProductById, categoryId, eventId, []);

    return (
        <>
            {loading &&  <CustomSpinner/>}
            {!loading && error && <>
                <p>Algo Salio mal!</p>
                <p>Vuelva a intentarlo</p></>}

            {!loading && !event && <div className="mt-5 pt-5 font-bold uppercase text-white text-center w-full text-2xl">
                    <p>No hay datos por mostrar</p>
                    <p>Favor verifique el enlace</p>
                </div>}
            {!loading && event && <ItemDetail event={event} />}
        </>
    )
}

export default ItemDetailContainer