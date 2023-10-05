import React, { Component } from "react";

export class Props extends Component {
  render() {
    return <div>Im the first {this.props.name}</div>;
  }
}

export default Props;
