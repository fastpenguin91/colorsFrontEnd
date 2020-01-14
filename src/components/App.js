import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Color from "./Color";
import "../styles/App.css";
import Search from './Search';
// It seems like one of those redirects to /page/0 are unnecessary.
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/page/1" />} />
          <Route path="/color/:id">
            <Color />
          </Route>
          <Route exact path="/page/:page">
            <Search />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
