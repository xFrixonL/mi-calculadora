import { useState } from 'react'
import Suma from './Suma';
import Calculadora from './Calculadora';

function App () {
  const [vista, setVista] = useState("home");
  
  function suma() {
    setVista("suma");
  }

  function calculadora() {
    setVista("calculadora");
  }

  function regresar() {
    setVista("home");
  }

  if (vista === "suma") {
    return <Suma regresar={regresar} />;
  }

  if (vista === "calculadora") {
    return <Calculadora regresar={regresar} />;
  }

  return (
    <div>
      <div>
        <button onClick={suma}>
          Suma
        </button>
      </div>
      <div>
        <button onClick={calculadora}>
          Calculadora
        </button>
      </div>
    </div>
  );
}

export default App