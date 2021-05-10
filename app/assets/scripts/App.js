import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./modules/NavBar";
import Home from "./modules/Home";
import Login from "./modules/Login";
import Signup from "./modules/Signup";

export default class App extends Component {
  handleLogin = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("title", "Сайн байна уу? " + data.user.uNameL);
    localStorage.setItem("level", data.user.level);
    this.router.history.push("/");
    window.location.reload(true);
  };

  handleSignup = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("title", "Сайн байна уу? " + data.user.uNameL);
    localStorage.setItem("level", data.user.level);
    this.router.history.push("/");
    window.location.reload(true);
  };

  handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("title", "Инару нэгдэл");
    localStorage.setItem("level", "Гишүүдэд үйлчлэх сайт");
    this.router.history.push("/");
    window.location.reload(true);
  };

  render() {
    return (
      <div>
        <Router ref={(router) => (this.router = router)}>
          <NavBar onLogout={this.handleLogout} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/login"
                render={() => <Login onLogin={this.handleLogin} />}
              />
              <Route
                path="/signup"
                render={() => <Signup onSignup={this.handleSignup} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
