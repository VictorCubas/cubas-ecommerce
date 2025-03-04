import { useEffect, useState } from "react"
import { getProducts } from "../mock/asynData";
import EventoList from "./EventoList";
import CustomSpinner from "./CustomSpinner.jsx";
// import PRODUCTOS from '../mock/asynData.jsx';

const ItemListContainer = ({greeting, user}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


   useEffect(()=>{
        setLoading(true);

        const getEventos = async () => {
            try {
                const response = await getProducts();
                setData(response);
            } catch (error) {
                
            }finally{
                setLoading(false);
            }
        };

        getEventos();
   },[])

    return(
        <main className="mt-6 pt-5">
            <h1 className="text-lg font-bold uppercase text-white">{greeting}</h1>

            {loading && 
                 <CustomSpinner/>}
            {!loading && <EventoList eventos={data}/>}
        </main>
    )
}


export default ItemListContainer;