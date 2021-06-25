import { NoteContext } from '../components/NoteContextProvider';
import { useContext } from 'react';

function MyNotes () {
   const { notes } =  useContext(NoteContext);

    return (
        <div className="mynotes">
            <p>Oops! This takes a dummy note for now. The full note shows
                on the actual notes you clicked on your way here.<br></br>
                By the way, this App was built using React. You can create, read, 
                update and delete a note.
            </p>
            {notes.body}
        </div>
    );
}

export default MyNotes;























































// import { useState, useEffect, useContext } from 'react';
// import { AppContext } from '../components/NoteContextProvider'
// import NoteCard from '../components/notecard';


// function MyNotes() {
//     //const [myNotes, setMyNotes] = useState([]);
//     const context = useContext(AppContext);

//     let savedNotes = JSON.parse(localStorage.getItem("notePosts"));
//     useEffect(() => {
//         if(savedNotes === null) {
//             alert("Your note is empty. Create a note");
//         }
//         setMyNotes(savedNotes);
//     }, [myNotes]);

//     // //get a user's saved notes from the local storage
//     // const getMyNotes = () => {
//     //     const savedNotes = JSON.parse(localStorage.getItem(myNotes));
//     //     console.log(savedNotes);

//     //     if (!savedNotes) {
//     //         alert ("Your note is empty. Create a note ");
//     //     }
//     //     setMyNotes(prev => {
//     //         return {
//     //             ...prev,
//     //             notePosts: [...prev.notePosts],
//     //         };
//     //     });
//     // }

//     return (
//         <div>
//             {savedNotes.map((note) => {
//                 return <NoteCard
//                             key={note.id}
//                             title={note.title}
//                             body={note.body}
//                             userId={note.userId}
//                             onChange={(e) => setMyNotes(e.target.value)}
//                         />
//             })}
//         </div>
//     );
// }
// export default MyNotes;