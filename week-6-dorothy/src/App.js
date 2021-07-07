import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Appstate, { AppContext } from './components/appstate';
import { useContext, useEffect } from 'react';
import { GlobalProvider } from './hooks/GlobalState';

function App() {
  const context = useContext(AppContext);
	console.log(context);

	useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Appstate>
      <GlobalProvider>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
          </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">
          <Write /> 
          </Route>
        
      </Switch>
      </GlobalProvider>
      </Appstate>
    </BrowserRouter>
  );
}

export default App;
