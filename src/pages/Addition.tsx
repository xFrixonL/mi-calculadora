import { useState } from "react";
import type { ChangeEvent, FormEventHandler } from "react";
import { PageLayout } from "../components/templates/PageLayout.js";
import { Button } from "../components/atoms/Button.js";

function Addition({ goBack }: { goBack: () => void }) {
  const [number1, setNumber1] = useState<string>("");
  const [number2, setNumber2] = useState<string>("");

  const handleAddition: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!number1 || !number2) {
      alert("Please enter both numbers");
      return;
    }
    const result = Number(number1) + Number(number2);
    alert("The result is " + result);
  };

  return (
    <PageLayout title="Addition" onBack={goBack}>
      <form onSubmit={handleAddition} className="flex flex-col gap-6 w-full max-w-xs mx-auto">
        <input
          type="number"
          placeholder="Number 1"
          value={number1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber1(e.target.value)}
          className="p-3 border-2 border-black rounded outline-none"
        />
        <input
          type="number"
          placeholder="Number 2"
          value={number2}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber2(e.target.value)}
          className="p-3 border-2 border-black rounded outline-none"
        />
        <Button type="submit">Calculate Sum</Button>
      </form>
    </PageLayout>
  );
}

export default Addition;