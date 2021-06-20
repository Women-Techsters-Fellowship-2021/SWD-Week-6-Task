import useContextGetter from "../hooks/contextGetter";
import { FaTrash, FaEdit } from 'react-icons/fa'; //import react icons
import '../styles/notes.css';

function Note() {

    const context = useContextGetter();

    return (
        <div className='note'>
            <div className='note-item'>
                <h2>{context.state.title}</h2>
                <p>{context.state.description}</p>
                <div className='note-btn'>
                    {/* react icons for delete and edit */}
                    <FaTrash className='delete-btn' />
                    <FaEdit className='edit-btn' />
                </div>               
            </div>
        </div>
    )
}

export default Note;