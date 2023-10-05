import React, { Component } from "react";

export class Next extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "Kindly toggle",
    };
  }
  HandleButton = () => {
    this.setState({ msg: "Toggled" });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.HandleButton()}>Toggle</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default Next;
