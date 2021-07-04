import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import Movie from "./components/Movie";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Input} />
        <Route path="/input" component={Input} />
        <Route path="/:imdbID" component={Movie} />
      </Switch>
    </Router>
  );
};

export default App;
