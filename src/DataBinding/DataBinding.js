import React, { Component } from "react";

export default class DataBinding extends Component {
  render() {
    let username = "Sang";
    let job = "Dev";
    let renderContent = () => {
      return `hello ${username} - Job: ${job}`;
    };
    return <div>{renderContent()}</div>;
  }
}
