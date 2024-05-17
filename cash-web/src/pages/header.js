import React from 'react';

const Header = ({ handlePageChange }) => {
    return (
        <header style={{ backgroundColor: 'lightgrey', color: 'black', textAlign: 'center', padding: '10px 0' }}>
            <div>
                <span style={{ marginRight: '20px', cursor: 'pointer' }} onClick={() => handlePageChange('guests')}>Gäst Lista</span>
                <span style={{ marginRight: '20px', cursor: 'pointer' }} onClick={() => handlePageChange('bar')}>Bar</span>
                <span style={{ cursor: 'pointer' }} onClick={() => handlePageChange('bill')}>Nota</span>
            </div>
        </header>
    );
};

export default Header;

