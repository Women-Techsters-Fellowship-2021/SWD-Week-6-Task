import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FourOhFour from './pages/404';
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppStates from "./components/stateprovider";
import HomePage from "./pages/HomePage";
import CourseNotes from "./pages/CourseNotes";
import UserNotes from "./pages/UserNotes";
//import SingleNote from "./pages/SingleNote";
 
function App() {
  return (
    <AppStates>
    <Router>
        <NavBar/>
        <Switch>

			 {/*render Home Component when we hit /home */} 
			 <Route exact path='/home'>
						<HomePage />
					</Route> 
          	{/* render Login Component when we hit /login */}
					<Route exact path='/login'>
						<Login />
					</Route>
          {/* render Register Component when we hit /register */}
					<Route exact path='/register'>
						<Register />
					</Route>
         {/* render Register Component when we hit /notes */}
					<Route exact path='/notes'>
						<CourseNotes/>
					</Route>
{/* render UserPost Component when we hit /userpost */}
<Route exact path='/notes/:noteid'>
						<CourseNotes />
					</Route>


 {/* render Register Component when we hit /mynotes */}
 <Route exact path='/mynotes'>
						<UserNotes/>
					</Route>

					
									<Route exact path='/'>
						<HomePage />
					</Route>
						
					
					{/* fallback to a 404 if a route is not matched */}
					 <Route>
						<FourOhFour />
					</Route>

     </Switch>
  </Router>
  </AppStates>  
     );
}

export default App;
