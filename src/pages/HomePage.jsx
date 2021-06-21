import noteImage from "../Images/notes.jpg";
import "../Styles/Pages.css";

const HomePage = ()=>{
return (

    <div className="homepage">
        <img src ={noteImage}
        alt="note pic"/>
        <h1>Welcome to My Note App</h1>
        <h3>Use the NavBar to Navigate your Way!!!</h3>

    </div>
);




}
export default HomePage;