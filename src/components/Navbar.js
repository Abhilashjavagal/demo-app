import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/forms">Forms</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;