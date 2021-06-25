import './about';
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className="homepage">
            <h1>Find your inspiration</h1>
            <p>Start taking notes in the easiest and most efficient way!
            </p>
            <Link to='/about' className="home-btn">Learn more</Link>
        </div>
    );
}

export default Home;