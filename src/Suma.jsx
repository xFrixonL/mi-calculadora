import { useState } from "react";

function Suma({ regresar }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  function Sumar(e) {
    e.preventDefault();
    const resultado = Number(number1) + Number(number2);
    alert("El resultado es " + resultado);
  }

  return (
    <div>
      <form method="post" onSubmit={Sumar}>
        <div>
          <input
            type="number"
            placeholder="Número 1"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Número 2"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
        <button type="submit">Sumar</button>
      </form>
      <button onClick={regresar}>Regresar</button>
    </div>
  );
}

export default Suma;
