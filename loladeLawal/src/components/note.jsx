import { MdDeleteForever } from 'react-icons/md'

const Note = ({id , noteTitle, noteBody, date, handleDeleteNote}) => {
    return (
        <div className='note'>
            <div>
                <h1>{noteTitle}</h1>
                <p>{noteBody}</p>
            </div>
            <div className='note-footer'>
                <small> <strong>Edited:</strong> {date}</small>
                <MdDeleteForever 
                    className='delete-icon'
                    size='1.3em'
                    onClick={() => handleDeleteNote(id)}/>
            </div>
        </div>
    )
}

export default Note
