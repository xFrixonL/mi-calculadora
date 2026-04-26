import { useState } from "react";

function Addition({ goBack }) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleAddition = (e) => {
    e.preventDefault();
    const result = Number(number1) + Number(number2);
    alert("The result is " + result);
  };

  return (
    <div className="main-container p-10 flex flex-col items-center">
      <h2>Addition</h2>
      
      <form onSubmit={handleAddition} className="flex flex-col gap-4 w-full max-w-xs">
        <input
          type="number"
          placeholder="Number 1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button type="submit">
          Add Numbers
        </button>
      </form>

      <button onClick={goBack} className="mt-10">
        Back to Menu
      </button>
    </div>
  );
}

export default Addition;