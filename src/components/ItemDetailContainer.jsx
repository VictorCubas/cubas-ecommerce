import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/asynData';
import CustomSpinner from './CustomSpinner';


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
                setEvent(response);
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
            <h1 className="text-lg font-bold uppercase text-white">ItemDetailContainer</h1>

            {loading &&  <CustomSpinner/>}
            {!loading && event && <div className="text-lg font-bold uppercase text-white">
                <p>{event.name}</p>
                <p>${event.price}</p>
                <p>{event.description}</p>
                <p>{event.place}</p>
                <p>{event.date}</p>
                <img src={event.image} alt={event.name} />
            </div>}
        </>
    )
}

export default ItemDetailContainer