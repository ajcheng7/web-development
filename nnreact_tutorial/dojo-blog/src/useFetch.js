import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();


        setTimeout(() => {
            // associate abort controller w/ the fetch
            fetch(url, { signal: abortCont.signal })
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
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                    
                })
        }, 1000);
        // when url changes will rerun
        // will stop the fetch when the page changes 
        return () => abortCont.abort()
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;