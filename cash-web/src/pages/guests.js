import React, { useState } from 'react';

const Guests = () => {
    // Sample data for first name and last name
    const initialNames = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Smith' },
        { firstName: 'Kalle', lastName: 'Anka' },
        { firstName: 'Jan', lastName: 'Andersson' },
        { firstName: 'Håkan', lastName: 'Kalson' },
        { firstName: 'Anders', lastName: 'Svensson' },
        { firstName: 'Hans', lastName: 'Stålhanske' },
        { firstName: 'Lars', lastName: 'Björnsson' },
        { firstName: 'Joakim', lastName: 'Von' },
        { firstName: 'Alice', lastName: 'Johnson' }
        // Add more names as needed
    ];

    initialNames.sort((a, b) => a.firstName.localeCompare(b.lastName))

    const [boolSorted, setBoolSorted] = useState('FIRSTNAME')

    const [names, setSortedNames] = useState([...initialNames]);

    const [clickedLastName, setClickedLastName] = useState('');

    const handleNameClick = (firstName, lastName) => {
        setClickedLastName(firstName + ' ' + lastName);
    };

    const handleClick = () => {      
        setClickedLastName(boolSorted);
        switch(boolSorted) {
            case 'FIRSTNAME':
                const sortedByFirstName = [...names].sort((a, b) => a.firstName.localeCompare(b.firstName));
                setSortedNames(sortedByFirstName);        
                setBoolSorted('LASTNAME')
                break;
            default:
                const sortedByLastName = [...names].sort((a, b) => a.lastName.localeCompare(b.lastName));
                setSortedNames(sortedByLastName);        
                setBoolSorted('FIRSTNAME')
                break;
        }
    };

    return (
        <div>
            <h2>Last Name Clicked: {clickedLastName}</h2>
            <button onClick={handleClick} style={{cursor: 'pointer'}}>
                Sort
            </button>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', columnGap: '6px' }}>
                <div>
                    <h3>First Names</h3>
                    {names.map((name, index) => (
                        <div key={index} style={{ marginBottom: '10px', fontSize: '1.2em', cursor: 'pointer' }} onClick={() => handleNameClick(name.firstName, name.lastName)}>
                            {name.firstName}
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Last Names</h3>
                    {names.map((name, index) => (
                        <div key={index} style={{ marginBottom: '10px', fontSize: '1.2em', cursor: 'pointer' }} onClick={() => handleNameClick(name.firstName, name.lastName)}>
                            {name.lastName}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // const [clickedLastName, setClickedLastName] = useState('');

    // const handleNameClick = (lastName) => {
    //     setClickedLastName(lastName);
    // };

    // return (
    //     <div style={{ textAlign: 'center' }}>
    //         <h2>Last Name Clicked: {clickedLastName}</h2>
    //         <h3>List of Names</h3>
    //         {names.map((name, index) => (
    //             <div key={index} style={{ marginBottom: '10px', fontSize: '1.2em', cursor: 'pointer' }} onClick={() => handleNameClick(name.lastName)}>
    //                 {name.lastName}
    //             </div>
    //         ))}
    //     </div>
    // );

    // const handleNameClick = (name) => {
    //     alert(`You clicked on ${name}`);
    // };    

    // return (
    //     <div>
    //         <h2>List with Clickable Names</h2>
    //         <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', columnGap: '20px' }}>
    //             <div>
    //                 <h3>First Names</h3>
    //                 {names.map((name, index) => (
    //                     <div key={index} style={{ marginBottom: '10px', fontSize: '1.2em', cursor: 'pointer' }} onClick={() => handleNameClick(name.firstName)}>
    //                         {name.firstName}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div>
    //                 <h3>Last Names</h3>
    //                 {names.map((name, index) => (
    //                     <div key={index} style={{ marginBottom: '10px', fontSize: '1.2em', cursor: 'pointer' }} onClick={() => handleNameClick(name.lastName)}>
    //                         {name.lastName}
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );

    // return (
    //     <div>
    //         <h2>Gäst lista</h2>
    //         <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', columnGap: '20px' }}>
    //             <div>
    //                 <h3>First Names</h3>
    //                 {names.map((name, index) => (
    //                     <div key={index} style={{ marginBottom: '10px', fontSize: '1.2em' }}>
    //                         {name.firstName}
    //                     </div>
    //                 ))}
    //             </div>
    //             <div>
    //                 <h3>Last Names</h3>
    //                 {names.map((name, index) => (
    //                     <div key={index} style={{ marginBottom: '10px', fontSize: '1.2em' }}>
    //                         {name.lastName}
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Guests;



