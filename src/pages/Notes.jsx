import { Link } from 'react-router-dom';
import "../Styles/Pages.css";

const Notes = ({notelist})=>{

    return (
		<div className='course'>
			<Link to= {`/notes/${notelist.noteID}`} target="_blank" rel="noreferrer"><h2 className='course-title'>{notelist.CourseTitle}</h2></Link>
			<p className='course-details'>{notelist.CourseDetails}</p><br/>
			<a href ={notelist.PdfResource} target="_blank" className="link" rel="noreferrer"> Pdf Resource</a><br/>
            <a href={notelist.OnlineResource}target="_blank" className="link" rel="noreferrer"> Online Resource</a><br/>
            <a href={notelist.YouTubeResource} target="_blank" className="link" rel="noreferrer">YouTube Resource</a>
		</div>
	);



}

export default Notes;