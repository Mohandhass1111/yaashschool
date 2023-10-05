import React, { Component } from "react";

function message() {
  return "This is the current year";
}

export class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mohandhass",
      curryear: new Date().getFullYear(),
      desc: message(),
    };
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>
          {this.state.curryear} - {this.state.desc}
        </p>
      </div>
    );
  }
}

export default Stateful;
