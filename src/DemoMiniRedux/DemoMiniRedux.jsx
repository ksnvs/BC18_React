import React, { Component } from "react";
import { connect } from "react-redux";
class DemoMiniRedux extends Component {
  render() {
    return (
      <div className="container my-5">
        <button
          onClick={this.props.tangSoLuong}
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
    tangSoLuong: () => {
      dispatch({
        type: "Tăng",
        payload: 5,
      });
    },
    giamSoLuong: () => {
      dispatch({
        type: "Giảm",
        payload: 5,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoMiniRedux);
