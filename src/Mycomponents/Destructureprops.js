import React from "react";

function Destructureprops(props) {
  const { name, msg } = props;
  return (
    <div>
      <h4>
        Hey {name} you are a {msg}
      </h4>
    </div>
  );
}

export default Destructureprops;
