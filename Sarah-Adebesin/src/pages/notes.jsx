import { useContext } from 'react';
import { NoteContext } from '../components/NoteContextProvider';
import NoteCard from '../components/notecard';

function Notes() {
    const { notes } = useContext(NoteContext);

    return notes.length ? (
        <div className="notes-layout">
            {notes.map(note => {
               return ( <NoteCard
                        key={note.id}
                        note={note}
                     />);
            })}
        </div>
    ) : (
        <div className="empty">
            Your note is empty. Add a note.
        </div>
    )
}

export default Notes;


















//<p>You have {notes.length} notes taken.</p>




























// import { useContext } from 'react';
// import { AppContext } from '../components/NoteContextProvider';
// import NoteCard from '../components/notecard';

// function Notes() {
//     const { state } = useContext(AppContext);
//     return (
//         <div className="notes-layout">
//             {state.notePosts.map(({ id, title, body, userId }) => {
//                return <NoteCard
//                         key={id}
//                         title={title}
//                         body={body}
//                         userId={userId}
//                      />
//             })}
//         </div>
//     );
// }

// export default Notes;