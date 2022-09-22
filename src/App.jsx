import { useEffect, useState } from "react";
import "./App.css";
import Buttoms from "./components/Buttoms";
import Screen from "./components/Screen";
import Clear from "./components/Clear";
import { evaluate } from "mathjs";
import Del from "./components/Del";
import Loading from "./components/Loading";

function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const addInput = (val) => {
    setInput(input + val);
  };
  const resetInput = () => {
    setInput("");
  };
  const result = () => {
    setInput(evaluate(input));
  };
  const del = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="contenedor__calculadora">
          <Screen input={input} />
          <div className="fila">
            <Buttoms addInput={addInput}>1</Buttoms>
            <Buttoms addInput={addInput}>2</Buttoms>
            <Buttoms addInput={addInput}>3</Buttoms>
            <Buttoms addInput={addInput}>+</Buttoms>
          </div>
          <div className="fila">
            <Buttoms addInput={addInput}>4</Buttoms>
            <Buttoms addInput={addInput}>5</Buttoms>
            <Buttoms addInput={addInput}>6</Buttoms>
            <Buttoms addInput={addInput}>-</Buttoms>
          </div>
          <div className="fila">
            <Buttoms addInput={addInput}>7</Buttoms>
            <Buttoms addInput={addInput}>8</Buttoms>
            <Buttoms addInput={addInput}>9</Buttoms>
            <Buttoms addInput={addInput}>*</Buttoms>
          </div>
          <div className="fila">
            <Buttoms addInput={result}>=</Buttoms>
            <Buttoms addInput={addInput}>0</Buttoms>
            <Buttoms addInput={addInput}>.</Buttoms>
            <Buttoms addInput={addInput}>/</Buttoms>
          </div>
          <div className="fila">
            <Clear resetInput={resetInput}>CLEAR</Clear>
            <Del del={del}>
              <i class="bx bxs-left-arrow-alt"></i>
            </Del>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
