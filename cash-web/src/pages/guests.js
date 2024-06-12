import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../context/guest_provider'

const Guests = () => {
    const { _, setGuest } = useContext(GuestContext);
    const [data, setData] = useState([]);
    const [selectedName, setSelectedName] = useState('')    
    const [sortBy, setSortBy] = useState('lastName');

    const handleSort = () => {
        setSortBy(sortBy === 'lastName' ? 'firstName' : 'lastName');
    };

    const handleNameClick = (guest) => {
        setGuest(guest);
        setSelectedName(guest.firstName + ' ' + guest.lastName)
    };

    useEffect(() => {
        const initialGuests = [
            { id: 1, firstName: "Arne", lastName: "Anka", email: "arne.anka@gmail.com" },
            { id: 2, firstName: "Åsa", lastName: "Karlsson", email: "asa.karlsson@gmail.com" },
            { id: 3, firstName: "Cecila", lastName: "Östman", email: "cecila.ostman@gmail.com" }
        ];

        setData(initialGuests);
        setGuest(initialGuests[0]); // Set the first gue
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`${process.env.DB_SERVER_API}/all_guests`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             });
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
                    <li key={guest.id} onClick={() => handleNameClick(guest)}>
                        {guest.firstName} {guest.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Guests;
