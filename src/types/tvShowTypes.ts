export interface TVShowImage {
  medium: string;
  original: string;
}

export interface TVShow {
  id: number;         
  internalId: string;  
  name: string;
  language: string;
  genres: string[];
  summary: string;
  image: TVShowImage | null;
}

export interface TVMazeResult {
  score: number;
  show: Omit<TVShow, 'internalId'>; 
}