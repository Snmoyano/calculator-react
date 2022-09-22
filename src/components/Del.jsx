import React from "react";

const Del = ({ children, del }) => {
  return (
    <div className="btn__clear" onClick={del}>
      {children}
    </div>
  );
};

export default Del;
