import { useEffect, useState } from "react"
import { getProducts } from "../mock/asynData";
import EventoList from "./EventoList";
import CustomSpinner from "./CustomSpinner.jsx";
import { useParams } from "react-router-dom";
// import PRODUCTOS from '../mock/asynData.jsx';

const ItemListContainer = ({greeting, user}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const {categoryId} = useParams();


   useEffect(()=>{
        setLoading(true);

        const getEventos = async () => {
            try {
                const eventos = await getProducts();
                if(categoryId){
                    const eventosCategoria = eventos.filter(event => event.category === categoryId)
                    setData(eventosCategoria);
                }
                else{
                    setData(eventos);
                }
            } catch (error) {
                
            }finally{
                setLoading(false);
            }
        };

        getEventos();
   },[categoryId])

    return(
        <>
            <h1 className="text-lg font-bold uppercase text-white">{greeting}</h1>

            {loading &&  <CustomSpinner/>}
            {!loading && <EventoList eventos={data}/>}
        </>
    )
}


export default ItemListContainer;