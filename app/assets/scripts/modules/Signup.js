import React, { Component } from "react";
import axios from "axios";
import { restApiUrl } from "./Constants";

export default class Signup extends Component {
  state = {
    uNameL: null,
    uNameF: null,
    phone: null,
    password1: null,
    password2: null,
    error: null,
    loading: false,
  };

  handleType = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: null });
  };

  handleClick = () => {
    axios
      .post(`${restApiUrl}/api/v1/users/signup`, {
        uNameL: this.state.uNameL,
        uNameF: this.state.uNameF,
        phone: this.state.phone,
        password: this.state.password1,
      })
      .then((result) => {
        this.props.onSignup(result.data);
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
        });
      });
  };

  render() {
    return (
      <div id="signup-section">
        <div class="signup-container">
          {this.state.error && <div>{this.state.error}</div>}
          <div class="signup__title">Бүртгүүлэх</div>
          <input
            class="signup__text"
            name="uNameL"
            type="text"
            placeholder="Овог"
            onChange={this.handleType}
          />
          <input
            class="signup__text"
            name="uNameF"
            type="text"
            placeholder="Нэр"
            onChange={this.handleType}
          />

          <input
            class="signup__text"
            name="phone"
            type="text"
            placeholder="Утасны дугаар"
            onChange={this.handleType}
          />
          <input
            class="signup__text"
            name="password1"
            type="password"
            placeholder="Нууц үг оруулах"
            onChange={this.handleType}
          />

          <input
            class="signup__text"
            name="password2"
            type="password"
            placeholder="Нууц үг дахин оруулах"
            onChange={this.handleType}
          />

          <button class="signup__btn" onClick={this.handleClick}>
            Хадгалах
          </button>
        </div>
      </div>
    );
  }
}
