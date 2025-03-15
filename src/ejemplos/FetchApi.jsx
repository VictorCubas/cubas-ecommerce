import React, { useEffect, useState } from 'react';
import ListApi from './ListApi';

const FetchApi = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch('https://rickandmortyapi.com/api/character').
            then((res) => {
                return res.json()
            })
            .then(resData => {
                console.log(resData);
                setCharacters(resData.results);
            }).catch(error => {
                console.log(error);
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
    }, []);

    if(error){
        <p>Hubo un error</p>
    }

  return (
    <>
        {loading ? <p>Cargando...</p>: <ListApi personajes={characters}/>}
    </>
  )
}

export default FetchApi