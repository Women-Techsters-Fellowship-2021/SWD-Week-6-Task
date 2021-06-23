import AddNote from "./addNote"
import Notes from "./note"


const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        //using the map function to loop over our array of list   
        //created in the app component to render each note component
        <div className='notes-list'>
            {notes.map((note)=> 
                 <Notes  key={note.id}
                    id={note.id} 
                    noteTitle= {note.noteTitle}
			        noteBody= {note.noteBody}
			        date={note.date}
                    handleDeleteNote={handleDeleteNote}
                 /> 
            )} 
            <AddNote 
                handleAddNote={handleAddNote}
        
             />
        </div>
    )
}

export default NotesList
