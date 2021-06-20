import "./App.css";
import StateProvider from "./components/stateprovider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Registration";
import MainNote from "./main/MainNote";
import Login from "./Pages/Login";

function App() {
  

  return (
     <StateProvider>
      <Router>   
        <Switch>
          <Route exact path="/registration" component={Register} />
         <Route exact path="/login" component={Login} />   
         <Route exact path="/mainnote" component={MainNote} />
        </Switch>
      </Router>
    </StateProvider>

  );
}

export default App;
