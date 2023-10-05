import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    const { name, msg } = this.props;
    return (
      <div>
        <h4>
          Normally:{name} <br /> infrontof screen:{msg}
        </h4>
      </div>
    );
  }
}

export default Welcome;
