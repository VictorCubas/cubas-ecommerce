import { getProductsFirebase } from "../mock/asynData";
import EventoList from "./EventoList";
import CustomSpinner from "./CustomSpinner.jsx";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import Welcome from "./Welcome.jsx";

const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams();

    const {loading, 
        fetchedData: data, 
        setFetchedData: setData,
        error} = useFetch(getProductsFirebase, categoryId, []);

    return(
        <>
            <Welcome greeting={greeting} category={categoryId}/>

            {loading && <CustomSpinner/>}
            {!loading && <EventoList eventos={data}/>}
        </>
    )
}


export default ItemListContainer;