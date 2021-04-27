import React, { Component } from "react";
import axios from "axios";

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
      .post("http://localhost:8000/api/v1/users/signin", {
        phone: this.state.phone,
        password: this.state.password,
      })
      .then((result) => {
        this.props.onLogin(result.data.token);
      })
      .catch((err) =>
        this.setState({ error: err.response.data.error.message })
      );
  };

  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <div id="signin-container">
          <div class="signin__close">X</div>
          <div class="signin__title">Нэвтрэх</div>
          <input
            class="signin__text"
            name="phone"
            type="text"
            placeholder="Утасны дугаар"
            onChange={this.handleType}
          />
          <input
            class="signin__text"
            name="password"
            type="password"
            placeholder="Нууц үг"
            onChange={this.handleType}
          />
          <button class="signin__btn" onClick={this.handleClick}>
            Үргэлжлүүлэх
          </button>
        </div>
      </div>
    );
  }
}
