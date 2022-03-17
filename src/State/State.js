import React, { Component } from "react";

export default class State extends Component {
  state = {
    number: 23231312,
  };

  handleChangeNumber = () => {
    let random = Math.random();
    this.setState({ number: random });
  };
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleChangeNumber}> Rander Number</button>
      </div>
    );
  }
}
