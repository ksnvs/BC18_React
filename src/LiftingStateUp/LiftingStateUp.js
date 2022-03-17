import React, { Component } from "react";
import DienThoaiItem from "./DienThoaiItem";
import { dataLiftingStateUp } from "./data";

export default class LiftingStateUp extends Component {
  state = {
    data: dataLiftingStateUp,
    thongTinChiTiet: dataLiftingStateUp[0],
  };
  renderContent = () => {
    return this.state.data.map((item, index) => {
      return (
        <DienThoaiItem
          handleClick={this.handleShowThongTin}
          dienThoai={item}
          key={item.id}
        />
      );
    });
  };
  handleShowThongTin = (value) => {
    this.setState({ thongTinChiTiet: value });
  };
  render() {
    let { name, price, thumbnail_url } = this.state.thongTinChiTiet;
    return (
      <div className="container p-5">
        <div className="my-5 row">
          <div className="col-3">
            <img style={{ width: "100%" }} src={thumbnail_url} alt="" />
          </div>
          <div className="col-7">
            <h4> {name}</h4>
            <p className="card-text text-danger">
              Price: {price.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="my-5 row"></div>
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}
