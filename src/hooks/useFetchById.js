import { useEffect, useState } from "react";

export const useFetchById = (fetchFn, categoryId, eventId, initialValue) => { //fetchFn --> generic name
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [fetchedData, setFetchedData] = useState(initialValue); //generic name

    useEffect(() => {
        setLoading(true);
        
          const fetchData = async () => {
            try {
              const response = await fetchFn(categoryId, eventId); //generic name
              if(response.length > 0){
                setFetchedData(response[0]);
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
    }, [fetchFn, categoryId, eventId])


    return {
        loading,
        fetchedData,
        setFetchedData,
        error
    }
}
