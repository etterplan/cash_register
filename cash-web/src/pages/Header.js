import React from 'react';
//import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function Header() {
    return (
        <Router>
            <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0' }}>
                <h1>Header Section</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </Router>
    );
}

export default Header;