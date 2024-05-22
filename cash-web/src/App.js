import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://cash-db-server:4000/')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div>
            <h1>Database Table Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.columnName}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
