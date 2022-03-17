import React, { Component } from "react";

export default class DieuKien extends Component {
  isLogin = false;
  state = {
    isLogin: true,
  };
  renderContent() {
    if (this.isLogin) {
      return <p>Hello User</p>;
    } else {
      return (
        <button className="btn btn-success" onClick={this.handleLogin}>
          Đăng nhập
        </button>
      );
    }
  }
  handleLogin() {
    this.setState({ isLogin: true });
    console.log(this.isLogin);
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
