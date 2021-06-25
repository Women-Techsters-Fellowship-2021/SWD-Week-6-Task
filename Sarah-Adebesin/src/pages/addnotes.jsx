import { useContext } from "react";
import { NoteContext } from "../components/NoteContextProvider";
import { useForm } from "react-hook-form";

function AddNotes() {

  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(NoteContext);

  const onSubmit = (data) => {
    dispatch({
      type: "ADD_NOTE",
      note: {
        title: data.title,
        body: data.body,
      },
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <label htmlFor="title">Title</label>
          <br></br>
          <input
            id="title"
            type="text"
            placeholder="Give it a title"
            {...register("title")}
          />
        </div>
        <br />
        <div className="input-box">
          <label htmlFor="body">Content</label>
          <br></br>
          <textarea
            rows="10"
            id="body"
            resize="none"
            placeholder="Compose Content..."
            {...register("body")}
          />
        </div>
        <br />
        <div>
          <button className="create btn" type="submit">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNotes;

// //import { useState, useEffect } from  'react';
// import { useContext } from 'react';
// import { AppContext } from '../components/NoteContextProvider';
// import { useForm } from 'react-hook-form';

// function AddNotes ({ title, body, change }) {
//     const { register, handleSubmit } = useForm();
//     const { state, setState } = useContext(AppContext);
//     //const { notePosts, setNotePosts } = useState([]); //notes is an array containing note objects.
//     //const [noteEditing, setNoteEditing] = useState(""); //note editing is the string id of the note we are editing

//     const createNote = ({ title, body }) => {
//         //create a new note
//         const newNote = {
//             title: title,
//             body: body,
//             userId: state.userId,
//         };

//         //set the notePosts array saved in the initialstate and store it in localstorage
//         //get the stored array and assign it to a variable "exisitingNotes"
//         //add a new note into the array
//         //store the array back into local storage and console.log contents of the array
//         //alert successful when a new note is added.
//         localStorage.setItem("notePosts", JSON.stringify(state.notePosts));
//         let notePosts = JSON.parse(localStorage.getItem("notePosts") || "[]");
//         let updatedNote = notePosts.push(newNote);
//         localStorage.setItem("notePosts", JSON.stringify(updatedNote));
//         console.log(notePosts);
//         alert('Note created successfully');

//         //updating our state variable using setState
//         setState(prev => {
//             return {
//                 ...prev,
//                 notePosts: [notePosts, ...prev.notePosts],
//             };
//         });
//     };
//     //the useEffect hook runs when the state changes.
//     // useEffect(() => {
//     //     const json = JSON.stringify(notePosts);
//     //     localStorage.setItem("notePosts", json);
//     // }, [notePosts]);

//     return (
//         <div className='form-container'>
// 			<form onSubmit={handleSubmit(createNote)}>
// 				<div className='input-box'>
// 					<label htmlFor='title'>Title</label><br></br>
// 					<input
// 						id='title'
// 						type='text'
//                         value={title}
//                         onChange={change}
// 						placeholder='Give it a title'
// 						{...register('title')}
// 					/>
// 				</div>
// 				<br />
// 				<div className='input-box'>
// 					<label htmlFor='body'>Content</label><br></br>
// 					<textarea
// 						rows='10'
// 						id='body'
//                         value={body}
//                         onChange={change}
// 						placeholder='Compose Content...'
// 						{...register('body')}
// 					/>
// 				</div>
// 				<br />
// 				<div>
// 					<button className='create btn' type='submit'>
// 						Add Note
// 					</button>
// 				</div>
// 			</form>
// 		</div>
//     );
// }

// export default AddNotes;
