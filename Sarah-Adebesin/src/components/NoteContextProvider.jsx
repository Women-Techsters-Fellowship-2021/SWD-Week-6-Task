import { useReducer, createContext, useEffect } from "react";
import { noteReducer } from "./noteReducer";

export const NoteContext = createContext();

function NoteContextProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, [], () => {
    const storageData = localStorage.getItem("notes");
    return storageData ? JSON.parse(storageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteContextProvider;





































// import { useState, createContext } from "react";
// import uuid from 'uuid/v1';

// export const NoteContext = createContext();

// function NoteContextProvider({ children }) {
//     const [notes, setNotes] = useState([
//                 {
//                     id: 1,
//                     title: 'HTML',
//                     body:
//                         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//                 },
//                 {
//                     id: 2,
//                     title: 'CSS',
//                     body:
//                         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//                 },
//                 {
//                     id: 3,
//                     title: 'GITHUB',
//                     body:
//                         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//                 },
//                 {
//                     id: 4,
//                     title: 'JAVASCRIPT',
//                     body:
//                         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//                 },
//                 {
//                     id: 5,
//                     title: 'REACT',
//                     body:
//                         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, totam!',
//                 },
//     ]);

//     //function to add notes
//     const addNote = (title, body) => {
//         setNotes([...notes, {title, body, id: uuid()}]);
//     };

//     //function to delete notes
//     const deleteNote = (id) => {
//         setNotes(notes.filter(note => note.id !== id));
//     };

//     return (
//         <NoteContext.Provider value={{notes, addNote, deleteNote}}>
//             {children}
//         </NoteContext.Provider>
//     );
// }

// export default NoteContextProvider;
