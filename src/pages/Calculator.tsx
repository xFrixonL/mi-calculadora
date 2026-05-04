import { useState } from "react";
import { PageLayout } from "../components/templates/PageLayout.js";
import { CalculatorGrid } from "../components/organisms/CalculatorGrid.js";

function Calculator({ goBack }: { goBack: () => void }) {
  const [display, setDisplay] = useState<string>("");

  const append = (value: string) => setDisplay((prev) => prev + value);
  const remove = () => setDisplay((prev) => prev.slice(0, -1));
  const clear = () => setDisplay("");
  
  const calculate = () => {
    if (!display) return;
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      alert("Operation Error");
      setDisplay("");
    }
  };

  return (
    <PageLayout title="Calculator" onBack={goBack}>
      <div className="flex flex-col items-center">
        <input 
          type="text" 
          value={display} 
          readOnly 
          className="w-full max-w-xs text-right text-3xl mb-6 p-2 border-b-2 border-black bg-transparent outline-none"
        />
        <CalculatorGrid 
          onAppend={append}
          onClear={clear}
          onRemove={remove}
          onCalculate={calculate}
        />
      </div>
    </PageLayout>
  );
}

export default Calculator;