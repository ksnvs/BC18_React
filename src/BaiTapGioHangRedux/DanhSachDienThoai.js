import React, { Component } from "react";
import { connect } from "react-redux";
import ItemDienThoai from "./ItemDienThoai";

class DanhSachDienThoai extends Component {
  render() {
    return (
      <div className="row">
        {this.props.danhSachDienThoai?.map((dt, index) => {
          if (index < 3) {
            return (
              <ItemDienThoai
                data={dt}
                // handleShowSanPhamChiTiet={this.props.handleShowSanPhamChiTiet}
                // handleThemSanPham={this.props.handleThemSanPham}
              />
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachDienThoai: state.baiTapGioHangReducer.dsdt,
  };
};

export default connect(mapStateToProps)(DanhSachDienThoai);
