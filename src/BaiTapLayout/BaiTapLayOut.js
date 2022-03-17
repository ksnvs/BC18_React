import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Footer from "./Footer";
import "./css/style.css"

export default class BaiTapLayOut extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
