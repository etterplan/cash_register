import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Guests from './pages/guests.js'
import Bar from './pages/bar.js'
import Bill from './pages/bill.js'
import Settings from './pages/settings.js';

function Header() {
    const [guest, setGuest] = useState('');

    return (
        <Router>
            <header style={{ backgroundColor: 'lightgrey', color: 'black', textAlign: 'center', padding: '10px 0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                    <Link to="/" style={{ fontSize: '2em', textAlign: 'center' }}>Guest</Link>
                    <Link to="/bar" style={{ fontSize: '2em', textAlign: 'center' }}>Bar</Link>
                    <Link to="/bill" style={{ fontSize: '2em', textAlign: 'center' }}>Account</Link>
                    <Link to="/settings" style={{ fontSize: '2em', textAlign: 'center' }}>Settings</Link>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Guests setGuest={setGuest} />} />
                <Route path="/bar" element={<Bar guest={guest} />} />
                <Route path="/bill" element={<Bill />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>

        </Router>
    );
}

export default Header;