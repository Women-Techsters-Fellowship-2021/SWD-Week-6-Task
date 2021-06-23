import { useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from './notesList';
import '../styles/main.css'

const MyNoteApp = () => {
  //creating an array of notes list
  let notesListarray = [
		{
			id: nanoid(),
			noteTitle: 'sermon',
			noteBody: 'Giving',
			date: "Sun Jun 9 2021"
		},
		{
			id: nanoid(),
			noteTitle: 'birthday party',
			noteBody: ' invite the planner',
			date: " Mon Jun 14 2021"
		},
		{
			id: nanoid(),
			noteTitle: 'shopping',
			noteBody: 'going to the market',
			date: "Sat Jun 18 2021"
		}
	];

	//using a state to make our array of note dynamic
	const [notes, setNotes] = useState(notesListarray);

	const addNoteText = ( title, text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			noteTitle: title,
			noteBody: text,
			date: date.toDateString()
		}
		const newNotes = [...notes, newNote];
		setNotes(newNotes); 
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note)=> note.id !== id);
		setNotes(newNotes);
	}

  return (
		<div className='container'>
			<NotesList 
				notes={notes} 
				handleAddNote={addNoteText}
				handleDeleteNote={deleteNote}
			/>
			
		</div>
	)
}

export default MyNoteApp
