import { getProductsFirebase } from "../mock/asynData";
import EventoList from "./EventoList";
import CustomSpinner from "./CustomSpinner.jsx";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import { toast, Toaster } from 'react-hot-toast';
import { useCart } from "../hooks/useCart.js";
import { useEffect } from "react";

const ItemListContainer = ({greeting, user}) => {
    const {categoryId} = useParams();
    const {accedienteACheckoutVacio, toggleCheckoutVacio} = useCart();


    //control en caso de que se haya accedido a checkout y cart este vacio
    useEffect(() => {
        if(accedienteACheckoutVacio){
            const duration = 3500;
            toast.error("Tu carrito aún está vacío", {duration: duration})

            setTimeout(() => {
                toggleCheckoutVacio();
            }, duration);
        }
    }, []);

    const {loading, 
        fetchedData: data, 
        setFetchedData: setData,
        error} = useFetch(getProductsFirebase, categoryId, []);

    return(
        <>
            <h1 className="pl-5 ml-5 text-xl font-bold uppercase text-white">
                {greeting}
                {categoryId && <span className="text-red-200"> {categoryId}</span>}
            </h1>

            {loading && <CustomSpinner/>}
            {!loading && <EventoList eventos={data}/>}

            {accedienteACheckoutVacio && <Toaster
                position="bottom-center"
                reverseOrder={false}
                />}
        </>
    )
}


export default ItemListContainer;