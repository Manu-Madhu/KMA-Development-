import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>nav</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

export default layout;
