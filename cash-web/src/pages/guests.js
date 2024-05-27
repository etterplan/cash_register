import React, { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:5000'; // Update this to use the correct IP if necessary

const Guests = ({ setGuest }) => {
    const [data, setData] = useState([]);
    const [selectedName, setSelectedName] = useState('')    
    const [sortBy, setSortBy] = useState('lastName');

    const handleSort = () => {
        setSortBy(sortBy === 'lastName' ? 'firstName' : 'lastName');
    };

    const handleNameClick = (name) => {
        setGuest(name);
        setSelectedName(name)
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/guests`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const jsonData = await response.json();
                jsonData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [sortBy]);    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://172.18.0.3:5000/guests'); 
    //             const jsonData = await response.json();
    //             jsonData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    //             setData(jsonData);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [sortBy]);

    return (
        <div>
            <h1>Guest List</h1>
            <button onClick={handleSort}>Sort by {sortBy === 'lastName' ? 'First Name' : 'Last Name'}</button>
            <p><strong>Selected Name: {selectedName}</strong></p>
            <ul>
                {data.map((guest) => (
                    <li key={guest.id} onClick={() => handleNameClick(`${guest.firstName} ${guest.lastName}`)}>
                        {guest.firstName} {guest.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Guests;
