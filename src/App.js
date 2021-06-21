import Home from "./pages/home";
import React, { useState } from "react";
import Login from "./pages/Login";
import MainNote from "./pages/main-note";
import { Route, Switch } from "react-router-dom";
import SignUp from "./pages/sign-up";

function App() {
  const [user, setUser] = useState({
    email: '',
    id: '',
    token: ''
  });

  const handleRegister = (res) => {
    setUser(res.body)
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp onRegister={handleRegister} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/note">
        <MainNote user={user}  />
      </Route>
    </Switch>
  );
}

export default App;
