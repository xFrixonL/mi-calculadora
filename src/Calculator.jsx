import { useState } from "react";

function Calculator({ goBack }) {
  const [display, setDisplay] = useState("");

  const append = (value) => setDisplay((prev) => prev + value);

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      alert("Operation Error");
    }
  };

  const remove = () => setDisplay((prev) => prev.slice(0, -1));
  const clear = () => setDisplay("");

  return (
    <div className="main-container p-6 flex flex-col items-center">
      <h2>Calculator</h2>
      
      <input 
        type="text" 
        value={display} 
        readOnly 
        className="w-full max-w-xs text-right text-3xl mb-6"
      />

      <div className="grid grid-cols-4 gap-2 w-full max-w-xs">
        <button onClick={clear}>C</button>
        <button onClick={() => append("/")}>/</button>
        <button onClick={() => append("*")}>x</button>
        <button onClick={remove}>←</button>

        <button onClick={() => append("7")}>7</button>
        <button onClick={() => append("8")}>8</button>
        <button onClick={() => append("9")}>9</button>
        <button onClick={() => append("-")}>-</button>

        <button onClick={() => append("4")}>4</button>
        <button onClick={() => append("5")}>5</button>
        <button onClick={() => append("6")}>6</button>
        <button onClick={() => append("+")}>+</button>

        <button onClick={() => append("1")}>1</button>
        <button onClick={() => append("2")}>2</button>
        <button onClick={() => append("3")}>3</button>
        <button onClick={calculate}>=</button>

        <button onClick={() => append("0")}>0</button>
      </div>

      <button onClick={goBack} className="mt-10 bg-transparent border-none underline text-gray-500">
        Back to Menu
      </button>
    </div>
  );
}

export default Calculator;