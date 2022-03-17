import React, { Component } from "react";
import ProductComponent from "./ProductComponent";

export default class ProducstListComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
      </div>
    );
  }
}
