import React from "react";
import Button from "./Button";
import colorbutton from "./Mybutton";
const Greenbutton = colorbutton(Button);
function Hoc2() {
  return (
    <div>
      <Greenbutton label="Done" />
    </div>
  );
}

export default Hoc2;
