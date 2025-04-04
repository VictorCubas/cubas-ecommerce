import { useEffect, useState } from "react";

export const useFetchById = (fetchFn, categoryId, eventId, initialValue) => { //fetchFn --> generic name
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [fetchedData, setFetchedData] = useState(initialValue); //generic name
    const [invalid, setInvalid] = useState(false); //generic name


    useEffect(() => {
        setLoading(true);
        
          const fetchData = async () => {
            try {
              const responseDoc = await fetchFn(categoryId, eventId); //generic name
              
              if(responseDoc.exists()){
                const newDate = formatDate(responseDoc.data().date);
                setFetchedData({
                  id: responseDoc.id,
                  ...responseDoc.data(),
                  date: newDate //se formatea el date
                  });
              }
              else{
                //producto inexistente
                setInvalid(true)
              }
              
            } catch (error) {
              //en caso de que la categorria sea invalida o algun error en el http de firerbase
              setError({
                message: error.message || 'Ocurrio algo inesperado.'
              });
              
            }finally{
              setLoading(false);
            }
          }
    
          fetchData();
    }, [fetchFn, categoryId, eventId])


    /**
     * Agrega un formato a la fecha
     * @param {*} timestamp 
     * @returns la fecha formateada
     */
    const formatDate = (timestamp) => {
      const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
      return date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
    };


    return {
        loading,
        fetchedData,
        setFetchedData,
        error,
        invalid
    }
}
