import { useState } from 'react';
import Addition from './pages/Addition.js';
import Calculator from './pages/Calculator.js';
import Catalog from './pages/Catalog.js';
import Details from './pages/Details.js';
import { Button } from './components/atoms/Button.js';

import type { TVShow } from './types/tvShowTypes.js';
import type { View } from './types/navigation.js';

function App() {
  const [view, setView] = useState<View>("home");
  const [selectedShow, setSelectedShow] = useState<TVShow | null>(null);

  const goBack = () => setView("home");

  const handleViewDetails = (show: TVShow) => {
    setSelectedShow(show);
    setView("details");
  };

  if (view === "addition") return <Addition goBack={goBack} />;
  if (view === "calculator") return <Calculator goBack={goBack} />;
  if (view === "catalog") {
    return <Catalog goBack={goBack} viewDetails={handleViewDetails} />;
  }
  if (view === "details") {
    return <Details show={selectedShow} goBack={() => setView("catalog")} />;
  }

  return (
    <div className="main-container p-10 text-center">
      <h1 className="text-4xl font-bold mb-10">Main App</h1>
      <div className="flex flex-col gap-4 max-w-xs mx-auto">
        <Button
          onClick={() => setView("addition")}
          className="w-full py-4 text-lg"
        >
          Addition
        </Button>

        <Button
          onClick={() => setView("calculator")}
          className="w-full py-4 text-lg"
        >
          Calculator
        </Button>

        <Button
          onClick={() => setView("catalog")}
          className="w-full py-4 text-lg"
        >
          Catalog
        </Button>
      </div>
    </div>
  );
}

export default App;