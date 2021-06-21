import { Link } from 'react-router-dom';

import '../styles/card.css'

const Card = ({item}) => {
    return (
        <div className="card-container">
            <li className="card">
                <h2 className="card-title" >{item.title}</h2>
                <p className="card-body" >{item.body}</p>
                <Link className="userid-link" to={`/userposts/${item.userId}`}>Note by: user {item.userId}</Link>
            </li>
        </div>
    );
};

export default Card;

