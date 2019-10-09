import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        // console.warn('test');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMessage(err.message);
        }
    };

    // Search 'pasta' on startup
    useEffect(() => {
        searchApi('pasta');
    }, []);
    // Search 'pasta' on startup

    return [searchApi, results, errorMessage];
};