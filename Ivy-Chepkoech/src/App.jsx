import Login from './pages/login';
import Register from './pages/register';
import Notes from './pages/notes';
import Note from './pages/note';
import Error from './pages/404';
import Home from './pages/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import LoginPage from './pages/disposable';

import './App.css';

function App() {
  return (
    // <LoginPage />
    // <Login />
    // <Register />

    <Router >
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/notes/:id">
          <Note />
        </Route>
        <Route >
          <Error />
        </Route>
      </Switch>

    </Router >
  );
}

export default App;
