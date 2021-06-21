import React from 'react';
// import Register from '../pages/Register';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
               <img 
      src="https://ak.picdn.net/shutterstock/videos/724075/thumb/1.jpg"
      alt="Reading emoji"
      />
            <h1> Note App </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolorem aliquid dolores esse reprehenderit assumenda suscipit cum temporibus architecto beatae, mollitia accusantium odio dolorum? Quidem odio nam excepturi officia eius?</p>
            <Link to={`/Register`}> 
            <button className="get-started">Get started</button>
            </Link>
        </div>
    )
}


export default Home;
