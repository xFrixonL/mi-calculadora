import { useState } from "react";
import Card from "./Card";

function Catalog({ goBack, viewDetails }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`,
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="main-container p-6">
      <h2>Catalog</h2>
      
      <div className="flex justify-center mb-10">
        <input
          type="text"
          className="w-full max-w-md"
          placeholder="Search for a show..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-6"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {results.map((item) => (
          <Card key={item.show.id} item={item} onClick={viewDetails} />
        ))}
      </div>

      <button
        onClick={goBack}
        className="mt-12 mx-auto block"
      >
        Back to Menu
      </button>
    </div>
  );
}

export default Catalog;