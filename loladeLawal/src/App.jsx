import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import MyNoteApp from './components/myNoteApp';


const App = () =>  {


  
  return (
		<BrowserRouter>
		
				<Navbar />
      
				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/my-note'>
						<MyNoteApp />
					</Route>
					<Route>
						<Login />
					</Route>
				</Switch>
			
		</BrowserRouter>
	);
}

export default App;
