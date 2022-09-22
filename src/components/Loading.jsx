import React from "react";
import gif from "../assets/001.gif";
import "../styles/loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={gif} alt="" />
    </div>
  );
};

export default Loading;
