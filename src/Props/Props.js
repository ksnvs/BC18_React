import React, { Component } from "react";
import DienThoaiItem from "./DienThoaiItem";
// import { data } from "./data";

export default class Props extends Component {
  renderContent = () => {
    return this.props.dsdt?.map((item, index) => {
      return <DienThoaiItem dienThoai={item} />;
    });
  };
  render() {
    return (
      <div className="container p-5">
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
