import { useState, useEffect } from "react";

// hooks are usually named exports rather than default
export function useData(url) {
    // state variable for holding fetched json data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Inside useEffet in useData hook")
        fetch(url)
            .then(response => response.json())
            .then(jsonData => {
                console.log(`jsonData: ${jsonData?.length}`);
                setData(jsonData);
                setLoading(false);
            });
    },
        []
    )
    
    // return the data fetched from the given url
    return { data, loading };
}
// save as useData.jsx in the 'hooks' folder