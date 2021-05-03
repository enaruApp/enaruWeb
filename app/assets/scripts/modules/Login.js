import React, { Component } from "react";
import axios from "axios";
import { restApiUrl } from "./Constants";

export default class Login extends Component {
  state = {
    phone: null,
    password: null,
    error: null,
    loading: false,
  };

  handleType = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: null });
  };

  handleClick = () => {
    axios
      .post(`${restApiUrl}/api/v1/users/signin`, {
        phone: this.state.phone,
        password: this.state.password,
      })
      .then((result) => {
        this.props.onLogin(result.data);
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
        });
      });
  };

  render() {
    return (
      <div id="login-section">
        <div class="login-container">
          {this.state.error && <div>{this.state.error}</div>}
          <div class="login__title">Нэвтрэх</div>
          <input
            class="login__text"
            name="phone"
            type="text"
            placeholder="Утасны дугаар"
            onChange={this.handleType}
          />
          <input
            class="login__text"
            name="password"
            type="password"
            placeholder="Нууц үг"
            onChange={this.handleType}
          />
          <button class="login__btn" onClick={this.handleClick}>
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    );
  }
}
