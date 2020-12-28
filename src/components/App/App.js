import "./App.css";
import Navbar from "../Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import UnderConstruction from "../UnderConstruction/UnderConstruction";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home"></Redirect>
        </Route>
        <Route
          path="/Home"
          render={() => <UnderConstruction Page="Home"></UnderConstruction>}
        ></Route>
        <Route
          path="/Skills"
          render={() => <UnderConstruction Page="Skills"></UnderConstruction>}
        ></Route>
        <Route
          path="/Me"
          render={() => <UnderConstruction Page="Me"></UnderConstruction>}
        ></Route>
        <Route
          path="/Contact"
          render={() => <UnderConstruction Page="Contact"></UnderConstruction>}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
