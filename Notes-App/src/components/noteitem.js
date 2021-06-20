import useContextGetter from "../hooks/contextGetter";
import { useHistory } from 'react-router';
import '../styles/notes.css';

function NoteItem({ note, index }) {
    
    const history = useHistory();
    const context = useContextGetter();

    // push to note-item
    const handleItem = () => {
        //set context  to mapped note for displaying
        context.state.title = note.title;
        context.state.description = note.description;
        history.push('/note-item')    }

    return (
        <li onClick={handleItem} className='note-div' index={note.id} >
            <h2>{note.title}</h2>
            <p>{note.description }</p>
        </li>
    )
}

export default NoteItem;