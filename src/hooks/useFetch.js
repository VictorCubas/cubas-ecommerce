import { useEffect, useState } from "react";

export const useFetch = (fetchFn, categoryId, initialValue) => { //fetchFn --> generic name
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
    const [fetchedData, setFetchedData] = useState(initialValue); //generic name

    useEffect(() => {
        setLoading(true);
        
          const fetchData = async () => {
            try {
              const res = await fetchFn(); //generic name
              if(categoryId){
                  //se filtra por categoria
                  const listFilter = res.docs.filter((doc) => doc.data().category === categoryId);
                  
                  //se modifica cada item para formatear la fecha
                  const listMapped = listFilter.map((doc) => {
                    const newDate = formatDate(doc.data().date);
                    return {
                      id: doc.id, ...doc.data(), date: newDate
                    }
                  });

                  setFetchedData(listMapped); 
              }
              else{
                  const list = res.docs.map((doc) => {
                    const newDate = formatDate(doc.data().date);
                    return {
                      id: doc.id, ...doc.data(), date: newDate
                    }
                  });

                  setFetchedData(list); 
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
    }, [fetchFn, categoryId])


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
        error
    }
}
