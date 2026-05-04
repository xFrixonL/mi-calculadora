import { Button } from "../atoms/Button.js";
import type { TVShow } from "../../types/tvShowTypes.js";

interface ShowCardProps {
  show: TVShow;
  onView: (show: TVShow) => void;
}

export function ShowCard({ show, onView }: ShowCardProps) {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <img 
        src={show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'} 
        alt={show.name} 
        className="w-full rounded mb-4" 
      />
      <h3 className="text-xl font-bold mb-2 line-clamp-1">{show.name}</h3>
      <div className="mt-auto">
        <Button onClick={() => onView(show)} className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
}