import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
           
            <div className='navigator'>
            <Link to='/'>Home</Link>
            <Link to ='/signup'>SignUp</Link>
            <Link to ='login'>Login</Link>
            <Link to ='note'>Note</Link>
            </div>
            <h1 className="Welcome">Welcome</h1>
            
        </div>
    )
}

export default Home
