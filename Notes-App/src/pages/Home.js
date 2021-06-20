import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
    return (
        <div className='home-section'>
            <h1>Welcome to Notes App</h1>
            <div className='home-links'>
                <Link to='/register' className='register-link'>Register</Link>
                <Link to='/login' className='login-link'>Login</Link>
            </div>
        </div>
    )
}

export default Home;
