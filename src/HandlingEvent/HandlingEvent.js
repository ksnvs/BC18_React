import React, { Component } from "react";

export default class HandlingEvent extends Component {
  sayHello = () => {
    alert("Hello");
  };
  sayHi(name) {
    alert("hi " + name);
  }
  render() {
    return (
      <div className="container py-5">
        <button className="btn btn-success" onClick={this.sayHello}>
          Click Hello
        </button>
        <button
          className="btn btn-success mx-3"
          onClick={() => {
            this.sayHi("Cyber");
          }}
        >
          Click Hi
        </button>
      </div>
    );
  }
}
