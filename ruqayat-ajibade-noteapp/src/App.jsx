import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import StateProvider from "./components/appStateProvider";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/navbar";
import Notes from "./pages/Notes";


function App() {
	return (
		<StateProvider>
			<Router>
				<Navbar/>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route exact path="/home" component={Home}></Route>
					<Route exact path="/register" component={Register}></Route>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/notes" component={Notes}></Route>
				</Switch>
			</Router>
		</StateProvider>
	);
}

export default App;
