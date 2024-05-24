import React, { useState } from 'react';
import Header from './pages/header'
import Body from './pages/body';

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
