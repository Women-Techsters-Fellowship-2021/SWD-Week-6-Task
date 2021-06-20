import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Notespage from './pages/Notespage';
import Aboutpg from './pages/Aboutpg';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
			
    <Switch>
      
    <Route exact path='/Home'>

        <Home />

      </Route>

     
    <Route exact path="/" component={Home}>


</Route>

      <Route exact path='/Register'>
        <Register />
      </Route>

    
      <Route exact path='/login'>
        <Login />
      </Route> 

      <Route exact path='/Notespage'>
        <Notespage />
      </Route> 

      <Route exact path='/Aboutpg'> 
      <Aboutpg /> 
       </Route> 

    </Switch>
		</BrowserRouter>
    </div>
  );
}

export default App;
