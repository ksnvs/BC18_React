import React, { Component } from "react";
import DanhSachDienThoai from "./DanhSachDienThoai";
import { dataBaiTapGioHang } from "./data";

import SanPhamChiTiet from "./SanPhamChiTiet";
import ModelGioHang from "./ModelGioHang";

export default class BaiTapGioHang extends Component {
  state = {
    dsdt: dataBaiTapGioHang,
    sanPhamChiTiet: dataBaiTapGioHang[0],
    gioHang: [],
  };
  handleShowSanPhamChiTiet = (value) => {
    this.setState({ sanPhamChiTiet: value });
  };
  handleThemSanPham = (value) => {
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((item) => {
      return item.id == value.id;
    });
    if (index == -1) {
      let newObject = { ...value, soluong: 1 };
      cloneGioHang.push(newObject);
    } else {
      cloneGioHang[index].soluong++;
    }

    this.setState({ gioHang: cloneGioHang });
  };

  handleThayDoiSoLuong = (id) => {
    let realId = id < 0 ? id * -1 : id;
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((item) => {
      return item.id == realId;
    });
    console.log(index);
    id > 0 && index !== -1 && cloneGioHang[index].soluong++;
    id < 0 &&
      index !== -1 &&
      cloneGioHang[index].soluong-- &&
      cloneGioHang[index].soluong == 0 &&
      cloneGioHang.splice(index, 1);

    // if (index !== -1) {
    //   if (id > 0) {
    //     cloneGioHang[index].soluong++;
    //   } else {
    //     cloneGioHang[index].soluong--;
    //   }
    // }
    this.setState({ gioHang: cloneGioHang });
  };
  render() {
    return (
      <div className="container p-3">
        <ModelGioHang
          gioHang={this.state.gioHang}
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
        />
        <DanhSachDienThoai
          dsdt={this.state.dsdt}
          handleShowSanPhamChiTiet={this.handleShowSanPhamChiTiet}
          handleThemSanPham={this.handleThemSanPham}
        />
        <SanPhamChiTiet sanPhamChiTiet={this.state.sanPhamChiTiet} />
      </div>
    );
  }
}
