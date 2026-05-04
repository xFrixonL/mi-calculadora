import type { TVMazeResult, TVShow } from "../types/tvShowTypes.js";

const BASE_URL = "https://api.tvmaze.com";

export const searchShows = async (query: string): Promise<TVShow[]> => {
  const response = await fetch(`${BASE_URL}/search/shows?q=${query}`);
  const data: TVMazeResult[] = await response.json();

  return data.map((result) => ({
    ...result.show,
    internalId: crypto.randomUUID()
  }));
};