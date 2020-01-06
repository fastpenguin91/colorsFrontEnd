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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/page/0" />} />
          <Route path="/color/:id">
            <Color />
          </Route>
          <Route exact path="/page" render={() => <Redirect to="/page/0" />} />
          <Route exact path="/page/:page">
            <Search />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
