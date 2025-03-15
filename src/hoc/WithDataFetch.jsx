import React, { useEffect, useState } from 'react'

const WithDataFetch = (WrappedComponent, url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(res => res.json)
        .then(resData => setData(resData.results))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    }, [url]);

    return (
        <WrappedComponent
            {...props}
            data={data}
            
        />
    )
}

export default WithDataFetch