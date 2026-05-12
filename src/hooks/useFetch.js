import { useState } from "react";
import { useEffect } from "react";

function useFetch(URL) {
    const [data, setData] = useState([]);
    const [loadingError, setLoadingError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(result => {
                setLoaded(true);
                setData(result);
            })
            .catch(error => setLoadingError(error));

        return () => {
            setLoaded(false);
        }
    },[]);

    return {
        data,
        loadingError,
        loaded
    };
}

export default useFetch;