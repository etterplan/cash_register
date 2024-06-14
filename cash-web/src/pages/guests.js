import React, { useState, useEffect, useContext } from 'react';
import { GuestContext } from '../context/guest_provider'
import useFetchData from '../hooks/usefetchfromdb';

const Guests = () => {
    const { _, setGuest } = useContext(GuestContext);
    const [guests, setGuests] = useState([]);
    const [selectedName, setSelectedName] = useState('')
    const [sortBy, setSortBy] = useState('lastName');

    useFetchData('all_guests', setGuests);
    console.log(guests);

    const handleSort = () => {
        setSortBy(sortBy === 'lastName' ? 'firstName' : 'lastName');
    };

    const handleNameClick = (guest) => {
        setGuest(guest);
        setSelectedName(guest.firstName + ' ' + guest.lastName)
    };

    return (
        <div>
            <h1>Guest List</h1>
            <button onClick={handleSort}>Sort by {sortBy === 'lastName' ? 'First Name' : 'Last Name'}</button>
            <p><strong>Selected Name: {selectedName}</strong></p>
            <ul>
                {guests.map((guest) => (
                    <li key={guest.id} onClick={() => handleNameClick(guest)}>
                        {guest.firstName} {guest.lastName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Guests;
