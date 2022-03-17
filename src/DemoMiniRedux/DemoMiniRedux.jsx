import React, { Component } from "react";
import { connect } from "react-redux";
import { TangSoLuongAction } from "./redux/actions/numberAction";
import { GIAM, TANG } from "./redux/constants/numberConstant";
class DemoMiniRedux extends Component {
  render() {
    return (
      <div className="container my-5">
        <button
          onClick={() => {
            this.props.tangSoLuong(20);
          }}
          className="btn btn-success mr-3"
        >
          Tăng
        </button>
        <span>{this.props.number}</span>
        <button
          onClick={this.props.giamSoLuong}
          className="btn btn-danger ml-3"
        >
          Giảm
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    number: state.numberReducer.number,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    tangSoLuong: (value) => {
      dispatch(TangSoLuongAction(value));
    },
    giamSoLuong: () => {
      dispatch({
        type: GIAM,
        payload: 5,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoMiniRedux);
