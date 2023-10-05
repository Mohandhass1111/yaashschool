import React from "react";
import Props from "./Mycomponents/Props";
import Stateful from "./Mycomponents/Stateful";
import LoginComponent from "./Mycomponents/LoginComponent";
import Hoc2 from "./Mycomponents/Hoc2";
import Destructureprops from "./Mycomponents/Destructureprops";
import Welcome from "./Mycomponents/Welcome";
import Binding from "./Mycomponents/Binding";
import Next from "./Mycomponents/Next";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "deeppink" }}>
        <h1>Welcome to learn ReactJS</h1>
        <Props name="user" />
        <Stateful />
        <LoginComponent />
        <Hoc2 />
        <Destructureprops name="Poojahegde" msg="wonderwomen" />
        <Welcome name="Tony stark " msg=" IRON MAN" />
        <Binding />
        <Next />
      </div>
    );
  }
}
export default App;
