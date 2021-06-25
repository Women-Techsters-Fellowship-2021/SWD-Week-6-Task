import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { useContext } from 'react';
import StateProvider from './components/stateProvider';
import NoteContextProvider from './components/NoteContextProvider';
import Navbar from './components/navbar';
import Footer from './components/footer';

//import pages
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import Notes from './pages/notes';
import AddNotes from './pages/addnotes';
import MyNotes from './pages/mynotes';
import Popular from './pages/popular';
import About from './pages/about';

function App() {
	//const context = useContext(NoteContext);
	//console.log(context);


	return (
		<BrowserRouter>
			<StateProvider>
				<Navbar />

				<Switch>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route  path='/about'>
						<About />
					</Route>
				</Switch>

			</StateProvider>
			
			<NoteContextProvider>
				<Switch>
					<Route path='/home'>
						<Home />
					</Route>			
					<Route  path='/notes'>
						<Notes />
					</Route>
					<Route  path='/addnotes'>
						<AddNotes />
					</Route>
					<Route  path='/mynotes'>
						<MyNotes />
					</Route>
					<Route  path='/popular'>
						<Popular />
					</Route>
					<Route exapct path='/'>
						<Home />
					</Route>
				</Switch>

				<Footer />
			</NoteContextProvider>
		</BrowserRouter>
	);
}

export default App;
