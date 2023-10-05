import React from "react";

const Colorbutton = (Wrappedcomponent) => {
  return (props) => (
    <div style={{ margin: "8px" }}>
      <Wrappedcomponent {...props} />
    </div>
  );
};

export default Colorbutton;
