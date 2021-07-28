import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppState, { AppContext } from './components/appstate';
import Login from "./pages/login";
import Register from "./pages/register";
import Navigation from "./components/navigation";
import List from "./components/list";

function App() {

  let notesList = [
    {
      id: 1,
      title: 'Item 1',
      description:
        'description item 1',
    },
    {
      id: 2,
      title: 'Item 2',
      description:
        'description item 2',
    },
  ];

  if (localStorage.getItem("notesList")) {

  } else
    localStorage.setItem("notesList", JSON.stringify(notesList))

  return (
    <BrowserRouter>
      <AppState>
        

        <Switch>
          <Route path="/"> <Login /> </Route> 
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/NotesList' component={List} />
          
        </Switch>
      </AppState>
    </BrowserRouter>
  )
}

export default App;
