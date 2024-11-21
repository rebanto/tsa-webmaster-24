import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // fetch data from the Flask API
        axios.get('http://127.0.0.1:5000/api')
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>React & Flask Integration</h1>
            <p>Message from Flask: {message}</p>
        </div>
    );
};

export default App;
