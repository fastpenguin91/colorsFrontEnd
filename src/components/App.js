import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Color from "./Color";
import "../styles/App.css";
import ColorList from "./ColorList";
import Search from './Search';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/colors/0" />} />
          <Route path="/color/:id">
            <Color />
          </Route>
          <Route exact path="/colors/:page">
            <ColorList />
          </Route>
          <Route exact path="/search" render={() => <Redirect to="/search/0" />} />
          <Route exact path="/search/:page">
            <Search />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
