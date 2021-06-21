import "../Styles/Form.css";



const  NoteList =({usernote})=>{

        //const context = useContext(AppContext);
        // const noteDate = new Date();
        // const dateCreated = noteDate.toUTCString();

        return (

                <li key= {usernote.id} >
                <span className='noteDate'>{usernote.DateCreated}</span>
				<p className='note'>{usernote.note}</p>
				
					</li> 
  

        );



}
export default NoteList;