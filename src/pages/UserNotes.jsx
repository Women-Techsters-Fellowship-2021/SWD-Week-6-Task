import { useContext} from 'react';
//import { useForm } from 'react-hook-form';
import { AppContext } from '../components/stateprovider';
import "../Styles/Form.css";
import SetNotes from "./SetNotes";

const UserNotes =()=>{

    const context = useContext(AppContext);
    const noteDate = new Date();
        const dateCreated = noteDate.toUTCString();
     
          const SaveNote = e => { 
            e.preventDefault();    
            
            if((!context.state.note)) {
            return false;
            }

            const newNote= {
                note:context.state.note,
                noteID:Date.now(),
                userId:context.state.userId,
                DateCreated: dateCreated,
        
            };
            console.log(newNote);
//Saving new note in the local storage
            const noteString =JSON.stringify(newNote);
            localStorage.setItem(context.state.userId,noteString);
            //console.log(noteString);
            // ...........check user login here
            if (context.state.isLoggedIn===true){
                context.dispatch({
                    type: 'ADD_NOTE',
                    noteID:newNote.noteID,
                    payload: newNote,
                  });
              
                  alert("New note added for user: " + context.state.userEmail);
                  context.dispatch({
                    type: 'RESET_INPUTS',
                })
                 
            }

            else {
                alert ("Please Login in again");            }
           
            console.log(context);
                    
              }

        const setNote =e =>{
            context.dispatch({
                type:'UPDATE_NOTE',
                payload: e.target.value,
            })
        }

       
    return (

            <div className="div-style">
    
              <h1 className="Todoheader" id="header">
                 Add Personal Note Here....
                 </h1>
                 <form onSubmit={SaveNote}>
             
    <textarea 
         id="desc"
        type="text"
        className="descInput" 
        placeholder="Add personal notes here"
        value={context.state.note}
       onChange={setNote}
           />
       
        <button
        type ="submit"
         className="btn">
             Save Note
        </button>
    </form>
    <SetNotes/>
    </div>


    )
}

export default UserNotes;


