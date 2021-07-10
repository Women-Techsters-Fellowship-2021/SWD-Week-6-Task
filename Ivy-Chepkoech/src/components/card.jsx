import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
const Card = ({ id, title, content }) => {

    return (
        <div className='card'>
            <h4 className='title' id="wrapper">{title}</h4>
            <p>{content}</p>
            {/* <Link to={`/userposts/${userId}`}>post by: user {userId}</Link> */}
            {/* <Link to={`/posts/${id}`}> ID: {id}</Link> */}
            < Link to={`/notes/${id}`}>here</Link>

        </div>
    );
};

export default Card;