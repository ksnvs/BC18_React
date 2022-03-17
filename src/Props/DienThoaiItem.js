import React, { Component } from "react";

export default class DienThoaiItem extends Component {
  render() {
    let { thumbnail_url, name, price } = this.props.dienThoai;
    return (
      <div className="col-3 p-1">
        <div className="card p-3">
          <img
            className="card-img-top"
            src={thumbnail_url}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              <div>
                {price <= 3000000 ? (
                  <p className="text-primary">Giá: {price.toLocaleString()}</p>
                ) : (
                  <p className="text-danger">Giá: {price.toLocaleString()}</p>
                )}
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
