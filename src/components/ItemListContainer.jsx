import { useEffect, useState } from "react"
import { getProducts } from "../mock/asynData";
import EventoList from "./EventoList";
// import PRODUCTOS from '../mock/asynData.jsx';

const ItemListContainer = ({greeting, user}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


   useEffect(()=>{
        const getEventos = async () => {
            try {
                const response = await getProducts();
                setData(response);
            } catch (error) {
                
            }
        };

        getEventos();
   },[])

    return(
        <div className="mt-6 pt-5">
            <h1 className="text-lg font-bold uppercase text-white">{greeting}</h1>

            <EventoList data={data}/>
        </div>
    )
}


export default ItemListContainer;