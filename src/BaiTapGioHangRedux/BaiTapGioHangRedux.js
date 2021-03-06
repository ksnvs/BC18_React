import React, { Component } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import { dataBaiTapGioHang } from "./data";

import SanPhamChiTiet from "./SanPhamChiTiet";
import ModelGioHang from "./ModelGioHang";

export default class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className="container p-3">
        <ModelGioHang
        // gioHang={this.state.gioHang}
        // handleThayDoiSoLuong={this.handleThayDoiSoLuong}
        />
        <DanhSachDienThoai
        // dsdt={this.state.dsdt}
        // handleShowSanPhamChiTiet={this.handleShowSanPhamChiTiet}
        // handleThemSanPham={this.handleThemSanPham}
        />
        <SanPhamChiTiet />
      </div>
    );
  }
}
