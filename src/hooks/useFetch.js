import { useEffect, useState } from "react";

export const useFetch = (fetchFn, id, initialValue) => { //fetchFn --> generic name
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [fetchedData, setFetchedData] = useState(initialValue); //generic name

    useEffect(() => {
        setLoading(true);
        
          const fetchData = async () => {
            try {
              const data = await fetchFn(); //generic name
              if(id){
                  const eventosCategoria = data.filter(event => event.category === id)
                  setFetchedData(eventosCategoria);
              }
              else{
                  setFetchedData(data); 
              }
              
            } catch (error) {
              setError({
                message: error.message || 'Ocurrio algo innecesperado.'
              });
            }finally{
              setLoading(false);
            }
          }
    
          fetchData();
    }, [fetchFn, id])


    return {
        loading,
        fetchedData,
        setFetchedData,
        error
    }
}
