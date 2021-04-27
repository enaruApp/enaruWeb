import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./modules/NavBar";
import Home from "./modules/Home";
import Login from "./modules/Login";
import Signup from "./modules/Signup";
import Profile from "./modules/Profile";

export default class App extends Component {
  state = { token: null };

  handleLogin = (token) => {
    this.setState({ token });
    alert(token);
  };

  handleLogout = () => {
    alert("Гарлаа...");
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar onLogout={this.handleLogout} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/login"
                render={() => <Login onLogin={this.handleLogin} />}
              />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
