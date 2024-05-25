import React, { useState } from 'react';
import Header from './header'
import Body from './body';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Header handlePageChange={handlePageChange} />
            <Body currentPage={currentPage} />
        </div>
    );
}

export default App;
