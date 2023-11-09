import { useEffect, useState } from 'react';

const useContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the JSON data from the MOCK_DATA.json file in the public directory
        fetch('/MOCK_DATA.json')
            .then((response) => response.json())
            .then((jsonData) => {
                // Update the state with the fetched data
                setData(jsonData);
            })
            .catch((error) => {
                console.error('Error loading data:', error);
            });
    }, []);

    return {
        data
    }
};


export default useContainer;