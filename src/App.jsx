import { useState } from 'react'
import Addition from './Addition';
import Calculator from './Calculator';
import Catalog from './Catalog';
import Details from './Details';

function App() {
  const [view, setView] = useState("home");
  const [selectedShow, setSelectedShow] = useState(null);

  const goBack = () => setView("home");

  if (view === "addition") return <Addition goBack={goBack} />;
  if (view === "calculator") return <Calculator goBack={goBack} />;
  if (view === "catalog") return <Catalog goBack={goBack} viewDetails={(show) => { setSelectedShow(show); setView("details"); }} />;
  if (view === "details") return <Details show={selectedShow} goBack={() => setView("catalog")} />;

  return (
    <div className="main-container p-10">
      <h1>Main App</h1>
      <div className="flex flex-col gap-4 max-w-xs mx-auto">
        <button onClick={() => setView("addition")}>
          Addition
        </button>
        
        <button onClick={() => setView("calculator")}>
          Calculator
        </button>
        
        <button onClick={() => setView("catalog")}>
          TV Catalog
        </button>
      </div>
    </div>
  );
}

export default App;