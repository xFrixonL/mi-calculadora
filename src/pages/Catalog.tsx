import { useState } from "react";
import { useSearchShows } from "../hooks/useSearchShows.js";
import { PageLayout } from "../components/templates/PageLayout.js";
import { ShowCard } from "../components/organisms/ShowCard.js";
import type { TVShow } from "../types/tvShowTypes.js";

interface CatalogProps {
  goBack: () => void;
  viewDetails: (show: TVShow) => void;
}

function Catalog({ goBack, viewDetails }: CatalogProps) {
  const [query, setQuery] = useState("");
  
  const { results, loading, performSearch } = useSearchShows();

  return (
    <PageLayout title="TV Catalog" onBack={goBack}>
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-md gap-2 mb-10">
          <input
            type="text"
            placeholder="Search for a show..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 p-3 border-2 border-black rounded outline-none"
          />
          <button 
            onClick={() => performSearch(query)}
            disabled={loading}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "..." : "Search"}
          </button>
        </div>

        {loading && <p className="text-gray-500">Loading shows...</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {results.map((show) => (
            <ShowCard 
              key={show.internalId} 
              show={show} 
              onView={viewDetails} 
            />
          ))}
        </div>

        {!loading && results.length === 0 && query && (
          <p className="text-gray-400 mt-10">No shows found</p>
        )}
      </div>
    </PageLayout>
  );
}

export default Catalog;