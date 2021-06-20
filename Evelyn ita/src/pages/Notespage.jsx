import { useState, useEffect } from 'react';
import {v4 as uuid } from 'uuid';

// components
import Notes from '../components/Notes';
import Main from '../components/Main';

// Styles
import '../styles/Notes.css';

const Notespage = () => {
  //set state with 2 params, an initial which gets the state and one that sets state, set to a default of an empty array
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
      );
      const [activeNote, setActiveNote] = useState(false);
    
      useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);
    
      const onAddNote = () => {
        //adds functionality to the add button
        const newNote = {
          id: uuid(),
          title: "Intro to ReactJs",
          body: "",
          lastModified: Date.now(),
        };
         
          // spread syntax is used when elements from an array or object needs to be included in a new list.
          // we take the objects out of the current notes array and add them to the newNote array 
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
      };
    
      const onDeleteNote = (noteId) => {
        // filter loops through each item in the array, if it passes the condition set, it stays in the array, otherwise it is removed
        setNotes(notes.filter(({ id }) => id !== noteId));
      };
    
      const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
          // the function checks if the current not id is strictly equal to the updated id, return the updated note
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
    
          return note;
        });
    
        setNotes(updatedNotesArr);
      };
    
      const getActiveNote = () => {
        // it gets the current id used an returns the associated object
        // find returns the value of the element in the provided array that satisfies the testing function
        return notes.find(({ id }) => id === activeNote);
      };
    return (
        <div className="notepage">
             <Notes 
        notes={notes} 
        onAddNote={onAddNote}
        onDeleteNote ={onDeleteNote} 
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        />

        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </div>
    )
}
export default Notespage;