import { useState } from "react";

function Calculadora({ regresar }) {
  const [display, setDisplay] = useState("");

  function agregar(valor) {
    setDisplay((prev) => prev + valor);
  }

  function calcular() {
    try {
      const resultado = eval(display);
      setDisplay(resultado.toString());
    } catch {
      alert("Error en la operación");
    }
  }

  function limpiar() {
    setDisplay("");
  }

  function borrar() {
    setDisplay((prev) => prev.slice(0, -1));
  }

  return (
    <div>
      <input type="text" value={display} readOnly />

      <div>
        <button onClick={limpiar}>D</button>
        <button onClick={() => agregar("/")}>/</button>
        <button onClick={() => agregar("*")}>x</button>
        <button onClick={borrar}>Remove</button>
      </div>

      <div>
        <button onClick={() => agregar("7")}>7</button>
        <button onClick={() => agregar("8")}>8</button>
        <button onClick={() => agregar("9")}>9</button>
        <button onClick={() => agregar("-")}>-</button>
      </div>

      <div>
        <button onClick={() => agregar("4")}>4</button>
        <button onClick={() => agregar("5")}>5</button>
        <button onClick={() => agregar("6")}>6</button>
        <button onClick={() => agregar("+")}>+</button>
      </div>

      <div>
        <button onClick={() => agregar("1")}>1</button>
        <button onClick={() => agregar("2")}>2</button>
        <button onClick={() => agregar("3")}>3</button>
        <button onClick={calcular}>=</button>
      </div>

      <div>
        <button onClick={() => agregar("0")}>0</button>
      </div>

      <br />

      <button onClick={regresar}>Volver al menú</button>
    </div>
  );
}

export default Calculadora;