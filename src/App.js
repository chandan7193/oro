import React, { Component } from "react";
import UsersIndex from "./components/Users";
import UsersNew from "./components/UsersNew";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={UsersNew} />

              <Route path="/" component={UsersIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
