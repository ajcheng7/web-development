import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
        // fires when promise has resolved, data is returned
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch data for that resource');
                    }
                    return res.json();
                })
                // data is what's inside json
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                // network error 
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
        // when url changes will rerun
        return () => console.log('cleanup');
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;