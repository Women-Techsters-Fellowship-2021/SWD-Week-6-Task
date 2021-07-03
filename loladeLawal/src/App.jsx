import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import MyNoteApp from './components/myNoteApp';


const App = () =>  {
	
	const [state, setstate] = useState(false)
  
  return (
		<BrowserRouter>
		
				<Navbar state={state} setState={setstate}/>
      
				<Switch>
					<Route path='/login'>
						<Login setState={setstate} />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/my-note'>
						<MyNoteApp />
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
