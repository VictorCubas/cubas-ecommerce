import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/asynData';
import CustomSpinner from './CustomSpinner';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {eventId} = useParams();

    useEffect(()=>{
        setLoading(true);

        const getEvento = async () => {
            try {
                const response = await getProductById(eventId);
                if(response.length > 0){
                    setEvent(response[0]);
                }

            } catch (error) {
                setError(error);
            }finally{
                setLoading(false);
            }
        };

        getEvento();
    },[eventId])

    return (
        <>
            {loading &&  <CustomSpinner/>}
            {!loading && error && <>
                <p>Algo Salio mal!</p>
                <p>Vuelva a intentarlo</p></>}

            {!loading && !event && <div className="mt-5 pt-5 font-bold uppercase text-white text-center w-full text-2xl">
                    No hay datos por mostrar
                </div>}
            {!loading && event && <ItemDetail event={event} />}
        </>
    )
}

export default ItemDetailContainer