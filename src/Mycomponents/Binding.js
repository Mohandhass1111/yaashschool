import React, { Component } from "react";

export class Binding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "Tony stark",
    };
    // this.HandleClick = this.HandleClick.bind(this);
  }
  HandleClick = () => {
    this.setState({ first: "Iron man" });
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.HandleClick.bind(this)}>Marval</button> */}
        {/* <button onClick={() => this.HandleClick()}>Marval</button> */}
        <button onClick={this.HandleClick}>Marval</button>
        <p>{this.state.first}</p>
      </div>
    );
  }
}

export default Binding;
