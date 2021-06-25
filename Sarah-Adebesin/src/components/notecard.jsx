import { useContext } from "react";
import { NoteContext } from "./NoteContextProvider";
import { Link } from 'react-router-dom';

function NoteCard({ note }) {
    const { dispatch } = useContext(NoteContext);

    return (
        <div className="cardboard">
            <h2 className="titleCard">{note.title}</h2>
            <p className="contentCard">{note.body}</p>
            <Link className="link" to={`/mynotes/${note.userId}`}>Notes by: user {note.userId}</Link>
            <button className="del-btn" onClick={() => dispatch({type: 'DELETE_NOTE', id: note.id})}>X</button>
        </div>
    );
}

export default NoteCard;





















// import { Link } from 'react-router-dom';

// function NoteCard({ userId, title, body }) {
//     return (
//         <div className="cardboard">
//             <h2 className="titleCard">{title}</h2>
//             <p className="contentCard">{body}</p>
//             <Link className="link" to={`/mynotes/${userId}`}>Notes by: user {userId}</Link>
//         </div>
//     );
// }

// export default NoteCard;