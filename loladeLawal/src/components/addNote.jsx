import { useState } from 'react';
import Textarea from "./textArea"


const AddNote = ({ handleAddNote}) => {

    const [title, setTitle] = useState('');
    const [noteText, setNoteText] = useState('');

    const characterLimit = 250;
   

    const handleTitleChange = (e) => {
            setTitle(e.target.value);
    }
    const handleTextChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }
    const handleSaveNote = () => {
        
        //guard function
        if (title.trim().length> 0 || noteText.trim().length> 0  ) {
            handleAddNote(title, noteText);
            // resest the textarea field to empty
            setTitle('');
            setNoteText('');
        }
        

    }

    
    return (
        <div className='note newNote'>
            <div>
                <Textarea   
                    placeholder='Title'
                    handleChange={handleTitleChange}
                    value={title}
                />
                <Textarea 
                    cols='15'
                    rows='10'  
                    placeholder='Type to add a note...'
                    value={noteText}
                    handleChange={handleTextChange}
                />
                
            </div>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button 
                    className='save' 
                    onClick={handleSaveNote}
                    
                >Save</button>
            </div>
        </div>
    )
}

export default AddNote
