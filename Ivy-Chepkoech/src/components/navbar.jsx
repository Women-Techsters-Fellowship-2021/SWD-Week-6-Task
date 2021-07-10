import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="notes_navbar">
            <Link to='/home' className="nav_text" > Home </Link>
            <Link to='/register' className="nav_text" >Register</Link>
            <Link to='/login' className="nav_text" >Login</Link>
            <Link to='/notes' className="nav_text"> My Notes</Link>
            {/* <Link to='/404'></Link> */}
        </nav>
    );
}

export default Navbar;