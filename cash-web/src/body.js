import React from 'react';
import Guests from './pages/guests'
import Bar from './pages/bar'
import Bill from './pages/bill'

const Body = ({ currentPage }) => {
    let content = null;

    switch (currentPage) {
        case 'guests':
            content = <div><Guests /></div>;
            break;
        case 'bar':
            content = <div><Bar /></div>;
            break;
        case 'bill':
            content = <div><Bill /></div>;
            break;
        default:
            content = null;
    }

    return (
        <div style={{ fontSize: '1.5em', textAlign: 'center', marginTop: '20px' }}>
            {content}
        </div>
    );
};

export default Body;
