import React from "react";
import "../styles/clear.css";

const Clear = ({ children, resetInput }) => {
  return (
    <div className="btn__clear" onClick={resetInput}>
      {children}
    </div>
  );
};

export default Clear;
