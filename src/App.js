import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Joke from "./Joke";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Joke} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
