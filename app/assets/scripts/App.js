import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./modules/NavBar";
import Home from "./modules/Home";
import Login from "./modules/Login";

export default class App extends Component {
  state = { token: null };

  handleLogin = (data) => {
    //this.setState({ data.token });
    alert(data.user.uNameF);
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
