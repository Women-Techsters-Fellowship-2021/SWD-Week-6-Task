import { useEffect, useState, useContext } from "react";
import uuid from "react-uuid";
import "../styles/Main.css";
import Main from "./Main";
import Sidebar from "../sidebar/Sidebar";
import Login from "../Pages/Login";
import { AppContext } from "../components/stateprovider";


function MainNote() {

    const context = useContext(AppContext);
    
    const [notes, setNotes] = useState(
      localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(false);
  
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
  
    const onAddNote = () => {
      const newNote = {
        id: uuid(),
        title: "Week6 - Untitled Note",
        body: "",
        lastModified: Date.now(),
      };
  
      setNotes([newNote, ...notes]);
      setActiveNote(newNote.id);
    };
  
    const onDeleteNote = (noteId) => {
      setNotes(notes.filter(({ id }) => id !== noteId));
    };
  
    const onUpdateNote = (updatedNote) => {
      const updatedNotesArr = notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
  
        return note;
      });
  
      setNotes(updatedNotesArr);
    };
  
    const getActiveNote = () => {
      return notes.find(({ id }) => id === activeNote);
    };
  
    return (
        
        <div>
  {context.state.isUserLoggedIn ? (
        <>
      <div className="App">
 
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />  
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        
      </div>
      </>
      ) : (
        <>
       <Login />
      </>
    )}
      </div>
    );
  }
  
  export default MainNote;
  