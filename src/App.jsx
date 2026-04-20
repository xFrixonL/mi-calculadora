import { useState } from 'react'

function App() {
  // Definimos el estado para los dos números
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const manejarSuma = () => {
    // Convertimos a número porque los inputs devuelven strings
    const resultado = Number(num1) + Number(num2);
    alert(`La suma es: ${resultado}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Calculadora Básica</h2>
      
      <div>
        <label>Number 1: </label>
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Number 2: </label>
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
        />
      </div>

      <button 
        onClick={manejarSuma} 
        style={{ marginTop: '15px', cursor: 'pointer' }}
      >
        Sumar
      </button>
    </div>
  )
}

export default App