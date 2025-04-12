import { getProductsFirebase } from "../mock/asynData";
import EventoList from "./EventoList";
import CustomSpinner from "./CustomSpinner.jsx";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";


const ItemListContainer = ({greeting, user}) => {
    const {categoryId} = useParams();

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
        </>
    )
}


export default ItemListContainer;