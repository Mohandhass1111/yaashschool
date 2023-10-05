import React from "react";

const isAuthenticated = true; // Assuming this variable determines authentication.

function Hoc(LoginComponent) {
  return function () {
    if (isAuthenticated) {
      return <div>Valid</div>;
    }
    return <LoginComponent />;
  };
}

export default Hoc;
