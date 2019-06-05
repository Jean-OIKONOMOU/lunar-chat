import React, { Component } from "react";
// import "./index.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  updateEmail = e => {
    this.setState({
      email: e.target.value
    });
    // console.log(this.state.email);
  };

  updatePassword = e => {
    this.setState({
      password: e.target.value
    });
    // console.log(this.state.password);
  };

  login = e => {
    e.preventDefault();
    this.props.handleLogin(this.state);
    this.setState({
      email: '',
      password: ''
    })
    if (this.state.email === "q@gmail.com" && this.state.password === "qqq") {
      alert("Welcome home brother.");
    }
    console.log("App", this.state, this.props);
  };

  render() {
    return (
      <div className="thing">
        <h1>Login Form</h1>
        <form onSubmit={this.login}>
          <input
            className="form"
            placeholder="\./Email\./"
            type="email"
            htmlFor="email"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <input
            className="form"
            placeholder="\./Password\./"
            type="password"
            htmlFor="password"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <button className="form button" type="submit">
            Login
          </button>
          <p>{this.props.text}</p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
export const cheese = "A R T - N O U V E A U";