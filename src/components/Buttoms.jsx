import React from "react";
import "../styles/btn.css";
const Buttoms = ({ children, addInput }) => {
  const esOperator = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };
  return (
    <div
      className={`btn__conteiner ${
        esOperator(children) ? "operador" : " "
      }`.trimEnd()}
      onClick={() => addInput(children)}
    >
      {children}
    </div>
  );
};

export default Buttoms;
