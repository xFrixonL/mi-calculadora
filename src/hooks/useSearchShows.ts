import { useState } from "react";
import { searchShows } from "../services/tvShowService.js";
import type { TVShow } from "../types/tvShowTypes.js";

export function useSearchShows() {
  const [results, setResults] = useState<TVShow[]>([]);
  const [loading, setLoading] = useState(false);

  const performSearch = async (query: string) => {
    if (!query) return;
    setLoading(true);
    try {
      const data = await searchShows(query);
      setResults(data);
    } catch (error) {
      console.error("Error buscando series:", error);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, performSearch };
}